import { SITE } from "./schema";

export function webPageSchema({ url, name, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function geoServiceSchema({ url, name, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    areaServed: "Singapore",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    url,
  };
}
