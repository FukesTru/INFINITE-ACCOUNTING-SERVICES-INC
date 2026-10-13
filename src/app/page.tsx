import Link from "next/link";
import { ArrowRight, BookOpenCheck, Check, ClipboardCheck, Handshake, Lock, MapPin, MessagesSquare } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { OwnerPortrait } from "@/components/OwnerPortrait";
import { ReviewGrid } from "@/components/Reviews";
import { Section, SectionHeading } from "@/components/Section";
import { Steps } from "@/components/Steps";
import { TrustStrip } from "@/components/TrustStrip";
import type { Faq } from "@/content/types";
import { reveal } from "@/lib/reveal";
import { businessSchema, websiteSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { business, cities, cityPath } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Orland Park Bookkeeping & Tax Services | Infinite Accounting",
  description:
    "Orland Park bookkeeping and tax services for small businesses and families. Accurate books, stress-free tax prep, plain-English advice. Free consultation.",
  path: "/",
  image: "home-hero",
});

const serviceCards = [
  {
    title: "Bookkeeping Services",
    href: "/services/bookkeeping",
    image: "home-bookkeeping" as const,
    text: "Clean, current books show you what your business is really earning and spending. We handle the monthly work and give you reports you can actually read.",
    bullets: [
      "Monthly bookkeeping & reconciliations",
      "QuickBooks setup, clean-up and training",
      "Catch-up work for months or years behind",
      "Profit & loss and balance sheet reports",
    ],
  },
  {
    title: "Tax Services",
    href: "/services/tax-services",
    image: "home-tax" as const,
    text: "Accurate, on-time returns for individuals and small businesses, prepared with care and explained clearly. When a tax letter shows up, we help you sort it out.",
    bullets: [
      "Individual tax return preparation",
      "Business returns for LLCs, partnerships & S-corps",
      "Year-round tax consulting and planning",
      "Help with IRS & Illinois notices and late filings",
    ],
  },
];

const reasons = [
  {
    icon: MessagesSquare,
    title: "Clear explanations in plain English",
    text: "We walk you through your numbers without the jargon, so you understand your books and your return, not just sign them.",
  },
  {
    icon: ClipboardCheck,
    title: "Accurate, organized records",
    text: "Careful reconciliations and attention to detail mean fewer surprises at tax time and records you can hand to a lender with confidence.",
  },
  {
    icon: Lock,
    title: "Confidential and discreet",
    text: "Your financial life is private. We handle every document and conversation with the discretion you'd expect from a trusted advisor.",
  },
  {
    icon: Handshake,
    title: "A real local office and a real person",
    text: "When you call, you reach someone who knows your file. Our office is right here in Orland Park, and we answer the phone.",
  },
];

const faqs: Faq[] = [
  {
    q: "Do you offer a free consultation?",
    a: "Yes. Your first conversation is free and there's no obligation. We'll ask about your business or household, look at where your books and taxes stand, and explain what we'd recommend and how working together would look. Call or text (708) 232-3003 or use the form on this page to set it up.",
  },
  {
    q: "Can you help if my books are months or years behind?",
    a: "Absolutely. Catch-up bookkeeping is one of the most common reasons people call us. We gather your bank and card statements, sort and reconcile the transactions, and bring your records current, then help you stay on track so it doesn't happen again. See our [catch-up bookkeeping services](/services/bookkeeping) for details.",
  },
  {
    q: "Do you work with QuickBooks?",
    a: "Yes. We set up new QuickBooks files, clean up existing ones that have gotten messy, and train owners who want to handle some of the day-to-day entry themselves. If you use different software, tell us what you have during your consultation and we'll talk through the best approach.",
  },
  {
    q: "Do you prepare both personal and business taxes?",
    a: "We do. We prepare individual returns as well as business returns for sole proprietors, LLCs, partnerships and S-corporations. Many owners like having one firm handle both, because the two are often connected. Learn more on our [tax services page](/services/tax-services).",
  },
  {
    q: "What do I need to bring to my first meeting?",
    a: "Bring what you have. That usually means last year's tax returns, any tax forms you've received this year, recent bank and credit card statements, and any letters from the IRS or the Illinois Department of Revenue. If your records are disorganized, that's fine. Sorting them out is part of what we do.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[businessSchema(), websiteSchema()]} />

      <Hero
        size="lg"
        image="home-hero"
        eyebrow="Infinite Accounting Services · Orland Park, IL"
        title="Bookkeeping & Tax Services in Orland Park, IL"
        subtitle="Streamlined bookkeeping and tax solutions for small businesses, professionals and families across the southwest suburbs."
      />

      <TrustStrip />

      {/* Intro + service cards */}
      <Section labelledBy="services-heading">
        <SectionHeading
          id="services-heading"
          eyebrow="What we do"
          title="Bookkeeping and tax services for Orland Park businesses and families"
          intro={
            <p>
              Infinite Accounting provides bookkeeping and tax services in Orland Park, IL and the surrounding southwest
              suburbs. Whether you run a small business, work for yourself or simply want your family&apos;s taxes done
              right, we keep your records organized, file accurately and on time, and explain everything in plain
              English. It all starts with a free consultation.
            </p>
          }
        />
        <div className="grid gap-8 md:grid-cols-2">
          {serviceCards.map((card, i) => (
            <article key={card.href} className="card card-hover flex flex-col overflow-hidden" {...reveal(i)}>
              <div className="aspect-[4/3] overflow-hidden">
                <Img image={card.image} sizes="(min-width: 1200px) 580px, (min-width: 768px) 50vw, 100vw" className="h-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="text-2xl font-bold md:text-[1.75rem]">
                  <Link href={card.href} className="no-underline hover:text-blue">
                    {card.title}
                  </Link>
                </h3>
                <p className="mt-3 text-muted">{card.text}</p>
                <ul className="mt-5 space-y-2.5">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-green" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href={card.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-blue no-underline hover:gap-3 transition-all">
                  Learn more about {card.title.toLowerCase()}
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Why choose */}
      <Section tone="mist" labelledBy="why-heading">
        <SectionHeading id="why-heading" eyebrow="Why Infinite Accounting" title="Why clients choose Infinite Accounting" center />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="card card-hover p-6" {...reveal(i)}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-tint text-green-dark">
                <Icon aria-hidden className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-[1rem] text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section labelledBy="how-heading">
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="Getting started is simple"
          intro={<p>Three steps from &ldquo;my books are a mess&rdquo; to records and returns you can rely on.</p>}
        />
        <Steps
          steps={[
            {
              title: "Free consultation",
              text: "Tell us about your business or household. We look at where things stand and answer your questions, with no obligation.",
            },
            {
              title: "Tailored plan",
              text: "We recommend the right mix of bookkeeping and tax help for your situation and explain exactly what we'll handle.",
            },
            {
              title: "Ongoing support & on-time filing",
              text: "We keep your books current, prepare your returns accurately and on time, and stay a phone call away all year.",
            },
          ]}
        />
      </Section>

      {/* Meet Danielle */}
      <Section tone="tint" labelledBy="owner-heading">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="mx-auto w-full max-w-sm md:max-w-none" data-reveal="">
            <OwnerPortrait />
          </div>
          <div data-reveal="">
            <p className="eyebrow">Meet the owner</p>
            <h2 id="owner-heading" className="h-underline text-3xl font-bold md:text-[2.5rem]">
              Meet Danielle Douglas
            </h2>
            <p className="mt-6 text-lg">
              Danielle Douglas founded Infinite Accounting Services in {business.foundingYear} with a simple idea: small
              business owners and families deserve an accountant who explains things and answers the phone. Her
              interest in accounting began by helping family members keep their business bank accounts in order. Today
              she leads a neighborhood firm in Orland Park that focuses on accurate books, careful tax preparation and
              helping every client truly understand their own numbers.
            </p>
            <Link href="/about" className="btn btn-outline mt-8">
              More about Danielle
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Local trust */}
      <section aria-labelledby="local-heading" className="on-dark relative isolate overflow-hidden bg-navy py-20 md:py-28">
        <Img image="home-local" fill sizes="100vw" className="-z-20" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/92 via-navy/80 to-navy/60" />
        <div className="container-site">
          <div className="max-w-3xl" data-reveal="">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-green-tint">Local and nearby</p>
            <h2 id="local-heading" className="h-underline text-3xl font-bold text-white md:text-[2.5rem]">
              Proudly serving the southwest suburbs
            </h2>
            <p className="mt-6 text-lg text-white/90">
              From our office in Orland Park, we work with business owners, professionals and families in towns across
              the area. Choose your community to see how we help there.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {cities.map((c, i) => (
              <li key={c.slug} {...reveal(i)}>
                <Link
                  href={cityPath(c.slug)}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 font-semibold text-white no-underline backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-navy"
                >
                  <MapPin aria-hidden className="h-4 w-4" />
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/service-areas" className="mt-8 inline-flex items-center gap-2 font-semibold text-white underline decoration-green decoration-2 underline-offset-4 hover:decoration-white">
            See all service areas
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials preview */}
      <Section labelledBy="reviews-heading">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="reviews-heading"
            eyebrow="Client reviews"
            title="What clients say"
            intro={<p>Verified reviews from our Google Business Profile will appear here.</p>}
            className="md:mb-14"
          />
          <Link href="/testimonials" className="btn btn-outline mb-10 self-start md:mb-14 md:self-auto">
            Read client reviews
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
        <ReviewGrid limit={3} />
      </Section>

      <FaqSection
        tone="mist"
        faqs={faqs}
        title="Questions about bookkeeping and taxes"
        intro={
          <p>
            Don&apos;t see your question? <Link href="/contact" className="link">Contact us</Link> or call{" "}
            <a href={business.phone.tel} className="link">
              {business.phone.display}
            </a>
            .
          </p>
        }
      />

      {/* Lead form */}
      <Section labelledBy="form-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div data-reveal="">
            <p className="eyebrow">Free consultation</p>
            <h2 id="form-heading" className="h-underline text-3xl font-bold md:text-[2.5rem]">
              Tell us what you need — we&apos;ll reply promptly
            </h2>
            <p className="mt-6 text-lg text-muted">
              Share a little about your books or taxes and we&apos;ll get back to you to schedule your free consultation.
              Prefer to talk now? Call or text{" "}
              <a href={business.phone.tel} className="link">
                {business.phone.display}
              </a>
              .
            </p>
            <ul className="mt-6 space-y-3">
              {["No cost, no obligation", "Your information stays confidential", "Bookkeeping, taxes or both"].map((t) => (
                <li key={t} className="flex gap-3 font-medium text-navy">
                  <BookOpenCheck aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal="">
            <LeadForm />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
