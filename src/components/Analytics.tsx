import Script from "next/script";

/**
 * Google Analytics 4. Placeholder ID G-XXXXXXXXXX keeps analytics switched off;
 * set NEXT_PUBLIC_GA_MEASUREMENT_ID to the real ID and rebuild to enable it.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
const GA_ENABLED = /^G-[A-Z0-9]{4,}$/.test(GA_ID) && GA_ID !== "G-XXXXXXXXXX";

export function Analytics() {
  if (!GA_ENABLED) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}

/**
 * Reserved slot for a future AI chat widget. Set NEXT_PUBLIC_CHAT_WIDGET_SRC to the
 * vendor's script URL (and adjust attributes per their docs) to load it here.
 */
const CHAT_WIDGET_SRC = process.env.NEXT_PUBLIC_CHAT_WIDGET_SRC || "";

export function ChatWidgetSlot() {
  return (
    <>
      <div id="ai-chat-widget-root" data-slot="ai-chat-widget" />
      {CHAT_WIDGET_SRC && <Script src={CHAT_WIDGET_SRC} strategy="lazyOnload" />}
    </>
  );
}
