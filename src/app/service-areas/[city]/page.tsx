import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpenCheck, Check, FileText, MapPin, UserRound } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { MapEmbed } from "@/components/MapEmbed";
import { RichText } from "@/components/RichText";
import { Section, SectionHeading } from "@/components/Section";
import { cityContent, getCity } from "@/content/cities";
import { reveal } from "@/lib/reveal";
import { cityBusinessSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { cityPath } from "@/lib/site";

type Params = { city: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return cityContent.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return pageMetadata({ title: city.title, description: city.description, path: cityPath(city.slug), image: city.heroImage });
}

export default async function CityPage({ params }: { params: Promise<Params> }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const path = cityPath(city.slug);
  const nearby = city.nearby.map((s) => getCity(s)!).filter(Boolean);

  return (
    <>
      <JsonLd data={cityBusinessSchema({ name: city.name, path, isOffice: city.isOffice })} />
      <Hero
        image={city.heroImage}
        breadcrumbs={[
          { name: "Service Areas", path: "/service-areas" },
          { name: `${city.name}, IL`, path },
        ]}
        eyebrow={city.isOffice ? "Our office · Orland Park, IL" : `Serving ${city.name}, IL`}
        title={`Bookkeeping & Tax Services in ${city.name}, IL`}
        subtitle={city.heroSubhead}
      />

      {/* Intro */}
      <Section labelledBy="intro-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div data-reveal="">
            <p className="eyebrow">{city.name}, IL</p>
            <h2 id="intro-heading" className="h-underline text-3xl font-bold md:text-[2.5rem]">
              {city.isOffice ? `Your local accounting office in ${city.name}` : `Bookkeeping and tax help for ${city.name}`}
            </h2>
            <div className="prose-site mt-6 text-lg">
              {city.intro.map((p, i) => (
                <p key={i}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </div>
          <aside className="on-dark self-start rounded-[14px] bg-navy p-8 text-white shadow-lift" data-reveal="">
            <h3 className="text-2xl font-bold text-white">Services for {city.name} clients</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/services/bookkeeping" className="group flex gap-3 text-white no-underline">
                  <BookOpenCheck aria-hidden className="mt-1 h-5 w-5 shrink-0 text-[#5fd08f]" />
                  <span>
                    <span className="block font-semibold group-hover:underline">Bookkeeping services</span>
                    <span className="block text-[0.95rem] text-white/75">Monthly books, QuickBooks, catch-up work</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/tax-services" className="group flex gap-3 text-white no-underline">
                  <FileText aria-hidden className="mt-1 h-5 w-5 shrink-0 text-[#5fd08f]" />
                  <span>
                    <span className="block font-semibold group-hover:underline">Tax services</span>
                    <span className="block text-[0.95rem] text-white/75">Individual & business returns, IRS letters</span>
                  </span>
                </Link>
              </li>
            </ul>
            <Link href="/contact" className="btn btn-primary mt-8 w-full">
              Get Your Free Consultation
            </Link>
          </aside>
        </div>
      </Section>

      {/* How we help */}
      <Section tone="mist" labelledBy="help-heading">
        <SectionHeading id="help-heading" eyebrow="How we help" title={`How we help ${city.name} clients`} />
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { title: "Bookkeeping", href: "/services/bookkeeping", data: city.help.bookkeeping, icon: BookOpenCheck },
            { title: "Tax Services", href: "/services/tax-services", data: city.help.tax, icon: FileText },
          ].map(({ title, href, data, icon: Icon }, i) => (
            <div key={title} className="card flex flex-col p-6 md:p-8" {...reveal(i)}>
              <h3 className="flex items-center gap-3 text-2xl font-bold">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-tint text-green-dark">
                  <Icon aria-hidden className="h-6 w-6" />
                </span>
                {title}
              </h3>
              <p className="mt-4 text-muted">
                <RichText text={data.intro} />
              </p>
              <ul className="mt-5 flex-1 space-y-3">
                {data.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={href} className="mt-6 inline-flex items-center gap-2 font-semibold text-blue no-underline hover:gap-3 transition-all">
                More about {title.toLowerCase()}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Personas */}
      <Section labelledBy="who-heading">
        <SectionHeading id="who-heading" eyebrow="Who we work with" title={`Who we work with in ${city.name}`} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {city.personas.map((p, i) => (
            <div key={p.title} className="card card-hover p-6" {...reveal(i)}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white">
                <UserRound aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-[1rem] text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Visit or call */}
      <Section tone="tint" labelledBy="visit-heading">
        <SectionHeading
          id="visit-heading"
          eyebrow="Visit or call"
          title={city.isOffice ? "Visit our Orland Park office" : `Working with us from ${city.name}`}
          intro={
            <p>
              <RichText text={city.visitNote} />
            </p>
          }
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div data-reveal="">
            <MapEmbed />
          </div>
          <div data-reveal="">
            <ContactCard title="Office details" headingLevel={3} social={false} />
          </div>
        </div>
      </Section>

      <FaqSection faqs={city.faqs} title={`${city.name} bookkeeping & tax questions`} />

      {/* Lead form */}
      <Section tone="mist" labelledBy="form-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div data-reveal="">
            <p className="eyebrow">Free consultation</p>
            <h2 id="form-heading" className="h-underline text-3xl font-bold md:text-[2.5rem]">
              Start with a free consultation
            </h2>
            <p className="mt-6 text-lg text-muted">
              Tell us a little about your books or taxes and we&apos;ll be in touch to set up a time to talk. Prefer to
              reach us directly? Visit our <Link href="/contact" className="link">contact page</Link>.
            </p>
          </div>
          <div data-reveal="">
            <LeadForm defaultCity={city.name} />
          </div>
        </div>
      </Section>

      {/* Nearby */}
      <Section labelledBy="nearby-heading">
        <SectionHeading id="nearby-heading" eyebrow="Nearby areas" title="We also serve nearby communities" />
        <ul className="grid gap-4 md:grid-cols-3">
          {nearby.map((n, i) => (
            <li key={n.slug} {...reveal(i)}>
              <Link
                href={cityPath(n.slug)}
                className="card card-hover flex items-center justify-between gap-4 p-6 no-underline"
              >
                <span className="flex items-center gap-3">
                  <MapPin aria-hidden className="h-5 w-5 text-green" />
                  <span className="font-heading text-xl font-semibold text-navy">
                    Bookkeeping & tax in {n.name}
                  </span>
                </span>
                <ArrowRight aria-hidden className="h-5 w-5 shrink-0 text-blue" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8" data-reveal="">
          <Link href="/service-areas" className="link">
            View all service areas
          </Link>
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
