import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('src/assets');
const targetFile = 'void_entity.png';

const inputPath = path.join(assetsDir, targetFile);

if (fs.existsSync(inputPath)) {
    const outputPath = path.join(assetsDir, path.basename(targetFile, '.png') + '.webp');

    sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => {
            console.log(`Converted ${targetFile} to WebP`);
            fs.unlinkSync(inputPath); // Delete original file
        })
        .catch(err => {
            console.error(`Error converting ${targetFile}:`, err);
        });
} else {
    console.log(`File ${targetFile} not found.`);
}
