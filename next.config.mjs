/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `npm run build` writes plain HTML/CSS/JS to ./out
  output: "export",
  // URLs are canonical without a trailing slash (e.g. /services/bookkeeping)
  trailingSlash: false,
  // Images are pre-optimized to WebP by scripts/optimize-images.mjs
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
