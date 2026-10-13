import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock, Lightbulb, ListChecks, PenLine, Phone } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { RichText } from "@/components/RichText";
import { Section } from "@/components/Section";
import { getPost, posts } from "@/content/blog";
import type { BlogBlock } from "@/content/types";
import { formatDate, readingMinutes } from "@/lib/format";
import { blogPostingSchema, plainText } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { business, ctaLabel } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
  });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside className="flex gap-4 rounded-[14px] border-l-4 border-green bg-green-tint p-5 text-ink">
          <Lightbulb aria-hidden className="mt-1 h-5 w-5 shrink-0 text-green-dark" />
          <p className="m-0">
            <RichText text={block.text} />
          </p>
        </aside>
      );
  }
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const text = post.body
    .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : ""))
    .map(plainText)
    .join(" ");
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <Hero
        image={post.image}
        size="md"
        ctas={false}
        breadcrumbs={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
        title={post.title}
      >
        <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.95rem] text-white/90">
          <li>
            <span className="rounded-full bg-green px-3 py-1 text-sm font-semibold text-white">{post.category}</span>
          </li>
          <li className="flex items-center gap-2">
            <CalendarDays aria-hidden className="h-4 w-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </li>
          <li className="flex items-center gap-2">
            <PenLine aria-hidden className="h-4 w-4" />
            By Infinite Accounting
          </li>
          <li className="flex items-center gap-2">
            <Clock aria-hidden className="h-4 w-4" />
            {readingMinutes(text)} min read
          </li>
        </ul>
      </Hero>

      <Section>
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="prose-site min-w-0 text-[1.08rem] md:text-lg">
            <p className="text-xl leading-relaxed text-muted">{post.excerpt}</p>
            {post.body.map((b, i) => (
              <Block key={i} block={b} />
            ))}

            <div className="mt-12! rounded-[14px] bg-navy p-8 text-white on-dark">
              <h2 className="mt-0! text-2xl text-white md:text-3xl">Questions about your situation? Get a free consultation.</h2>
              <p className="mt-3 text-white/85">
                Every business and household is different. Talk it through with us at no cost and no obligation.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn btn-primary">
                  {ctaLabel}
                </Link>
                <a href={business.phone.tel} className="btn btn-secondary">
                  <Phone aria-hidden className="h-4 w-4" />
                  {business.phone.display}
                </a>
              </div>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[14px] border border-line bg-mist p-6">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <ListChecks aria-hidden className="h-5 w-5 text-green" />
                Key takeaways
              </h2>
              <ul className="mt-4 space-y-3 text-[1rem]">
                {post.takeaways.map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[14px] border border-line p-6">
              <h2 className="text-lg font-semibold">Our services</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/services/bookkeeping" className="link">
                    Bookkeeping services
                  </Link>
                </li>
                <li>
                  <Link href="/services/tax-services" className="link">
                    Tax preparation & tax services
                  </Link>
                </li>
                <li>
                  <Link href="/service-areas" className="link">
                    Areas we serve
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="mist" labelledBy="related-heading">
        <h2 id="related-heading" className="h-underline text-3xl font-bold">
          More from the blog
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden no-underline">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Img image={p.image} alt="" fill sizes="(min-width: 768px) 380px, 100vw" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue">{p.category}</p>
                  <h3 className="mt-2 flex-1 text-lg font-semibold leading-snug text-navy group-hover:text-blue">{p.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                    Read article <ArrowRight aria-hidden className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
