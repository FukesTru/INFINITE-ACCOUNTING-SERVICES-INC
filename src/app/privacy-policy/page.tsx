import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { CONSENT_TEXT } from "@/lib/consent";
import { pageMetadata } from "@/lib/seo";
import { business, fullAddress } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy | Infinite Accounting Services",
  description:
    "How Infinite Accounting Services Inc collects, uses and protects your personal and financial information, including contact form data, cookies and analytics.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      name="Privacy Policy"
      path="/privacy-policy"
      updated="October 13, 2026"
      intro="Your financial information is personal. This policy explains what we collect, how we use it and how we protect it."
    >
      <p>
        This Privacy Policy describes how {business.legalName} (&ldquo;Infinite Accounting,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us&rdquo;) collects, uses and protects information when you visit www.infiniteaccountingservices.com
        (the &ldquo;Site&rdquo;), contact us, or become a client. By using the Site, you agree to the practices described
        here.
      </p>

      <h2>Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>
          <strong>Contact form:</strong> your name, email address, phone number, the service you&apos;re interested in,
          your city and any message you choose to include, along with your consent to be contacted.
        </li>
        <li>
          <strong>Calls, texts and emails:</strong> your phone number or email address and the content of your
          communications with us.
        </li>
        <li>
          <strong>Client information:</strong> if you engage us, the financial, tax and identifying information needed
          to provide bookkeeping and tax services, such as income records, bank statements and tax documents.
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <p>
        When analytics are enabled, we use Google Analytics 4 to understand how visitors use the Site. It may collect
        information such as pages visited, time on page, referring website, approximate location (city or region),
        device and browser type. This information is used in aggregate and does not identify you by name.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your inquiry and schedule your free consultation.</li>
        <li>To provide, manage and bill for services you engage us for.</li>
        <li>To meet our legal, regulatory and professional obligations.</li>
        <li>To maintain, secure and improve the Site.</li>
      </ul>
      <p>We do not sell your personal information, and we do not use your financial information for marketing.</p>

      <h2>Phone and text message consent</h2>
      <p>When you submit our contact form, you check a box that reads:</p>
      <blockquote className="rounded-[10px] border-l-4 border-green bg-green-tint p-4 text-ink">
        &ldquo;{CONSENT_TEXT}&rdquo;
      </blockquote>
      <p>
        This means we may call, text or email you about your inquiry and any services you request. Message frequency
        depends on your inquiry, and message and data rates may apply. Consent is not a condition of purchasing any
        service. You can opt out of text messages at any time by replying STOP or by telling us, and you can ask us to
        stop calling or emailing you at any time. We do not share your mobile number or text-messaging consent with
        third parties for their marketing purposes.
      </p>

      <h2>How we protect sensitive tax and financial information</h2>
      <p>
        We understand that tax and financial records are among the most sensitive information you have. We use
        reasonable administrative, technical and physical safeguards designed to protect it, including limiting access
        to people who need it to serve you and keeping client records confidential. Tax return information is also
        subject to federal rules that limit how tax preparers may use and disclose it.
      </p>
      <p>
        Please <strong>do not</strong> send Social Security numbers, full account numbers or tax documents through the
        website contact form or ordinary email. Once we are working together, we will arrange an appropriate way to
        share those documents. No method of transmission or storage is completely secure, so we cannot guarantee
        absolute security.
      </p>

      <h2>Cookies and Google Analytics</h2>
      <p>
        The Site itself does not require cookies to function. When Google Analytics 4 is enabled, Google sets cookies
        to distinguish visitors and sessions. You can block or delete cookies in your browser settings, or install
        Google&apos;s{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Analytics opt-out browser add-on
        </a>
        . Our map uses an embedded Google Maps frame, which is governed by Google&apos;s own privacy policy.
      </p>

      <h2>Third parties</h2>
      <p>We share information only as needed to operate our business and serve you, for example with:</p>
      <ul>
        <li>Service providers that host the Site, deliver form submissions, or provide email and phone services.</li>
        <li>Software providers we use to perform bookkeeping and tax work, subject to confidentiality obligations.</li>
        <li>Government agencies such as the IRS and the Illinois Department of Revenue, when filing on your behalf or as required by law.</li>
        <li>Others when required by law, court order or to protect our rights, or with your consent.</li>
      </ul>

      <h2>Your choices</h2>
      <ul>
        <li>You can choose not to submit the contact form and reach us by phone instead.</li>
        <li>You can opt out of text messages, calls or emails at any time.</li>
        <li>You can ask us what personal information we hold about you and request corrections.</li>
        <li>You can ask us to delete information we are not required to keep for legal or professional reasons.</li>
      </ul>

      <h2>Data retention</h2>
      <p>
        We keep inquiry information for as long as needed to respond and follow up. Client records are kept for the
        periods required by law and professional standards, then disposed of securely.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        The Site is intended for adults and is not directed to children under 13. We do not knowingly collect personal
        information from children through the Site. If you believe a child has submitted information, contact us and
        we will delete it.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date above shows when it
        was last revised.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions or requests about your privacy? Contact {business.legalName}, {fullAddress}. Phone or text:{" "}
        <a href={business.phone.tel}>{business.phone.display}</a>. Email:{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>. See also our <Link href="/disclaimer">website disclaimer</Link>.
      </p>
    </LegalPage>
  );
}
