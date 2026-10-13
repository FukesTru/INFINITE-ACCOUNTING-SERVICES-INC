import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { allRoutes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/** sitemap.xml: the 20 core pages plus every blog post. */
export default function sitemap(): MetadataRoute.Sitemap {
  const postDates = new Map(posts.map((p) => [`/blog/${p.slug}`, p.date]));
  const latestPost = posts.map((p) => p.date).sort().at(-1);
  return allRoutes.map((r) => ({
    url: absoluteUrl(r.path),
    lastModified: postDates.get(r.path) ?? (r.path === "/blog" ? latestPost : undefined) ?? "2026-10-13",
    changeFrequency: r.path.startsWith("/blog") ? "monthly" : r.group === "Legal" ? "yearly" : "monthly",
    priority: r.priority,
  }));
}
