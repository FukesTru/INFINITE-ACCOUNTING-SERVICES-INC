import Link from "next/link";
import { Clock, Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { addressLine1, addressLine2, business, cities, cityPath, hours, mapsDirectionsUrl, services } from "@/lib/site";

const quickLinks = [
  { href: "/about", label: "About Danielle" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/sitemap", label: "Sitemap" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 font-heading text-base font-semibold uppercase tracking-[0.14em] text-white">{children}</h2>;
}

const linkCls = "text-white/80 no-underline transition-colors hover:text-white hover:underline";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark bg-navy-deep text-white/80" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Link href="/" aria-label={`${business.name}, home`} className="inline-block">
            <Logo onDark />
          </Link>
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed">
            Bookkeeping and tax services for small businesses, professionals and families.
            <br />
            A local Orland Park firm serving the southwest suburbs since {business.foundingYear}.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-green"
            >
              <FacebookIcon className="h-5 w-5" />
              <span className="sr-only">Infinite Accounting on Facebook (opens in a new tab)</span>
            </a>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-green"
            >
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Infinite Accounting on Instagram (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <nav aria-label="Footer services" className="lg:col-span-2">
          <FooterHeading>Services</FooterHeading>
          <ul className="space-y-2.5 text-[0.95rem]">
            <li>
              <Link href="/services" className={linkCls}>
                All Services
              </Link>
            </li>
            {services.map((s) => (
              <li key={s.path}>
                <Link href={s.path} className={linkCls}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-2.5 text-[0.95rem]">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <nav aria-label="Footer service areas" className="lg:col-span-2">
          <FooterHeading>Service Areas</FooterHeading>
          <ul className="space-y-2.5 text-[0.95rem]">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={cityPath(c.slug)} className={linkCls}>
                  {c.name}, IL
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <FooterHeading>Contact</FooterHeading>
          <address className="space-y-3 text-[0.95rem] not-italic">
            <p className="font-semibold text-white">{business.legalName}</p>
            <p className="flex gap-3">
              <MapPin aria-hidden className="mt-1 h-4 w-4 shrink-0 text-green-tint" />
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                {addressLine1}
                <br />
                {addressLine2}
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
            </p>
            <p className="flex gap-3">
              <Phone aria-hidden className="mt-1 h-4 w-4 shrink-0 text-green-tint" />
              <span>
                <a href={business.phone.tel} className={`${linkCls} font-semibold text-white`}>
                  {business.phone.display}
                </a>
                <span className="block text-sm">
                  <MessageSquareText aria-hidden className="mr-1 inline h-3.5 w-3.5" />
                  <a href={business.phone.sms} className={linkCls}>
                    Text us at the same number
                  </a>
                </span>
              </span>
            </p>
            <p className="flex gap-3">
              <Mail aria-hidden className="mt-1 h-4 w-4 shrink-0 text-green-tint" />
              <a href={`mailto:${business.email}`} className={`${linkCls} break-all`}>
                {business.email}
              </a>
            </p>
          </address>
          <div className="mt-5 flex gap-3 text-[0.95rem]">
            <Clock aria-hidden className="mt-1 h-4 w-4 shrink-0 text-green-tint" />
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
              {hours.map((h) => (
                <div key={h.day} className="contents">
                  <dt className="font-medium text-white/90">{h.short}</dt>
                  <dd>{h.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>© {year} Infinite Accounting Services Inc. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="container-site pb-28 text-xs leading-relaxed text-white/60 md:pb-8">
          Information on this website is for general informational purposes only and is not legal or tax advice. Using
          this site or contacting us does not create an accountant-client relationship; that begins only once an
          engagement letter is signed. See our <Link href="/disclaimer" className="underline hover:text-white">disclaimer</Link>.
        </p>
      </div>
    </footer>
  );
}
