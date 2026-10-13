import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics, ChatWidgetSlot } from "@/components/Analytics";
import { FloatingCall } from "@/components/layout/FloatingCall";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealObserver } from "@/components/Reveal";
import { SITE_URL, business } from "@/lib/site";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const leagueSpartan = localFont({
  src: [
    { path: "../../node_modules/@fontsource/league-spartan/files/league-spartan-latin-600-normal.woff2", weight: "600" },
    { path: "../../node_modules/@fontsource/league-spartan/files/league-spartan-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-league-spartan",
  display: "swap",
  adjustFontFallback: "Arial",
});

/** Google Search Console HTML-tag verification (placeholder until the token is supplied). */
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION || "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: business.name,
  authors: [{ name: business.name }],
  creator: business.name,
  formatDetection: { telephone: false, email: false, address: false },
  ...(GSC_VERIFICATION ? { verification: { google: GSC_VERIFICATION } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#0b2f57",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${inter.variable} ${leagueSpartan.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <Analytics />
      </head>
      <body>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <FloatingCall />
        <RevealObserver />
        {/* Reserved: future AI chat widget loads here, just before </body>. */}
        <ChatWidgetSlot />
      </body>
    </html>
  );
}
