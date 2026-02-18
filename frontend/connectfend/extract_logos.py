import cv2
import os
import numpy as np

def extract_logos(image_path, output_dir):
    if os.path.exists(output_dir):
        import shutil
        shutil.rmtree(output_dir)
    os.makedirs(output_dir)

    # Load the image
    img = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)
    if img is None:
        print(f"Error: Could not load image from {image_path}")
        return

    # Check input channels
    if len(img.shape) == 3 and img.shape[2] == 4:
        # Use Alpha channel for contour detection
        gray = img[:, :, 3] 
        # Threshold alpha: opaque regions > 0 are the objects
        _, thresh = cv2.threshold(gray, 10, 255, cv2.THRESH_BINARY)
    else:
        # Fallback for non-transparent images
        if len(img.shape) == 3:
            img_bgr = img 
            if img.shape[2] == 4:
                 img_bgr = cv2.cvtColor(img, cv2.COLOR_BGRA2BGR)
            gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)
            
            # Simple thresholding might not work if backgrounds are complex.
            # Try adaptive thresholding or Otsu.
            # INVERT might be needed if background is light.
            # Let's assume light background for JPEGs/screenshots.
            _, thresh = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)
        else:
             gray = img
             _, thresh = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)

    # Find contours
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Sort contours by position (top-to-bottom, left-to-right)
    # This helps in maintaining some order, though grid structure might be complex
    contours = sorted(contours, key=lambda c: (cv2.boundingRect(c)[1] // 50, cv2.boundingRect(c)[0])) 

    count = 0
    for i, cnt in enumerate(contours):
        x, y, w, h = cv2.boundingRect(cnt)
        
        # Filter out small noise
        if w < 20 or h < 20: 
            continue
        
        # Filter out full image contour if it was detected
        if w > img.shape[1] * 0.95 and h > img.shape[0] * 0.95:
             continue

        # Add some padding
        pad = 10
        # Ensure coordinates are within image bounds
        x_start = max(0, x - pad)
        y_start = max(0, y - pad)
        w_padded = min(img.shape[1] - x_start, w + 2 * pad)
        h_padded = min(img.shape[0] - y_start, h + 2 * pad)

        logo = img[y_start:y_start+h_padded, x_start:x_start+w_padded]
        
        output_filename = os.path.join(output_dir, f"key_customer_{count+1}.png")
        cv2.imwrite(output_filename, logo)
        print(f"Saved {output_filename}")
        count += 1

    print(f"Extraction complete. Found {count} logos.")

if __name__ == "__main__":
    image_path = r"c:\Users\mohit\OneDrive\Desktop\Development\CME V12\frontend\connectfend\src\assets\Key Customers_1.png"
    output_dir = r"c:\Users\mohit\OneDrive\Desktop\Development\CME V12\frontend\connectfend\src\assets\extracted_logos"
    extract_logos(image_path, output_dir)
