#!/usr/bin/env node
/**
 * Post-build SEO audit of the static export in ./out.
 *   npm run build && npm run check:seo
 *
 * Checks every HTML page for: unique <title> ≤ 62 chars, unique meta description
 * of 150–160 chars, exactly one <h1>, canonical + Open Graph + Twitter tags,
 * lang="en-US", parseable JSON-LD, alt text on every <img>, and internal links
 * that resolve to a built page. Also confirms sitemap.xml lists every page.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(root, "out");
const SITE = "https://www.infiniteaccountingservices.com";

if (!existsSync(OUT)) {
  console.error("No ./out directory. Run `npm run build` first.");
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = path.join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const htmlFiles = walk(OUT).filter((f) => f.endsWith(".html") && !/\/(404|_not-found)\.html$/.test(f));
const routeOf = (file) => {
  const rel = path.relative(OUT, file).replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}`;
};
const routes = new Set(htmlFiles.map(routeOf));
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];

const problems = [];
const titles = new Map();
const descs = new Map();
const flag = (route, msg) => problems.push(`${route}: ${msg}`);

for (const file of htmlFiles) {
  const route = routeOf(file);
  const html = readFileSync(file, "utf8");

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  if (!title) flag(route, "missing <title>");
  else if (title.length > 62) flag(route, `title is ${title.length} chars (> 62): ${title}`);
  titles.set(title, [...(titles.get(title) ?? []), route]);

  const descTag = html.match(/<meta name="description" content="[^"]*"/)?.[0];
  const desc = descTag ? decode(attr(descTag, "content")) : "";
  if (!desc) flag(route, "missing meta description");
  else if (desc.length < 150 || desc.length > 160) flag(route, `meta description is ${desc.length} chars`);
  descs.set(desc, [...(descs.get(desc) ?? []), route]);

  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) flag(route, `${h1s} <h1> elements`);

  if (!/<html[^>]*lang="en-US"/.test(html)) flag(route, 'missing lang="en-US"');

  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  // Next.js emits the root canonical without the trailing slash; both forms are the same URL.
  const expected = route === "/" ? [SITE, `${SITE}/`] : [`${SITE}${route}`];
  if (!expected.includes(canonical)) flag(route, `canonical is ${canonical ?? "missing"}, expected ${expected[0]}`);

  for (const prop of ["og:title", "og:description", "og:url", "og:image", "og:type"]) {
    if (!html.includes(`property="${prop}"`)) flag(route, `missing ${prop}`);
  }
  if (!html.includes('name="twitter:card"')) flag(route, "missing twitter:card");

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch {
      flag(route, "invalid JSON-LD block");
    }
  }
  if (route !== "/" && !html.includes('"BreadcrumbList"')) flag(route, "missing BreadcrumbList schema");

  for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
    if (!/\salt="/.test(img)) flag(route, `<img> without alt: ${img.slice(0, 80)}`);
    const src = attr(img, "src");
    if (src?.startsWith("/") && !existsSync(path.join(OUT, src))) flag(route, `image not found: ${src}`);
  }

  const internal = new Set();
  for (const m of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/g)) internal.add(m[1].replace(/\/$/, "") || "/");
  for (const href of internal) {
    if (!routes.has(href) && !existsSync(path.join(OUT, href))) flag(route, `broken internal link ${href}`);
  }
  const outgoing = [...internal].filter((h) => h !== route);
  if (outgoing.length < 3) flag(route, `only ${outgoing.length} internal links`);
}

for (const [t, rs] of titles) if (t && rs.length > 1) problems.push(`duplicate title "${t}": ${rs.join(", ")}`);
for (const [d, rs] of descs) if (d && rs.length > 1) problems.push(`duplicate description on ${rs.join(", ")}`);

const sitemap = readFileSync(path.join(OUT, "sitemap.xml"), "utf8");
for (const r of routes) {
  const url = r === "/" ? `${SITE}/` : `${SITE}${r}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) problems.push(`sitemap.xml is missing ${url}`);
}

console.log(`Audited ${htmlFiles.length} pages.`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log("All SEO checks passed.");
