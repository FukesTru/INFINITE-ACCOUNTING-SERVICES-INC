import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

/** Home › Section › Page, with BreadcrumbList JSON-LD. Pass crumbs *after* Home. */
export function Breadcrumbs({ items, onDark = true }: { items: Crumb[]; onDark?: boolean }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-5">
        <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${onDark ? "text-white/80" : "text-muted"}`}>
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={onDark ? "font-medium text-white" : "font-medium text-navy"}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className={`no-underline hover:underline ${onDark ? "text-white/80 hover:text-white" : ""}`}>
                      {c.name}
                    </Link>
                    <ChevronRight aria-hidden className="h-3.5 w-3.5 opacity-70" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
