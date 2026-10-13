import { Plus } from "lucide-react";
import type { Faq as FaqItem } from "@/content/types";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";
import { RichText } from "./RichText";
import { Section, SectionHeading } from "./Section";

/**
 * Accessible FAQ accordion built on native <details>/<summary> (keyboard and
 * screen-reader friendly with no JavaScript) that also emits FAQPage JSON-LD.
 */
export function FaqList({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      <div className="divide-y divide-line overflow-hidden rounded-[14px] border border-line bg-white shadow-soft">
        {faqs.map((f, i) => (
          <details key={f.q} className="group" data-reveal="" style={{ "--reveal-i": i } as React.CSSProperties}>
            <summary className="flex items-start justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-mist md:px-7 md:py-6">
              <h3 className="font-heading text-lg font-semibold text-navy md:text-xl">{f.q}</h3>
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-tint text-green-dark transition-transform duration-200 group-open:rotate-45">
                <Plus aria-hidden className="h-5 w-5" />
              </span>
            </summary>
            <div className="px-5 pb-6 text-[1.02rem] text-ink/90 md:px-7">
              <p>
                <RichText text={f.a} />
              </p>
            </div>
          </details>
        ))}
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}

export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  intro,
  tone = "white",
}: {
  faqs: FaqItem[];
  title?: string;
  intro?: React.ReactNode;
  tone?: "white" | "mist" | "tint";
}) {
  return (
    <Section tone={tone} labelledBy="faq-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeading id="faq-heading" eyebrow="FAQ" title={title} intro={intro} className="lg:sticky lg:top-28 lg:self-start" />
        <FaqList faqs={faqs} />
      </div>
    </Section>
  );
}
