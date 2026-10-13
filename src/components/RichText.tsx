import Link from "next/link";
import { Fragment } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Renders content strings that may contain Markdown-style links: "[anchor](/path)".
 * Site-relative paths become <Link>; https URLs open in a new tab.
 */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK_RE)) {
    const [whole, label, href] = match;
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    if (href.startsWith("/")) {
      parts.push(
        <Link key={start} href={href} className="link">
          {label}
        </Link>,
      );
    } else if (href.startsWith("https://")) {
      parts.push(
        <a key={start} href={href} className="link" target="_blank" rel="noopener noreferrer">
          {label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>,
      );
    } else {
      parts.push(label);
    }
    last = start + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, i) => (typeof p === "string" ? <Fragment key={`t${i}`}>{p}</Fragment> : p))}</>;
}
