import { posts } from "@/content/blog";
import { cities, cityPath } from "./site";

export type RouteEntry = { path: string; name: string; group: RouteGroup; priority: number };
export type RouteGroup = "Main" | "Services" | "Service Areas" | "Resources" | "Legal";

/** The 20 core pages, in sitemap order. Drives sitemap.xml and the HTML sitemap. */
export const coreRoutes: RouteEntry[] = [
  { path: "/", name: "Home", group: "Main", priority: 1.0 },
  { path: "/about", name: "About Danielle Douglas", group: "Main", priority: 0.8 },
  { path: "/services", name: "Services", group: "Services", priority: 0.9 },
  { path: "/services/bookkeeping", name: "Bookkeeping Services", group: "Services", priority: 0.9 },
  { path: "/services/tax-services", name: "Tax Services", group: "Services", priority: 0.9 },
  { path: "/service-areas", name: "Service Areas", group: "Service Areas", priority: 0.8 },
  ...cities.map((c) => ({
    path: cityPath(c.slug),
    name: `${c.name}, IL`,
    group: "Service Areas" as const,
    priority: c.slug === "orland-park" ? 0.9 : 0.8,
  })),
  { path: "/testimonials", name: "Client Reviews", group: "Main", priority: 0.6 },
  { path: "/blog", name: "Blog", group: "Resources", priority: 0.7 },
  { path: "/contact", name: "Contact & Free Consultation", group: "Main", priority: 0.9 },
  { path: "/disclaimer", name: "Disclaimer", group: "Legal", priority: 0.2 },
  { path: "/privacy-policy", name: "Privacy Policy", group: "Legal", priority: 0.2 },
  { path: "/sitemap", name: "Site Map", group: "Legal", priority: 0.2 },
];

export const blogRoutes: RouteEntry[] = posts.map((p) => ({
  path: `/blog/${p.slug}`,
  name: p.title,
  group: "Resources",
  priority: 0.6,
}));

export const allRoutes = [...coreRoutes, ...blogRoutes];
