
import urllib.request
import urllib.parse
import json
import os
import re
import time
from html.parser import HTMLParser

# Base URL for pagination
BASE_URL = "https://connectme.biz/iot-in-industrial-automation/"
ASSETS_DIR = "../src/assets"
OUTPUT_FILE = "migrated_blog_data.json"

if not os.path.exists(ASSETS_DIR):
    os.makedirs(ASSETS_DIR)

def fetch_url(url):
    print(f"Fetching {url}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            return response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def download_image(url, filename):
    try:
        if not url: return None
        filepath = os.path.join(ASSETS_DIR, filename)
        if os.path.exists(filepath):
            print(f"Image already exists: {filepath}")
            return f"/assets/{filename}"
        
        print(f"Downloading image: {url} -> {filepath}")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            with open(filepath, 'wb') as f:
                f.write(response.read())
        return f"/assets/{filename}"
    except Exception as e:
        print(f"Error downloading image {url}: {e}")
        return None

def extract_metadata_regex(html):
    title_match = re.search(r'<meta property="og:title" content="(.*?)" />', html)
    title = title_match.group(1) if title_match else "No Title"
    
    image_match = re.search(r'<meta property="og:image" content="(.*?)" />', html)
    image_url = image_match.group(1) if image_match else ""
    
    date_match = re.search(r'<meta property="article:published_time" content="(.*?)" />', html)
    date = date_match.group(1)[:10] if date_match else "2024-01-01" 
    
    return title, date, image_url

def extract_blog_links(html):
    # Broader regex to capture all links, then filter
    all_links = re.findall(r'href="(https://connectme.biz/[^"]+)"', html)
    blog_links = []
    for link in all_links:
        # Filter for likely blog posts: must end with /, not be an asset, not be pagination
        if link.endswith('/') and '/wp-content/' not in link and '/page/' not in link:
             # Exclude main pages if possible, though deduplication helps
             if link not in [BASE_URL, "https://connectme.biz/", "https://connectme.biz/contact-us/", "https://connectme.biz/about-us/"]:
                blog_links.append(link)
    
    return list(set(blog_links)) # Deduplicate

def main():
    all_blog_links = []
    page = 1
    MAX_PAGES = 10 
    
    # 1. Crawl Pagination to get all links
    while page <= MAX_PAGES:
        if page == 1:
            url = BASE_URL
        else:
            url = f"{BASE_URL}page/{page}/"
            
        html = fetch_url(url)
        
        if not html:
            print(f"Stopping at page {page} (no content)")
            break
            
        links = extract_blog_links(html)
        if not links:
            print(f"No blog links found on page {page}. Stopping.")
            break
            
        print(f"Page {page}: Found {len(links)} links.")
        if page > 1 and len(links) == 46: # Suspicious if every page has same count as page 1
            print("Assuming duplicate content or loop. Stopping.")
            break

        all_blog_links.extend(links)
        page += 1
        time.sleep(1) # Be polite

    # Deduplicate all links
    all_blog_links = sorted(list(set(all_blog_links)))
    print(f"Total unique blogs found: {len(all_blog_links)}")

    migrated_data = []
    current_id = 10 
    
    # Check for existing data to avoid reprocessing if needed, 
    # but here we overwrite to ensure we get the full set in order.
    
    for url in all_blog_links:
        html = fetch_url(url)
        if not html: continue
        
        title, date, image_url = extract_metadata_regex(html)
        title = title.split(" - Connect")[0].split(" | ")[0]
        
        print(f"Processing: {title}")
        
        # Download image
        image_local_path = ""
        if image_url:
            ext = os.path.splitext(image_url)[1].split('?')[0] or '.jpg'
            # Sanitize filename
            safe_title = re.sub(r'[^a-zA-Z0-9]', '_', title[:20])
            filename = f"blog_{current_id}_{safe_title}{ext}"
            image_local_path = download_image(image_url, filename)
        
        migrated_data.append({
            "id": current_id,
            "title": title,
            "link": url,
            "date": date,
            "category": "Industrial IoT",
            "image": image_local_path,
            "content": f'<p>Read full article at <a href="{url}" target="_blank">ConnectMe Blog</a></p>',
            "quote": {
                "text": "Call us for more information.",
                "author": "ConnectMe Team"
            }
        })
        current_id += 1
        time.sleep(0.1)

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(migrated_data, f, indent=2)
    
    print(f"Migration complete. Saved {len(migrated_data)} blogs to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
