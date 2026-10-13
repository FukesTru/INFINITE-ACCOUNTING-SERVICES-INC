import { preload } from "react-dom";
import imageStatus from "@/content/image-status.json";
import imagesJson from "@/content/images.json";
import type { ImageKey } from "@/content/types";

/** True once scripts/optimize-images.mjs has produced this image's variants. */
export const imageReady = (key: ImageKey) => Boolean((imageStatus as Record<string, boolean>)[key]);

type AspectKey = keyof typeof imagesJson.aspects;

export function imageInfo(key: ImageKey) {
  const entry = imagesJson.images[key];
  const aspect = imagesJson.aspects[entry.aspect as AspectKey];
  const [rw, rh] = aspect.ratio;
  const widths = aspect.widths;
  const maxW = widths[widths.length - 1];
  const srcSet = widths.map((w) => `/images/${key}-${w}.webp ${w}w`).join(", ");
  // a mid-size variant as the plain src fallback
  const fallbackW = widths[Math.min(1, widths.length - 1)];
  return {
    alt: entry.alt,
    src: `/images/${key}-${fallbackW}.webp`,
    srcSet,
    width: maxW,
    height: Math.round((maxW * rh) / rw),
  };
}

type ImgProps = {
  image: ImageKey;
  /** `sizes` attribute; defaults to full viewport width */
  sizes?: string;
  /** Above-the-fold hero: eager load, high fetch priority and a <link rel=preload>. */
  priority?: boolean;
  /** Fill the positioned parent (object-cover). */
  fill?: boolean;
  className?: string;
  /** Override the registry alt text (use "" for purely decorative images). */
  alt?: string;
};

export function Img({ image, sizes = "100vw", priority = false, fill = false, className = "", alt }: ImgProps) {
  const info = imageInfo(image);
  if (!imageReady(image)) {
    // Branded stand-in until the optimized photo exists (never a broken <img>).
    const label = alt ?? info.alt;
    return (
      <span
        role={label ? "img" : undefined}
        aria-label={label || undefined}
        style={fill ? undefined : { aspectRatio: `${info.width} / ${info.height}` }}
        className={`${fill ? "absolute inset-0 h-full w-full" : "block w-full"} bg-[radial-gradient(ellipse_at_top_right,rgb(30_132_73/0.35),transparent_55%),linear-gradient(135deg,#0b2f57,#1d5fa8)] ${className}`}
      />
    );
  }
  if (priority) {
    preload(info.src, { as: "image", imageSrcSet: info.srcSet, imageSizes: sizes, fetchPriority: "high" });
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export; variants are pre-generated
    <img
      src={info.src}
      srcSet={info.srcSet}
      sizes={sizes}
      width={info.width}
      height={info.height}
      alt={alt ?? info.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={fill ? `absolute inset-0 h-full w-full object-cover ${className}` : `h-auto w-full ${className}`}
    />
  );
}
