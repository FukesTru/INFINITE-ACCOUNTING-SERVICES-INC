import { owner } from "@/content/owner";
import { InfinityMark } from "./Logo";

/**
 * Shows the client's real portrait of Danielle once `owner.photo` is set in
 * src/content/owner.ts. Until then it renders a neutral branded frame — never
 * an AI-generated person.
 */
export function OwnerPortrait({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  if (owner.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- static export
      <img
        src={owner.photo.src}
        width={owner.photo.width}
        height={owner.photo.height}
        alt={owner.photo.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`aspect-[4/5] w-full rounded-[14px] object-cover shadow-lift ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label="Portrait of Danielle Douglas coming soon"
      className={`relative flex aspect-[4/5] w-full flex-col items-center justify-center overflow-hidden rounded-[14px] bg-gradient-to-br from-navy via-navy to-blue text-white shadow-lift ${className}`}
    >
      <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-green/25 blur-2xl" />
      <div aria-hidden className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-blue/40 blur-2xl" />
      <InfinityMark onDark className="relative h-16 w-32 opacity-90" />
      <p className="relative mt-6 font-heading text-2xl font-semibold">Danielle Douglas</p>
      <p className="relative mt-1 text-sm uppercase tracking-[0.18em] text-white/75">President</p>
    </div>
  );
}
