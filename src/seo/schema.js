export const SITE = {
  name: "Ape Champs Swim",
  url: "https://apechampsswim.com.sg",
  logo: "https://apechampsswim.com.sg/logo.png",
  country: "SG",
  sameAs: [],
  // E-E-A-T signals for trust
  uen: "53536393M",
  telephone: "+6589510121",
  email: "hello@apechampsswim.com.sg",
  description:
    "Singapore's trusted kids swimming lessons provider. Private swim coaching at condo pools across Punggol, Sengkang, Hougang, and all Singapore estates. MOE-aligned, SwimSafer certified.",
};

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    sameAs: SITE.sameAs,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.telephone,
      contactType: "Customer Service",
      areaServed: "SG",
      availableLanguage: ["English", "Chinese"],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name: SITE.name,
    url: SITE.url,
    image: SITE.logo,
    description: SITE.description,
    areaServed: {
      "@type": "City",
      name: "Singapore",
    },
    address: { "@type": "PostalAddress", addressCountry: SITE.country },
    telephone: SITE.telephone,
    email: SITE.email,
    priceRange: "$$",
    knowsAbout: [
      "Kids Swimming Lessons",
      "SwimSafer Programme",
      "Condo Pool Lessons",
      "Private Swim Coaching",
    ],
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Private Kids Swimming Lessons at Condo Pools",
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: {
      "@type": "City",
      name: "Singapore",
    },
    serviceType: "Swimming Instruction",
    description:
      "Private and small-group swimming lessons for kids aged 0.5–12 years. Conducted at condominium pools across Singapore. MOE-aligned curriculum, SwimSafer certified coaches.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceRange: "$$",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Children aged 0.5–12 years, Adults, Special Needs",
    },
  };
}

export function webPageSchema({ name, url, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
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

// Citation-friendly programme schema
export function educationalProgrammeSchema({ name, description, ageRange }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    audience: {
      "@type": "Audience",
      audienceType: ageRange,
    },
    coursePrerequisites: "None – suitable for beginners",
    educationalLevel: "Beginner to Advanced",
  };
}

// Location-specific service schema
export function locationServiceSchema({
  locationName,
  areaName,
  description,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Kids Swimming Lessons in ${areaName}`,
    description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: {
      "@type": "Place",
      name: locationName,
      containedInPlace: {
        "@type": "City",
        name: "Singapore",
      },
    },
    serviceType: "Swimming Instruction",
  };
}
