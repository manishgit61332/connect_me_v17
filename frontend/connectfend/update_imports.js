import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, 'src');

async function walk(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walk(filePath, fileList);
        } else {
            if (/\.(js|jsx|ts|tsx)$/i.test(file)) {
                fileList.push(filePath);
            }
        }
    }
    return fileList;
}

async function updateImports() {
    console.log('Starting import updates...');
    const files = await walk(SRC_DIR);
    let totalReplacements = 0;

    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;

        // Regex to match imports from assets with png/jpg/jpeg extension
        // Matches: import ... from "../assets/..." or import ... from '@/assets/...'
        // Captures the part before the extension
        const regex = /(from\s+['"])(.*\/assets\/.*?)(\.(png|jpe?g|jpg))(['"])/gi;

        // Also match require or dynamic imports if any, but standard imports are priority
        // For now dealing with static imports as seen in productData.js

        content = content.replace(regex, (match, p1, p2, p3, p4, p5) => {
            // p1: from "
            // p2: ../assets/path/filename
            // p3: .png
            // p4: png
            // p5: "

            // Check if we should replace. 
            // ideally we check if the webp file exists, but for now we assume optimization script ran.
            return `${p1}${p2}.webp${p5}`;
        });

        if (content !== originalContent) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated imports in: ${file}`);
            totalReplacements++;
        }
    }

    console.log(`Update complete. Modified ${totalReplacements} files.`);
}

updateImports();
