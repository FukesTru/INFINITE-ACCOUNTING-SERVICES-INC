import Link from "next/link";
import { ArrowRight, Briefcase, House, Lightbulb, Lock, PhoneCall, Search, Store, UserRound } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { OwnerPortrait } from "@/components/OwnerPortrait";
import { Section, SectionHeading } from "@/components/Section";
import { reveal } from "@/lib/reveal";
import { personSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { business } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Danielle Douglas, Accountant | Infinite Accounting Services",
  description:
    "Meet Danielle Douglas, president of Infinite Accounting Services in Orland Park. Plain-English bookkeeping and tax help for local businesses and families.",
  path: "/about",
  image: "about-hero",
  type: "profile",
});

const values = [
  {
    icon: Lightbulb,
    title: "Education first",
    text: "We explain what your numbers mean and why they matter, so you can make decisions with confidence instead of guessing.",
  },
  {
    icon: Search,
    title: "Accuracy and detail",
    text: "Every account reconciled, every figure checked. Careful work up front prevents headaches at tax time and with lenders.",
  },
  {
    icon: Lock,
    title: "Discretion",
    text: "Your finances are personal. We treat your documents and conversations with strict confidentiality.",
  },
  {
    icon: PhoneCall,
    title: "Responsiveness",
    text: "Questions don't wait for April. You can reach us by phone, text or email and expect a timely, real answer.",
  },
];

const audiences = [
  { icon: Store, title: "Small & mid-sized business owners", text: "Shops, trades, service companies and growing LLCs that need steady books and dependable tax prep." },
  { icon: Briefcase, title: "Executives", text: "Busy professionals who want their personal returns handled carefully and discreetly." },
  { icon: UserRound, title: "Independent professionals", text: "Consultants, freelancers and the self-employed balancing 1099 income, expenses and quarterly planning." },
  { icon: House, title: "Individuals & families", text: "Households that want their taxes done right and explained clearly, year after year." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <Hero
        image="about-hero"
        breadcrumbs={[{ name: "About", path: "/about" }]}
        title="Meet Danielle Douglas, President of Infinite Accounting Services"
        subtitle="A neighborhood accounting firm in Orland Park built on clear explanations, careful work and real relationships."
      />

      {/* Owner story */}
      <Section labelledBy="story-heading">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="mx-auto w-full max-w-sm md:sticky md:top-28 md:max-w-none" data-reveal="">
            <OwnerPortrait />
          </div>
          <div data-reveal="">
            <p className="eyebrow">Our story</p>
            <h2 id="story-heading" className="h-underline text-3xl font-bold md:text-[2.5rem]">
              An accountant who explains things and answers the phone
            </h2>
            <div className="prose-site mt-6 text-lg">
              <p>
                Danielle Douglas didn&apos;t set out to start an accounting firm. It began closer to home: family members
                with small businesses asked for help keeping their business bank accounts organized, and she discovered
                how much a little clarity could change things for an owner. What started as helping family turned into
                a career.
              </p>
              <p>
                Over roughly two decades in the accounting industry, Danielle has worked with the everyday financial
                questions that keep owners up at night: Where did the money go this month? Are my books ready for tax
                season? What does this letter from the IRS actually mean? Along the way she earned an MBA, which
                broadened her view of how bookkeeping, taxes and business decisions fit together.
              </p>
              <p>
                In {business.foundingYear}, she founded Infinite Accounting Services Inc to offer small and mid-sized
                businesses, independent professionals and families something many of them couldn&apos;t find at larger
                firms: one person who knows their file, keeps their records accurate and takes the time to explain
                their numbers in plain English.
              </p>
              <p>
                Danielle&apos;s guiding belief is simple. Clients shouldn&apos;t just receive reports and returns, they
                should understand them. When you know where you stand, you make better decisions for your business and
                your family. That&apos;s the standard she holds the firm to with every client, every month.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn btn-primary">
                Explore our services
              </Link>
              <Link href="/testimonials" className="btn btn-outline">
                Read client reviews
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Approach */}
      <Section tone="mist" labelledBy="approach-heading">
        <SectionHeading id="approach-heading" eyebrow="Our approach" title="How we work with every client" center />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }, i) => (
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

      {/* Who we work with */}
      <Section labelledBy="who-heading">
        <SectionHeading
          id="who-heading"
          eyebrow="Who we work with"
          title="Small businesses, professionals and families"
          intro={
            <p>
              Our clients range from owner-operated shops to busy executives. What they share is a preference for
              personal service over a big-firm experience. See the full list of{" "}
              <Link href="/services" className="link">
                bookkeeping and tax services
              </Link>{" "}
              we provide.
            </p>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="flex gap-5 rounded-[14px] border border-line bg-white p-6" {...reveal(i)}>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                <Icon aria-hidden className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-1.5 text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Office & community */}
      <Section tone="tint" labelledBy="office-heading">
        <SectionHeading
          id="office-heading"
          eyebrow="Office & community"
          title="Rooted in Orland Park, serving the southwest suburbs"
          intro={
            <p>
              Our office is at {business.address.street}, {business.address.suite} in Orland Park. We work with clients
              throughout the area, including Tinley Park, Palos Heights, Palos Hills, Frankfort, Crestwood, Worth and
              Orland Hills. <Link href="/service-areas" className="link">See all the communities we serve</Link>.
            </p>
          }
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8" data-reveal="">
            <MapEmbed />
            <div className="hidden overflow-hidden rounded-[14px] shadow-soft lg:block">
              <Img image="about-desk" sizes="(min-width: 1024px) 580px, 100vw" />
            </div>
          </div>
          <div data-reveal="">
            <ContactCard title="Visit or reach us" />
            <Link href="/contact" className="btn btn-primary mt-6 w-full">
              Book your free consultation
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
