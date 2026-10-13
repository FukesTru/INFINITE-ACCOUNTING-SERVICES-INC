import type imagesJson from "./images.json";
import type { CitySlug } from "@/lib/site";

export type ImageKey = keyof (typeof imagesJson)["images"];

export type Faq = { q: string; a: string };

/**
 * Inline text may contain Markdown-style links: "[anchor text](/services/bookkeeping)".
 * Only site-relative links and https links are supported; nothing else is parsed.
 */
export type RichText = string;

export type CityContent = {
  slug: CitySlug;
  name: string;
  /** <title>, ≤ 62 characters */
  title: string;
  /** meta description, 150–160 characters */
  description: string;
  heroImage: ImageKey;
  /** one sentence under the H1 */
  heroSubhead: string;
  /** one-line local hook for the card on /service-areas */
  cardHook: string;
  /** 200–250 words total across paragraphs; mentions the city, both services and the free consultation */
  intro: RichText[];
  help: {
    bookkeeping: { intro: RichText; items: string[] };
    tax: { intro: RichText; items: string[] };
  };
  /** exactly 4 */
  personas: { title: string; text: string }[];
  /** short "visit or call" guidance paragraph */
  visitNote: RichText;
  /** exactly 4, unique to this city */
  faqs: Faq[];
  /** exactly 3 other city slugs */
  nearby: CitySlug[];
  /** true only for Orland Park (physical office) */
  isOffice?: boolean;
};

export type BlogCategory = "Bookkeeping" | "Tax" | "Small Business" | "IRS & Notices";

export type BlogBlock =
  | { type: "p"; text: RichText }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: RichText[] }
  | { type: "ol"; items: RichText[] }
  | { type: "callout"; text: RichText };

export type BlogPost = {
  slug: string;
  title: string;
  /** <title> ≤ 62 chars, format "[Keyword] | Infinite Accounting" */
  seoTitle: string;
  /** meta description, 150–160 characters */
  description: string;
  /** 1–2 sentence excerpt for cards */
  excerpt: string;
  category: BlogCategory;
  /** ISO date, e.g. 2026-10-13 */
  date: string;
  image: ImageKey;
  /** 3–5 short bullet takeaways */
  takeaways: string[];
  /** 400–500 words of article body */
  body: BlogBlock[];
};
