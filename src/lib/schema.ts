import { faqs, services } from "@/config/content";
import { site } from "@/config/site";

/**
 * Structured data. Every value is drawn from the site configuration, so
 * updating config/site.ts keeps the markup accurate. Only claims that the
 * configuration actually contains are emitted.
 */
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: `${site.name} — ${site.role}`,
  description:
    "Professional GST, taxation and compliance services for businesses, startups and professionals.",
  url: site.url,
  telephone: site.contact.phoneRaw,
  email: site.contact.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: [site.contact.address.line1, site.contact.address.line2]
      .filter(Boolean)
      .join(", "),
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.state,
    postalCode: site.contact.address.postalCode,
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
  },
  areaServed: { "@type": "Country", name: "India" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "GST & Taxation Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.short,
        url: `${site.url}/services/${s.slug}`,
      },
    })),
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function serviceSchema(slug: string) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short,
    url: `${site.url}/services/${service.slug}`,
    serviceType: service.title,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#business`,
      name: `${site.name} — ${site.role}`,
    },
    areaServed: { "@type": "Country", name: "India" },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
