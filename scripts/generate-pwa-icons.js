const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputSvgPath = path.resolve(__dirname, '../public/logo/logofixxed.svg');
const outputIconsDir = path.resolve(__dirname, '../public/icons');

const iconsToGenerate = [
  { size: 192, name: 'icon-192x192.png' },
  { size: 512, name: 'icon-512x512.png' },
];

async function generateIcons() {
  // Ensure the output directory exists
  if (!fs.existsSync(outputIconsDir)) {
    fs.mkdirSync(outputIconsDir, { recursive: true });
  }

  for (const icon of iconsToGenerate) {
    const outputPath = path.join(outputIconsDir, icon.name);
    try {
      await sharp(inputSvgPath)
        .resize(icon.size, icon.size)
        .toFile(outputPath);
      console.log(`Generated ${outputPath}`);
    } catch (error) {
      console.error(`Error generating ${outputPath}:`, error);
    }
  }
}

generateIcons();