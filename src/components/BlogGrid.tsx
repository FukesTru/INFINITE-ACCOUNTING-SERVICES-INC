"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { BlogCategory, ImageKey } from "@/content/types";
import { Img } from "./Img";

export type PostCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  dateLabel: string;
  image: ImageKey;
};

const CATEGORIES: BlogCategory[] = ["Bookkeeping", "Tax", "Small Business", "IRS & Notices"];
const PAGE_SIZE = 9;

/** Post grid with category filter chips and pagination (all client-side; every post is also in the sitemaps). */
export function BlogGrid({ posts }: { posts: PostCard[] }) {
  const [category, setCategory] = useState<BlogCategory | "All">("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => (category === "All" ? posts : posts.filter((p) => p.category === category)), [posts, category]);
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const choose = (c: BlogCategory | "All") => {
    setCategory(c);
    setPage(1);
  };

  return (
    <>
      <div role="group" aria-label="Filter posts by category" className="mb-10 flex flex-wrap gap-2.5">
        {(["All", ...CATEGORIES] as const).map((c) => {
          const active = c === category;
          const count = c === "All" ? posts.length : posts.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active}
              onClick={() => choose(c)}
              className={`min-h-11 rounded-full border px-5 py-2 text-[0.95rem] font-semibold transition-colors ${
                active ? "border-navy bg-navy text-white" : "border-line bg-white text-navy hover:border-navy"
              }`}
            >
              {c} <span className={active ? "text-white/70" : "text-muted"}>({count})</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {filtered.length} {filtered.length === 1 ? "post" : "posts"}
        {category === "All" ? "" : ` in ${category}`}.
      </p>

      {visible.length === 0 ? (
        <p className="rounded-[14px] bg-white p-8 text-center text-muted">No posts in this category yet. Check back soon.</p>
      ) : (
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <li key={p.slug}>
              <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Img
                    image={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue shadow-soft">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-2 text-sm text-muted">
                    <CalendarDays aria-hidden className="h-4 w-4" />
                    <time dateTime={p.date}>{p.dateLabel}</time>
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug md:text-[1.4rem]">
                    <Link href={`/blog/${p.slug}`} className="no-underline after:absolute after:inset-0 hover:text-blue">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-[1rem] text-muted">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-blue transition-all group-hover:gap-2.5" aria-hidden>
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}

      {pages > 1 && (
        <nav aria-label="Blog pagination" className="mt-12 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage((n) => Math.max(1, n - 1))}
            disabled={page === 1}
            className="btn btn-outline min-h-11 px-4 disabled:opacity-40"
          >
            Previous
          </button>
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              aria-current={n === page ? "page" : undefined}
              className={`h-11 w-11 rounded-full font-semibold ${n === page ? "bg-navy text-white" : "bg-white text-navy hover:bg-mist"}`}
            >
              <span className="sr-only">Page </span>
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((n) => Math.min(pages, n + 1))}
            disabled={page === pages}
            className="btn btn-outline min-h-11 px-4 disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      )}
    </>
  );
}
