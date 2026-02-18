import os
import re

# Define paths
BASE_DIR = r"c:\Users\mohit\OneDrive\Desktop\connect-me-v11-main\frontend\connectfend\src"
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

# Collect all asset files
asset_files = []
for root, dirs, files in os.walk(ASSETS_DIR):
    for file in files:
        if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg', '.mp4', '.pdf', '.docx', '.doc')):
             asset_files.append(file)

# Collect all code content
code_content = ""
for root, dirs, files in os.walk(BASE_DIR):
    for file in files:
        if file.lower().endswith(('.js', '.jsx', '.css', '.scss', '.html')):
            try:
                with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                    code_content += f.read() + "\n"
            except Exception as e:
                print(f"Error reading {file}: {e}")

# Check for unused assets
unused_assets = []
for asset in asset_files:
    # rigorous check? just string match for now as filenames are usually unique enough
    # we escape the filename to handle dots etc
    if asset not in code_content:
        unused_assets.append(asset)

print("\n--- UNUSED ASSETS REPORT ---")
for asset in unused_assets:
    print(f"UNUSED: {asset}")

# Additional Checks
print("\n--- SUSPICIOUS FILES CHECK ---")
suspicious_files = ["product.js", "productsPage.jsx"]
for suspicious in suspicious_files:
    # simple heuristic: check if the filename (without extension) appears in import statements
    # this is weak, better to search for full filename or import path
    base_name = os.path.splitext(suspicious)[0]
    # search for 'import ... from "...base_name..."' or 'import ... from ".../base_name"'
    
    # We already have all code_content. Let's precise grep
    if suspicious in code_content: # Checking if the FILE ITSELF is mentioned (e.g. comments)
         print(f"File '{suspicious}' is mentioned in the code (could be comments).")
    
    # Check for imports roughly
    if re.search(r"['\"][\./\w]*" + re.escape(base_name) + r"['\"]", code_content):
         print(f"File '{suspicious}' seems to be IMPORTED/REFERENCED.")
    else:
         print(f"File '{suspicious}' seems UNUSED/UNIMPORTED.")

