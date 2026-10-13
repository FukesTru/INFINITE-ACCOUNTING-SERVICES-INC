import { Clock, Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import { addressLine1, addressLine2, business, hours, mapsDirectionsUrl } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

const row = "flex gap-4";
const iconWrap = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-tint text-green-dark";

/** Name / address / phone / email / hours block. */
export function ContactCard({ title = "Contact details", headingLevel = 2, social = true }: { title?: string; headingLevel?: 2 | 3; social?: boolean }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="card p-6 md:p-8">
      <H className="text-2xl font-bold">{title}</H>
      <address className="mt-6 space-y-5 not-italic">
        <div className={row}>
          <span className={iconWrap}>
            <Phone aria-hidden className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Call</p>
            <a href={business.phone.tel} className="text-xl font-bold text-navy no-underline hover:text-blue">
              {business.phone.display}
            </a>
          </div>
        </div>
        <div className={row}>
          <span className={iconWrap}>
            <MessageSquareText aria-hidden className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Text</p>
            <a href={business.phone.sms} className="font-semibold text-navy no-underline hover:text-blue">
              Text us at the same number
            </a>
          </div>
        </div>
        <div className={row}>
          <span className={iconWrap}>
            <Mail aria-hidden className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Email</p>
            <a href={`mailto:${business.email}`} className="break-all font-semibold text-navy no-underline hover:text-blue">
              {business.email}
            </a>
          </div>
        </div>
        <div className={row}>
          <span className={iconWrap}>
            <MapPin aria-hidden className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Office</p>
            <p className="font-semibold text-navy">{business.legalName}</p>
            <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="text-ink no-underline hover:text-blue">
              {addressLine1}
              <br />
              {addressLine2}
              <span className="sr-only"> (opens Google Maps in a new tab)</span>
            </a>
          </div>
        </div>
      </address>
      <div className={`${row} mt-5`}>
        <span className={iconWrap}>
          <Clock aria-hidden className="h-5 w-5" />
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">Hours</p>
          <table className="mt-1 w-full text-[0.98rem]">
            <caption className="sr-only">Office hours</caption>
            <tbody>
              {hours.map((h) => (
                <tr key={h.day} className="border-b border-line/70 last:border-0">
                  <th scope="row" className="py-1.5 pr-4 text-left font-medium text-navy">
                    {h.day}
                  </th>
                  <td className="py-1.5 text-right">{h.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {social && (
        <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
          <span className="text-sm font-semibold text-muted">Follow us</span>
          <a
            href={business.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mist text-navy hover:bg-green hover:text-white"
          >
            <FacebookIcon className="h-5 w-5" />
            <span className="sr-only">Facebook (opens in a new tab)</span>
          </a>
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mist text-navy hover:bg-green hover:text-white"
          >
            <InstagramIcon className="h-5 w-5" />
            <span className="sr-only">Instagram (opens in a new tab)</span>
          </a>
        </div>
      )}
    </div>
  );
}
