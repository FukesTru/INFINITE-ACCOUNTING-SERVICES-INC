import { CtaBand } from "./CtaBand";
import { Hero } from "./Hero";

/** Plain navy hero + readable prose column, used by the Disclaimer and Privacy Policy. */
export function LegalPage({
  title,
  path,
  name,
  updated,
  intro,
  children,
}: {
  title: string;
  path: string;
  name: string;
  updated: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero size="sm" ctas={false} breadcrumbs={[{ name, path }]} title={title} subtitle={intro} />
      <section className="bg-white py-14 md:py-20">
        <div className="container-site">
          <div className="prose-site mx-auto max-w-3xl text-[1.05rem] md:text-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">Last updated: {updated}</p>
            {children}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
