import os
from rembg import remove
from PIL import Image

# Output images in loop
input_dir = 'frontend/connectfend/src/assets/products/'
output_dir = 'frontend/connectfend/src/assets/products/'

count = 0
for filename in os.listdir(input_dir):
    if filename.endswith('.webp'):
        input_path = os.path.join(input_dir, filename)
        
        try:
            # Reopen picture
            img = Image.open(input_path)
            
            # Check if it has transparency already. We might not want to re-process.
            has_transparency = False
            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                # Basic check, but let's just process all to be sure since some may have white bg but an alpha channel
                pass

            print(f"Processing: {filename}")
            
            # Remove bg
            output_img = remove(img)
            
            # Save it back overwriting the original
            output_img.save(input_path, 'WEBP')
            count += 1
        except Exception as e:
            print(f"Error processing {filename}: {e}")

print(f"Finished processing {count} images.")
