/* ============================================================================
 * SITE CONFIGURATION — EDIT THIS FILE
 * ----------------------------------------------------------------------------
 * Every piece of business information on the website lives here.
 * Values marked  // TODO: REPLACE  are placeholders and must be updated with
 * real, verified information before the site goes live.
 * ==========================================================================*/

export const site = {
  /* ---------------------------------------------------------------- identity */
  name: "Yash Shah",
  role: "GST Consultant & Tax Advisor",
  shortRole: "GST Consultant",
  tagline: "GST & Tax Compliance, Handled With Precision.",

  /** Used for canonical URLs, sitemap, Open Graph. */
  url: "https://yashshah.example.com", // TODO: REPLACE with the live domain

  /* ---------------------------------------------------------------- contact */
  contact: {
    phone: "+91 74053 79045",
    /** Digits only, used for tel: links */
    phoneRaw: "+917405379045",
    email: "yashsv1994@gmail.com",
    /** International format, digits only — no +, spaces or dashes. */
    whatsapp: "917405379045",
    whatsappMessage:
      "Hello Yash, I would like to discuss my GST and tax compliance requirements.",
    address: {
      line1: "Narol",
      line2: "", // TODO: REPLACE with street / landmark if you want it shown
      city: "Ahmedabad",
      state: "Gujarat",
      postalCode: "382405", // TODO: VERIFY — Narol PIN
      country: "India",
    },
    /** Shown next to the location block. */
    hours: "Mon – Sat · 10:00 AM – 7:00 PM", // TODO: REPLACE
  },

  /* ------------------------------------------------------- whatsapp widget */
  /**
   * Copy for the floating chat panel. Quick replies are one-tap prompts —
   * picking one opens WhatsApp with that message already written.
   */
  chat: {
    /** Shown in the panel header, under the name. */
    status: "Typically replies within a few minutes",
    greeting:
      "Hello. I'm Yash — GST registration, returns, income tax and book keeping. What can I help you with?",
    /** Placeholder for the free-text field. */
    placeholder: "Type your message…",
    quickReplies: [
      "GST registration",
      "GST return filing",
      "Income tax return",
      "Book keeping",
      "Digital signature",
      "Something else",
    ],
  },

  /* ------------------------------------------------------------------ social */
  social: {
    linkedin: "", // TODO: REPLACE or leave empty to hide
    twitter: "",
    instagram: "",
    facebook: "",
  },
} as const;

/** Ready-to-use WhatsApp deep link. */
export const whatsappUrl = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`;

/** Build a WhatsApp deep link for an arbitrary message. */
export const whatsappUrlFor = (message: string) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const telUrl = `tel:${site.contact.phoneRaw}`;
export const mailtoUrl = `mailto:${site.contact.email}`;

export const formattedAddress = [
  site.contact.address.line1,
  site.contact.address.line2,
  `${site.contact.address.city}, ${site.contact.address.state} ${site.contact.address.postalCode}`,
].filter(Boolean);
