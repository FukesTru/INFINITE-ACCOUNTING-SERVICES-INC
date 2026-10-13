import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  FileText,
  Hammer,
  HandCoins,
  HeartHandshake,
  History,
  Landmark,
  Receipt,
  RefreshCcw,
  Rocket,
  Store,
  Briefcase,
  Users,
  Wallet,
} from "lucide-react";
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
import { business } from "@/lib/site";

const description =
  "Reliable bookkeeping in Orland Park, IL: monthly books, reconciliations, QuickBooks setup, catch-up work and cash flow reporting. Get a free consultation today.";

export const metadata = pageMetadata({
  title: "Bookkeeping Services Orland Park IL | Infinite Accounting",
  description,
  path: "/services/bookkeeping",
  image: "bookkeeping-hero",
});

const handles = [
  { icon: BookOpenCheck, title: "Monthly bookkeeping", text: "Transactions recorded and categorized every month, so your books are always current." },
  { icon: Landmark, title: "Bank & credit card reconciliation", text: "Every account matched to its statement, so the balances in your books are balances you can trust." },
  { icon: RefreshCcw, title: "QuickBooks setup & clean-up", text: "A clean chart of accounts, fixed miscategorizations and training if you want to handle some entry yourself." },
  { icon: History, title: "Catch-up bookkeeping", text: "Months or years of backlogged transactions sorted, reconciled and brought up to date." },
  { icon: HandCoins, title: "Accounts receivable", text: "Invoices tracked and aging reviewed, so you know who owes you and when to follow up." },
  { icon: Receipt, title: "Accounts payable", text: "Bills organized and scheduled, so vendors are paid on time and nothing slips through." },
  { icon: Wallet, title: "Cash flow management", text: "A clear view of money coming in and going out, with reporting that helps you plan ahead." },
  { icon: FileText, title: "Financial statements", text: "Profit & loss and balance sheet reports for you, your lender and tax time." },
  { icon: Users, title: "Payroll support", text: "Help keeping payroll records organized and reflected accurately in your books." },
];

const audiences = [
  { icon: Rocket, title: "Startups & new LLCs", text: "Set up your books correctly from day one instead of untangling them later." },
  { icon: Hammer, title: "Contractors & trades", text: "Track job income, materials and subcontractor payments without losing evenings to paperwork." },
  { icon: Store, title: "Retail & service shops", text: "Keep daily sales, card deposits and vendor bills reconciled month after month." },
  { icon: Briefcase, title: "Professionals & consultants", text: "Clean records of client payments and business expenses, ready for tax time." },
  { icon: HeartHandshake, title: "Small community organizations", text: "Organized, transparent records that are easy to share with a board or committee." },
];

const faqs: Faq[] = [
  {
    q: "What's the difference between bookkeeping and accounting?",
    a: "Bookkeeping is the day-to-day recording, categorizing and reconciling of your transactions. Accounting builds on those records to produce reports, analyze results and prepare tax returns. Good bookkeeping is the foundation: when it's accurate, everything that depends on it, from financial statements to your [tax return](/services/tax-services), is more reliable.",
  },
  {
    q: "How often will you update my books?",
    a: "Most ongoing clients choose monthly bookkeeping, which means your transactions are recorded and your accounts reconciled each month, followed by reports you can review. Businesses with lighter activity sometimes prefer a quarterly schedule. We'll recommend a rhythm that matches your volume during your free consultation.",
  },
  {
    q: "Do you work in QuickBooks, or can I keep my current software?",
    a: "We work in QuickBooks and can set up a new file or clean up an existing one. If you use different software, let us know what you have. We'll talk through whether it makes sense to keep it or move, based on what keeps your records accurate and easiest for you.",
  },
  {
    q: "Can you catch up multiple years of bookkeeping?",
    a: "Yes. We regularly help owners who are several months or even years behind. We work through bank and card statements period by period, reconcile each account and bring your books current. If unfiled tax returns are involved, we can coordinate the catch-up with our tax services.",
  },
  {
    q: "Is my financial information kept confidential?",
    a: "Yes. Discretion is central to how we work. Your records are used only to provide the services you've engaged us for, and we're happy to discuss how documents are shared and stored when you get started. Please never send Social Security or full account numbers through our website form.",
  },
  {
    q: "How do I get started?",
    a: "Call or text (708) 232-3003, or [request a free consultation](/contact). We'll talk about your business, look at where your books stand and recommend the right next step, whether that's a one-time clean-up, ongoing monthly bookkeeping or both.",
  },
];

export default function BookkeepingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Bookkeeping Services in Orland Park, IL",
          serviceType: "Bookkeeping",
          description,
          path: "/services/bookkeeping",
        })}
      />
      <Hero
        image="bookkeeping-hero"
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: "Bookkeeping", path: "/services/bookkeeping" },
        ]}
        title="Bookkeeping Services in Orland Park, IL"
        subtitle="Monthly books, reconciliations, QuickBooks help and catch-up work for small businesses that want clear, current numbers."
      />
      <TrustStrip />

      {/* Intro */}
      <Section labelledBy="intro-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div data-reveal="">
            <p className="eyebrow">Why it matters</p>
            <h2 id="intro-heading" className="h-underline text-3xl font-bold md:text-[2.5rem]">
              Bookkeeping services that give you real answers
            </h2>
            <div className="prose-site mt-6 text-lg">
              <p>
                Infinite Accounting provides bookkeeping services in Orland Park, IL for small business owners who want
                to stop guessing about their numbers. When your books are accurate and current, you can see which months
                are strong, where costs are creeping up and how much cash you really have to work with.
              </p>
              <p>
                Accurate books also make tax season calmer. Instead of scrambling to rebuild a year of transactions in
                March, your income and expenses are already organized and reconciled, which means a smoother, more
                reliable return and fewer last-minute questions.
              </p>
              <p>
                And when you need financing, a lease or a line of credit, lenders want to see clean financial
                statements. Up-to-date records show that your business is organized and make those conversations much
                easier.
              </p>
              <p>
                We handle the recording, reconciling and reporting each month, then walk you through what the numbers
                mean in plain English. Whether you need ongoing support or a one-time clean-up, it starts with a free
                consultation.
              </p>
            </div>
          </div>
          <aside className="self-start rounded-[14px] bg-navy p-8 text-white shadow-lift on-dark" data-reveal="">
            <h3 className="text-2xl font-bold text-white">With clean books, you can:</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Make decisions based on real numbers",
                "Walk into tax season prepared",
                "Hand lenders statements they can rely on",
                "Spot problems early, before they grow",
                "Spend evenings on your business, not paperwork",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-[#5fd08f]" />
                  <span className="text-white/90">{t}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary mt-8 w-full">
              Get Your Free Consultation
            </Link>
          </aside>
        </div>
      </Section>

      {/* What we handle */}
      <Section tone="mist" labelledBy="handle-heading">
        <SectionHeading
          id="handle-heading"
          eyebrow="What we handle"
          title="Complete bookkeeping support"
          intro={<p>Choose ongoing monthly bookkeeping or a focused project. Here&apos;s what we take off your plate.</p>}
          center
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {handles.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="card card-hover p-6" {...reveal(i % 3)}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-tint text-green-dark">
                <Icon aria-hidden className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-[1rem] text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who it's for */}
      <Section labelledBy="who-heading">
        <SectionHeading
          id="who-heading"
          eyebrow="Who it's for"
          title="Bookkeeping for the businesses that keep our community running"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="flex gap-4 rounded-[14px] border border-line p-6" {...reveal(i % 3)}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-[1rem] text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section tone="tint" labelledBy="process-heading">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div>
            <SectionHeading id="process-heading" eyebrow="Our process" title="How our bookkeeping works" />
            <ol className="space-y-8">
              {[
                { t: "Free consultation", d: "We talk about your business, your goals and what's frustrating you about your books today." },
                { t: "Review your accounts and software", d: "We look at your bank and card accounts, current records and software to understand where things stand." },
                { t: "Set up or clean up", d: "We build a clean starting point: a new QuickBooks file, a corrected one or caught-up records." },
                { t: "Ongoing monthly support & reporting", d: "Each month we record, reconcile and report, then answer your questions in plain English." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-5" {...reveal(i)}>
                  <span aria-hidden className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green font-heading text-lg font-bold text-white shadow-soft">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">
                      <span className="sr-only">Step {i + 1}: </span>
                      {s.t}
                    </h3>
                    <p className="mt-1.5 text-muted">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="overflow-hidden rounded-[14px] shadow-lift" data-reveal="">
            <Img image="bookkeeping-process" sizes="(min-width: 1024px) 480px, 100vw" />
          </div>
        </div>
      </Section>

      {/* Behind on your books */}
      <Section labelledBy="behind-heading">
        <div className="card grid overflow-hidden lg:grid-cols-2" data-reveal="">
          <div className="relative min-h-72">
            <Img image="bookkeeping-owner" fill sizes="(min-width: 1024px) 600px, 100vw" />
          </div>
          <div className="p-8 md:p-12">
            <p className="eyebrow">Catch-up bookkeeping</p>
            <h2 id="behind-heading" className="h-underline text-3xl font-bold md:text-[2.4rem]">
              Behind on your books?
            </h2>
            <p className="mt-6 text-lg">
              You&apos;re not the first, and it&apos;s fixable. We turn shoeboxes of receipts and months of unreconciled
              transactions into clean, current records, without judgment.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "We gather statements and sort transactions period by period",
                "Every account is reconciled and brought up to date",
                "You get clear reports and a plan to stay current",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-green" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted">
              Wondering whether to keep doing it yourself? Read{" "}
              <Link href="/blog/bookkeeper-vs-diy-quickbooks" className="link">
                Bookkeeper or DIY QuickBooks: How to Decide
              </Link>
              .
            </p>
            <a href={business.phone.tel} className="btn btn-primary mt-8">
              Call {business.phone.display}
            </a>
          </div>
        </div>
      </Section>

      <FaqSection tone="mist" faqs={faqs} title="Bookkeeping questions, answered" />

      {/* Related */}
      <Section labelledBy="related-heading">
        <div className="grid gap-8 rounded-[14px] border border-line bg-gradient-to-br from-white to-green-tint p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12" data-reveal="">
          <div>
            <p className="eyebrow">Related service</p>
            <h2 id="related-heading" className="text-3xl font-bold">
              Clean books make tax time easier
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Because we keep your books, your business return starts from reconciled numbers. Learn about our{" "}
              <Link href="/services/tax-services" className="link">
                tax preparation services
              </Link>
              , browse <Link href="/services" className="link">all accounting services</Link>, or see how we help{" "}
              <Link href="/service-areas/orland-park" className="link">
                Orland Park businesses
              </Link>{" "}
              and{" "}
              <Link href="/service-areas" className="link">
                nearby communities
              </Link>
              .
            </p>
          </div>
          <Link href="/services/tax-services" className="btn btn-outline">
            Tax Services
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
