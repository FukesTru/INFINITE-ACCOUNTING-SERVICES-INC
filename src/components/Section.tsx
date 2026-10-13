type Tone = "white" | "mist" | "tint";

const tones: Record<Tone, string> = {
  white: "bg-white",
  mist: "bg-mist",
  tint: "bg-green-tint",
};

export function Section({
  children,
  tone = "white",
  id,
  className = "",
  labelledBy,
}: {
  children: React.ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-16 md:py-24 ${className}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  center = false,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} mb-10 max-w-3xl md:mb-14 ${className}`} data-reveal="">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className={`h-underline text-3xl font-bold md:text-[2.5rem] ${center ? "h-underline-center" : ""}`}>
        {title}
      </h2>
      {intro && <div className="mt-6 text-lg text-muted">{intro}</div>}
    </div>
  );
}
