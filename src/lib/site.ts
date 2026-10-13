/**
 * Single source of truth for business details (NAP), hours, socials and the
 * list of cities served. Every page, the footer and all JSON-LD read from here,
 * so a correction made once updates the whole site.
 *
 * Items marked "confirm before launch" are tracked in PRE-LAUNCH-CHECKLIST.md.
 */

export const SITE_URL = "https://www.infiniteaccountingservices.com";

export const business = {
  legalName: "INFINITE ACCOUNTING SERVICES INC",
  name: "Infinite Accounting Services",
  shortName: "Infinite Accounting",
  owner: "Danielle Douglas",
  ownerTitle: "President",
  foundingYear: 2018,
  phone: {
    display: "(708) 232-3003",
    e164: "+17082323003",
    tel: "tel:+17082323003",
    sms: "sms:+17082323003",
  },
  // confirm before launch: intake uses danielle@, Facebook lists info@
  email: "danielle@infiniteaccountingservices.com",
  address: {
    // confirm before launch: older listings show 6500 W College Dr, Palos Heights
    street: "14475 John Humphrey Dr",
    suite: "Ste 150",
    city: "Orland Park",
    state: "IL",
    zip: "60462",
    country: "US",
  },
  /** Set from the verified Google Business Profile pin; omitted from schema while null. */
  geo: null as null | { latitude: number; longitude: number },
  social: {
    facebook: "https://www.facebook.com/AccountingPlans4U/",
    instagram: "https://www.instagram.com/infiniteaccounting/",
  },
  description:
    "Bookkeeping and tax services for small businesses, independent professionals and families in Orland Park and the southwest suburbs of Chicago.",
} as const;

export const addressLine1 = `${business.address.street}, ${business.address.suite}`;
export const addressLine2 = `${business.address.city}, ${business.address.state} ${business.address.zip}`;
export const fullAddress = `${addressLine1}, ${addressLine2}`;

export const mapsQuery = encodeURIComponent(
  `${business.legalName}, ${business.address.street} ${business.address.suite}, ${addressLine2}`,
);
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${business.address.street} ${business.address.suite}, ${addressLine2}`,
)}&z=15&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

/** confirm before launch: MapQuest lists 9–2 with Wednesday closed. */
export const hours = [
  { day: "Monday", short: "Mon", open: "08:00", close: "15:00", label: "8:00 am – 3:00 pm" },
  { day: "Tuesday", short: "Tue", open: "08:00", close: "15:00", label: "8:00 am – 3:00 pm" },
  { day: "Wednesday", short: "Wed", open: null, close: null, label: "By appointment" },
  { day: "Thursday", short: "Thu", open: "08:00", close: "15:00", label: "8:00 am – 3:00 pm" },
  { day: "Friday", short: "Fri", open: "08:00", close: "15:00", label: "8:00 am – 3:00 pm" },
  { day: "Saturday", short: "Sat", open: null, close: null, label: "Closed" },
  { day: "Sunday", short: "Sun", open: null, close: null, label: "Closed" },
] as const;

export const hoursSummary = "Mon, Tue, Thu, Fri 8 am – 3 pm · Wed by appointment";

/** Cities served, in the order the client listed them. */
export const cities = [
  { slug: "orland-park", name: "Orland Park" },
  { slug: "tinley-park", name: "Tinley Park" },
  { slug: "palos-heights", name: "Palos Heights" },
  { slug: "palos-hills", name: "Palos Hills" },
  { slug: "frankfort", name: "Frankfort" },
  { slug: "crestwood", name: "Crestwood" },
  { slug: "worth", name: "Worth" },
  { slug: "orland-hills", name: "Orland Hills" },
] as const;

export type CitySlug = (typeof cities)[number]["slug"];

export const cityPath = (slug: CitySlug) => `/service-areas/${slug}`;

export const services = [
  {
    slug: "bookkeeping",
    name: "Bookkeeping Services",
    short: "Bookkeeping",
    path: "/services/bookkeeping",
    summary:
      "Monthly books, reconciliations, QuickBooks help and clean financial statements, so you always know where your business stands.",
    items: [
      "Monthly bookkeeping and bank / credit card reconciliation",
      "QuickBooks setup, clean-up and training",
      "Catch-up bookkeeping for backlogged months or years",
      "Accounts receivable and accounts payable management",
      "Cash flow management and reporting",
      "Financial statements (profit & loss, balance sheet)",
      "Payroll support",
    ],
  },
  {
    slug: "tax-services",
    name: "Tax Services",
    short: "Tax Services",
    path: "/services/tax-services",
    summary:
      "Individual and business tax preparation, year-round planning and help with IRS or Illinois notices, explained in plain English.",
    items: [
      "Individual tax return preparation",
      "Business tax returns (sole proprietors, LLCs, partnerships, S-corps)",
      "Tax consulting and planning",
      "Help with IRS and Illinois Department of Revenue notices",
      "Back-year and late filings",
    ],
  },
] as const;

export const ctaLabel = "Get Your Free Consultation";
