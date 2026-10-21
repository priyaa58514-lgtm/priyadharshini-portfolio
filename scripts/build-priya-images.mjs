import sharp from 'sharp';
import { mkdirSync, copyFileSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

console.log('Building authentic Priyadharshini portrait assets from new uploaded photo...');

// 1. Ensure original uploaded photo is preserved in assets
copyFileSync(
  'C:/Users/acer/.gemini/antigravity-ide/brain/05315382-69cf-4f60-af6a-574ad0b5e4f2/.user_uploaded/media_1792574046968.jpg',
  `${OUT}/priyadharshini-original.jpg`
);

// 2. Read raw RGB from the new studio photo
const { data, info } = await sharp(`${OUT}/priyadharshini-original.jpg`)
  .raw()
  .toBuffer({ resolveWithObject: true });

const w = info.width;
const h = info.height;

// 3. Seamlessly fade top-left backdrop light into Onyx Black (#0a0a0a) while preserving her hair's natural golden rim light
const cleaned = Buffer.from(data);

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const idx = (y * w + x) * 3;

    // Top-left studio light fade
    if (x < 180 && y < 240) {
      const d = Math.sqrt(x * x + y * y);
      if (d < 180) {
        const factor = Math.max(0, (d - 40) / 140);
        const f = factor * factor;
        cleaned[idx] = Math.round(data[idx] * f + 10 * (1 - f));
        cleaned[idx + 1] = Math.round(data[idx + 1] * f + 10 * (1 - f));
        cleaned[idx + 2] = Math.round(data[idx + 2] * f + 10 * (1 - f));
      }
    }

    // Outer side borders subtle fade to onyx black
    if (x < 30) {
      const f = (x / 30) ** 2;
      cleaned[idx] = Math.round(cleaned[idx] * f + 10 * (1 - f));
      cleaned[idx + 1] = Math.round(cleaned[idx + 1] * f + 10 * (1 - f));
      cleaned[idx + 2] = Math.round(cleaned[idx + 2] * f + 10 * (1 - f));
    }
    if (x > w - 30) {
      const f = ((w - x) / 30) ** 2;
      cleaned[idx] = Math.round(cleaned[idx] * f + 10 * (1 - f));
      cleaned[idx + 1] = Math.round(cleaned[idx + 1] * f + 10 * (1 - f));
      cleaned[idx + 2] = Math.round(cleaned[idx + 2] * f + 10 * (1 - f));
    }
    if (y < 20) {
      const f = (y / 20) ** 2;
      cleaned[idx] = Math.round(cleaned[idx] * f + 10 * (1 - f));
      cleaned[idx + 1] = Math.round(cleaned[idx + 1] * f + 10 * (1 - f));
      cleaned[idx + 2] = Math.round(cleaned[idx + 2] * f + 10 * (1 - f));
    }
  }
}

// 4. Create transparent alpha channel for upper corners so background glow shines through
const alpha = Buffer.alloc(w * h, 255);
const fadeX = 40;
const fadeTop = 30;

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    let a = 1.0;
    if (x < fadeX) a = Math.min(a, x / fadeX);
    if (x > w - fadeX) a = Math.min(a, (w - x) / fadeX);
    if (y < fadeTop) a = Math.min(a, y / fadeTop);

    if (x < 220 && y < 240) {
      const d = Math.sqrt(x * x + y * y);
      if (d < 220) {
        a = Math.min(a, Math.max(0, (d - 40) / 180));
      }
    }
    if (x > w - 220 && y < 240) {
      const dx = w - x;
      const d = Math.sqrt(dx * dx + y * y);
      if (d < 220) {
        a = Math.min(a, Math.max(0, (d - 40) / 180));
      }
    }

    a = a * a * (3 - 2 * a);
    alpha[y * w + x] = Math.round(a * 255);
  }
}

const rgba = Buffer.alloc(w * h * 4);
for (let i = 0; i < w * h; i++) {
  rgba[i * 4] = cleaned[i * 3];
  rgba[i * 4 + 1] = cleaned[i * 3 + 1];
  rgba[i * 4 + 2] = cleaned[i * 3 + 2];
  rgba[i * 4 + 3] = alpha[i];
}

const masterPortrait = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
  .png()
  .toBuffer();

// 5. Generate responsive WebP versions
for (const targetW of [1100, 720, 420]) {
  const targetH = Math.round((targetW * h) / w);
  await sharp(masterPortrait)
    .resize({ width: targetW, height: targetH })
    .webp({ quality: 94, alphaQuality: 96 })
    .toFile(`${OUT}/portrait-${targetW}.webp`);
  console.log(`Generated ${OUT}/portrait-${targetW}.webp (${targetW}x${targetH})`);
}

// 6. Generate og-image.jpg (1200x630) social share card with new portrait
const ogPortrait = await sharp(masterPortrait)
  .resize({ height: 590 })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: '#0a0a0a',
  },
})
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="goldGlow" cx="75%" cy="50%" r="55%">
            <stop offset="0%" stop-color="#c6a15b" stop-opacity="0.32"/>
            <stop offset="60%" stop-color="#dfbf7a" stop-opacity="0.08"/>
            <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#goldGlow)"/>
        <line x1="70" y1="200" x2="130" y2="200" stroke="#dfbf7a" stroke-width="3"/>
        <text x="70" y="270" font-family="'Bebas Neue', Impact, 'Arial Narrow', sans-serif" font-size="88" fill="#f5f0e6" letter-spacing="3">PRIYADHARSHINI</text>
        <text x="72" y="320" font-family="'Inter', Helvetica, Arial, sans-serif" font-weight="700" font-size="22" fill="#dfbf7a" letter-spacing="12">THE SERIES</text>
        <text x="72" y="375" font-family="'Inter', Helvetica, Arial, sans-serif" font-weight="600" font-size="14" fill="#b9b1a4" letter-spacing="3">AI STUDENT • FULL-STACK DEVELOPER</text>
        <text x="72" y="405" font-family="'Inter', Helvetica, Arial, sans-serif" font-weight="600" font-size="14" fill="#b9b1a4" letter-spacing="3">PYTHON &amp; DATA ANALYTICS</text>
        <rect x="72" y="445" width="165" height="38" rx="19" fill="#c6a15b"/>
        <text x="154" y="469" font-family="'Inter', Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#0a0a0a" text-anchor="middle" letter-spacing="2">▶ WATCH SERIES</text>
      </svg>`),
    },
    { input: ogPortrait, gravity: 'southeast', top: 40, left: 660 },
  ])
  .jpeg({ quality: 92 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Generated public/assets/og-image.jpg');
