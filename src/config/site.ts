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
    phone: "+91 00000 00000", // TODO: REPLACE
    /** Digits only, used for tel: links */
    phoneRaw: "+910000000000", // TODO: REPLACE
    email: "hello@example.com", // TODO: REPLACE
    /** International format, digits only — no +, spaces or dashes. */
    whatsapp: "910000000000", // TODO: REPLACE
    whatsappMessage:
      "Hello Yash, I would like to discuss my GST and tax compliance requirements.",
    address: {
      line1: "Office Address Line 1", // TODO: REPLACE
      line2: "Area, Landmark", // TODO: REPLACE
      city: "City", // TODO: REPLACE
      state: "State", // TODO: REPLACE
      postalCode: "000000", // TODO: REPLACE
      country: "India",
    },
    /** Shown next to the location block. */
    hours: "Mon – Sat · 10:00 AM – 7:00 PM", // TODO: REPLACE
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

export const telUrl = `tel:${site.contact.phoneRaw}`;
export const mailtoUrl = `mailto:${site.contact.email}`;

export const formattedAddress = [
  site.contact.address.line1,
  site.contact.address.line2,
  `${site.contact.address.city}, ${site.contact.address.state} ${site.contact.address.postalCode}`,
].filter(Boolean);
