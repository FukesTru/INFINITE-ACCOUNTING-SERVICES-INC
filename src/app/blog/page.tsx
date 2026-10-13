import Link from "next/link";
import { BlogGrid, type PostCard } from "@/components/BlogGrid";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { posts } from "@/content/blog";
import { formatDate } from "@/lib/format";
import { blogSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Accounting & Tax Tips Blog | Infinite Accounting Orland Park",
  description:
    "Practical bookkeeping and tax tips for Illinois small business owners and families, from the team at Infinite Accounting in Orland Park. Read our latest posts.",
  path: "/blog",
  image: "blog-hero",
});

const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

const cards: PostCard[] = sorted.map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  category: p.category,
  date: p.date,
  dateLabel: formatDate(p.date),
  image: p.image,
}));

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={blogSchema(sorted)} />
      <Hero
        image="blog-hero"
        breadcrumbs={[{ name: "Blog", path: "/blog" }]}
        title="Accounting, Bookkeeping & Tax Tips for Illinois Small Businesses"
        subtitle="Practical, plain-English small business accounting tips for Illinois owners, self-employed professionals and families."
        ctas={false}
      />
      <Section tone="mist" labelledBy="posts-heading">
        <div className="mb-8 max-w-3xl">
          <h2 id="posts-heading" className="sr-only">
            Latest articles
          </h2>
          <p className="text-lg text-muted">
            Short reads on keeping clean books, preparing for tax season and handling letters from the IRS. Have a
            question about your own situation? <Link href="/contact" className="link">Ask us during a free consultation</Link>{" "}
            or explore our <Link href="/services" className="link">bookkeeping and tax services</Link>.
          </p>
        </div>
        <BlogGrid posts={cards} />
      </Section>
      <CtaBand />
    </>
  );
}
