import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const galleryDir = path.resolve('src/assets/gallery');

fs.readdir(galleryDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        if (path.extname(file).toLowerCase() === '.png') {
            const inputPath = path.join(galleryDir, file);
            const outputPath = path.join(galleryDir, path.basename(file, '.png') + '.webp');

            sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath)
                .then(() => {
                    console.log(`Converted ${file} to WebP`);
                    fs.unlinkSync(inputPath); // Delete original file
                })
                .catch(err => {
                    console.error(`Error converting ${file}:`, err);
                });
        }
    });
});
