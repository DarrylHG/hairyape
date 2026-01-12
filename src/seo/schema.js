export const SITE = {
  name: "Ape Champs Swim",
  url: "https://apechampsswim.com.sg",
  logo: "https://apechampsswim.com.sg/logo.png",
  country: "SG",
  sameAs: [],
};

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    sameAs: SITE.sameAs,
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.url,
    image: SITE.logo,
    areaServed: "Singapore",
    address: { "@type": "PostalAddress", addressCountry: SITE.country },
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Private Kids Swimming Lessons (Condo Pools)",
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: "Singapore",
    serviceType: "Kids swimming lessons conducted at condominium pools",
  };
}

export function webPageSchema({ name, url, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url,
    description,
  };
}

export function faqPageSchema(faqs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
