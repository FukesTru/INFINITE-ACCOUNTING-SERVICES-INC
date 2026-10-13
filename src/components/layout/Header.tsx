"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, MessageSquareText, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { business } from "@/lib/site";
import { navItems, type NavItem } from "./nav";

type MenuKey = NonNullable<NavItem["key"]>;

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function Header() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  useEffect(() => {
    setOpenMenu(null);
    setDrawerOpen(false);
  }, [pathname]);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Escape closes whatever is open; lock page scroll while the drawer is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (drawerOpen) closeDrawer();
      setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = drawerOpen ? "hidden" : "";
    if (drawerOpen) drawerRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen, closeDrawer]);

  const solid = scrolled || drawerOpen || openMenu !== null;
  const linkTone = solid ? "text-navy hover:text-blue" : "text-white hover:text-white/80";

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${solid ? "" : "on-dark"}`}
      data-solid={solid}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:shadow-lift"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex h-[72px] w-full max-w-[1360px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" aria-label={`${business.name}, home`} className="shrink-0 rounded-md">
          <Logo onDark={!solid} />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5 whitespace-nowrap">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              if (!item.children || !item.key) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={`rounded-md px-2.5 py-2 text-[0.95rem] font-semibold no-underline transition-colors ${linkTone} ${active ? "underline decoration-green decoration-2 underline-offset-8" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const key = item.key;
              const open = openMenu === key;
              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(key)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null);
                  }}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={`rounded-md py-2 pl-2.5 pr-0.5 text-[0.95rem] font-semibold no-underline transition-colors ${linkTone} ${active ? "underline decoration-green decoration-2 underline-offset-8" : ""}`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`menu-${key}`}
                      aria-label={`Show ${item.label} menu`}
                      onClick={() => setOpenMenu(open ? null : key)}
                      className={`rounded-md p-1.5 transition-colors ${linkTone}`}
                    >
                      <ChevronDown aria-hidden className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  <div
                    id={`menu-${key}`}
                    hidden={!open}
                    className={`absolute top-full pt-3 ${key === "areas" ? "left-1/2 w-[34rem] -translate-x-1/2" : "left-0 w-80"}`}
                  >
                    <div className="card overflow-hidden p-3">
                      {key === "areas" ? (
                        <>
                          <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                            Cities we serve
                          </p>
                          <ul className="grid grid-cols-2 gap-1">
                            {item.children.map((c) => (
                              <li key={c.href}>
                                <Link
                                  href={c.href}
                                  aria-current={pathname === c.href ? "page" : undefined}
                                  className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-navy no-underline hover:bg-mist hover:text-blue aria-[current=page]:bg-green-tint"
                                >
                                  {c.label}, IL
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/service-areas"
                            className="mt-2 block rounded-lg bg-mist px-3 py-2.5 text-sm font-semibold text-blue no-underline hover:bg-green-tint"
                          >
                            View all service areas →
                          </Link>
                        </>
                      ) : (
                        <ul className="space-y-1">
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                aria-current={pathname === c.href ? "page" : undefined}
                                className="block rounded-lg px-3 py-2.5 no-underline hover:bg-mist aria-[current=page]:bg-green-tint"
                              >
                                <span className="block font-semibold text-navy">{c.label}</span>
                                {c.description && <span className="block text-sm text-muted">{c.description}</span>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phone.tel}
            aria-label={`Call ${business.phone.display}`}
            className={`hidden items-center gap-2 whitespace-nowrap rounded-md px-2 py-2 text-[0.95rem] font-semibold no-underline md:inline-flex ${linkTone}`}
          >
            <Phone aria-hidden className="h-4 w-4" />
            <span className="xl:hidden hd:inline">{business.phone.display}</span>
          </a>
          <Link href="/contact" className="btn btn-primary hidden min-h-11 whitespace-nowrap px-5 py-2.5 text-[0.95rem] sm:inline-flex">
            Free Consultation
          </Link>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-expanded={drawerOpen}
            aria-controls="mobile-menu"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-md xl:hidden ${solid ? "text-navy" : "text-white"}`}
          >
            <Menu aria-hidden className="h-7 w-7" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      <div
        className={`fixed inset-0 z-[55] bg-navy-deep/60 backdrop-blur-[2px] transition-opacity xl:hidden ${drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={closeDrawer}
        aria-hidden
      />
      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!drawerOpen}
        className="fixed inset-y-0 right-0 z-[56] flex w-[min(24rem,100%)] flex-col bg-white shadow-lift xl:hidden"
      >
        <div className="flex h-[72px] items-center justify-between border-b border-line px-4">
          <Link href="/" aria-label={`${business.name}, home`} onClick={() => setDrawerOpen(false)}>
            <Logo />
          </Link>
          <button
            type="button"
            onClick={closeDrawer}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy"
          >
            <X aria-hidden className="h-7 w-7" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.href}>
                  <details className="group" open={isActive(pathname, item.href)}>
                    <summary className="flex items-center justify-between rounded-lg px-3 py-3 text-lg font-semibold text-navy hover:bg-mist">
                      {item.label}
                      <ChevronDown aria-hidden className="h-5 w-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className={`mb-2 ml-3 border-l-2 border-green-tint pl-3 ${item.key === "areas" ? "grid grid-cols-2" : ""}`}>
                      <li className={item.key === "areas" ? "col-span-2" : ""}>
                        <Link
                          href={item.href}
                          onClick={() => setDrawerOpen(false)}
                          className="block rounded-md px-3 py-2 font-medium text-blue no-underline hover:bg-mist"
                        >
                          {item.key === "areas" ? "All service areas" : "All services"}
                        </Link>
                      </li>
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={() => setDrawerOpen(false)}
                            aria-current={pathname === c.href ? "page" : undefined}
                            className="block rounded-md px-3 py-2 text-ink no-underline hover:bg-mist aria-[current=page]:font-semibold aria-[current=page]:text-green-dark"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="block rounded-lg px-3 py-3 text-lg font-semibold text-navy no-underline hover:bg-mist aria-[current=page]:bg-green-tint"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="space-y-3 border-t border-line bg-mist p-4">
          <div className="grid grid-cols-2 gap-3">
            <a href={business.phone.tel} className="btn btn-outline min-h-12 px-3 text-[0.95rem]">
              <Phone aria-hidden className="h-4 w-4" /> Call
            </a>
            <a href={business.phone.sms} className="btn btn-outline min-h-12 px-3 text-[0.95rem]">
              <MessageSquareText aria-hidden className="h-4 w-4" /> Text
            </a>
          </div>
          <Link href="/contact" onClick={() => setDrawerOpen(false)} className="btn btn-primary w-full">
            Get Your Free Consultation
          </Link>
          <p className="text-center text-sm text-muted">
            <a href={business.phone.tel} className="font-semibold text-navy no-underline">
              {business.phone.display}
            </a>{" "}
            · call or text
          </p>
        </div>
      </div>
    </header>
  );
}
