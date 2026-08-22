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
  FileSpreadsheet,
  Gavel,
  Handshake,
  Landmark,
  LineChart,
  MessagesSquare,
  Rocket,
  ScrollText,
  ShieldCheck,
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
    slug: "gst-registration",
    title: "GST Registration",
    short:
      "New registrations, amendments and multi-state additions, prepared correctly the first time.",
    icon: FileCheck2,
    overview:
      "Registration decides how your business is treated under GST for years afterwards — the constitution you declare, the places of business you list, the HSN and SAC codes you select and the composition choice you make all carry forward. I handle the application end to end, from document preparation to responding to departmental queries, so the registration you receive matches how your business actually operates.",
    audience: [
      "Businesses crossing the turnover threshold for the first time",
      "E-commerce sellers who require registration regardless of turnover",
      "Businesses adding a branch, godown or new state of operation",
      "Firms needing amendments after a change in address, partners or activity",
      "Voluntary registrations taken to claim input tax credit",
    ],
    included: [
      "Assessment of whether registration is required and under which category",
      "Document checklist prepared for your specific constitution",
      "Application filing on the GST portal with correct HSN/SAC classification",
      "Response to clarifications raised by the officer",
      "Guidance on composition scheme suitability where applicable",
      "Post-registration walkthrough of your compliance calendar",
    ],
    benefits: [
      {
        title: "Correct from the start",
        body: "Classification and place-of-business details entered accurately, so amendments are not needed later.",
      },
      {
        title: "Queries handled",
        body: "Departmental clarifications are drafted and filed within the response window.",
      },
      {
        title: "You know what follows",
        body: "You leave with a clear picture of which returns apply to you and when they are due.",
      },
    ],
    faq: [
      {
        q: "How long does GST registration take?",
        a: "Once complete documents are available, the application is filed promptly. Departmental processing time varies, and a physical verification or clarification request can extend it. You are kept informed at each stage.",
      },
      {
        q: "Do I need separate registration for each state?",
        a: "GST registration is state-specific. If you have a place of business in more than one state, a separate registration is generally required for each. I assess your structure and advise accordingly.",
      },
      {
        q: "Should I opt for the composition scheme?",
        a: "It depends on your turnover, customer profile and whether your buyers need input tax credit. I compare both options against your numbers before you decide.",
      },
    ],
  },
  {
    slug: "gst-return-filing",
    title: "GST Return Filing",
    short:
      "Monthly, quarterly and annual returns filed on time, with reconciliation done before submission.",
    icon: FileSpreadsheet,
    featured: true,
    overview:
      "Filing is not the difficult part — reconciliation is. Mismatches between your books, your GSTR-2B and your suppliers' filings are what create notices months later. Every return I file is preceded by a reconciliation, so credit claimed is credit that will hold, and differences are raised with suppliers while they can still be corrected.",
    audience: [
      "Regular taxpayers filing GSTR-1 and GSTR-3B",
      "QRMP taxpayers on the quarterly cycle",
      "Composition dealers filing CMP-08 and GSTR-4",
      "Businesses that have fallen behind and need filings brought current",
    ],
    included: [
      "GSTR-1 and GSTR-3B preparation and filing",
      "GSTR-2B reconciliation against purchase records before credit is claimed",
      "Supplier follow-up list for invoices missing from your 2B",
      "Annual return GSTR-9 and reconciliation statement GSTR-9C where applicable",
      "Deadline tracking with reminders ahead of each due date",
      "Ledger review covering cash, credit and liability balances",
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
        title: "Differences caught early",
        body: "Mismatches are raised in the same month rather than surfacing in an annual reconciliation.",
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
    ],
  },
  {
    slug: "gst-advisory",
    title: "GST Advisory",
    short:
      "Clear positions on classification, place of supply, credit eligibility and transaction structuring.",
    icon: MessagesSquare,
    overview:
      "Most GST disputes trace back to a decision made without advice: a rate applied by assumption, an export treated as a local supply, credit claimed on a blocked item. Advisory work is about resolving those questions before they are filed, and documenting the reasoning so the position can be defended if it is ever examined.",
    audience: [
      "Businesses launching a new product line or service",
      "Exporters and suppliers to SEZ units",
      "Businesses with inter-state, branch or stock transfer movements",
      "Anyone uncertain about rate, classification or credit eligibility",
    ],
    included: [
      "Rate and HSN/SAC classification opinions",
      "Place of supply determination for inter-state and export transactions",
      "Input tax credit eligibility review, including blocked credit analysis",
      "Reverse charge applicability assessment",
      "Transaction and contract structuring from a GST standpoint",
      "Written summary of the position taken and the basis for it",
    ],
    benefits: [
      {
        title: "Decisions on record",
        body: "Each position is documented with its reasoning, so it can be explained years later.",
      },
      {
        title: "Answered in plain language",
        body: "You get a usable conclusion, not a wall of section references.",
      },
      {
        title: "Fewer disputes downstream",
        body: "Getting classification right at the outset removes the most common cause of notices.",
      },
    ],
    faq: [
      {
        q: "Can I ask a one-off question without an ongoing engagement?",
        a: "Yes. Standalone advisory on a specific transaction or classification question is available.",
      },
    ],
  },
  {
    slug: "gst-audit",
    title: "GST Audit & Reconciliation",
    short:
      "Books reconciled against returns and 2B, with gaps identified before the department finds them.",
    icon: ShieldCheck,
    overview:
      "An audit review works backwards from your filings to your books and forward from your books to your filings, and reports every difference between them. The point is to find issues while they can still be corrected voluntarily, rather than discovering them in a departmental audit when the options are narrower.",
    audience: [
      "Businesses crossing the turnover limit for GSTR-9C",
      "Businesses selected for departmental audit",
      "Anyone taking over books from a previous consultant",
      "Businesses preparing for due diligence, funding or a sale",
    ],
    included: [
      "Turnover reconciliation between books, GSTR-1, GSTR-3B and financials",
      "Input tax credit reconciliation against GSTR-2B for the period",
      "Review of reverse charge and blocked credit treatment",
      "Identification of short payments, excess credit and classification errors",
      "Findings report with the correction route for each item",
      "Assistance with voluntary payment through DRC-03 where required",
    ],
    benefits: [
      {
        title: "Exposure quantified",
        body: "You see the size of every gap and what it would cost to correct it.",
      },
      {
        title: "Corrected on your terms",
        body: "Voluntary correction is almost always less expensive than departmental assessment.",
      },
      {
        title: "Clean records",
        body: "Reconciled books stand up during due diligence and departmental review alike.",
      },
    ],
    faq: [
      {
        q: "Is GSTR-9C mandatory for my business?",
        a: "It applies above a prescribed aggregate turnover threshold, which has changed over time. I confirm applicability against your turnover for the specific financial year.",
      },
    ],
  },
  {
    slug: "gst-notice-litigation",
    title: "GST Notice & Litigation Support",
    short:
      "Notices read properly, replies drafted with evidence, and representation through the process.",
    icon: Gavel,
    overview:
      "A GST notice has a deadline and a specific statutory basis, and both matter. The first step is establishing what is actually being alleged and under which section, because that determines the reply, the evidence required and the options available. From there the response is drafted, supported and filed within the window.",
    audience: [
      "Businesses that have received ASMT-10, DRC-01 or a show cause notice",
      "Taxpayers facing a credit mismatch or return scrutiny query",
      "Businesses with a registration suspension or cancellation notice",
      "Anyone considering an appeal against an order",
    ],
    included: [
      "Analysis of the notice, the section invoked and the deadline",
      "Reconstruction of the underlying records and supporting evidence",
      "Drafting and filing of the reply with annexures",
      "Representation before the officer during personal hearings",
      "Appeal drafting and filing where the order warrants it",
      "Advice on whether to contest or pay, with the cost of each set out",
    ],
    benefits: [
      {
        title: "Deadlines protected",
        body: "Response windows are tracked from the day the notice is received.",
      },
      {
        title: "Evidence-led replies",
        body: "Each contention is supported by records rather than assertion.",
      },
      {
        title: "A realistic assessment",
        body: "Where a position is weak, you are told so before costs are incurred.",
      },
    ],
    faq: [
      {
        q: "I have received a notice with a short deadline. Can you help?",
        a: "Reach out immediately with the notice. Deadlines under GST are strict and an early start materially improves the response.",
      },
    ],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning & Advisory",
    short:
      "Structure, timing and compliance planned together so tax outcomes are decided, not discovered.",
    icon: LineChart,
    overview:
      "Tax planning is a scheduling and structuring exercise carried out before transactions happen. It covers how the business is constituted, how income is drawn, when capital purchases are made and how advance tax is spread across the year — all within what the law permits, and documented accordingly.",
    audience: [
      "Business owners planning drawings and remuneration",
      "Firms weighing proprietorship, partnership, LLP or company structure",
      "Businesses planning capital expenditure or asset sales",
      "Professionals managing advance tax across the year",
    ],
    included: [
      "Review of business structure and its tax consequences",
      "Advance tax computation and instalment scheduling",
      "Capital expenditure and depreciation timing analysis",
      "Deduction and exemption review against your actual position",
      "Income tax return preparation and filing",
      "TDS applicability review and return filing",
    ],
    benefits: [
      {
        title: "Planned, not reactive",
        body: "Decisions are made before the year closes, when they can still change the outcome.",
      },
      {
        title: "Cash flow visibility",
        body: "You know what is payable and when, well ahead of each due date.",
      },
      {
        title: "Defensible positions",
        body: "Every position taken is one that can be supported on examination.",
      },
    ],
    faq: [
      {
        q: "When is the right time to start tax planning?",
        a: "Early in the financial year. Planning in March limits the options to whatever has not already happened.",
      },
    ],
  },
  {
    slug: "business-registration",
    title: "Business Registration",
    short:
      "Company, LLP, partnership and proprietorship setup, plus the registrations that follow.",
    icon: Landmark,
    overview:
      "Choosing a structure is the first tax decision a business makes, and it affects rates, compliance load, liability and how easily funding can be raised later. I work through the trade-offs against your actual plans, then handle incorporation and the registrations that follow it.",
    audience: [
      "Founders incorporating a company or LLP",
      "Proprietors formalising an existing business",
      "Partners converting a firm into an LLP or company",
      "Businesses needing MSME, IEC or professional tax registration",
    ],
    included: [
      "Structure comparison across tax, compliance and liability",
      "Name reservation and incorporation filing",
      "PAN, TAN and GST registration",
      "MSME/Udyam, IEC and professional tax registration as required",
      "Drafting of partnership deed or LLP agreement",
      "Post-incorporation compliance calendar",
    ],
    benefits: [
      {
        title: "The right structure",
        body: "Chosen against your plans, not defaulted to whatever is quickest to register.",
      },
      {
        title: "One coordinated process",
        body: "Incorporation and the registrations that follow are handled together.",
      },
      {
        title: "Compliant from day one",
        body: "You start with the filing calendar already mapped out.",
      },
    ],
    faq: [
      {
        q: "Private limited or LLP?",
        a: "It depends on whether you plan to raise external funding, how many owners there are and what compliance load you are willing to carry. I set the differences out against your specific plans.",
      },
    ],
  },
  {
    slug: "accounting-compliance",
    title: "Accounting & Compliance",
    short:
      "Books maintained to a standard that makes every filing and audit straightforward.",
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
      "Monthly bookkeeping with GST treatment applied at entry",
      "Bank, vendor and customer reconciliation",
      "Monthly management reporting with commentary",
      "TDS computation, payment and return filing",
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
/** TODO: REPLACE — do not publish qualifications that cannot be verified. */
export const credentials: { label: string; value: string }[] = [
  { label: "Qualification", value: "Add qualification" },
  { label: "Registration No.", value: "Add registration number" },
  { label: "Practising Since", value: "Add year" },
  { label: "Based In", value: "Add city" },
];

/** TODO: REPLACE — short highlights shown in the About section. */
export const highlights: string[] = [
  "GST registration, filing, advisory and audit handled under one engagement",
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
      "Professional, responsive and extremely clear throughout the entire process.",
    author: "Client Name", // TODO: REPLACE
    role: "Business, City", // TODO: REPLACE
    rating: 5,
  },
  {
    quote:
      "Placeholder testimonial. Replace this with a genuine client comment about the engagement.",
    author: "Client Name", // TODO: REPLACE
    role: "Business, City", // TODO: REPLACE
    rating: 5,
  },
  {
    quote:
      "Placeholder testimonial. Replace this with a genuine client comment about the engagement.",
    author: "Client Name", // TODO: REPLACE
    role: "Business, City", // TODO: REPLACE
    rating: 5,
  },
];

/* --------------------------------------------------------------------- faq */
export const faqs = [
  {
    q: "What GST services do you provide?",
    a: "Registration, monthly and annual return filing, input credit reconciliation, advisory on classification and place of supply, audit and reconciliation work, and representation on notices and litigation. Direct tax, business registration and accounting are handled alongside where required.",
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
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const serviceOptions = services.map((s) => s.title);
