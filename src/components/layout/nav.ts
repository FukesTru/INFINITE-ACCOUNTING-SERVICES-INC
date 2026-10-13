import { cities, cityPath, services } from "@/lib/site";

export type NavChild = { href: string; label: string; description?: string };
export type NavItem = { href: string; label: string; key?: "services" | "areas"; children?: NavChild[] };

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    key: "services",
    children: [
      { href: services[0].path, label: services[0].name, description: "Monthly books, QuickBooks, catch-up work" },
      { href: services[1].path, label: services[1].name, description: "Individual & business returns, IRS letters" },
    ],
  },
  {
    href: "/service-areas",
    label: "Service Areas",
    key: "areas",
    children: cities.map((c) => ({ href: cityPath(c.slug), label: c.name })),
  },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
