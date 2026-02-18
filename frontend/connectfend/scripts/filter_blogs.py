import json
import re

INPUT_FILE = 'migrated_blog_data.json'
OUTPUT_FILE = 'clean_blog_data.json'

def main():
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    clean_data = []
    
    # Existing IDs in original blogData.js (1-9). use 10+ for new ones.
    current_id = 9
    
    # Titles to exclude
    exclude_titles = [
        "Home", "Our Clients", "Our Products", "Our Services", 
        "Our Solutions", "Privacy Policy", "Projects", 
        "Remote Connectivity & VPN", "Uconnect", "No Title"
    ]

    for entry in data:
        title = entry.get('title', '')
        link = entry.get('link', '')
        
        # Filter logic
        if title in exclude_titles:
            continue
        if "Archives" in title:
            continue
        if "/category/" in link:
            continue
        if "/feed/" in link:
            continue
        # Check for date archive links (e.g. .../2024/07/04/)
        if re.search(r'/\d{4}/\d{2}/\d{2}/$', link):
            continue

        # If it passed filters, keep it but re-assign ID to be consecutive
        entry['id'] = current_id
        clean_data.append(entry)
        current_id += 1

    print(f"Filtered down to {len(clean_data)} blogs from {len(data)} entries.")

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(clean_data, f, indent=2)

if __name__ == "__main__":
    main()
