import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'src', 'assets');
const MAX_WIDTH = 1600;
const QUALITY = 80;

async function walk(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walk(filePath, fileList);
        } else {
            if (/\.(png|jpe?g|jpg)$/i.test(file)) {
                fileList.push(filePath);
            }
        }
    }
    return fileList;
}

async function optimizeImages() {
    console.log('Starting image optimization...');
    const files = await walk(ASSETS_DIR);
    console.log(`Found ${files.length} images to process.`);

    let totalSaved = 0;
    let processedCount = 0;

    for (const file of files) {
        try {
            const ext = path.extname(file);
            const name = path.basename(file, ext);
            const dir = path.dirname(file);
            const newPath = path.join(dir, `${name}.webp`);

            // Skip if webp already exists and is newer (optional, but good for re-runs)
            if (fs.existsSync(newPath)) {
                // console.log(`Skipping ${name}, .webp already exists.`);
                // continue; 
                // Force overwrite for now to ensure settings are applied
            }

            const originalSize = fs.statSync(file).size;

            const image = sharp(file);
            const metadata = await image.metadata();

            let pipeline = image.webp({ quality: QUALITY });

            if (metadata.width > MAX_WIDTH) {
                pipeline = pipeline.resize({ width: MAX_WIDTH });
            }

            await pipeline.toFile(newPath);

            const newSize = fs.statSync(newPath).size;
            const saved = originalSize - newSize;
            totalSaved += saved;
            processedCount++;

            console.log(`Optimized: ${file} -> ${newPath}`);
            console.log(`Original: ${(originalSize / 1024).toFixed(2)} KB, New: ${(newSize / 1024).toFixed(2)} KB, Saved: ${(saved / 1024).toFixed(2)} KB`);

        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }

    console.log('------------------------------------------------');
    console.log(`Optimization complete.`);
    console.log(`Processed ${processedCount} images.`);
    console.log(`Total space saved: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB`);
}

optimizeImages();
