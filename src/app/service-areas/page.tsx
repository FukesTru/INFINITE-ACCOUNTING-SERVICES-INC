import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { Section, SectionHeading } from "@/components/Section";
import { cityContent } from "@/content/cities";
import type { Faq } from "@/content/types";
import { reveal } from "@/lib/reveal";
import { businessSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { business, cityPath, fullAddress, hoursSummary } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Bookkeeping & Tax Services Near You | Infinite Accounting",
  description:
    "Infinite Accounting serves Orland Park, Tinley Park, Palos Heights, Palos Hills, Frankfort, Crestwood, Worth and Orland Hills. Find your town. Book a free call.",
  path: "/service-areas",
  image: "service-areas-hero",
});

const faqs: Faq[] = [
  {
    q: "Do you meet with clients in person?",
    a: "Yes. Our office is at 14475 John Humphrey Dr, Ste 150 in Orland Park, and many clients like to drop off documents or review their return face to face. Call or text (708) 232-3003 to set a time so we can have your file ready.",
  },
  {
    q: "Do you serve my town?",
    a: "We work with clients throughout the southwest suburbs, including Orland Park, Tinley Park, Palos Heights, Palos Hills, Frankfort, Crestwood, Worth and Orland Hills. If your town isn't listed, call us anyway. Where you live matters much less than whether we're the right fit for your books and taxes.",
  },
  {
    q: "Can you work with me remotely?",
    a: "Yes. Along with meeting at our Orland Park office, we work with clients remotely by phone, text and email. During your free consultation we'll agree on how you'd like to share documents and stay in touch throughout the year.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={businessSchema()} />
      <Hero
        image="service-areas-hero"
        breadcrumbs={[{ name: "Service Areas", path: "/service-areas" }]}
        title="Accounting Services Across the Southwest Suburbs"
        subtitle="Bookkeeping and tax help for businesses and families in eight communities, from our office in Orland Park."
      />

      <Section labelledBy="intro-heading">
        <div className="mx-auto max-w-3xl text-center" data-reveal="">
          <h2 id="intro-heading" className="h-underline h-underline-center text-3xl font-bold md:text-[2.5rem]">
            Your local accountant in the southwest suburbs of Chicago
          </h2>
          <p className="mt-6 text-lg text-muted">
            Looking for an accountant in the southwest suburbs of Chicago who knows your name and your file? Infinite
            Accounting works with small businesses, independent professionals and families across eight neighboring
            communities. Every town has its own mix of shops, trades, home offices and households, so each page below
            explains how our{" "}
            <Link href="/services/bookkeeping" className="link">
              bookkeeping
            </Link>{" "}
            and{" "}
            <Link href="/services/tax-services" className="link">
              tax services
            </Link>{" "}
            help people there. Find your town, then start with a free consultation.
          </p>
        </div>
      </Section>

      <Section tone="mist" labelledBy="cities-heading" className="pt-0! md:pt-0! bg-gradient-to-b from-white via-mist to-mist">
        <h2 id="cities-heading" className="sr-only">
          Cities we serve
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cityContent.map((c, i) => (
            <li key={c.slug} {...reveal(i % 4)}>
              <Link
                href={cityPath(c.slug)}
                className="card card-hover group flex h-full flex-col overflow-hidden no-underline"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Img
                    image={c.heroImage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  {c.isOffice && (
                    <span className="absolute left-3 top-3 rounded-full bg-green px-3 py-1 text-xs font-semibold text-white shadow-soft">
                      Our office
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-navy">
                    <MapPin aria-hidden className="h-5 w-5 text-green" />
                    {c.name}, IL
                  </h3>
                  <p className="mt-2 flex-1 text-[0.98rem] text-muted">{c.cardHook}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-blue transition-all group-hover:gap-2.5">
                    {c.name} bookkeeping &amp; tax
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="map-heading">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
          <div data-reveal="">
            <MapEmbed />
          </div>
          <div data-reveal="">
            <p className="eyebrow">Our office</p>
            <h2 id="map-heading" className="h-underline text-3xl font-bold">
              One office, eight communities
            </h2>
            <p className="mt-6 text-lg">{fullAddress}</p>
            <p className="mt-2 text-muted">{hoursSummary}</p>
            <div className="mt-6 rounded-[14px] bg-green-tint p-6">
              <p className="text-lg font-semibold text-navy">Not in the list? Call us — we also work with clients remotely.</p>
              <a href={business.phone.tel} className="btn btn-primary mt-4">
                <Phone aria-hidden className="h-4 w-4" />
                Call {business.phone.display}
              </a>
            </div>
            <p className="mt-6">
              Prefer to write? <Link href="/contact" className="link">Send us a message</Link> and we&apos;ll reply promptly.
            </p>
          </div>
        </div>
      </Section>

      <FaqSection tone="mist" faqs={faqs} title="Service area questions" />
      <CtaBand />
    </>
  );
}
