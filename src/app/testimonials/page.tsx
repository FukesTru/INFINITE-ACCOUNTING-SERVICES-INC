import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { ReviewGrid } from "@/components/Reviews";
import { Section, SectionHeading } from "@/components/Section";
import { FacebookIcon } from "@/components/SocialIcons";
import { pageMetadata } from "@/lib/seo";
import { business } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Client Reviews | Infinite Accounting Services Orland Park",
  description:
    "See what clients say about Infinite Accounting Services in Orland Park. Honest, professional bookkeeping and tax help. Read reviews and book a consultation.",
  path: "/testimonials",
  image: "testimonials-hero",
});

/** Google Business Profile "write a review" link — set once the profile is verified. */
const GOOGLE_REVIEW_URL = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "";

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        image="testimonials-hero"
        breadcrumbs={[{ name: "Testimonials", path: "/testimonials" }]}
        title="Client Reviews & Testimonials"
        subtitle="Infinite Accounting Services reviews from the small business owners, professionals and families we work with."
      />

      <Section labelledBy="trust-heading">
        <div className="mx-auto max-w-3xl text-center" data-reveal="">
          <h2 id="trust-heading" className="h-underline h-underline-center text-3xl font-bold md:text-[2.5rem]">
            Trust is earned one client at a time
          </h2>
          <p className="mt-6 text-lg text-muted">
            Letting someone see your finances is a big step. That&apos;s why we focus on accuracy, discretion and clear
            communication with every client, and why we only share reviews that real clients have chosen to post
            publicly. Learn more <Link href="/about" className="link">about Danielle and our approach</Link>, or explore
            our <Link href="/services" className="link">bookkeeping and tax services</Link>.
          </p>
        </div>
      </Section>

      <Section tone="mist" labelledBy="reviews-heading">
        <SectionHeading id="reviews-heading" eyebrow="Reviews" title="What our clients say" center />
        <ReviewGrid />
      </Section>

      <Section labelledBy="leave-heading">
        <div
          className="on-dark grid gap-8 rounded-[14px] bg-gradient-to-br from-navy to-blue p-8 text-white shadow-lift md:grid-cols-[1fr_auto] md:items-center md:p-12"
          data-reveal=""
        >
          <div>
            <p className="flex gap-1 text-[#ffd666]" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-5 w-5" fill="currentColor" />
              ))}
            </p>
            <h2 id="leave-heading" className="mt-4 text-3xl font-bold text-white">
              Leave us a review
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              Are you a client? A few sentences about your experience helps other local business owners and families
              find an accountant they can trust. Thank you for taking the time.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {GOOGLE_REVIEW_URL ? (
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Review us on Google
                <ExternalLink aria-hidden className="h-4 w-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FacebookIcon className="h-5 w-5" />
                Share feedback on Facebook
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
            <Link href="/contact" className="btn btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
