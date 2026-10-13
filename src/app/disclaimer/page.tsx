import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { business, fullAddress } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Disclaimer | Infinite Accounting Services",
  description:
    "Read the website disclaimer for Infinite Accounting Services Inc: informational content only, no accountant-client relationship created by using this website.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Website Disclaimer"
      name="Disclaimer"
      path="/disclaimer"
      updated="October 13, 2026"
      intro="Please read this disclaimer before relying on any information on this website."
    >
      <h2>Informational purposes only</h2>
      <p>
        The content on this website, including service descriptions, frequently asked questions and blog articles, is
        provided by {business.legalName} (&ldquo;Infinite Accounting,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) for
        general informational purposes only. It is not legal, tax, accounting or financial advice, and it should not be
        relied on as a substitute for advice about your specific situation. Tax and financial matters depend on
        individual facts, and the right answer for one person or business may be wrong for another.
      </p>

      <h2>No accountant-client relationship</h2>
      <p>
        Using this website, reading its content, submitting the contact form, or calling, texting or emailing us does
        not create an accountant-client relationship. A professional relationship begins only after we have agreed to
        work together and an engagement letter describing the scope of our services has been signed. Until then,
        please do not send confidential or time-sensitive information, and do not act or refrain from acting based on
        anything on this site.
      </p>

      <h2>No guarantee of results</h2>
      <p>
        Every client&apos;s circumstances are different. Nothing on this website is a promise or guarantee of any
        particular outcome, including the amount of any refund, tax savings, or the result of any matter with the
        Internal Revenue Service, the Illinois Department of Revenue or any other agency.
      </p>

      <h2>Third-party links</h2>
      <p>
        This website may link to third-party websites, such as government agencies, mapping services and social media
        platforms, for your convenience. We do not control those sites and are not responsible for their content,
        accuracy, privacy practices or availability. A link does not imply endorsement.
      </p>

      <h2>Accuracy and changes to tax law</h2>
      <p>
        We try to keep the information on this website accurate and current, but tax laws, regulations, forms, rates
        and deadlines change frequently, sometimes with little notice, and content may not reflect the most recent
        developments. For current figures and official guidance, consult the{" "}
        <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer">
          Internal Revenue Service
        </a>{" "}
        and the{" "}
        <a href="https://tax.illinois.gov/" target="_blank" rel="noopener noreferrer">
          Illinois Department of Revenue
        </a>
        , or speak with us about your situation. We may update or remove content at any time without notice.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {business.legalName} is not liable for any loss or damage arising from
        your use of, or reliance on, this website or its content.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this disclaimer? Contact {business.legalName}, {fullAddress}. Phone:{" "}
        <a href={business.phone.tel}>{business.phone.display}</a>. Email:{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>. You can also review our{" "}
        <Link href="/privacy-policy">privacy policy</Link> or <Link href="/contact">send us a message</Link>.
      </p>
    </LegalPage>
  );
}
