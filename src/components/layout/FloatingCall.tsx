import { MessageSquareText, Phone } from "lucide-react";
import { business } from "@/lib/site";

/** Mobile-only floating "Call now" button with a "Text us" chip beside it. */
export function FloatingCall() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 md:hidden">
      <a
        href={business.phone.sms}
        className="inline-flex h-11 items-center gap-1.5 rounded-full border border-line bg-white px-4 text-sm font-semibold text-navy no-underline shadow-lift"
      >
        <MessageSquareText aria-hidden className="h-4 w-4 text-green" />
        Text us
      </a>
      <a
        href={business.phone.tel}
        className="inline-flex h-14 items-center gap-2 rounded-full bg-green pl-4 pr-5 font-semibold text-white no-underline shadow-lift hover:bg-green-dark"
      >
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
          <Phone aria-hidden className="h-4 w-4" />
        </span>
        Call Now
        <span className="sr-only"> {business.phone.display}</span>
      </a>
    </div>
  );
}
