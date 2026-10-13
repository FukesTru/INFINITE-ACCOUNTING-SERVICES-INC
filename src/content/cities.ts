import type { CityContent } from "./types";

/**
 * Service-area page copy, one entry per city, in the order listed in
 * `cities` (src/lib/site.ts). Each city has its own angle, examples and FAQs.
 * Intros may contain one Markdown-style link: "[text](/path)".
 */
export const cityContent: CityContent[] = [
  {
    slug: "orland-park",
    name: "Orland Park",
    title: "Orland Park Office: Bookkeeping & Tax | Infinite Accounting",
    description:
      "Bookkeeping and tax services at our Orland Park office on John Humphrey Dr. Local, confidential and easy to reach. Call or book your free consultation.",
    heroImage: "orland-park-hero",
    heroSubhead:
      "Bookkeeping and tax help from our office on John Humphrey Drive, close to home for Orland Park shop owners, contractors, professionals and families.",
    cardHook: "Our home base. Visit the office on John Humphrey Dr, Ste 150.",
    intro: [
      "Some clients like to put a face to the firm that handles their numbers, and that's easy to do here. Infinite Accounting works out of 14475 John Humphrey Dr, Ste 150, and this office is the base for our bookkeeping and tax services in Orland Park and the neighboring suburbs. We're a small, owner-run firm that has been serving clients since 2018, and we work with the shop owners, contractors and professional offices that keep this busy area running.",
      "On the bookkeeping side, we handle [monthly bookkeeping and reconciliations](/services/bookkeeping), QuickBooks setup and clean-up, payables and receivables, payroll support, and the financial statements a lender may ask to see. If your books have fallen behind, we can also catch them up before tax season. On the tax side, we prepare individual and business returns, talk through planning during the year, and help you respond when a letter arrives from the IRS or the Illinois Department of Revenue.",
      "Because we're right here in Orland Park, you can drop off paperwork, text a quick question, or set a time to sit down and go over your numbers at the office. Your first consultation is free. Bring what you have, tell us what's been on your mind, and we'll explain your options in plain English before any work begins.",
    ],
    help: {
      bookkeeping: {
        intro:
          "Orland Park businesses keep full schedules. We keep the books current so you can see where things stand without digging for it.",
        items: [
          "Monthly bank and credit card reconciliation for retail shops with steady daily card sales.",
          "QuickBooks setup and training for a newly opened professional office and its front-desk staff.",
          "Income and expense tracking by job for contractors who buy materials on several cards.",
          "Profit and loss statements and balance sheets ready when your bank asks for them.",
        ],
      },
      tax: {
        intro:
          "Whether you file for a business, a household or both, your return is prepared at the same office where you can drop off documents and ask questions.",
        items: [
          "Business returns for local LLCs, partnerships and S-corps, prepared from reconciled books.",
          "Individual returns for professionals and families with income from more than one source.",
          "Planning conversations during the year, so a strong year doesn't bring a surprise in April.",
          "Help reading and responding to letters from the IRS or the Illinois Department of Revenue.",
        ],
      },
    },
    personas: [
      {
        title: "Retail shop owners",
        text: "Daily card sales, deposits and inventory purchases add up quickly. We reconcile them monthly so your books match the bank.",
      },
      {
        title: "Contractors and builders",
        text: "We help separate jobs, track materials and keep receipts organized, so tax time isn't a search through the truck.",
      },
      {
        title: "Professional offices",
        text: "Consultants, agencies and small practices that want clean monthly statements and a local firm they can call with questions.",
      },
      {
        title: "Families who like face time",
        text: "Households that prefer to hand over documents in person and talk through their return across a desk.",
      },
    ],
    visitNote:
      "Our office is at 14475 John Humphrey Dr, Ste 150 in Orland Park. Call or text (708) 232-3003 before you come so we can have your file ready. We also meet by appointment.",
    faqs: [
      {
        q: "Can I drop off my tax documents at the Orland Park office?",
        a: "Yes, during office hours. Call or text (708) 232-3003 first so we can confirm a time and let you know what to bring. Many people like to hand over paperwork in person and follow up by phone. If anything is missing once we look through it, we'll tell you exactly what we still need instead of guessing.",
      },
      {
        q: "What should I bring to a first meeting at your office?",
        a: "Bring whatever you have: last year's tax return, recent bank and credit card statements, any letters from the IRS or the state, and your QuickBooks details if you use it. If your records are incomplete, bring them anyway. The free consultation is about understanding where things stand, not judging how organized you are.",
      },
      {
        q: "Do you only work with businesses and families in Orland Park?",
        a: "No. Our office is here, but we also work with clients in Tinley Park, Orland Hills, Palos Heights, Palos Hills, Frankfort, Crestwood and Worth. Location matters less than fit. If you want careful books, clear explanations and a small firm that knows your file, we'd be glad to talk.",
      },
      {
        q: "What happens if I switch to you from another accountant?",
        a: "We'll ask for your prior returns and access to your current books, review where things stand, and point out anything that needs attention before we take over. If the books need some clean-up first, we'll say so and explain why. Nothing changes until you decide to move forward, and your prior accountant's work stays part of your records.",
      },
    ],
    nearby: ["orland-hills", "tinley-park", "palos-heights"],
    isOffice: true,
  },
  {
    slug: "tinley-park",
    name: "Tinley Park",
    title: "Tinley Park Bookkeeping & Tax Services | Infinite Accounting",
    description:
      "Tinley Park bookkeeping and tax help for small businesses and families. Organized books, accurate returns and plain-English guidance. Free consultation.",
    heroImage: "tinley-park-hero",
    heroSubhead:
      "We help Tinley Park owners and families catch up on overdue books, get organized and head into tax season with clean records.",
    cardHook: "Months behind on the books? We help you catch up before tax season.",
    intro: [
      "Running a restaurant, a trade or a service business in Tinley Park doesn't leave many quiet evenings for bookkeeping. Receipts pile up, statements go unopened, and suddenly it's February. Nobody planned it that way; the weeks just filled up with customers, crews and payroll. That's often when people start looking for bookkeeping and tax services in Tinley Park, and it's exactly the kind of backlog we like to untangle.",
      "Our [catch-up bookkeeping](/services/bookkeeping) starts with whatever you have: bank statements, a box of receipts, an old QuickBooks file, or a spreadsheet someone started and abandoned. We reconcile month by month, fix transactions that landed in the wrong categories, and bring the books current. You'll get a clear list of anything we can't find, rather than guesses filled in to make the numbers balance. Once you're caught up, we can keep things on a monthly schedule so the pile doesn't come back.",
      "Clean books make tax season much more manageable. We prepare business returns for sole proprietors, LLCs, partnerships and S-corps, plus individual returns for households balancing paychecks, kids and maybe a side business. If filing has slipped too, we can help with back years. Tinley Park owners and families can start with a free consultation, where we'll look at what's missing and explain the plan in plain English.",
    ],
    help: {
      bookkeeping: {
        intro:
          "Tinley Park owners often reach out once the backlog feels too heavy to face alone. We start where you are and work forward, one month at a time.",
        items: [
          "Catching up a year of unreconciled bank and credit card statements for a busy service company.",
          "Cleaning up a QuickBooks file where months of transactions landed in the wrong accounts.",
          "Sorting supplier invoices and deposits so a restaurant can see food costs against sales.",
          "Setting up a monthly routine after the catch-up, so the backlog doesn't build again.",
        ],
      },
      tax: {
        intro:
          "Once the books are current, tax season gets calmer. We prepare your return from records we've already reviewed with you.",
        items: [
          "Business returns for trades and service companies once the year's books are reconciled.",
          "Back-year returns for owners who fell behind on filing while running the business.",
          "Individual returns for growing households with new dependents, a home purchase or childcare costs.",
          "A planning check-in before year end, so fewer surprises turn up when the return is prepared.",
        ],
      },
    },
    personas: [
      {
        title: "Restaurant owners",
        text: "Long hours, many vendors and lots of small transactions. We keep sales, supplier bills and payroll support organized.",
      },
      {
        title: "Busy tradespeople",
        text: "If your bookkeeping currently lives in a glovebox, we can turn it into reconciled books and a return you understand.",
      },
      {
        title: "Service business owners",
        text: "Cleaning, landscaping, salon and repair businesses with steady work and no time for paperwork are a natural fit for catch-up help.",
      },
      {
        title: "Growing households",
        text: "New baby, new house, new job. We prepare a return that reflects the changes and explain what's different this year.",
      },
    ],
    visitNote:
      "Our office is at 14475 John Humphrey Dr, Ste 150 in Orland Park. Call or text (708) 232-3003 to set up a time, and feel free to bring the whole backlog, shoeboxes and all.",
    faqs: [
      {
        q: "How far behind is too far behind for catch-up bookkeeping?",
        a: "There isn't a real cutoff. We can work with records that are a few months behind or several years behind. The process is the same either way: gather statements, reconcile month by month, and correct anything that was recorded in the wrong place. The further back it goes, the longer it takes, so it helps to start well before the next filing deadline.",
      },
      {
        q: "Should I catch up my books before or after I file my taxes?",
        a: "Before, if you can. A business return is only as reliable as the numbers behind it, and estimating from bank deposits can lead to missed deductions or reporting errors. If a deadline is close, we can talk about filing an extension while the books are brought current. We'll walk through the tradeoffs with you during your free consultation.",
      },
      {
        q: "Can you handle a restaurant with lots of small daily transactions?",
        a: "Yes. High-volume businesses benefit from regular reconciliation more than most, because small errors repeat quickly. We match deposits to sales reports, record supplier invoices, and make sure card processing fees and payroll are accounted for. The monthly statements then show your sales and costs clearly enough to make decisions with.",
      },
      {
        q: "I'm missing receipts from last year. Can you still help?",
        a: "Usually, yes. Bank and credit card statements show most of the activity, and many vendors can reprint invoices on request. We'll point out which expenses need better documentation and which are already supported. Going forward, we'll suggest a simple habit for saving receipts. What we won't do is invent numbers to fill the gaps.",
      },
    ],
    nearby: ["orland-park", "orland-hills", "frankfort"],
  },
  {
    slug: "palos-heights",
    name: "Palos Heights",
    title: "Palos Heights Bookkeeping & Tax Services | Infinite Accounting",
    description:
      "Bookkeeping and tax preparation for Palos Heights businesses and families. Confidential, detail-oriented service from a trusted local accounting firm.",
    heroImage: "palos-heights-hero",
    heroSubhead:
      "Discreet, careful bookkeeping and tax preparation for Palos Heights professionals, self-employed residents and families who value their privacy.",
    cardHook: "Confidential, detail-minded help for professionals and families who value privacy.",
    intro: [
      "Money is personal, and choosing someone to see all of yours is a decision worth making carefully. We've served Palos Heights clients for years, and our bookkeeping and tax services in Palos Heights rest on a simple principle: your financial details stay between you and us. We're a small, owner-run firm, so your file isn't passed around a large office.",
      "If you work for yourself as a consultant, a solo practitioner or a freelancer with a few steady clients, we can keep your books organized month to month. That means reconciled accounts, business and personal spending kept apart, and clear statements you can review whenever you like. Families often want the same things from an accountant: careful work, discretion, and someone who listens before giving advice. Retirees with consulting income and professionals winding down a practice need that same careful attention.",
      "On the tax side, we prepare [individual and business returns](/services/tax-services), talk through planning before the year ends, and help when a notice arrives from the IRS or the Illinois Department of Revenue. We check the details carefully and explain anything you ask about, line by line if you like. The first consultation is free and confidential, so call or text and tell us what you need. Nothing you share in that conversation commits you to anything.",
    ],
    help: {
      bookkeeping: {
        intro:
          "Self-employed residents of Palos Heights often keep business and personal money too close together. We help draw a clear line and keep it there.",
        items: [
          "Separating business and personal spending for a consultant who uses one card for everything.",
          "Monthly reconciliations and a simple profit and loss for a solo professional practice.",
          "Tracking income by client for an independent professional who bills several firms.",
          "QuickBooks setup for a resident leaving a salaried job to work independently.",
        ],
      },
      tax: {
        intro:
          "Privacy matters as much at tax time as it does the rest of the year. Your return is handled carefully and discussed only with you or someone you authorize.",
        items: [
          "Individual returns for households with self-employment income alongside a spouse's W-2 wages.",
          "Quarterly estimated tax planning for independent professionals with no employer withholding.",
          "Business returns for single-member LLCs and S-corps owned by local professionals.",
          "Calm, careful help responding to an IRS or Illinois Department of Revenue notice.",
        ],
      },
    },
    personas: [
      {
        title: "Independent professionals",
        text: "Consultants, solo practitioners and specialists who bill on their own and want books that hold up at tax time.",
      },
      {
        title: "Self-employed residents",
        text: "When no employer withholds your taxes, we help you plan quarterly payments and keep track of deductible costs.",
      },
      {
        title: "Families valuing discretion",
        text: "Households that want a careful accountant who keeps their information private and explains things clearly.",
      },
      {
        title: "Retirees with side income",
        text: "Pensions, Social Security and part-time consulting can complicate a return. We sort out how each piece is reported.",
      },
    ],
    visitNote:
      "Palos Heights clients are welcome at our office at 14475 John Humphrey Dr, Ste 150 in Orland Park. Call or text (708) 232-3003 to arrange a private conversation.",
    faqs: [
      {
        q: "How do you keep my financial information confidential?",
        a: "Confidentiality is central to how we work. Your file stays within our small, owner-run firm, and we discuss your finances only with you or someone you've authorized. If you have specific questions about how your documents are stored or returned, ask during your free consultation and we'll explain our process before you share anything.",
      },
      {
        q: "I'm newly self-employed. Do I need to pay estimated taxes?",
        a: "Often, yes. When no employer is withholding tax from your pay, the IRS generally expects payments during the year, and Illinois has its own estimated payment rules. Whether you need to pay, and how much, depends on your income and your prior-year tax. We'll review your situation and help you set a realistic payment schedule.",
      },
      {
        q: "Can you help with a return after a divorce or a death in the family?",
        a: "Yes. Life changes like a divorce, a new marriage or the loss of a spouse can affect your filing status, dependents and how income is reported. We handle these conversations with care and in confidence, explain how the change affects your return, and help you gather what's needed. Legal questions, such as how assets are divided, belong with your attorney.",
      },
      {
        q: "I'm a solo professional. Should I keep a separate business bank account?",
        a: "In most cases, yes. A separate account makes it much easier to see what the business earns and spends, and it simplifies both bookkeeping and tax preparation. It also helps if you ever need to support an expense. If you've been using one account for everything, we can help separate past transactions and set up a cleaner system going forward.",
      },
    ],
    nearby: ["palos-hills", "worth", "orland-park"],
  },
  {
    slug: "palos-hills",
    name: "Palos Hills",
    title: "Palos Hills Bookkeeping & Tax Services | Infinite Accounting",
    description:
      "Palos Hills bookkeeping and tax services for small businesses, freelancers and families. Accurate records, on-time filing and friendly advice. Call today.",
    heroImage: "palos-hills-hero",
    heroSubhead:
      "Simple recordkeeping for 1099 income and side-business expenses, for Palos Hills freelancers, gig workers and families with more than one paycheck.",
    cardHook: "1099s, side gigs and freelance income, organized before the tax deadline.",
    intro: [
      "If you earn money in more than one way, maybe through a delivery app, weekend photography or a few freelance clients, your taxes got more complicated the day that first 1099 arrived. Side income is welcome, but it still has to be reported. That's where our bookkeeping and tax services in Palos Hills come in. We help freelancers, gig workers and side-business earners keep simple records and understand what they owe.",
      "The goal is a system simple enough that you'll actually keep it up. Usually that doesn't mean anything elaborate, just consistent habits and one place to keep things. We'll show you how to separate side-business spending, which receipts are worth saving, and how to log mileage or equipment purchases. If you'd rather hand it off, our [bookkeeping service](/services/bookkeeping) can reconcile your accounts each month and show what the side business really earns after expenses.",
      "At tax time, we prepare your individual return with self-employment income reported properly, and we talk through estimated payments so next April is easier to plan for. We'll also tell you which forms to watch for next January. Recent graduates taking on their first contracts, households juggling W-2 jobs and side income, and longtime freelancers in Palos Hills all start the same way: with a free consultation where no question is too small.",
    ],
    help: {
      bookkeeping: {
        intro:
          "A side business in Palos Hills rarely needs complicated accounting. It needs a simple system that someone keeps current.",
        items: [
          "Setting up a separate account and simple categories for a freelancer's income and expenses.",
          "Matching 1099-NEC and 1099-K forms to what actually landed in your bank account.",
          "Tracking vehicle mileage and phone costs for rideshare and delivery drivers.",
          "Monthly reconciliations for an online seller juggling payout reports and shipping costs.",
        ],
      },
      tax: {
        intro:
          "Side income changes how your return works. We prepare it carefully and explain what you owe and why.",
        items: [
          "Individual returns with self-employment income reported alongside a regular W-2 job.",
          "Estimated tax payment planning for freelancers who no longer have taxes withheld.",
          "First-year returns for recent graduates starting contract or freelance work.",
          "Reviewing home office, equipment and software costs used in a side business.",
        ],
      },
    },
    personas: [
      {
        title: "Freelancers and contractors",
        text: "Designers, writers, developers and consultants who invoice their own clients and receive 1099s at year end.",
      },
      {
        title: "Gig and app workers",
        text: "Drivers, delivery workers and task-based earners who need mileage and expenses tracked properly.",
      },
      {
        title: "New professionals",
        text: "Recent graduates taking on their first contracts, or a side project alongside a starting salary.",
      },
      {
        title: "Two-income households",
        text: "Families where one or both partners have a W-2 job plus side income to report.",
      },
    ],
    visitNote:
      "Meet with us at our office at 14475 John Humphrey Dr, Ste 150 in Orland Park, or start with a quick question. Call or text (708) 232-3003 and tell us what kind of side income you have.",
    faqs: [
      {
        q: "Do I have to report side income if I didn't get a 1099?",
        a: "Yes. Income is generally taxable whether or not you receive a form for it. A 1099 is just one way a payer reports what they sent you. We help you add up income from every source, including cash and app payments, and report it alongside the expenses you're allowed to deduct.",
      },
      {
        q: "What counts as a deductible expense for a side business?",
        a: "Generally, costs that are ordinary and necessary for the work, such as supplies, software, part of your phone bill, or business mileage. Personal costs don't count, and mixed-use items need a reasonable split. The rules can be specific, so we review your expenses with you, explain which ones qualify and why, and help you keep records that support them.",
      },
      {
        q: "I'm a student with a part-time freelance gig. Do I need to file a return?",
        a: "It depends on your total income and how much came from self-employment. Self-employment income has its own, much lower filing threshold, so even a small gig can mean you need to file. Your parents' return may also be affected if they claim you as a dependent. We can look at your numbers and explain what applies to you.",
      },
      {
        q: "Should I form an LLC for my freelance work?",
        a: "Not necessarily. An LLC can make sense for some freelancers, but on its own it doesn't change how your income is taxed, and it adds state filing requirements. Many freelancers operate as sole proprietors with good records. We can talk through the tax side of the decision, and we'd suggest an attorney for the legal side.",
      },
    ],
    nearby: ["palos-heights", "worth", "orland-park"],
  },
  {
    slug: "frankfort",
    name: "Frankfort",
    title: "Frankfort Bookkeeping & Tax Services | Infinite Accounting",
    description:
      "Frankfort, IL bookkeeping and tax services for boutique shops, professionals and home-based businesses. Personal service, accurate books. Free consultation.",
    heroImage: "frankfort-hero",
    heroSubhead:
      "Personal, one-on-one bookkeeping and tax help for Frankfort boutiques, professional offices and home-based businesses, without the big-firm runaround.",
    cardHook: "Boutiques and home businesses get one-on-one attention, not a big-firm queue.",
    intro: [
      "There's a difference between being a client and being a file number. Frankfort business owners who run a boutique, a professional office or a company from home usually want the first kind of relationship, and that's the approach we bring to bookkeeping and tax services in Frankfort. You work with a small, owner-run firm, and the answers come in language you can actually use. When you call with a question, you shouldn't have to explain your business all over again.",
      "For a shop owner, that might mean monthly bookkeeping that reconciles card processor deposits, tracks inventory purchases and produces a profit and loss statement showing how the season really went. For a home-based business, it might mean QuickBooks set up properly from the start, with business and household spending kept apart. Professional offices often need payroll support and clean statements for a lender. Whatever the setup, you'll know who is keeping your books and how to reach us.",
      "When it's time to file, we prepare [business tax returns](/services/tax-services) for sole proprietors, LLCs, partnerships and S-corps, along with individual returns for owners and their families. Our Orland Park office is a short trip from Frankfort, and your first consultation is free. Bring your questions, and we'll take the time to answer them. If you'd like to review your return at the office before it's filed, we're glad to make time for that.",
    ],
    help: {
      bookkeeping: {
        intro:
          "Frankfort boutiques and owner-run offices don't need a department. They need someone who knows their books and answers questions directly.",
        items: [
          "Reconciling card processor deposits against daily sales for a downtown boutique.",
          "Cash flow reports that help a seasonal shop plan ahead for its slower months.",
          "QuickBooks setup for a home-based business, keeping household and business spending separate.",
          "Payroll support and monthly statements for a small professional office with a few employees.",
        ],
      },
      tax: {
        intro:
          "You'll talk with the people preparing your return, not a call center. Questions get straight answers.",
        items: [
          "Business returns for boutique owners organized as sole proprietors, LLCs or S-corps.",
          "Reviewing home office expenses for owner-operators who work from a spare room.",
          "Year-end conversations about owner pay, equipment purchases and estimated payments.",
          "Individual returns for owners whose business and household finances overlap.",
        ],
      },
    },
    personas: [
      {
        title: "Boutique shop owners",
        text: "Retailers who want sales, inventory and card deposits reconciled every month by a firm that knows their business.",
      },
      {
        title: "Small professional offices",
        text: "Practices and agencies that prefer a direct relationship over layers of staff at a large firm.",
      },
      {
        title: "Home-based businesses",
        text: "Owners working from a home office who need a clean separation between business and household money.",
      },
      {
        title: "Solo owner-operators",
        text: "One-person businesses where the owner does everything and wants a careful second set of eyes on the numbers.",
      },
    ],
    visitNote:
      "Our office is a short trip from Frankfort, at 14475 John Humphrey Dr, Ste 150 in Orland Park. Call or text (708) 232-3003 to schedule a one-on-one conversation.",
    faqs: [
      {
        q: "What's the difference between working with you and a large accounting firm?",
        a: "Mostly the relationship. We're a small, owner-run firm, so you won't be passed between departments or wait in a queue to reach someone who knows your file. Larger firms do offer things we don't, and if your needs fit one of them better, we'll tell you honestly during the free consultation.",
      },
      {
        q: "Can you set up QuickBooks for a boutique that sells in-store and online?",
        a: "Yes. We can set up accounts and categories so in-store card sales, online payouts and inventory purchases each land in the right place. We'll show you or your staff how to handle day-to-day entries, or we can take over the monthly reconciliation if you'd rather not. The goal is a clear view of sales from both channels.",
      },
      {
        q: "Can I deduct part of my home if I run my business from it?",
        a: "Possibly. The home office deduction generally requires a space used regularly and exclusively for business, and there's more than one way to calculate it. Sole proprietors and S-corp owners are treated differently, too. We'll look at how you actually use the space and explain whether it qualifies and which approach fits your situation.",
      },
      {
        q: "Do you work with seasonal businesses whose income swings a lot?",
        a: "Yes. Uneven income makes regular bookkeeping more important, not less. We track cash flow month to month so you can see slow stretches coming, and we help plan estimated tax payments around your actual pattern of income instead of a flat guess. That makes both the busy season and the quiet one easier to plan for.",
      },
    ],
    nearby: ["tinley-park", "orland-park", "orland-hills"],
  },
  {
    slug: "crestwood",
    name: "Crestwood",
    title: "Crestwood Bookkeeping & Tax Services | Infinite Accounting",
    description:
      "Crestwood, IL bookkeeping and tax help for local shops, contractors and families. Clear explanations, accurate filing and confidential service. Book a call.",
    heroImage: "crestwood-hero",
    heroSubhead:
      "For Crestwood shop owners, contractors and family businesses whose books were never formalized, we set up simple records and handle sole proprietor taxes.",
    cardHook: "Turning notebooks, receipts and memory into real books for local shops and contractors.",
    intro: [
      "Plenty of good businesses have run for years on a notebook, a checking account and the owner's memory. It works, right up until a lender asks for a profit and loss statement or the tax return takes a weekend of digging through receipts. If that sounds familiar, our bookkeeping and tax services in Crestwood are a practical place to start. You don't need to arrive organized; that part is our job.",
      "We'll set up a simple system that fits how you already work. That might include [QuickBooks setup and training](/services/bookkeeping), categories that make sense for a shop or a trade, and a monthly reconciliation so the numbers match the bank. Nothing fancy, just books you can trust and actually use. Family-run businesses get the same patient approach, even when three people have been paying bills out of two accounts.",
      "For sole proprietors, we prepare the Schedule C on your personal return, organize deductible costs like tools, vehicles and supplies, and explain what you owe in plain English. We also prepare returns for family-run LLCs and partnerships, and we can help with back years if filing has slipped. We'll show you which records to keep each month so next year's return comes together more easily. Your first consultation is free, so Crestwood owners can see what getting organized would involve before committing to anything.",
    ],
    help: {
      bookkeeping: {
        intro:
          "For a Crestwood family business, the first step is often writing down what one person has always kept in their head. We turn that into a system anyone could follow.",
        items: [
          "Building a first chart of accounts for a neighborhood shop that has only used a checkbook.",
          "Separating household and business spending for a family business run from one checking account.",
          "Setting up job tracking so a contractor can see each project's materials and labor.",
          "A simple payables list so vendor bills are recorded and paid on schedule.",
        ],
      },
      tax: {
        intro:
          "Sole proprietor taxes don't have to be mysterious. We prepare practical, accurate returns and explain each piece as we go.",
        items: [
          "Schedule C preparation for shop owners filing as sole proprietors on their personal return.",
          "Organizing vehicle, tool and equipment costs for contractors before the return is prepared.",
          "Explaining self-employment tax and setting up quarterly estimates for owners new to them.",
          "Responding to an IRS or Illinois Department of Revenue notice about a past business return.",
        ],
      },
    },
    personas: [
      {
        title: "Neighborhood shop owners",
        text: "Owners who know their business inside out but have never had books a lender could easily read.",
      },
      {
        title: "Trades and repair contractors",
        text: "Plumbers, electricians, roofers and handymen who want jobs, materials and mileage organized without spending evenings on paperwork.",
      },
      {
        title: "Family-run businesses",
        text: "Spouses, parents and grown kids working together, where business and household money have gotten mixed over the years.",
      },
      {
        title: "First-time sole proprietors",
        text: "People who just started working for themselves and want their first Schedule C prepared correctly and explained.",
      },
    ],
    visitNote:
      "Our office is at 14475 John Humphrey Dr, Ste 150 in Orland Park. Bring the notebook, the receipts and the bank statements, and call or text (708) 232-3003 first so we can set aside time.",
    faqs: [
      {
        q: "My business has never had real books. Where do we even start?",
        a: "With your bank statements. For most small businesses, they're the most complete record available. We use them to rebuild the past year, set up categories that fit your work, and then add receipts and invoices where they help. From there, we set up a simple routine for keeping things current. You don't need to organize anything before you call.",
      },
      {
        q: "What is a Schedule C, and do I need one?",
        a: "Schedule C is the form sole proprietors and most single-member LLC owners use to report business income and expenses on their personal return. If you earn money from a business you own by yourself and haven't elected a different tax treatment, you probably file one. We prepare it with you and explain each line that applies to your business.",
      },
      {
        q: "Can you help if I've paid a lot of business expenses in cash?",
        a: "Yes. Cash spending is harder to document, so we'll help you rebuild what you can from receipts, invoices and notes, then set up a simple way to record cash going forward, such as a log or a dedicated business card. Well-documented expenses are easier to support if the IRS ever has questions about your return.",
      },
      {
        q: "Can you help a contractor keep track of job costs?",
        a: "Yes. We can set up your books so materials, subcontractor payments and other costs are tied to each job. That shows which jobs made money and which didn't, and it keeps the records you need for subcontractor 1099s at year end. We'll keep the system as simple as your business allows.",
      },
    ],
    nearby: ["worth", "palos-heights", "orland-park"],
  },
  {
    slug: "worth",
    name: "Worth",
    title: "Worth Bookkeeping & Tax Services | Infinite Accounting",
    description:
      "Worth, IL bookkeeping and tax preparation for small businesses and households. Straightforward advice, careful records and a free first consultation. Call now.",
    heroImage: "worth-hero",
    heroSubhead:
      "Straightforward, jargon-free help with tax filing and simple monthly bookkeeping for families and owner-operated businesses in Worth, IL.",
    cardHook: "Plain-English tax filing and simple monthly books for households and small businesses.",
    intro: [
      "You shouldn't need a glossary to understand your own tax return. That's the idea behind our bookkeeping and tax services in Worth, IL: clear explanations, careful work and no talking over your head. We'd rather spend a few extra minutes explaining than leave you guessing. In a tight-knit community, a straight answer counts for a lot, and so does knowing you can call back with a follow-up question.",
      "For households, we prepare individual tax returns and walk you through what changed from last year, why your refund or balance due looks the way it does, and what paperwork to keep for next time. For small owner-operated businesses in Worth, we offer [simple monthly bookkeeping](/services/bookkeeping): reconciling your accounts, sorting expenses into sensible categories and giving you a short report you can actually read. No thick binders, just the numbers that matter to you.",
      "We also prepare business returns, catch up back-year filings, help with planning before the year ends, and help you make sense of letters from the IRS or the Illinois Department of Revenue. When a line on a form is confusing, we'll explain it in everyday words rather than accounting terms. Your first consultation is free. Bring your questions, even the ones that feel basic, because those are often the most useful ones to ask.",
    ],
    help: {
      bookkeeping: {
        intro:
          "For a small business in Worth, monthly bookkeeping should be easy to understand. We keep it that way.",
        items: [
          "Monthly reconciliation for an owner-operator with one business checking account and one card.",
          "A short monthly profit and loss summary, explained in everyday terms.",
          "Basic QuickBooks training so an owner can enter sales and expenses with confidence.",
          "Keeping receipts and invoices organized through the year so tax preparation starts from clean records.",
        ],
      },
      tax: {
        intro:
          "Households in Worth, IL get clear answers about their return, without the jargon.",
        items: [
          "Individual returns for families, with a plain-English walk-through of what changed this year.",
          "Explaining a refund that's smaller than expected, or a balance due you didn't see coming.",
          "Business returns for owner-operated shops and service businesses filing as sole proprietors or LLCs.",
          "Help understanding a letter from the IRS or the state before you respond to it.",
        ],
      },
    },
    personas: [
      {
        title: "Families filing each year",
        text: "Households who want their return done carefully and explained without the technical language.",
      },
      {
        title: "Hands-on business owners",
        text: "Owners who do the work themselves and want simple monthly books they can read at a glance.",
      },
      {
        title: "First-time filers",
        text: "Young adults filing their first return, or anyone filing on their own for the first time.",
      },
      {
        title: "Retirees and empty nesters",
        text: "People whose income sources have changed and want to understand how that affects their taxes.",
      },
    ],
    visitNote:
      "Our office is at 14475 John Humphrey Dr, Ste 150 in Orland Park. If you're in Worth and have a quick question, call or text (708) 232-3003. There's no such thing as a silly one.",
    faqs: [
      {
        q: "Why is my refund smaller this year than last year?",
        a: "There are several common reasons: a change in your withholding, a credit you no longer qualify for, a child aging out of a dependent credit, or extra income such as interest or a side job. We compare this year's return with last year's and explain the difference in plain terms, so you know what changed and whether to adjust your withholding.",
      },
      {
        q: "What does 'reconciling' my accounts actually mean?",
        a: "It means checking that every transaction in your books matches what your bank and credit card statements show, and finding anything that's missing, duplicated or recorded wrong. It's the step that makes your financial reports trustworthy. We do it monthly for bookkeeping clients and explain anything we find in simple language.",
      },
      {
        q: "Do I really need a bookkeeper for a very small business?",
        a: "Not always. An owner with only a handful of transactions a month can often keep their own records with a simple spreadsheet. Others find that a little monthly help makes tax season much easier. We'll look at your volume and tell you honestly which option makes sense, even if the answer is handling it yourself.",
      },
      {
        q: "What should I do if I get a letter from the IRS or the state?",
        a: "Don't ignore it, and try not to panic. Many notices are routine requests for information or proposed adjustments with a clear response deadline. Note the date and any amount listed, then call or text us. We'll help you understand what the letter is asking, gather the documents involved, and prepare a response if one is needed.",
      },
    ],
    nearby: ["crestwood", "palos-heights", "palos-hills"],
  },
  {
    slug: "orland-hills",
    name: "Orland Hills",
    title: "Orland Hills Bookkeeping & Tax Services | Infinite Accounting",
    description:
      "Orland Hills bookkeeping and tax services right next to our Orland Park office. Local, confidential help for small businesses and families. Free consultation.",
    heroImage: "orland-hills-hero",
    heroSubhead:
      "Careful bookkeeping and tax help for Orland Hills home-office entrepreneurs and households, from our office in neighboring Orland Park.",
    cardHook: "Neighbors of our office: help for home-based businesses and busy households.",
    intro: [
      "A home office has a lot going for it: no commute, no lease, and your files are always down the hall. The tradeoff is that business paperwork tends to blend into household bills. Kitchen-table businesses deserve real books too. For residents who run a business from home, or who simply want a careful hand with the family return, our bookkeeping and tax services in Orland Hills draw a clear line between the two and keep both in order.",
      "On the business side, we set up QuickBooks, reconcile accounts monthly and produce statements that show what your home-based business actually earns. We also help track home office costs so they're documented when it's time to file. On the household side, we prepare [individual tax returns](/services/tax-services), talk through planning when life changes, and help respond to IRS or Illinois Department of Revenue notices.",
      "Working with a firm in the neighboring town has practical perks. Dropping off documents or sitting down to review your return is easy to fit into your week, and you can call or text with questions in between. If you run a business from home and aren't sure what you should be tracking, that's a good first conversation to have. The first consultation is free, so Orland Hills households and home businesses can see how we work before deciding anything.",
    ],
    help: {
      bookkeeping: {
        intro:
          "When your business runs from a home office in Orland Hills, the books can blur into household bills. We keep them separate and current.",
        items: [
          "Setting up QuickBooks for a home-based consultant so business and family expenses stay apart.",
          "Monthly reconciliations for a small product business run from a spare room or garage.",
          "Tracking home office, utility and internet costs so the business share is documented.",
          "Simple cash flow reports for an entrepreneur deciding whether to grow beyond the home office.",
        ],
      },
      tax: {
        intro:
          "From a household return to a home business filing, we handle both from our nearby Orland Park office.",
        items: [
          "Individual returns for Orland Hills households, from simple W-2 filers to families with investments.",
          "Business returns for home-based LLCs and sole proprietors, with home office expenses reviewed.",
          "Tax planning when one spouse leaves a job to start a business from home.",
          "Catching up unfiled returns for a home business that fell behind on filing.",
        ],
      },
    },
    personas: [
      {
        title: "Home-office entrepreneurs",
        text: "Consultants, designers and service providers working from home who want business records kept separate and current.",
      },
      {
        title: "Busy Orland Hills households",
        text: "Families who want a careful return and a nearby office where they can ask questions in person.",
      },
      {
        title: "Couples starting a business",
        text: "When one partner launches a home business, we help set up the books and plan for the tax changes.",
      },
      {
        title: "W-2 earners with side businesses",
        text: "People with a regular job and a small business on the side, run from the kitchen table or a spare room.",
      },
    ],
    visitNote:
      "Our office is in neighboring Orland Park, at 14475 John Humphrey Dr, Ste 150. Call or text (708) 232-3003 to set a time to stop in.",
    faqs: [
      {
        q: "Is it easier to work with an accountant close to home?",
        a: "It depends on how you like to work. Some clients mostly check in by phone or text. Others like knowing they can stop by the office to drop off paperwork, sign forms or go over their return face to face. With our office in neighboring Orland Park, Orland Hills clients can choose whichever suits them.",
      },
      {
        q: "I'm thinking about starting a business from home. When should I talk to an accountant?",
        a: "Before your first sale, if possible. Early decisions, like whether to stay a sole proprietor, how to separate business and household money, and what records to keep, are easier to make at the start than to fix later. A free consultation is a good time to cover the basics and set up simple bookkeeping from day one.",
      },
      {
        q: "My spouse runs a business from home. Can we still file jointly?",
        a: "Yes. Married couples can generally file a joint return when one spouse has business income. The business is usually reported on its own schedule within the joint return, and self-employment tax applies to the spouse who runs it. We'll explain how the business affects your combined return and whether estimated payments make sense for you.",
      },
      {
        q: "What records should I keep for a home-based business?",
        a: "Keep records of income received, receipts for business purchases, mileage logs if you drive for work, and home expenses like utilities, rent or mortgage interest if you claim a home office. Bank and card statements help fill in the rest. We can suggest a simple filing system and keep the books current so nothing has to be rebuilt in a rush at tax time.",
      },
    ],
    nearby: ["orland-park", "tinley-park", "frankfort"],
  },
];

export const getCity = (slug: string) => cityContent.find((c) => c.slug === slug);
