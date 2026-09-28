// Generates 1200×630 Open Graph share images (public/og/*.png) from the
// package SVG artwork. Run `npm run og` after adding or renaming a package.
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.dirname(fileURLToPath(import.meta.url));
const packages = JSON.parse(await readFile(path.join(root, '../src/data/packages.json'), 'utf8'));
const { ART } = await import(new URL('../src/data/art.js', import.meta.url));

const outDir = path.join(root, '../public/og');
await mkdir(outDir, { recursive: true });

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fontStack = `-apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`;

// Brand logo, composited onto the emerald band of every share image.
const LOGO = await sharp(path.join(root, '../public/img/logo.png'))
  .resize({ height: 180, withoutEnlargement: true })
  .png()
  .toBuffer();
const LOGO_META = await sharp(LOGO).metadata();

function ogSvg({ art, title, subtitle, price }) {
  // Art (if any) fills the top; emerald panel with text at the bottom.
  // Without art the top stays transparent and a photo is composited beneath.
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  ${art ? `<svg x="0" y="0" width="1200" height="450" viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice">${art}</svg>` : ''}
  <rect x="0" y="400" width="1200" height="230" fill="#052821"/>
  <rect x="0" y="396" width="1200" height="6" fill="#E5B52E"/>
  <text x="380" y="505" font-family="${fontStack}" font-size="46" font-weight="800" fill="#FCF3E9">${esc(title)}</text>
  <text x="380" y="556" font-family="${fontStack}" font-size="24" fill="rgba(252,243,233,.75)">${esc(subtitle)}</text>
  ${price ? `<text x="1120" y="600" text-anchor="end" font-family="${fontStack}" font-size="32" font-weight="800" fill="#E5B52E">${esc(price)} <tspan font-size="20" font-weight="400" fill="rgba(252,243,233,.7)">per person</tspan></text>` : ''}
</svg>`;
}

async function render(name, svg, photoPath) {
  const layers = [];
  if (photoPath) {
    const photo = await sharp(path.join(root, '../public', photoPath))
      .resize(1200, 450, { fit: 'cover' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();
    layers.push({ input: photo, left: 0, top: 0 });
  }
  layers.push({ input: Buffer.from(svg), left: 0, top: 0 });
  layers.push({ input: LOGO, left: Math.round((360 - LOGO_META.width) / 2) + 30, top: 425 });
  const png = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#052821' } })
    .composite(layers)
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  await writeFile(path.join(outDir, `${name}.jpg`), png);
  console.log(`✓ og/${name}.jpg (${(png.length / 1024).toFixed(0)} kB)`);
}

// Default site-wide image (Kashmir art as the hero backdrop).
await render('default', ogSvg({
  art: ART.kashmir,
  title: 'Custom holidays, planned by humans',
  subtitle: 'Kashmir · Kerala · Char Dham · Andaman · Bali · Dubai · Maldives',
  price: '',
}));

for (const p of packages) {
  const usePhoto = !ART[p.id] && (p.photos?.[0] || p.photo);
  await render(
    p.slug,
    ogSvg({
      art: usePhoto ? null : ART[p.id],
      title: p.name,
      subtitle: `${p.nights}N / ${p.days}D · ${p.route}`,
      price: `From ₹${p.priceINR.toLocaleString('en-IN')}`,
    }),
    usePhoto || null
  );
}
console.log('Done.');
