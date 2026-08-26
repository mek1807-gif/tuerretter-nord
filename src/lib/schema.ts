/**
 * Hilfsfunktionen zur Erzeugung von Schema.org / JSON-LD Strukturdaten.
 * Zentral gehalten, damit Unternehmensdaten (Telefon, Adresse, Zeiten)
 * konsistent aus src/config/site.ts übernommen werden.
 */
import { siteConfig } from "../config/site";
import { cities } from "../config/cities";
import type { FaqItem } from "../config/faq";

/**
 * LocalBusiness- / Locksmith-Strukturdaten für das gesamte Unternehmen.
 * "Locksmith" ist ein von Google/Schema.org unterstützter, spezifischerer
 * Subtyp von LocalBusiness für Schlüsseldienste.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "@id": `${siteConfig.url}/#unternehmen`,
    name: siteConfig.brandName,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: "+4941054062924",
    email: siteConfig.email,
    image: `${siteConfig.url}/images/og-default.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: cities.map((city) => ({
      "@type": "City",
      name: city.name,
    })),
    openingHoursSpecification: siteConfig.openingHours.schema.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days,
      opens: entry.opens,
      closes: entry.closes,
    })),
    priceRange: "€€",
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "Locksmith",
      name: siteConfig.brandName,
      telephone: "+4941054062924",
      url: siteConfig.url,
    },
    areaServed: cities.map((city) => city.name),
  };
}
