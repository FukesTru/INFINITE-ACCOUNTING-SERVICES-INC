import Link from "next/link";
import { ArrowRight, Building2, Check, ClipboardList, FileWarning, History, Lightbulb, UserRound } from "lucide-react";
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

const description =
  "Tax preparation in Orland Park, IL for individuals and small businesses. Accurate returns, tax consulting and IRS notice help. Book your free consultation.";

export const metadata = pageMetadata({
  title: "Tax Preparation Orland Park IL | Infinite Accounting",
  description,
  path: "/services/tax-services",
  image: "tax-hero",
});

const handles = [
  {
    icon: UserRound,
    title: "Individual tax returns",
    text: "Personal returns for employees, retirees, families and anyone with more than one source of income, prepared carefully and reviewed with you.",
  },
  {
    icon: Building2,
    title: "Business tax returns",
    text: "Returns for sole proprietors, LLCs, partnerships and S-corporations, built from organized books so the numbers hold up.",
  },
  {
    icon: Lightbulb,
    title: "Tax consulting & planning",
    text: "Year-round guidance for owners and independent professionals: estimated payments, recordkeeping and legitimate ways to plan ahead.",
  },
  {
    icon: FileWarning,
    title: "IRS & Illinois notices",
    text: "Help understanding letters from the IRS or the Illinois Department of Revenue, gathering documents and preparing a response.",
  },
  {
    icon: History,
    title: "Back-year & late filings",
    text: "Missed a year, or a few? We help you gather what's needed and get unfiled returns prepared and submitted.",
  },
];

const checklist = {
  individuals: [
    "Last year's federal and Illinois tax returns",
    "Photo ID, plus Social Security numbers and birth dates for everyone on the return",
    "W-2s from every employer",
    "1099 forms (interest, dividends, retirement distributions, freelance or gig income)",
    "Mortgage interest statements and property tax bills",
    "Child or dependent care costs and provider information",
    "Education forms, such as tuition statements and student loan interest",
    "Health coverage forms and records of charitable donations",
    "Any estimated tax payments you made during the year",
    "Letters from the IRS or the Illinois Department of Revenue",
  ],
  business: [
    "Last year's business and personal returns",
    "Profit & loss and balance sheet, or bank and credit card statements for the year",
    "1099s you received and records of 1099s you issued",
    "Payroll reports, if you have employees",
    "Receipts or records for equipment, vehicle and other asset purchases",
    "Vehicle mileage log and home office details, if they apply",
    "Business loan statements",
    "Estimated tax payments made for the business or owners",
    "Entity documents such as your EIN letter, and K-1s from partnerships or S-corps",
    "Sales tax filings, if your business collects sales tax",
  ],
};

const faqs: Faq[] = [
  {
    q: "What documents do I need for my tax appointment?",
    a: "Start with last year's return, every income form you received (W-2s and 1099s), and records of deductible expenses. Business owners should add their profit & loss and balance sheet or bank statements for the year. Our checklist above covers the essentials, and we'll tell you if anything else is needed for your situation.",
  },
  {
    q: "Can you prepare both my personal and business returns?",
    a: "Yes, and many owners prefer it. Business income often flows onto your personal return, so having one firm prepare both helps keep everything consistent. If we also keep your books, your business return starts from reconciled numbers, which makes the whole process smoother.",
  },
  {
    q: "I received a letter from the IRS. Can you help?",
    a: "Yes. Don't ignore it, and don't panic. Many notices simply ask for information or point out a mismatch. Bring or send us the letter and we'll help you understand what it says, compare it to your return, gather documents and prepare a response before the deadline printed on the notice. Our article on [what to do first after an IRS notice](/blog/irs-notice-what-to-do-first) has more.",
  },
  {
    q: "Can you file back taxes for years I missed?",
    a: "Yes. We help clients prepare and file returns for past years they didn't file. We'll work out which years are needed, gather the income records and documents for each one, and prepare the returns. Getting caught up is usually better sooner than later.",
  },
  {
    q: "How do I pay for your services?",
    a: "Fees depend on what your situation involves, so we discuss them openly during your free consultation before any work begins. You'll know what to expect up front. Payment details are covered at the same time.",
  },
  {
    q: "Can I work with you remotely?",
    a: "Yes. Many clients meet with us at our Orland Park office, and we also work with clients remotely by phone, text and email. During your free consultation we'll agree on the simplest way for you to share documents and review your return.",
  },
];

export default function TaxServicesPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Tax Preparation & Tax Services in Orland Park, IL",
          serviceType: ["Tax preparation", "Tax consulting", "Tax notice assistance"],
          description,
          path: "/services/tax-services",
        })}
      />
      <Hero
        image="tax-hero"
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: "Tax Services", path: "/services/tax-services" },
        ]}
        title="Tax Preparation & Tax Services in Orland Park, IL"
        subtitle="Accurate individual and business returns, year-round tax guidance and help with IRS or Illinois notices, explained clearly."
      />
      <TrustStrip />

      <Section labelledBy="intro-heading">
        <div className="mx-auto max-w-3xl" data-reveal="">
          <p className="eyebrow">Tax preparation, done right</p>
          <h2 id="intro-heading" className="h-underline text-3xl font-bold md:text-[2.5rem]">
            Tax preparation in Orland Park you can understand
          </h2>
          <div className="prose-site mt-6 text-lg">
            <p>
              Infinite Accounting provides tax preparation in Orland Park, IL for individuals, families and small
              businesses. Our goal is straightforward: returns that are accurate, filed on time and explained clearly,
              so you know what was reported and why.
            </p>
            <p>
              We take the time to understand your situation before we prepare anything. That might mean reviewing a
              side business, a change in your family, a new rental property or a business that grew faster than its
              recordkeeping. Careful preparation up front is how you avoid surprises later.
            </p>
            <p>
              We also look for legitimate planning opportunities. Tax planning isn&apos;t about gimmicks, it&apos;s about
              understanding the rules that apply to you, keeping good records and making informed choices during the
              year instead of only at filing time.
            </p>
            <p>
              If a letter from the IRS or the Illinois Department of Revenue has you worried, or you&apos;ve fallen
              behind on filing, we can help with that too. Every engagement begins with a free consultation.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="mist" labelledBy="handle-heading">
        <SectionHeading id="handle-heading" eyebrow="What we handle" title="Tax services for individuals and businesses" center />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {handles.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className={`card card-hover p-6 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`} {...reveal(i % 3)}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-tint text-green-dark">
                <Icon aria-hidden className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-[1rem] text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Checklist */}
      <Section labelledBy="checklist-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-14">
          <div>
            <SectionHeading
              id="checklist-heading"
              eyebrow="Tax-season checklist"
              title="What to bring"
              intro={<p>Gather what applies to you. Missing something? Bring what you have and we&apos;ll help fill in the gaps.</p>}
            />
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: "Individuals & families", items: checklist.individuals },
                { title: "Business owners", items: checklist.business },
              ].map((col, i) => (
                <div key={col.title} className="card p-6" {...reveal(i)}>
                  <h3 className="flex items-center gap-3 text-xl font-semibold">
                    <ClipboardList aria-hidden className="h-6 w-6 text-green" />
                    {col.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[1rem]">
                        <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-green" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-muted" data-reveal="">
              Business owners: our guide to{" "}
              <Link href="/blog/records-needed-to-prepare-business-taxes" className="link">
                the records you need to prepare your business taxes
              </Link>{" "}
              goes into more detail.
            </p>
          </div>
          <div className="hidden overflow-hidden rounded-[14px] shadow-lift lg:mt-28 lg:block lg:self-start" data-reveal="">
            <Img image="tax-docs" sizes="(min-width: 1024px) 380px, 100vw" />
          </div>
        </div>
      </Section>

      <Section tone="tint" labelledBy="process-heading">
        <SectionHeading id="process-heading" eyebrow="Our process" title="How tax preparation works with us" />
        <Steps
          onTint
          steps={[
            { title: "Free consultation", text: "We learn about your income, your business and any open questions or letters." },
            { title: "Gather documents", text: "You get a clear list of what we need, and we help you track down anything missing." },
            { title: "Preparation & review with you", text: "We prepare your return, then walk you through it before anything is filed." },
            { title: "Filing & follow-up", text: "We file, confirm acceptance and stay available for questions all year." },
          ]}
        />
      </Section>

      {/* Bookkeeping + tax */}
      <Section labelledBy="together-heading">
        <div className="card grid overflow-hidden lg:grid-cols-2" data-reveal="">
          <div className="p-8 md:p-12">
            <p className="eyebrow">For business owners</p>
            <h2 id="together-heading" className="h-underline text-3xl font-bold md:text-[2.4rem]">
              Bookkeeping and tax, together
            </h2>
            <p className="mt-6 text-lg">
              When the same firm keeps your books and prepares your return, nothing gets lost in translation. Your
              business return is built on reconciled numbers, questions get answered faster and planning happens during
              the year, not just in April.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services/bookkeeping" className="btn btn-primary">
                See bookkeeping services
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn btn-outline">
                All services
              </Link>
            </div>
            <p className="mt-6 text-muted">
              Local to the area? Learn how we work with{" "}
              <Link href="/service-areas/orland-park" className="link">
                clients in Orland Park
              </Link>
              .
            </p>
          </div>
          <div className="relative min-h-72 lg:order-first">
            <Img image="tax-owner" fill sizes="(min-width: 1024px) 600px, 100vw" />
          </div>
        </div>
      </Section>

      <FaqSection tone="mist" faqs={faqs} title="Tax preparation questions" />
      <CtaBand />
    </>
  );
}
