#!/usr/bin/env node
/**
 * Builds responsive WebP variants (and 1200×630 Open Graph JPEGs) from the
 * full-size Higgsfield originals.
 *
 *   IMAGES_SRC=/path/to/originals npm run images
 *
 * Originals are expected as <key>.png|jpg|jpeg|webp where <key> matches an
 * entry in src/content/images.json (e.g. home-hero.png). They are kept out of
 * git; only the optimized output in public/images is committed.
 *
 * Also renders the brand mark to public/logo.png and src/app/apple-icon.png.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.resolve(process.env.IMAGES_SRC || path.join(root, "images-src"));
const OUT = path.join(root, "public/images");
const OG_OUT = path.join(OUT, "og");
const manifest = JSON.parse(readFileSync(path.join(root, "src/content/images.json"), "utf8"));

mkdirSync(OG_OUT, { recursive: true });

const findSource = (key) => {
  for (const ext of ["png", "jpg", "jpeg", "webp"]) {
    const p = path.join(SRC, `${key}.${ext}`);
    if (existsSync(p)) return p;
  }
  return null;
};

const NAVY = "#0b2f57";
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

/** Text panel for the default social share image (left side is empty navy by design). */
function ogOverlaySvg() {
  return Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="${NAVY}" stop-opacity="0.92"/>
      <stop offset="0.55" stop-color="${NAVY}" stop-opacity="0.75"/>
      <stop offset="1" stop-color="${NAVY}" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="inf" x1="0" x2="48" y1="0" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#5fd08f"/><stop offset="1" stop-color="#7fb6ef"/>
    </linearGradient>
  </defs>
  <rect width="760" height="630" fill="url(#fade)"/>
  <g transform="translate(72 150) scale(2.2)">
    <path d="M24 12C20.5 7 17 4.5 12.5 4.5 8.4 4.5 5 7.9 5 12s3.4 7.5 7.5 7.5c4.5 0 8-2.5 11.5-7.5 3.5-5 7-7.5 11.5-7.5 4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5c-4.5 0-8-2.5-11.5-7.5Z" fill="none" stroke="url(#inf)" stroke-width="3.6" stroke-linecap="round"/>
  </g>
  <text x="72" y="290" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="58" font-weight="700" fill="#ffffff">${esc("Infinite Accounting")}</text>
  <text x="72" y="350" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="58" font-weight="700" fill="#ffffff">${esc("Services")}</text>
  <rect x="72" y="380" width="72" height="5" rx="2.5" fill="#1e8449"/>
  <text x="72" y="438" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="30" fill="#e8f5ec">${esc("Bookkeeping & Tax Services")}</text>
  <text x="72" y="482" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="30" fill="#e8f5ec">${esc("Orland Park, IL · (708) 232-3003")}</text>
</svg>`);
}

async function processImage(key, entry) {
  const src = findSource(key);
  if (!src) return { key, status: "missing" };
  const aspect = manifest.aspects[entry.aspect];
  const [rw, rh] = aspect.ratio;
  const meta = await sharp(src).metadata();
  // Center-crop the original to the exact target ratio first.
  let cw = meta.width;
  let ch = Math.round((cw * rh) / rw);
  if (ch > meta.height) {
    ch = meta.height;
    cw = Math.round((ch * rw) / rh);
  }
  const left = Math.round((meta.width - cw) / 2);
  const top = Math.round((meta.height - ch) / 2);
  const base = sharp(src).extract({ left, top, width: cw, height: ch });

  for (const w of aspect.widths) {
    const h = Math.round((w * rh) / rw);
    await base
      .clone()
      .resize(w, h, { fit: "cover" })
      .webp({ quality: w >= 1600 ? 68 : 74, effort: 6, smartSubsample: true })
      .toFile(path.join(OUT, `${key}-${w}.webp`));
  }

  if (entry.og) {
    let og = sharp(src).resize(1200, 630, { fit: "cover", position: "centre" });
    if (key === "shared-og-default") {
      og = sharp(await og.toBuffer()).composite([{ input: ogOverlaySvg(), top: 0, left: 0 }]);
    }
    await og.jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(OG_OUT, `${key}.jpg`));
  }
  return { key, status: "ok" };
}

const INFINITY =
  "M24 12C20.5 7 17 4.5 12.5 4.5 8.4 4.5 5 7.9 5 12s3.4 7.5 7.5 7.5c4.5 0 8-2.5 11.5-7.5 3.5-5 7-7.5 11.5-7.5 4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5c-4.5 0-8-2.5-11.5-7.5Z";

async function renderBrandIcons() {
  const mark = (size, bg) =>
    Buffer.from(`
<svg width="${size}" height="${size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" x2="48" y1="0" y2="0" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#1e8449"/><stop offset="1" stop-color="#1d5fa8"/></linearGradient></defs>
  <rect width="48" height="48" rx="${bg === "#ffffff" ? 0 : 10}" fill="${bg}"/>
  <g transform="translate(4 12) scale(0.8333)"><path d="${INFINITY}" fill="none" stroke="url(#g)" stroke-width="4" stroke-linecap="round"/></g>
</svg>`);
  await sharp(mark(512, "#ffffff")).png().toFile(path.join(root, "public/logo.png"));
  await sharp(mark(180, "#ffffff")).png().toFile(path.join(root, "src/app/apple-icon.png"));
}

const results = [];
for (const [key, entry] of Object.entries(manifest.images)) {
  results.push(await processImage(key, entry));
}
await renderBrandIcons();

// Record which images have all their variants, so <Img> can fall back gracefully.
const status = {};
for (const [key, entry] of Object.entries(manifest.images)) {
  const { widths } = manifest.aspects[entry.aspect];
  const variants = widths.every((w) => existsSync(path.join(OUT, `${key}-${w}.webp`)));
  const og = !entry.og || existsSync(path.join(OG_OUT, `${key}.jpg`));
  status[key] = variants && og;
}
writeFileSync(path.join(root, "src/content/image-status.json"), `${JSON.stringify(status, null, 2)}\n`);

const missing = results.filter((r) => r.status === "missing").map((r) => r.key);
console.log(`Optimized ${results.length - missing.length}/${results.length} images into public/images`);
if (missing.length) {
  console.warn(`Missing originals in ${SRC}:\n  ${missing.join("\n  ")}`);
  process.exitCode = 1;
}
const stray = existsSync(SRC)
  ? readdirSync(SRC).filter((f) => !manifest.images[f.replace(/\.(png|jpe?g|webp)$/i, "")])
  : [];
if (stray.length) console.warn(`Ignored files not in images.json: ${stray.join(", ")}`);
