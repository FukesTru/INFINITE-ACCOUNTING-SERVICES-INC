import Link from "next/link";
import { Phone } from "lucide-react";
import { business, ctaLabel } from "@/lib/site";
import { Img } from "./Img";

/** Identical call-to-action band shown before the footer on every page. */
export function CtaBand() {
  return (
    <section aria-labelledby="cta-band-heading" className="on-dark relative isolate overflow-hidden bg-navy py-20 md:py-24">
      <Img image="shared-cta-band" alt="" fill sizes="100vw" className="-z-20" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/92 via-navy/85 to-navy/75" />
      <div className="container-site text-center" data-reveal="">
        <h2 id="cta-band-heading" className="h-underline h-underline-center mx-auto max-w-3xl text-3xl font-bold text-white md:text-[2.6rem]">
          Ready for books you can trust and taxes without the stress?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
          Start with a free, no-pressure consultation. Tell us where things stand and we&apos;ll explain your options in
          plain English.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn btn-primary min-w-64">
            {ctaLabel}
          </Link>
          <p className="text-white/85">
            or call{" "}
            <a href={business.phone.tel} className="inline-flex items-center gap-1.5 font-semibold text-white underline decoration-green decoration-2 hover:decoration-white">
              <Phone aria-hidden className="h-4 w-4" />
              {business.phone.display}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
