# Pre-launch checklist — Infinite Accounting Services

Internal only. Nothing in this file is rendered on the website. Each item needs a client answer or an action before the site goes live. Where the build brief said "build with the value shown", the site already uses that value and the item tells you where to change it.

## Client confirmations

1. **Address conflict.** The intake form gives 14475 John Humphrey Dr, Ste 150, Orland Park, IL 60462. The old site, Yelp, BBB and MapQuest show 6500 W College Dr, Palos Heights, IL 60463. The site uses the intake address. Once the client confirms, update the Google Business Profile, Yelp, BBB, Facebook and Thervo so name, address and phone match everywhere.
   *Change it in:* `src/lib/site.ts` → `business.address` (this also updates the footer, contact cards, maps and all schema).
2. **Email conflict.** The intake uses danielle@infiniteaccountingservices.com and Facebook lists info@infiniteaccountingservices.com. The site uses danielle@. *Change it in:* `src/lib/site.ts` → `business.email`.
3. **Hours.** The old site says Mon/Tue/Thu/Fri 8–3 with Wednesday by appointment. MapQuest says 9–2 with Wednesday closed. The site uses the old-site hours. *Change them in:* `src/lib/site.ts` → `hours`. The contact page FAQ also repeats the hours in its "How quickly will you get back to me?" answer (`src/app/contact/page.tsx`).
4. **Google Business Profile.** The client marked this "Not Sure" and supplied a Google search URL, not a profile link.
   - Claim and verify the profile.
   - Set `NEXT_PUBLIC_GOOGLE_REVIEW_URL` to its "write a review" link. Until then, the Testimonials page links to Facebook instead.
   - Take the map pin coordinates and set `business.geo` in `src/lib/site.ts`. The `geo` field stays out of the schema while it is `null`.
5. **Brand colors.** Only "blue and green" were given, so the site uses provisional hex values. Sample the exact colors from the logo and update the tokens in `src/app/globals.css` (`@theme`).
   - The logo was supplied only as a JPEG (currently on the old GoDaddy CDN). Request a transparent PNG or SVG.
   - Until then the site shows a provisional infinity wordmark. Replace `src/components/Logo.tsx`, `src/app/icon.svg` and `public/logo.png`.
6. **Brand fonts.** None were given. The site uses League Spartan for headings (matching the old site) and Inter for body text.
7. **Photos.** The client has fewer than 15 photos or videos, and they must be uploaded directly because Drive links don't resolve.
   - Most important is a real portrait of Danielle. Add it in `src/content/owner.ts`, which shows the steps. Until then, About and the homepage show a branded frame, not an AI person.
   - Never use an AI-generated image as Danielle, staff or a client.
8. **Services to confirm.** These came from public listings, not the intake form:
   - payroll support
   - QuickBooks setup
   - tax consulting
   - IRS notice help
   - back-year filing
   - **remote service.** These pages say "we also work with clients remotely":
     - the service-areas hub callout and FAQ
     - the services hub FAQ
     - the tax services FAQ
     - the contact FAQ

   If remote service isn't offered, edit those lines.
9. **Owner bio details.** Three details come from a third-party directory and appear in the About bio (`src/app/about/page.tsx`) and the homepage "Meet Danielle" section (`src/app/page.tsx`):
   - about 20 years in the industry ("roughly two decades")
   - an MBA
   - the origin story of helping family members with business bank accounts

   Confirm all three before launch. The site makes no CPA, EA or "certified" claims anywhere, and none should be added unless the client confirms them.
10. **Testimonials.** Six clearly labeled sample cards are live (three on the homepage). Replace them with real Google reviews in `src/content/reviews.json`:
    - copy each review word for word
    - use the reviewer's initials only
    - set `verified: true`

    Don't add Review or aggregateRating schema unless real reviews are displayed.
11. **Stale business name.** The old site's meta description says "Infinity Tax & Accounting Services Inc". It doesn't appear anywhere in this build. Make sure it's also removed from the Google Business Profile and other listings.
12. **Security.** The intake form contained domain-registrar login details in plain text. They were deliberately left out of the brief and this repo. Advise the client to change that password and use delegated access for DNS and domain work.
13. **Legal pages.** The Disclaimer and Privacy Policy are drafts and need client and attorney review. This includes the SMS consent wording, which must match the form (both use `src/lib/consent.ts`), and the "last updated" dates.
14. **Illinois and IRS compliance.** Confirm preparer registration and PTIN display requirements with the client before adding any credential language.
15. **Domain and DNS.** Point www.infiniteaccountingservices.com to the new host and 301 non-www → www (see README → Deployment).

## Content flagged during the build

- **City-page lines to confirm** (`src/content/cities.ts`):
  - Palos Heights: "We've served Palos Heights clients for years." The brief marked this [CONFIRM] because of the old address.
  - Orland Park: "We also meet by appointment."
  - Orland Park FAQ: drop-off of documents "during office hours".
  - Several visit notes invite clients to "stop in" after calling or texting.
- **General tax rules in FAQs.** Some city and service FAQs describe general tax rules. They are hedged with "generally" and give no figures. Examples:
  - the lower filing threshold for self-employment income
  - the home-office "regular and exclusive use" test
  - Schedule C basics
  - joint filing when one spouse has a business

  A quick professional read-through is recommended.
- **Orland Park title.** The brief gave the Orland Park city page the same `<title>` as the homepage. Titles must be unique, so the city page uses "Orland Park Office: Bookkeeping & Tax | Infinite Accounting". The homepage keeps the original.
- **Contact meta description.** It ends "Hours Mon–Fri by schedule." as supplied in the brief. Revisit it if the hours change.
- **Copyright year.** The footer year is set at build time, so rebuild at least once a year.

## Technical setup before launch

- [ ] **Photos.** Run `npm run images:fetch && npm run images`, then rebuild.
  - All 31 Higgsfield photos are generated. Their source URLs are in `scripts/higgsfield-sources.json` and the prompts are in `docs/higgsfield-image-prompts.md`.
  - Until the optimized files exist, every photo slot shows a branded navy gradient instead of a broken image, and pages carry no `og:image`.
- [ ] **Lead form.**
  - Set `NEXT_PUBLIC_LEAD_WEBHOOK_URL` to an endpoint (Zapier, Make, Formspree, Basin or similar) that emails danielle@infiniteaccountingservices.com and texts (708) 232-3003, then send a test submission.
  - Until it's set, the form tells visitors to call, text or email instead of pretending to send.
- [ ] **reCAPTCHA.** Optionally set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, and verify `recaptcha_token` server-side in the webhook.
- [ ] **Analytics.** Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` (the placeholder `G-XXXXXXXXXX` keeps analytics off).
- [ ] **Search Console.** Set `NEXT_PUBLIC_GSC_VERIFICATION`, then submit `https://www.infiniteaccountingservices.com/sitemap.xml`.
- [ ] **Chat widget.** When a vendor is chosen, set `NEXT_PUBLIC_CHAT_WIDGET_SRC`. The slot is reserved just before `</body>`.
- [ ] **Audit.** Run `npm run build && npm run check:seo` and confirm "All SEO checks passed."
- [ ] **Lighthouse.** Run a mobile Lighthouse check on the homepage, a city page and a blog post. The targets are Performance ≥ 90 and Accessibility ≥ 90, with LCP < 2.5 s and CLS < 0.1.
