import sharp from 'sharp';
import { copyFileSync } from 'node:fs';

const SOURCE = 'C:/Users/acer/.gemini/antigravity-ide/brain/05315382-69cf-4f60-af6a-574ad0b5e4f2/priyadharshini_portrait_1792567481044.jpg';
const OUT = 'public/assets';

async function processImages() {
  console.log('Processing portraits for Priyadharshini...');
  const img = sharp(SOURCE);
  const { width, height } = await img.metadata();
  console.log(`Source dimensions: ${width}x${height}`);

  // Create responsive webp files
  for (const w of [1100, 720, 420]) {
    await sharp(SOURCE)
      .resize({ width: w })
      .webp({ quality: 90 })
      .toFile(`${OUT}/portrait-${w}.webp`);
    console.log(`Generated portrait-${w}.webp`);
  }

  // Create og-image.jpg (1200x630) with Champagne Gold (#C6A15B) accents
  const sidePortrait = await sharp(SOURCE).resize({ height: 600 }).png().toBuffer();
  await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#0a0a0a' } })
    .composite([
      {
        input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="goldGlow" cx="75%" cy="45%" r="50%">
              <stop offset="0%" stop-color="#c6a15b" stop-opacity="0.38"/>
              <stop offset="100%" stop-color="#c6a15b" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="1200" height="630" fill="url(#goldGlow)"/>
        </svg>`),
      },
      { input: sidePortrait, gravity: 'southeast' },
      {
        input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
          <text x="72" y="270" font-family="Impact, 'Arial Narrow', sans-serif" font-size="104" fill="#f5f0e6" letter-spacing="4">PRIYADHARSHINI</text>
          <text x="78" y="324" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="24" fill="#c6a15b" letter-spacing="14">P ORBIT</text>
          <text x="78" y="380" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="16" fill="#b9b1a4" letter-spacing="4">AI &amp; ML • FULL-STACK DEVELOPER • CHENNAI</text>
        </svg>`),
      },
    ])
    .jpeg({ quality: 90 })
    .toFile(`${OUT}/og-image.jpg`);
  console.log('Generated og-image.jpg');
}

processImages().catch(err => {
  console.error('Error processing images:', err);
  process.exit(1);
});
