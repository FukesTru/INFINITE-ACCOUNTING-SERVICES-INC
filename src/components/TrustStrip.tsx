import { CalendarCheck, Lock, MapPin, MessagesSquare } from "lucide-react";
import { business } from "@/lib/site";
import { reveal } from "@/lib/reveal";

const items = [
  { icon: MessagesSquare, label: "Free consultation" },
  { icon: Lock, label: "Confidential & secure" },
  { icon: CalendarCheck, label: `Serving the southwest suburbs since ${business.foundingYear}` },
  { icon: MapPin, label: "Local office in Orland Park" },
];

export function TrustStrip() {
  return (
    <section aria-label="Why clients trust us" className="border-b border-line bg-white">
      <ul className="container-site grid grid-cols-1 gap-x-6 gap-y-4 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:py-7">
        {items.map(({ icon: Icon, label }, i) => (
          <li key={label} className="flex items-center gap-3 text-[0.98rem] font-semibold text-navy" {...reveal(i)}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-tint text-green-dark">
              <Icon aria-hidden className="h-5 w-5" />
            </span>
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
