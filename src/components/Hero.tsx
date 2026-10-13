import Link from "next/link";
import { Phone } from "lucide-react";
import type { ImageKey } from "@/content/types";
import { business, ctaLabel } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Img } from "./Img";

type HeroProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Omit for the plain navy hero used on legal / utility pages. */
  image?: ImageKey;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
  ctas?: boolean;
  size?: "lg" | "md" | "sm";
  children?: React.ReactNode;
};

const sizes = {
  lg: "min-h-[640px] pt-36 pb-20 md:min-h-[720px] md:pt-44 md:pb-28",
  md: "min-h-[520px] pt-32 pb-16 md:min-h-[560px] md:pt-40 md:pb-20",
  sm: "pt-32 pb-14 md:pt-40 md:pb-16",
};

export function Hero({ title, subtitle, image, eyebrow, breadcrumbs, ctas = true, size = "md", children }: HeroProps) {
  return (
    <section className={`on-dark relative isolate flex items-center overflow-hidden bg-navy ${sizes[size]}`}>
      {image ? (
        <>
          <Img image={image} priority fill sizes="100vw" className="-z-20" />
          {/* ~65% navy overlay, stronger on the text side */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/90 via-navy/72 to-navy/45"
          />
          <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-navy/50 to-transparent" />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgb(29_95_168/0.55),transparent_60%),linear-gradient(135deg,#0b2f57,#082340)]"
        />
      )}
      <div className="container-site w-full">
        <div className="max-w-3xl">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-green-tint">{eyebrow}</p>}
          <h1 className="h-underline text-[2.25rem] font-bold text-white sm:text-5xl lg:text-[3.5rem]">{title}</h1>
          {subtitle && <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">{subtitle}</p>}
          {ctas && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="btn btn-primary">
                {ctaLabel}
              </Link>
              <a href={business.phone.tel} className="btn btn-secondary">
                <Phone aria-hidden className="h-4 w-4" />
                Call {business.phone.display}
              </a>
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
