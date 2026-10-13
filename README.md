# Infinite Accounting Services — website

Static, SEO-focused website for **Infinite Accounting Services Inc**, a bookkeeping and tax firm in Orland Park, IL. It has 20 core pages, 4 starter blog posts, a custom 404, `sitemap.xml` and `robots.txt`.

- **Stack:** Next.js 16 (App Router, `output: "export"`), React 19, Tailwind CSS 4, TypeScript, lucide-react icons.
- **Output:** plain HTML/CSS/JS in `./out`, which any static host can serve.
- **Before launch:** see [`PRE-LAUNCH-CHECKLIST.md`](PRE-LAUNCH-CHECKLIST.md) for the client confirmations and setup steps.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export → ./out
npm start            # serve ./out locally
npm run check:seo    # audit the built pages (titles, metas, H1s, canonicals, schema, links, alt text, sitemap)
npm run typecheck
```

## Pages

| Path | Page |
|---|---|
| `/` | Homepage |
| `/about` | Meet Danielle Douglas |
| `/services`, `/services/bookkeeping`, `/services/tax-services` | Services hub + 2 service pages |
| `/service-areas` | Service-areas hub |
| `/service-areas/{orland-park, tinley-park, palos-heights, palos-hills, frankfort, crestwood, worth, orland-hills}` | 8 city pages (one template, unique content) |
| `/testimonials` | Reviews (data-driven) |
| `/blog`, `/blog/[slug]` | Blog index + post template (4 starter posts) |
| `/contact` | Contact + lead form |
| `/disclaimer`, `/privacy-policy`, `/sitemap` | Legal + HTML sitemap |

## Where things live

```
src/
  app/                    routes (one folder per page), layout, globals.css (design tokens), robots.ts, sitemap.ts
  components/             Header, Footer, Hero, CtaBand, TrustStrip, LeadForm, Faq, Steps, Img, MapEmbed, …
  content/
    cities.ts             all city-page copy (intro, examples, personas, FAQs, nearby links)
    blog.ts               blog posts (blocks with [text](/link) inline links)
    reviews.json          testimonials — replace samples with verified Google reviews
    owner.ts              Danielle's real portrait (set when supplied)
    images.json           image registry: aspect ratio + alt text per photo
    image-status.json     written by the image script (which photos are ready)
  lib/
    site.ts               business details: name, address, phone, email, hours, cities, services (single source of truth)
    seo.ts                per-page metadata helper (title, description, canonical, Open Graph, Twitter)
    schema.ts             JSON-LD builders (AccountingService, Service, Person, FAQPage, BreadcrumbList, Blog…)
    routes.ts             route list that drives sitemap.xml and the HTML sitemap
scripts/
  fetch-images.mjs        download the Higgsfield originals into images-src/
  optimize-images.mjs     build WebP variants + OG JPEGs + logo/apple icon
  check-seo.mjs           post-build audit
docs/higgsfield-image-prompts.md
```

**To change business details,** edit `src/lib/site.ts`. The header, footer, contact cards, maps and every JSON-LD block read from it.

## Configuration (environment variables)

Copy `.env.example` to `.env.local` (or set the variables in your host) and **rebuild**. Values are baked in at build time.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_LEAD_WEBHOOK_URL` | Where the lead form posts (URL-encoded). The endpoint must allow CORS. Point it at Zapier, Make, Formspree, Basin or your own function. Have it email danielle@infiniteaccountingservices.com and text (708) 232-3003; the payload includes `notify_email` and `notify_sms`. Until it's set, the form tells visitors to call, text or email. |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Optional reCAPTCHA v3 key. The token is sent as `recaptcha_token`; verify it server-side. A honeypot field is always on. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 ID. The placeholder `G-XXXXXXXXXX` keeps analytics off. |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console HTML-tag token. |
| `NEXT_PUBLIC_GOOGLE_REVIEW_URL` | "Write a review" link for the Testimonials page. |
| `NEXT_PUBLIC_CHAT_WIDGET_SRC` | Optional AI chat widget script, loaded in the reserved slot before `</body>`. |

The form payload has these fields:

```
name, email, phone, service, city, message, consent, consent_text,
page, submitted_at, notify_email, notify_sms, _subject, recaptcha_token
```

## Images

All photography was generated with **Higgsfield** (GPT Image 2.5, xhigh quality, 2K) from the brief's prompts plus a shared style prefix. Prompts are in `docs/higgsfield-image-prompts.md`.

- No generated image depicts an identifiable person.
- Danielle's portrait must be a real photo (see `src/content/owner.ts`).

```bash
npm run images:fetch   # download originals → images-src/ (git-ignored)
npm run images         # → public/images/<key>-<width>.webp, public/images/og/<key>.jpg, public/logo.png
npm run build
```

`<Img>` renders responsive `srcset`/`sizes` with explicit width and height, so there's no layout shift. Images below the fold are lazy-loaded. Each hero is eager-loaded with `fetchpriority="high"` and a `<link rel="preload">`. If a photo hasn't been processed yet, its slot renders a branded gradient instead of a broken image.

## SEO and accessibility built in

- **Per-page metadata.** Each page has a unique `<title>` (≤ 62 characters) and meta description (150–160 characters), plus a canonical `https://www…` URL, Open Graph and Twitter tags, and `lang="en-US"`.
- **Headings.** Every page has exactly one H1, with the primary keyword in the H1, the first 100 words and an H2.
- **JSON-LD by page:**
  - Homepage: AccountingService (NAP, hours, 8 `areaServed` cities, `sameAs`, OfferCatalog) and WebSite
  - City pages: a location-specific AccountingService. Only Orland Park carries the street address.
  - Service pages: Service
  - About: Person and ProfilePage
  - Contact: ContactPage
  - Blog: Blog and BlogPosting
  - Every inner page: BreadcrumbList
  - Every FAQ block: FAQPage
  - There's no review or rating markup.
- **Sitemaps and crawling.** `sitemap.xml` lists all 20 pages and the posts, `robots.txt` allows all crawlers, and the HTML sitemap is generated from the same route list.
- **Accessibility:**
  - skip link, semantic landmarks and visible focus states
  - an FAQ accordion built on keyboard-accessible `<details>`, with labelled form fields and inline errors
  - WCAG AA color contrast and `prefers-reduced-motion` support
- **Scroll reveals.** These use a ~1 KB IntersectionObserver plus CSS instead of an animation library. Content is only hidden once JavaScript has run, so it stays visible to crawlers and to visitors with JavaScript off.

## Deployment

The export works on any static host. Each URL is served from `<path>.html`; most hosts do this automatically ("pretty URLs").

- **Netlify:**
  - Build command: `npm run build`
  - Publish directory: `out`
  - `public/_redirects` already handles the 301 from non-www to www.
- **Vercel:** Import the repo; the framework is detected automatically. Add both domains, set `www` as primary and redirect the apex to it.
- **Cloudflare Pages:** Build with `npm run build` and serve `out`. Add a Bulk Redirect (or a Page Rule) for `infiniteaccountingservices.com/*` → `https://www.infiniteaccountingservices.com/$1` (301).
- **Apache or Nginx:**
  - Map `/path` to `/path.html`. For Nginx: `try_files $uri $uri.html $uri/ =404;`
  - Use `out/404.html` as the error page.
  - Redirect the apex domain to www with a 301.

After launch:

1. Verify the site in Google Search Console.
2. Submit the sitemap.
3. Make sure the Google Business Profile matches the site's name, address and phone exactly.
