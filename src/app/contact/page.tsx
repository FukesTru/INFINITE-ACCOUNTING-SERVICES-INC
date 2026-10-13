import Link from "next/link";
import { ContactCard } from "@/components/ContactCard";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { MapEmbed } from "@/components/MapEmbed";
import { Section, SectionHeading } from "@/components/Section";
import { Steps } from "@/components/Steps";
import type { Faq } from "@/content/types";
import { contactPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { business } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Infinite Accounting | Free Consultation Orland Park",
  description:
    "Call (708) 232-3003 or send a message to Infinite Accounting in Orland Park, IL. Book a free bookkeeping or tax consultation. Hours Mon–Fri by schedule.",
  path: "/contact",
  image: "contact-hero",
});

const faqs: Faq[] = [
  {
    q: "How quickly will you get back to me?",
    a: "We reply to calls, texts, emails and form messages as promptly as we can during business hours: Monday, Tuesday, Thursday and Friday from 8 am to 3 pm, with Wednesdays by appointment. If something is time-sensitive, such as a notice with a deadline, call or text (708) 232-3003 and say so.",
  },
  {
    q: "What should I prepare before my free consultation?",
    a: "Nothing elaborate. It helps to have last year's tax return, any recent tax forms or letters, and a rough idea of how your books are kept today. If you're not sure what you need, just reach out. We'll tell you what to bring, and if your records are disorganized, that's okay.",
  },
  {
    q: "Can we meet remotely instead of at the office?",
    a: "Yes. You're welcome at our Orland Park office, and we also work with clients remotely by phone, text and email. Let us know your preference when you get in touch and we'll set up your consultation the way that suits you.",
  },
  {
    q: "Is the information I send kept confidential?",
    a: "Yes. Discretion is central to how we work, and anything you share is used only to respond to your inquiry and provide services you engage us for. Please don't include Social Security numbers, account numbers or tax documents in the website form; we'll arrange a better way to share those. See our [privacy policy](/privacy-policy) for details.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <Hero
        image="contact-hero"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
        title="Contact Infinite Accounting — Get Your Free Consultation"
        subtitle={
          <>
            Book a free accounting consultation in Orland Park. Call or text{" "}
            <a href={business.phone.tel} className="font-semibold text-white underline decoration-green decoration-2">
              {business.phone.display}
            </a>
            , or send us a message below.
          </>
        }
        ctas={false}
      />

      <Section tone="mist" labelledBy="form-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
          <div data-reveal="">
            <h2 id="form-heading" className="h-underline mb-8 text-3xl font-bold md:text-[2.4rem]">
              Send us a message
            </h2>
            <LeadForm />
          </div>
          <div className="lg:pt-[5.5rem]" data-reveal="">
            <ContactCard title="Call, text or visit" />
          </div>
        </div>
      </Section>

      <section aria-label="Office location map" className="bg-white py-16 md:py-20">
        <div className="container-site" data-reveal="">
          <MapEmbed height="h-[380px] md:h-[480px]" />
        </div>
      </section>

      <Section tone="tint" labelledBy="next-heading">
        <SectionHeading id="next-heading" eyebrow="What happens next" title="What happens after you reach out" />
        <Steps
          onTint
          steps={[
            { title: "We reply", text: "We get back to you to learn a little more and set a time that works for you." },
            {
              title: "Free consultation",
              text: "We talk through your books, taxes or the letter you received, and answer your questions plainly.",
            },
            {
              title: "Tailored plan",
              text: (
                <>
                  You get a clear recommendation for{" "}
                  <Link href="/services" className="link">
                    the services that fit
                  </Link>
                  , with no pressure to commit.
                </>
              ),
            },
          ]}
        />
      </Section>

      <FaqSection faqs={faqs} title="Before you get in touch" />
      <CtaBand />
    </>
  );
}
