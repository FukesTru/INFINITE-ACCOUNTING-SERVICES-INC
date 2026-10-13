"use client";

import { useId, useRef, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { CONSENT_TEXT } from "@/lib/consent";
import { business, cities } from "@/lib/site";

/* ---------------------------------------------------------------------------
   Lead form configuration (set in .env.local or the host dashboard; see .env.example)

   NEXT_PUBLIC_LEAD_WEBHOOK_URL   – endpoint that receives the submission. Point it at a
                                    Zapier / Make scenario, Formspree, Basin or your own
                                    function that emails danielle@infiniteaccountingservices.com
                                    and texts (708) 232-3003. The endpoint must allow CORS.
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY – optional reCAPTCHA v3 key; the token is sent as
                                    "recaptcha_token" for server-side verification.
   --------------------------------------------------------------------------- */
const WEBHOOK_URL = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL ?? "";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
const NOTIFY_EMAIL = business.email;
const NOTIFY_SMS = business.phone.e164;


const SERVICE_OPTIONS = ["Bookkeeping", "Tax Services", "Both", "Not sure"] as const;

type Status = "idle" | "sending" | "success" | "error" | "unconfigured";
type Errors = Partial<Record<"name" | "email" | "consent", string>>;

declare global {
  interface Window {
    grecaptcha?: { ready: (cb: () => void) => void; execute: (key: string, opts: { action: string }) => Promise<string> };
  }
}

function loadRecaptcha() {
  if (!RECAPTCHA_SITE_KEY || document.getElementById("recaptcha-v3")) return;
  const s = document.createElement("script");
  s.id = "recaptcha-v3";
  s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(RECAPTCHA_SITE_KEY)}`;
  s.async = true;
  document.head.appendChild(s);
}

async function getRecaptchaToken(): Promise<string> {
  const g = window.grecaptcha;
  if (!RECAPTCHA_SITE_KEY || !g) return "";
  return new Promise((resolve) => g.ready(() => g.execute(RECAPTCHA_SITE_KEY, { action: "lead_form" }).then(resolve, () => resolve(""))));
}

export function LeadForm({ defaultCity = "", heading, compact = false }: { defaultCity?: string; heading?: string; compact?: boolean }) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(fd: FormData): Errors {
    const e: Errors = {};
    if (!String(fd.get("name") ?? "").trim()) e.name = "Please enter your name.";
    const email = String(fd.get("email") ?? "").trim();
    if (!email) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address.";
    if (!fd.get("consent")) e.consent = "Please check the box so we can reply to you.";
    return e;
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const found = validate(fd);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    // Honeypot: real visitors never see or fill this field.
    if (String(fd.get("company_website") ?? "").trim()) {
      setStatus("success");
      return;
    }

    if (!WEBHOOK_URL) {
      console.warn("Lead form: NEXT_PUBLIC_LEAD_WEBHOOK_URL is not set, so submissions cannot be delivered.");
      setStatus("unconfigured");
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }

    setStatus("sending");
    const payload = new URLSearchParams({
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      service: String(fd.get("service") ?? ""),
      city: String(fd.get("city") ?? ""),
      message: String(fd.get("message") ?? "").trim(),
      consent: "yes",
      consent_text: CONSENT_TEXT,
      page: window.location.pathname,
      submitted_at: new Date().toISOString(),
      notify_email: NOTIFY_EMAIL,
      notify_sms: NOTIFY_SMS,
      _subject: "New website inquiry — Infinite Accounting",
      recaptcha_token: await getRecaptchaToken(),
    });

    try {
      // URL-encoded body keeps this a "simple" CORS request (no preflight).
      const res = await fetch(WEBHOOK_URL, { method: "POST", body: payload, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Lead form submission failed", err);
      setStatus("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="card flex flex-col items-start gap-4 p-8 outline-none">
        <CheckCircle2 aria-hidden className="h-12 w-12 text-green" />
        <h3 className="text-2xl font-bold">Thank you — your message is on its way.</h3>
        <p className="text-muted">
          We&apos;ll reply as soon as we can during business hours. If it&apos;s time-sensitive, call or text{" "}
          <a href={business.phone.tel} className="link">
            {business.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  const label = "mb-1.5 block text-[0.95rem] font-semibold text-navy";
  const err = "mt-1.5 text-sm font-medium text-[#b42318]";

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      onFocus={loadRecaptcha}
      noValidate
      className={`card relative ${compact ? "p-6" : "p-6 md:p-8"}`}
      aria-describedby={id("required-note")}
    >
      {heading && <h3 className="mb-1 text-2xl font-bold">{heading}</h3>}
      <p id={id("required-note")} className="mb-6 text-sm text-muted">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required. Your information is kept confidential.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className={label}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? id("name-err") : undefined}
            className="field"
          />
          {errors.name && (
            <p id={id("name-err")} className={err}>
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={id("email")} className={label}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? id("email-err") : undefined}
            className="field"
          />
          {errors.email && (
            <p id={id("email-err")} className={err}>
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={id("phone")} className={label}>
            Phone
          </label>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" inputMode="tel" className="field" />
        </div>
        <div>
          <label htmlFor={id("service")} className={label}>
            Service interested in
          </label>
          <select id={id("service")} name="service" defaultValue="Not sure" className="field">
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("city")} className={label}>
            City
          </label>
          <select id={id("city")} name="city" defaultValue={defaultCity} className="field">
            <option value="">Select your town</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Other">Another town</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("message")} className={label}>
            How can we help?
          </label>
          <textarea
            id={id("message")}
            name="message"
            rows={compact ? 3 : 4}
            className="field resize-y"
            placeholder="A sentence or two about your books or taxes is plenty. Please don't include Social Security numbers or account numbers."
          />
        </div>
      </div>

      {/* Honeypot — hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={id("company_website")}>Company website</label>
        <input id={id("company_website")} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6">
        <div className="flex items-start gap-3">
          <input
            id={id("consent")}
            name="consent"
            type="checkbox"
            required
            aria-required="true"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? id("consent-err") : undefined}
            className="mt-1 h-5 w-5 shrink-0 rounded border-line accent-green"
          />
          <label htmlFor={id("consent")} className="text-[0.95rem] text-ink/90">
            {CONSENT_TEXT} <span aria-hidden="true">*</span>
          </label>
        </div>
        {errors.consent && (
          <p id={id("consent-err")} className={`${err} ml-8`}>
            {errors.consent}
          </p>
        )}
      </div>

      {/* reCAPTCHA v3 placeholder: activates when NEXT_PUBLIC_RECAPTCHA_SITE_KEY is set (invisible, no checkbox). */}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-6 w-full sm:w-auto">
        {status === "sending" ? (
          <>
            <Loader2 aria-hidden className="h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send aria-hidden className="h-4 w-4" /> Request My Free Consultation
          </>
        )}
      </button>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status === "error" && (
          <p className="mt-4 rounded-[10px] bg-[#fef3f2] p-4 text-[0.95rem] text-[#912018]">
            Sorry, something went wrong sending your message. Please try again, or call or text{" "}
            <a href={business.phone.tel} className="font-semibold underline">
              {business.phone.display}
            </a>
            .
          </p>
        )}
        {status === "unconfigured" && (
          <p className="mt-4 rounded-[10px] bg-mist p-4 text-[0.95rem] text-navy">
            Our online form isn&apos;t accepting messages just yet. Please call or text{" "}
            <a href={business.phone.tel} className="font-semibold underline">
              {business.phone.display}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${business.email}`} className="font-semibold underline">
              {business.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
