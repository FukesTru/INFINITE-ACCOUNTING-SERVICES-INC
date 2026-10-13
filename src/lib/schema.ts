/**
 * JSON-LD builders. Keep these factual: no aggregateRating / Review markup
 * unless real, verifiable reviews are displayed on the page.
 */
import type { Faq } from "@/content/types";
import { absoluteUrl } from "./seo";
import { SITE_URL, business, cities, hours, services } from "./site";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PERSON_ID = `${SITE_URL}/about#danielle-douglas`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const LOGO_URL = `${SITE_URL}/logo.png`;

export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${business.address.street}, ${business.address.suite}`,
  addressLocality: business.address.city,
  addressRegion: business.address.state,
  postalCode: business.address.zip,
  addressCountry: business.address.country,
};

const cityPlace = (name: string) => ({
  "@type": "City",
  name: `${name}, IL`,
  containedInPlace: { "@type": "State", name: "Illinois" },
});

export const allCitiesServed = cities.map((c) => cityPlace(c.name));

const openingHoursSpecification = (() => {
  const open = hours.filter((h) => h.open);
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: open.map((h) => h.day),
      opens: open[0].open,
      closes: open[0].close,
    },
  ];
})();

const geo = business.geo
  ? { geo: { "@type": "GeoCoordinates", latitude: business.geo.latitude, longitude: business.geo.longitude } }
  : {};

const offerCatalog = {
  "@type": "OfferCatalog",
  name: "Accounting services",
  itemListElement: services.map((s) => ({
    "@type": "OfferCatalog",
    name: s.name,
    url: absoluteUrl(s.path),
    itemListElement: s.items.map((item) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: item },
    })),
  })),
};

/** The firm itself — used on the homepage, contact page and service-areas hub. */
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": BUSINESS_ID,
    name: business.name,
    alternateName: business.shortName,
    legalName: business.legalName,
    description: business.description,
    url: `${SITE_URL}/`,
    logo: LOGO_URL,
    image: `${SITE_URL}/images/og/home-hero.jpg`,
    telephone: business.phone.e164,
    email: business.email,
    address: postalAddress,
    ...geo,
    openingHoursSpecification,
    areaServed: allCitiesServed,
    sameAs: [business.social.facebook, business.social.instagram],
    foundingDate: String(business.foundingYear),
    founder: { "@id": PERSON_ID },
    hasOfferCatalog: offerCatalog,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: business.name,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };
}

/** Location-specific schema for a city page. Only the office city carries the street address. */
export function cityBusinessSchema(city: { name: string; path: string; isOffice?: boolean }) {
  const url = absoluteUrl(city.path);
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${url}#service-area`,
    name: `${business.name} — ${city.name}, IL`,
    url,
    telephone: business.phone.e164,
    email: business.email,
    logo: LOGO_URL,
    image: `${SITE_URL}/images/og/${city.path.split("/").pop()}-hero.jpg`,
    areaServed: cityPlace(city.name),
    parentOrganization: { "@id": BUSINESS_ID },
    ...(city.isOffice ? { address: postalAddress, ...geo, openingHoursSpecification } : {}),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(s.path) },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  serviceType: string | string[];
  description: string;
  path: string;
  catalog?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: {
      "@type": "AccountingService",
      "@id": BUSINESS_ID,
      name: business.name,
      telephone: business.phone.e164,
      address: postalAddress,
    },
    areaServed: allCitiesServed,
    ...(opts.catalog ? { hasOfferCatalog: offerCatalog } : {}),
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl("/about"),
    mainEntity: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: business.owner,
      jobTitle: business.ownerTitle,
      worksFor: { "@type": "AccountingService", "@id": BUSINESS_ID, name: business.name },
      workLocation: { "@type": "Place", address: postalAddress },
      sameAs: [business.social.facebook],
    },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absoluteUrl("/contact"),
    name: `Contact ${business.name}`,
    about: { "@id": BUSINESS_ID },
    mainEntity: {
      "@type": "AccountingService",
      "@id": BUSINESS_ID,
      name: business.name,
      telephone: business.phone.e164,
      email: business.email,
      address: postalAddress,
      openingHoursSpecification,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: business.phone.e164,
        email: business.email,
        areaServed: "US-IL",
        availableLanguage: "English",
      },
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Strips the [text](href) link syntax used in content so schema text is plain. */
export const plainText = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plainText(f.a) },
    })),
  };
}

export function blogSchema(posts: { title: string; slug: string; date: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl("/blog")}#blog`,
    url: absoluteUrl("/blog"),
    name: `${business.shortName} Blog`,
    publisher: { "@id": BUSINESS_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: absoluteUrl(`/blog/${p.slug}`),
      datePublished: p.date,
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  image: string;
  category: string;
}) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}/images/og/${post.image}.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    inLanguage: "en-US",
    author: { "@type": "Organization", "@id": BUSINESS_ID, name: business.shortName, url: `${SITE_URL}/` },
    publisher: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: business.name,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
  };
}
