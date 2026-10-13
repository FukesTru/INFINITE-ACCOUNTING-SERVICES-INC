import Link from "next/link";
import { ArrowRight, Check, House, Laptop, Store } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/Section";
import { Steps } from "@/components/Steps";
import { TrustStrip } from "@/components/TrustStrip";
import type { Faq } from "@/content/types";
import { reveal } from "@/lib/reveal";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

const description =
  "Bookkeeping and tax services from Infinite Accounting in Orland Park, IL. Organized books, accurate returns and honest guidance. Start with a free consultation.";

export const metadata = pageMetadata({
  title: "Accounting Services in Orland Park, IL | Infinite Accounting",
  description,
  path: "/services",
  image: "services-hero",
});

const panels = [
  { ...services[0], image: "bookkeeping-hero" as const, cta: "Explore bookkeeping services" },
  { ...services[1], image: "tax-hero" as const, cta: "Explore tax services" },
];

const comparison = [
  {
    icon: Store,
    who: "Small business owner",
    situation: "You run a shop, trade or service business and need to know where the money goes each month.",
    fit: "Monthly bookkeeping plus your business tax return, so the books and the return line up.",
    links: [
      { href: "/services/bookkeeping", label: "Bookkeeping" },
      { href: "/services/tax-services", label: "Tax Services" },
    ],
  },
  {
    icon: Laptop,
    who: "Self-employed or freelancer",
    situation: "You earn 1099 or side-business income and your receipts live in a folder, an app or a shoebox.",
    fit: "Simple recordkeeping or a one-time clean-up, then tax preparation and planning for the year ahead.",
    links: [
      { href: "/services/bookkeeping", label: "Bookkeeping" },
      { href: "/services/tax-services", label: "Tax Services" },
    ],
  },
  {
    icon: House,
    who: "Individual or family",
    situation: "You want your personal return done accurately, or you received a letter from the IRS or the state.",
    fit: "Individual tax preparation, back-year filings and help responding to notices.",
    links: [{ href: "/services/tax-services", label: "Tax Services" }],
  },
];

const faqs: Faq[] = [
  {
    q: "Do I need bookkeeping before you can do my taxes?",
    a: "Not necessarily. For individuals, your tax documents are usually enough. For businesses, accurate books make the return faster and more reliable. If your records are incomplete, we can do a clean-up or catch-up project first so your business return is built on solid numbers.",
  },
  {
    q: "Is bookkeeping a monthly service or a one-time project?",
    a: "It can be either. Many business owners prefer ongoing monthly bookkeeping so their records stay current. Others need a one-time project, like a QuickBooks clean-up or catching up on past months, before deciding whether to continue. We'll recommend what fits during your free consultation.",
  },
  {
    q: "Do you handle letters from the IRS or the Illinois Department of Revenue?",
    a: "Yes. We help you understand what the notice is asking for, review it against your records and return, gather supporting documents and prepare a response. The sooner you reach out after receiving a letter, the more options you typically have.",
  },
  {
    q: "Can we work together remotely, or do I need to come in?",
    a: "Either works. Many clients like to meet at our Orland Park office, and we also work with clients remotely by phone, text and email. During your free consultation we'll agree on how you'd like to share documents and stay in touch.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Accounting services in Orland Park, IL",
          serviceType: ["Bookkeeping", "Tax preparation", "Tax consulting"],
          description,
          path: "/services",
          catalog: true,
        })}
      />
      <Hero
        image="services-hero"
        breadcrumbs={[{ name: "Services", path: "/services" }]}
        title="Accounting Services in Orland Park, IL"
        subtitle="Two core services, done carefully and explained clearly: bookkeeping that keeps you organized and tax preparation you can trust."
      />
      <TrustStrip />

      <Section labelledBy="intro-heading">
        <div className="mx-auto max-w-3xl text-center" data-reveal="">
          <h2 id="intro-heading" className="h-underline h-underline-center text-3xl font-bold md:text-[2.5rem]">
            Accounting services built around your business
          </h2>
          <div className="mt-6 space-y-4 text-lg text-muted">
            <p>
              Infinite Accounting offers accounting services in Orland Park, IL for small businesses, independent
              professionals and families across the southwest suburbs. Our work centers on two things that support each
              other: keeping your books accurate throughout the year, and preparing your tax returns correctly and on
              time.
            </p>
            <p>
              Some clients come to us for one service, many use both. Either way, you work directly with a small team
              that knows your file, explains your numbers without jargon and treats your information with complete
              confidentiality. Every engagement starts with a free consultation, so you know exactly what we&apos;ll
              handle before any work begins.
            </p>
          </div>
        </div>
      </Section>

      {/* Two service panels */}
      <Section labelledBy="panels-heading" className="pt-0! md:pt-0!">
        <h2 id="panels-heading" className="sr-only">
          Our two service lines
        </h2>
        <div className="space-y-10">
          {panels.map((p, i) => (
            <article
              key={p.path}
              className={`card grid overflow-hidden lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              data-reveal=""
            >
              <div className="relative min-h-64 lg:min-h-full">
                <Img image={p.image} fill sizes="(min-width: 1024px) 600px, 100vw" alt="" />
              </div>
              <div className="p-6 md:p-10">
                <p className="eyebrow">Service line {i + 1}</p>
                <h3 className="text-3xl font-bold">
                  <Link href={p.path} className="no-underline hover:text-blue">
                    {p.name}
                  </Link>
                </h3>
                <p className="mt-4 text-lg text-muted">{p.summary}</p>
                <ul className="mt-6 grid gap-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={p.path} className="btn btn-primary mt-8">
                  {p.cta}
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Which service */}
      <Section labelledBy="which-heading">
        <SectionHeading
          id="which-heading"
          eyebrow="Find your fit"
          title="Which service is right for me?"
          intro={<p>Not sure where to start? Here&apos;s how most clients use our services. We&apos;ll confirm the right fit during your free consultation.</p>}
        />
        <div className="overflow-hidden rounded-[14px] border border-line">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Which accounting service fits each type of client</caption>
            <thead className="hidden bg-navy text-white md:table-header-group">
              <tr>
                <th scope="col" className="px-6 py-4 font-heading text-lg font-semibold">If you are a…</th>
                <th scope="col" className="px-6 py-4 font-heading text-lg font-semibold">Your situation</th>
                <th scope="col" className="px-6 py-4 font-heading text-lg font-semibold">What usually fits</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(({ icon: Icon, who, situation, fit, links }, i) => (
                <tr key={who} className="block border-b border-line last:border-0 md:table-row even:bg-mist" {...reveal(i)}>
                  <th scope="row" className="block px-6 pb-2 pt-6 align-top md:table-cell md:py-6">
                    <span className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-tint text-green-dark">
                        <Icon aria-hidden className="h-5 w-5" />
                      </span>
                      <span className="font-heading text-xl font-semibold text-navy">{who}</span>
                    </span>
                  </th>
                  <td className="block px-6 py-2 align-top text-muted md:table-cell md:py-6">{situation}</td>
                  <td className="block px-6 pb-6 pt-2 align-top md:table-cell md:py-6">
                    <p>{fit}</p>
                    <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                      {links.map((l) => (
                        <Link key={l.href} href={l.href} className="link">
                          {l.label} →
                        </Link>
                      ))}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="tint" labelledBy="together-heading">
        <SectionHeading id="together-heading" eyebrow="Our process" title="How we work together" />
        <Steps
          onTint
          steps={[
            { title: "Free consultation", text: "We learn about your business or household, review where things stand and answer your questions." },
            { title: "Clear plan", text: "You get a straightforward recommendation, including what we'll handle, what we'll need from you and when." },
            { title: "Ongoing support", text: "We do the work, keep you updated and stay available year-round, not just at tax time." },
          ]}
        />
        <p className="mt-12 text-lg" data-reveal="">
          Looking for help in your town? See the <Link href="/service-areas" className="link">communities we serve</Link>, or{" "}
          <Link href="/contact" className="link">request your free consultation</Link>.
        </p>
      </Section>

      <FaqSection faqs={faqs} title="Questions about our services" />
      <CtaBand />
    </>
  );
}
