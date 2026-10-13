import type { Metadata } from "next";
import imageStatus from "@/content/image-status.json";
import imagesJson from "@/content/images.json";
import type { ImageKey } from "@/content/types";
import { SITE_URL, business } from "./site";

export const absoluteUrl = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

/** 1200×630 JPEG generated for every image flagged "og" in images.json. */
export const ogImagePath = (key: ImageKey) => `/images/og/${key}.jpg`;

type PageMetaInput = {
  /** Full <title>, used as-is (≤ 62 chars, unique per page). */
  title: string;
  /** 150–160 characters, unique per page. */
  description: string;
  /** Site-relative path, e.g. "/services/bookkeeping". */
  path: string;
  image?: ImageKey;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  noindex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  image = "shared-og-default",
  type = "website",
  publishedTime,
  noindex,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ready = imageStatus as Record<string, boolean>;
  const img = imagesJson.images[image];
  // Use the page's own share image when it exists, else the default one, else none.
  const ogKey: ImageKey | null =
    "og" in img && img.og && ready[image] ? image : ready["shared-og-default"] ? "shared-og-default" : null;
  const ogImage = ogKey
    ? { url: ogImagePath(ogKey), width: 1200, height: 630, alt: imagesJson.images[ogKey].alt || business.name }
    : null;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: business.name,
      locale: "en_US",
      ...(ogImage ? { images: [ogImage] } : {}),
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage.url] } : {}),
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
