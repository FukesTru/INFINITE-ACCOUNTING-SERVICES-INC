import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { allRoutes, type RouteGroup } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Site Map | Infinite Accounting Services",
  description:
    "Browse every page on the Infinite Accounting Services website: services, service areas, about, testimonials, blog and contact, all in one place. Find it fast.",
  path: "/sitemap",
});

const GROUPS: RouteGroup[] = ["Main", "Services", "Service Areas", "Resources", "Legal"];

export default function HtmlSitemapPage() {
  return (
    <>
      <Hero size="sm" ctas={false} breadcrumbs={[{ name: "Site Map", path: "/sitemap" }]} title="Site Map" subtitle="Every page on our website, in one place." />
      <section className="bg-white py-14 md:py-20">
        <div className="container-site grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <nav key={group} aria-labelledby={`sm-${group}`} className="rounded-[14px] border border-line p-6">
              <h2 id={`sm-${group}`} className="h-underline text-2xl font-bold">
                {group}
              </h2>
              <ul className="mt-6 space-y-2.5">
                {allRoutes
                  .filter((r) => r.group === group)
                  .map((r) => (
                    <li key={r.path}>
                      <Link href={r.path} className="link">
                        {r.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
