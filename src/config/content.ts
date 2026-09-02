/* ============================================================================
 * CONTENT CONFIGURATION — EDIT THIS FILE
 * ----------------------------------------------------------------------------
 * Services, industries, statistics, testimonials, FAQ and credentials.
 * Items marked // TODO: REPLACE contain placeholder values.
 * ==========================================================================*/

import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  Briefcase,
  CalendarCheck,
  ClipboardList,
  Cpu,
  FileCheck2,
  Handshake,
  KeyRound,
  MessagesSquare,
  Receipt,
  Rocket,
  ScrollText,
  ShoppingCart,
  Store,
  Truck,
  UserRoundCheck,
  Wrench,
} from "lucide-react";

/* --------------------------------------------------------------- statistics */
/**
 * TODO: REPLACE — these are placeholder figures.
 * Only publish numbers that can be substantiated.
 */
export type Stat = {
  value: number;
  suffix: string;
  label: string;
  description: string;
};

export const stats: Stat[] = [
  {
    value: 10,
    suffix: "+",
    label: "Years of Expertise",
    description: "Working across GST, direct tax and business compliance.",
  },
  {
    value: 500,
    suffix: "+",
    label: "Businesses Assisted",
    description: "From single-owner firms to multi-state operations.",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Returns Filed",
    description: "Monthly, quarterly and annual filings managed end to end.",
  },
  {
    value: 99,
    suffix: "%",
    label: "Compliance Focus",
    description: "Deadlines tracked so nothing is missed or filed late.",
  },
];

/* ----------------------------------------------------------------- services */
export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  /** Long-form copy used on /services/[slug] */
  overview: string;
  audience: string[];
  included: string[];
  benefits: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "gst-work",
    title: "GST Work",
    short:
      "Registration, GSTR-1, 3B, 9 and 9C filing, LUT and refund, HSN codes and GST advisory.",
    icon: FileCheck2,
    featured: true,
    overview:
      "The whole GST cycle handled as one engagement — registration, monthly and annual filing, refunds, and the notices that follow when something does not match. Filing is not the difficult part; reconciliation is. Every return is preceded by a GSTR-2B reconciliation, so credit claimed is credit that will hold, and differences are raised with suppliers while they can still be corrected.",
    audience: [
      "Businesses crossing the turnover threshold for the first time",
      "Regular taxpayers filing GSTR-1 and GSTR-3B each month",
      "QRMP taxpayers on the quarterly cycle",
      "Exporters and SEZ suppliers claiming refunds under LUT",
      "Businesses that have fallen behind and need filings brought current",
      "Anyone who has received a notice, or faces suspension or cancellation",
    ],
    included: [
      "GST registration, amendments and multi-state additions",
      "GSTR-1 and GSTR-3B preparation and filing each cycle",
      "Annual return GSTR-9 and reconciliation statement GSTR-9C where applicable",
      "GSTR-2B reconciliation against purchases before credit is claimed",
      "LUT filing for exporters and refund claim preparation",
      "HSN/SAC classification, rate and place-of-supply advisory",
      "Notice replies, departmental representation and appeal drafting",
      "Deadline tracking with reminders ahead of every due date",
    ],
    benefits: [
      {
        title: "Credit that holds",
        body: "Input tax credit is claimed against what actually appears in your 2B, not against assumptions.",
      },
      {
        title: "Nothing filed late",
        body: "Due dates are tracked centrally, so interest and late fees are avoided.",
      },
      {
        title: "Notices handled properly",
        body: "Replies are drafted with supporting records and filed inside the response window.",
      },
    ],
    faq: [
      {
        q: "What do you need from me each month?",
        a: "Sales and purchase records for the period, plus access to your GST portal. Once a working rhythm is set, this becomes a short routine handover.",
      },
      {
        q: "Can you take over filings that are already overdue?",
        a: "Yes. Pending periods are filed in sequence, with late fee and interest exposure calculated up front so there are no surprises.",
      },
      {
        q: "Do I need separate registration for each state?",
        a: "GST registration is state-specific. If you have a place of business in more than one state, a separate registration is generally required for each. I assess your structure and advise accordingly.",
      },
      {
        q: "I have received a notice with a short deadline. Can you help?",
        a: "Reach out immediately with the notice. Deadlines under GST are strict and an early start materially improves the response.",
      },
    ],
  },
  {
    slug: "income-tax-return-filing",
    title: "Income Tax Return Filing",
    short:
      "ITR for individuals, HUF, firms and companies, with TDS returns and tax planning alongside.",
    icon: Receipt,
    overview:
      "The right ITR form, the right regime and the right disclosures are what keep a return from turning into a notice. Every filing starts by matching your books against Form 26AS and the Annual Information Statement, so income reported to the department and income declared in your return agree before anything is submitted — and TDS returns are handled on the same cycle rather than as a separate scramble.",
    audience: [
      "Salaried individuals and professionals filing personal returns",
      "HUFs and family arrangements with multiple income sources",
      "Partnership firms and LLPs filing business returns",
      "Private limited companies with audit and reporting obligations",
      "Deductors required to file quarterly TDS returns",
      "Business owners planning drawings, remuneration and advance tax",
    ],
    included: [
      "ITR filing for individuals, HUF, firms and companies",
      "Form 26AS and AIS reconciliation before the return is prepared",
      "Old versus new regime comparison against your actual figures",
      "Capital gains, house property and other income computation",
      "TDS return filing (24Q, 26Q) with challan and PAN validation",
      "Form 16 and 16A issuance, and response to intimation notices",
      "Advance tax computation and instalment scheduling",
      "Tax planning and consultation ahead of the year closing",
    ],
    benefits: [
      {
        title: "Matched before filing",
        body: "Your return agrees with 26AS and AIS, which is where most mismatch notices begin.",
      },
      {
        title: "The regime that suits you",
        body: "Old and new regime are compared on your numbers rather than assumed.",
      },
      {
        title: "Planned, not reactive",
        body: "Advance tax and deductions are decided early in the year, while they can still change the outcome.",
      },
    ],
    faq: [
      {
        q: "Which ITR form applies to me?",
        a: "It depends on your income sources, whether you have business income, and your constitution. I confirm the correct form against your actual position rather than defaulting to the simplest one.",
      },
      {
        q: "Can you file a return for an earlier year I missed?",
        a: "Belated and updated returns are possible within the windows the law allows. Share the year in question and I will confirm what route is still open and what it involves.",
      },
      {
        q: "When is the right time to start tax planning?",
        a: "Early in the financial year. Planning in March limits the options to whatever has not already happened.",
      },
    ],
  },
  {
    slug: "accounting-book-keeping",
    title: "Account & Book Keeping",
    short:
      "Book keeping, P&L and balance sheet, bank reconciliation and MIS reporting, maintained monthly.",
    icon: ClipboardList,
    overview:
      "Compliance is only as reliable as the books behind it. Accounting maintained with GST treatment applied at entry — rather than reconstructed at filing time — means returns are prepared from records that already agree, and audits stop being an annual scramble.",
    audience: [
      "Businesses without an in-house accounts function",
      "Businesses whose books have fallen behind",
      "Founders who want reliable monthly numbers",
      "Businesses preparing for audit, funding or due diligence",
    ],
    included: [
      "Monthly book keeping with GST treatment applied at entry",
      "Profit & loss statement and balance sheet preparation",
      "Bank, vendor and customer reconciliation",
      "MIS and financial reporting with monthly commentary",
      "Payroll processing and statutory deductions",
      "Year-end financial statement preparation and audit coordination",
    ],
    benefits: [
      {
        title: "Numbers you can rely on",
        body: "Monthly closing means decisions are made on current figures.",
      },
      {
        title: "Filings prepared, not reconstructed",
        body: "Returns come straight from books that already reconcile.",
      },
      {
        title: "Audit-ready throughout",
        body: "Records stay in a state where an audit or diligence request is routine.",
      },
    ],
    faq: [
      {
        q: "Can you work with my existing accounting software?",
        a: "Yes. Common accounting packages are all workable, and if you have no system in place I will recommend one that suits your volume.",
      },
    ],
  },
  {
    slug: "digital-signature",
    title: "Digital Signature Work",
    short:
      "DSC for individuals, directors, firms and companies — a fast and hassle free service.",
    icon: KeyRound,
    overview:
      "A digital signature is the one thing that blocks every other filing when it expires: returns, ROC forms, tenders and e-way bills all stop until it is renewed. I handle issuance and renewal end to end — application, video verification, token configuration and installation — so the certificate is working on your machine rather than sitting in an inbox as a download link you cannot use.",
    audience: [
      "Individuals filing income tax returns requiring a signature",
      "Company directors signing ROC and MCA filings",
      "Partnership firms, LLPs and companies filing statutory returns",
      "Businesses bidding on government e-tenders",
      "Anyone whose existing certificate has expired or is close to expiry",
    ],
    included: [
      "DSC for individuals",
      "DSC for directors and authorised signatories",
      "DSC for firms and companies, including DIN-linked certificates",
      "Signing and encryption certificates for e-tender participation",
      "USB token supply, driver installation and configuration",
      "Renewal tracking before expiry, and revocation where required",
    ],
    benefits: [
      {
        title: "Fast and hassle free",
        body: "Paperless issuance with video verification, so the certificate is usually ready the same day.",
      },
      {
        title: "Installed and working",
        body: "The token is configured on your system and tested against the portal you actually file on.",
      },
      {
        title: "Renewed before it lapses",
        body: "Expiry is tracked, so a dead certificate never holds up a filing deadline.",
      },
    ],
    faq: [
      {
        q: "Which class of DSC do I need?",
        a: "Class 3 is the current standard for income tax, MCA, GST and e-tender filings. Whether you need a signing certificate alone or signing plus encryption depends on whether you bid on tenders.",
      },
      {
        q: "How long does a DSC take to issue?",
        a: "With paperless video verification, issuance is often completed the same day once documents and the verification step are done. Organisational certificates take slightly longer as entity documents are checked.",
      },
      {
        q: "How long is a DSC valid?",
        a: "Certificates are typically issued for one, two or three years. I track the expiry date and start renewal before it lapses so your filings are never interrupted.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/* --------------------------------------------------------------- industries */
export type Industry = {
  name: string;
  icon: LucideIcon;
  description: string;
};

export const industries: Industry[] = [
  {
    name: "E-commerce",
    icon: ShoppingCart,
    description:
      "Marketplace TCS reconciliation, multi-state supply and returns handling across platforms.",
  },
  {
    name: "Retail",
    icon: Store,
    description:
      "High-volume billing, mixed rate baskets and stock movement between outlets.",
  },
  {
    name: "Manufacturing",
    icon: Wrench,
    description:
      "Job work procedures, input credit on capital goods and inverted duty refunds.",
  },
  {
    name: "IT & SaaS",
    icon: Cpu,
    description:
      "Export of services, LUT filing, refund claims and place of supply for overseas clients.",
  },
  {
    name: "Traders",
    icon: Truck,
    description:
      "E-way bill compliance, margin tracking and supplier credit reconciliation.",
  },
  {
    name: "Startups",
    icon: Rocket,
    description:
      "Structure selection, founder compensation and investor-ready compliance records.",
  },
  {
    name: "Professionals",
    icon: Briefcase,
    description:
      "Service classification, threshold monitoring and presumptive taxation options.",
  },
  {
    name: "Service Businesses",
    icon: Handshake,
    description:
      "Contract structuring, reverse charge exposure and time of supply on milestones.",
  },
];

/* ---------------------------------------------------------------- doorstep */
export const doorstep = {
  title: "Door Step Service",
  body: "We come to you, so you can focus on your business. Document collection, signatures and verification handled at your premises.",
  points: [
    "Documents collected from your office or home",
    "Digital signature verification completed on site",
    "No travel or waiting at our end for routine handovers",
  ],
};

/* ------------------------------------------------------------------ pillars */
export type Pillar = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const pillars: Pillar[] = [
  {
    title: "Personalized Guidance",
    body: "Advice based on your actual business requirements — how you sell, where you operate and what your records look like — rather than a standard checklist applied to every client.",
    icon: UserRoundCheck,
  },
  {
    title: "Timely Compliance",
    body: "Due dates are tracked centrally and you hear from me before a deadline, not after it. Filings stay current, so late fees and interest never enter the picture.",
    icon: CalendarCheck,
  },
  {
    title: "Transparent Approach",
    body: "You are told what is being filed, what it costs and what position is being taken. Where something is uncertain, you hear that too, along with the reasoning.",
    icon: ScrollText,
  },
  {
    title: "Long-Term Support",
    body: "Support that goes beyond filing returns — structuring decisions, notices, audits and the questions that come up between due dates.",
    icon: Handshake,
  },
];

/* ------------------------------------------------------------------ process */
export const process = [
  {
    step: "01",
    title: "Consultation",
    body: "We discuss your business, how it operates and where compliance currently stands. You leave the first conversation knowing what applies to you.",
    icon: MessagesSquare,
  },
  {
    step: "02",
    title: "Review",
    body: "Registrations, filing history, books and credit position are reviewed together, and any gaps are listed with what it takes to close them.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Action",
    body: "Filings, registrations, replies or advisory work are completed. You are told what was done, what it means and what happens next.",
    icon: BadgeCheck,
  },
  {
    step: "04",
    title: "Ongoing Support",
    body: "Deadlines are tracked, records stay reconciled, and questions between due dates are answered as they come up.",
    icon: Boxes,
  },
];

/* -------------------------------------------------------------- credentials */
/**
 * Shown as a 2-column strip under the About portrait.
 * An empty `value` hides that entry entirely, so unfilled details never
 * reach the page as visible placeholder text. Keep the count even (2 or 4)
 * so the grid stays balanced.
 */
export const credentials: { label: string; value: string }[] = [
  { label: "Qualification", value: "B.Com, M.Com" },
  { label: "Legal", value: "LLB" },
  { label: "Based In", value: "Narol, Ahmedabad" },
  { label: "Years Practising", value: "10+" },
];

/** TODO: REPLACE — short highlights shown in the About section. */
export const highlights: string[] = [
  "GST, income tax, accounting and DSC work handled under one engagement",
  "A direct point of contact — no handovers between account managers",
  "Notices and departmental correspondence answered within the deadline",
  "Compliance calendars maintained so filings never run late",
];

/* ------------------------------------------------------------ testimonials */
/**
 * TODO: REPLACE — placeholder text.
 * Publish only testimonials you have received and have permission to use.
 */
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Yash made our GST compliance much easier. From registration and return filing to resolving our queries, everything was handled professionally and on time. Highly recommended for businesses looking for reliable GST support.",
    // TODO: name withheld pending written consent — restore once cleared.
    author: "Business Owner",
    role: "Ahmedabad",
    rating: 5,
  },
  {
    quote:
      "The income tax filing process was smooth and straightforward. Yash explained everything clearly, helped me understand the tax implications, and ensured my return was filed correctly and on time.",
    // TODO: name withheld pending written consent — restore once cleared.
    author: "Business Owner",
    role: "Ahmedabad",
    rating: 5,
  },
  {
    quote:
      "Getting our Digital Signature Certificate was quick and hassle-free. Yash guided me through the entire process and helped me get the required documents sorted without any confusion.",
    // TODO: name withheld pending written consent — restore once cleared.
    author: "Director",
    role: "Ahmedabad",
    rating: 5,
  },
];

/* --------------------------------------------------------------------- faq */
export const faqs = [
  {
    q: "What GST services do you provide?",
    a: "Registration, monthly and annual return filing (GSTR-1, 3B, 9 and 9C), input credit reconciliation, LUT and refund work, HSN code and rate advisory, and representation on notices and litigation. Income tax and TDS return filing, accounting and book keeping, and digital signature work are handled alongside under the same engagement.",
  },
  {
    q: "Who should register for GST?",
    a: "Registration is required once aggregate turnover crosses the prescribed threshold, which differs for goods and services and for certain states. It also applies regardless of turnover in specific cases, including inter-state supply of goods, e-commerce sales and reverse charge liability. I confirm applicability against your actual figures rather than a general rule.",
  },
  {
    q: "How often do GST returns need to be filed?",
    a: "Regular taxpayers file GSTR-1 and GSTR-3B monthly, or quarterly under the QRMP scheme with monthly tax payment. Composition dealers file CMP-08 quarterly and GSTR-4 annually. An annual return applies above prescribed turnover limits. Your exact calendar depends on your registration type and turnover.",
  },
  {
    q: "Can you help with GST notices?",
    a: "Yes. That covers scrutiny notices, credit mismatch queries, show cause notices and registration-related notices. The notice is analysed for the section invoked and the deadline, a reply is drafted with supporting records, and representation is provided at hearings. Reach out as early as possible — response windows are short.",
  },
  {
    q: "Do you provide ongoing GST compliance?",
    a: "Yes. Ongoing engagements cover the full monthly cycle: reconciliation against GSTR-2B, return preparation and filing, deadline tracking, ledger review and supplier follow-up on missing invoices — plus advisory on questions that come up between due dates.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Yes, and a significant part of the practice is exactly that. Early-stage engagements usually begin with structure selection and registration, then move into a routine filing rhythm as operations start.",
  },
  {
    q: "Do you handle income tax and TDS returns as well as GST?",
    a: "Yes. Income tax returns for individuals, HUF, firms and companies are filed alongside GST work, with Form 26AS and AIS reconciled before submission. Quarterly TDS returns are filed on the same cycle, and Form 16/16A issuance is included.",
  },
  {
    q: "Can you arrange a digital signature certificate?",
    a: "Yes. Class 3 DSC is issued for individuals, directors, partners, firms and companies, including signing and encryption certificates for e-tenders. The USB token is configured and tested on your system, and renewal is tracked before the certificate expires.",
  },
  {
    q: "Do you offer doorstep service?",
    a: "Yes. For document collection, signatures and verification steps, I can come to your premises so the work does not interrupt your day. Routine communication continues over WhatsApp, email and phone.",
  },
  {
    q: "How can I book a consultation?",
    a: "Use the enquiry form on this site, send a WhatsApp message, or call directly. Share a short note on your business and what you need help with, and the first conversation covers what applies to you and how the engagement would work.",
  },
];

/* --------------------------------------------------------------- navigation */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const serviceOptions = services.map((s) => s.title);
