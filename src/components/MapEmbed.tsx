import { fullAddress, mapsDirectionsUrl, mapsEmbedUrl } from "@/lib/site";

export function MapEmbed({ className = "", height = "h-[360px] md:h-[420px]" }: { className?: string; height?: string }) {
  return (
    <figure className={`overflow-hidden rounded-[14px] border border-line bg-mist shadow-soft ${className}`}>
      <iframe
        src={mapsEmbedUrl}
        title={`Map of the Infinite Accounting Services office at ${fullAddress}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`block w-full border-0 ${height}`}
        allowFullScreen
      />
      <figcaption className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-3 text-sm text-muted">
        <span>{fullAddress}</span>
        <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="link">
          Get directions<span className="sr-only"> (opens Google Maps in a new tab)</span>
        </a>
      </figcaption>
    </figure>
  );
}
