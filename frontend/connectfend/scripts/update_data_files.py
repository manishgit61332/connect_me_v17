import json
import os
import re

BLOG_DATA_FILE = r'..\src\data\blogData.js'
BLOG_DATA_FULL_FILE = r'..\src\data\blogdata1.js'
NEW_DATA_FILE = 'clean_blog_data.json'

def main():
    with open(NEW_DATA_FILE, 'r', encoding='utf-8') as f:
        new_blogs = json.load(f)

    # Update blogData.js
    with open(BLOG_DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Create JS array entries
    new_entries_js = []
    for blog in new_blogs:
        entry = "  {\n"
        entry += f"    id: {blog['id']},\n"
        entry += f"    title: {json.dumps(blog['title'])},\n"
        entry += f"    category: {json.dumps(blog['category'])},\n"
        entry += f"    date: {json.dumps(blog['date'])},\n"
        entry += f"    image: {json.dumps(blog['image'])},\n"
        entry += "  },"
        new_entries_js.append(entry)
    
    # Insert into blogData.js
    last_bracket = content.rfind(']')
    if last_bracket != -1:
        # Check if preceding char is comma
        preceding = content[:last_bracket].rstrip()
        if not preceding.endswith(','):
            prefix = ","
        else:
            prefix = ""
            
        new_content_block = prefix + "\n" + "\n".join(new_entries_js) + "\n"
        updated_content = content[:last_bracket] + new_content_block + content[last_bracket:]
        with open(BLOG_DATA_FILE, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print(f"Updated {BLOG_DATA_FILE}")

    # Update blogdata1.js
    with open(BLOG_DATA_FULL_FILE, 'r', encoding='utf-8') as f:
        content_full = f.read()

    # Create JS object entries
    new_entries_full = []
    for blog in new_blogs:
        entry = f"  {blog['id']}: {{\n"
        entry += f"    id: {blog['id']},\n"
        entry += f"    title: {json.dumps(blog['title'])},\n"
        entry += f"    date: {json.dumps(blog['date'])},\n"
        entry += f"    category: {json.dumps(blog['category'])},\n"
        entry += f"    img: {json.dumps(blog['image'])},\n" 
        entry += f"    para1: {json.dumps(blog['content'])},\n"
        entry += f"    quote: {json.dumps(blog['quote'])},\n"
        entry += "  },"
        new_entries_full.append(entry)

    # Insert into blogdata1.js
    last_brace = content_full.rfind('}')
    if last_brace != -1:
         preceding = content_full[:last_brace].rstrip()
         if not preceding.endswith(','):
            prefix = ","
         else:
            prefix = ""
            
         new_content_full_block = prefix + "\n" + "\n".join(new_entries_full) + "\n"
         updated_content_full = content_full[:last_brace] + new_content_full_block + content_full[last_brace:]
         with open(BLOG_DATA_FULL_FILE, 'w', encoding='utf-8') as f:
            f.write(updated_content_full)
         print(f"Updated {BLOG_DATA_FULL_FILE}")

if __name__ == "__main__":
    main()
