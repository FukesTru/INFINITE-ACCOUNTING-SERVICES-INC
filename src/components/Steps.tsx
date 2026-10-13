import { reveal } from "@/lib/reveal";

export type Step = { title: string; text: React.ReactNode };

/** Numbered timeline. Horizontal on large screens, vertical on mobile. */
export function Steps({ steps, onTint = false }: { steps: Step[]; onTint?: boolean }) {
  const cols = steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <ol className={`relative grid gap-6 ${cols} lg:gap-8`}>
      <span
        aria-hidden
        className="absolute bottom-6 left-6 top-6 w-0.5 bg-gradient-to-b from-green to-blue lg:bottom-auto lg:left-6 lg:right-6 lg:top-6 lg:h-0.5 lg:w-auto lg:bg-gradient-to-r"
      />
      {steps.map((s, i) => (
        <li key={s.title} className="relative pl-16 lg:pl-0 lg:pt-16" {...reveal(i)}>
          <span
            aria-hidden
            className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-4 font-heading text-lg font-bold text-white shadow-soft ${onTint ? "border-green-tint" : "border-white"} bg-green`}
          >
            {i + 1}
          </span>
          <h3 className="text-xl font-semibold">
            <span className="sr-only">Step {i + 1}: </span>
            {s.title}
          </h3>
          <p className="mt-2 text-muted">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
