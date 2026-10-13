import { Quote, Star } from "lucide-react";
import reviewsJson from "@/content/reviews.json";
import { reveal } from "@/lib/reveal";

type Review = {
  id: string;
  verified: boolean;
  initials: string;
  text: string;
  rating: number | null;
  source: string;
  date: string | null;
  service: string;
};

export const reviews = reviewsJson.reviews as Review[];
export const hasVerifiedReviews = reviews.some((r) => r.verified && r.text);

function Stars({ rating }: { rating: number }) {
  return (
    <p className="flex gap-0.5 text-[#e6a700]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} aria-hidden className="h-4 w-4" fill={i < rating ? "currentColor" : "none"} />
      ))}
    </p>
  );
}

export function ReviewCard({ review, index = 0 }: { review: Review; index?: number }) {
  const sample = !review.verified || !review.text;
  return (
    <figure className={`card flex h-full flex-col p-6 md:p-7 ${sample ? "border-dashed" : ""}`} {...reveal(index)}>
      <Quote aria-hidden className="h-8 w-8 text-green" />
      {sample ? (
        <>
          <p className="mt-3 inline-flex w-fit rounded-full bg-mist px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue">
            Sample review
          </p>
          <blockquote className="mt-3 flex-1 text-muted">
            <p>Sample review — replace with a verified Google review.</p>
            <div aria-hidden className="mt-4 space-y-2">
              <span className="block h-2.5 w-full rounded bg-line/70" />
              <span className="block h-2.5 w-11/12 rounded bg-line/70" />
              <span className="block h-2.5 w-3/4 rounded bg-line/70" />
            </div>
          </blockquote>
        </>
      ) : (
        <>
          {review.rating && (
            <div className="mt-3">
              <Stars rating={review.rating} />
            </div>
          )}
          <blockquote className="mt-3 flex-1 text-ink/90">
            <p>{review.text}</p>
          </blockquote>
        </>
      )}
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
        <span
          aria-hidden
          className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-heading text-base font-semibold text-white"
        >
          {review.initials}
        </span>
        <span className="text-sm">
          <span className="block font-semibold text-navy">{sample ? "Client name withheld" : `Client ${review.initials}`}</span>
          <span className="block text-muted">
            {review.service}
            {!sample && ` · ${review.source} review`}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function ReviewGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? reviews.slice(0, limit) : reviews;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {list.map((r, i) => (
        <ReviewCard key={r.id} review={r} index={i} />
      ))}
    </div>
  );
}
