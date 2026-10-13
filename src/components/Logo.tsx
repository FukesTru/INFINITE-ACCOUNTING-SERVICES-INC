/**
 * Provisional wordmark built from the brand palette. Replace with the client's
 * vector logo once supplied (PRE-LAUNCH-CHECKLIST.md #5).
 */
export const INFINITY_PATH =
  "M24 12C20.5 7 17 4.5 12.5 4.5 8.4 4.5 5 7.9 5 12s3.4 7.5 7.5 7.5c4.5 0 8-2.5 11.5-7.5 3.5-5 7-7.5 11.5-7.5 4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5c-4.5 0-8-2.5-11.5-7.5Z";

export function InfinityMark({ className = "", onDark = false }: { className?: string; onDark?: boolean }) {
  const id = onDark ? "inf-grad-dark" : "inf-grad";
  return (
    <svg viewBox="0 0 48 24" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="48" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={onDark ? "#5fd08f" : "#1e8449"} />
          <stop offset="1" stopColor={onDark ? "#7fb6ef" : "#1d5fa8"} />
        </linearGradient>
      </defs>
      <path d={INFINITY_PATH} fill="none" stroke={`url(#${id})`} strokeWidth="3.6" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ onDark = false, className = "" }: { onDark?: boolean; className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <InfinityMark onDark={onDark} className="h-6 w-12 shrink-0 sm:h-7 sm:w-14" />
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-[1.35rem] font-bold tracking-tight sm:text-2xl ${onDark ? "text-white" : "text-navy"}`}>
          Infinite
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] sm:text-[0.66rem] ${onDark ? "text-white/80" : "text-blue"}`}
        >
          Accounting Services
        </span>
      </span>
    </span>
  );
}
