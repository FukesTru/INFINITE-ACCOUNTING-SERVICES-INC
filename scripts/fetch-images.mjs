#!/usr/bin/env node
/**
 * Downloads the full-size Higgsfield originals listed in scripts/higgsfield-sources.json
 * into images-src/ (git-ignored). Uses curl so proxy settings in the environment apply.
 *
 *   npm run images:fetch && npm run images
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dest = path.resolve(process.env.IMAGES_SRC || path.join(root, "images-src"));
const { sources } = JSON.parse(readFileSync(path.join(root, "scripts/higgsfield-sources.json"), "utf8"));

mkdirSync(dest, { recursive: true });
let failed = 0;
for (const [key, url] of Object.entries(sources)) {
  const file = path.join(dest, `${key}${path.extname(new URL(url).pathname) || ".png"}`);
  if (existsSync(file) && statSync(file).size > 0) {
    console.log(`skip  ${key} (already downloaded)`);
    continue;
  }
  try {
    execFileSync("curl", ["-sSfL", "--retry", "3", "-o", file, url], { stdio: ["ignore", "ignore", "pipe"] });
    console.log(`ok    ${key}`);
  } catch (err) {
    failed++;
    console.error(`FAIL  ${key}: ${String(err.stderr || err.message).trim()}`);
  }
}
if (failed) {
  console.error(`\n${failed} download(s) failed. If you're behind a restrictive proxy, allow the image host and retry.`);
  process.exit(1);
}
console.log(`\nAll originals are in ${dest}. Next: npm run images`);
