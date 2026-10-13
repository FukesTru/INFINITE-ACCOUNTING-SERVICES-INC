import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Infinite Accounting Services" },
  description: "The page you're looking for isn't here. Find bookkeeping and tax services, service areas and contact details for Infinite Accounting in Orland Park.",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/", label: "Home" },
  { href: "/services/bookkeeping", label: "Bookkeeping Services" },
  { href: "/services/tax-services", label: "Tax Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <>
      <Hero
        size="md"
        ctas={false}
        eyebrow="Error 404"
        title="Sorry, we couldn't find that page"
        subtitle={
          <>
            The page may have moved, or the link may be mistyped. Try one of the pages below, or call{" "}
            <a href={business.phone.tel} className="font-semibold text-white underline decoration-green decoration-2">
              {business.phone.display}
            </a>
            .
          </>
        }
      >
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex items-center justify-between rounded-[10px] border border-white/25 bg-white/10 px-5 py-3.5 font-semibold text-white no-underline backdrop-blur-sm transition-colors hover:bg-white hover:text-navy"
              >
                {l.label}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </Hero>
    </>
  );
}
