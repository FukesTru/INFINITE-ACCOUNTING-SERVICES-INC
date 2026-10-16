# Infinite Accounting Services website

The website for **Infinite Accounting Services Inc**, a bookkeeping and tax firm in Orland Park, IL. It is built on the Local Cascade client website template.

`public/` is the whole website: plain HTML, CSS and a little JavaScript, with no build step and no npm. Vercel serves it exactly as it is (`vercel.json`). Open this repo in Claude Code and say what you want changed. `CLAUDE.md` explains how every change is made, checked and shipped, and `BRIEF.md` is the standard every page is held to.

## What is in this repo

| File or folder | What it is |
|---|---|
| `public/` | The website. Every page is a folder with an `index.html`. |
| `public/assets/site.css` | The design system: colours, type, spacing and every component. |
| `public/assets/site.js` | Menus, smooth "Contact us" scrolling, the built-in form and chat, scroll movement. |
| `site.json` | The business details every page uses. |
| `VERIFY.md` | What the client still needs to send or confirm, written so it can be emailed as is. |
| `IMAGE-PROMPTS.md` | The 31 Higgsfield photos, where each one is used, and how to add or regenerate one. |
| `tools/check.mjs` | The automatic checks. Run `node tools/check.mjs` before every ship. |
| `tools/golive-check.sh` | The domain check at go-live. |

## The pages (27, plus the 404 page)

- **Main pages:** home, about Danielle, what to expect, pricing, reviews, FAQ, business information and contact.
- **Services:** the services overview, bookkeeping and tax preparation.
- **Service areas:** the overview and 8 town pages (Orland Park, Tinley Park, Palos Heights, Palos Hills, Frankfort, Crestwood, Worth and Orland Hills).
- **Blog:** the blog index and 4 posts.
- **Legal:** privacy policy and terms of use.

Every page has its own title, description and canonical. Each also has Open Graph tags, the business structured data, a contact form, a text link, and a closing call to action. Pages with FAQs carry FAQ structured data.

## Before go-live (agency)

1. **The CRM pieces** (`site.json` `integrations`). All three are set and used exactly as given.
   - **Form embed.** The website form (LeadConnector) is the contact form on every page. `site.js` keeps a built-in form only as a fallback if the embed is ever removed.
   - **Chat widget.** Loads once per page, in the footer. On a phone its button sits in the bottom right corner, level with the call and contact buttons. `site.js` lets taps pass through the empty part of the widget's greeting bubble so it never blocks the Contact us button, and the widget hides while the phone menu is open.
   - **Review link.** Every "Leave us a review" button goes to https://review.strain-systems.com/infinite-accounting.
   - **To change in the CRM (not in this repo):** the chat widget colour (it is dark red; the site's blue is `#1D5FA8`), the form's black "Send text" button (the site's green is `#1E8449`), a text message consent line on the website form like the one the chat already has, and the form's sample phone number (808) to (708).
2. **Vercel.** Import this repo as a new Vercel project. Then fill in `vercel_project` and `preview_url` in `site.json`.
3. **The client's answers** in `VERIFY.md`. Every [VERIFY] on the site and the portrait placeholder are listed by `node tools/check.mjs --missing`.
4. **Photos.** 28 of the Higgsfield photos are on the site, listed with their places in `IMAGE-PROMPTS.md`. The client still has to approve them (`VERIFY.md`).
5. **Security.** The onboarding form contained a domain login in plain text. It is not stored anywhere in this repo. The client should change that password.

`site.json` `domain` is already set to `www.infiniteaccountingservices.com`, so every canonical, Open Graph and sitemap address uses it. Preview deployments on `*.vercel.app` are kept out of Google by the noindex header in `vercel.json`.
