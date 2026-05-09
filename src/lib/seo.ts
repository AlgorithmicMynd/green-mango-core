import { contactDetails, serviceFaqs, servicesList } from "@/lib/cms-data";

export const SITE_NAME = "Mango Stack AI";
export const SITE_URL = "https://www.mangostackai.com";
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export const DEFAULT_DESCRIPTION =
  "Mango Stack AI builds custom software, AI systems, workflow automation, and digital marketing systems for growing teams and enterprise operations.";

const DEFAULT_KEYWORDS = [
  "Mango Stack AI",
  "custom software development",
  "AI automation",
  "AI consulting",
  "workflow automation",
  "digital marketing",
  "SEO services",
];

type JsonLd = Record<string, unknown>;

interface SeoConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  schema?: JsonLd | Array<JsonLd>;
  noIndex?: boolean;
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, SITE_URL).toString();
}

function jsonLd(schema: JsonLd) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(schema),
  };
}

export function buildSeo({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  type = "website",
  schema,
  noIndex = false,
}: SeoConfig) {
  const canonical = absoluteUrl(path);
  const schemaItems = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords.join(", ") },
      {
        name: "robots",
        content: noIndex
          ? "noindex, nofollow"
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: `${SITE_NAME} brand preview` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: schemaItems.map(jsonLd),
  };
}

export function buildRootSeo(stylesheetHref: string) {
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Mango Stack AI | Custom Software, AI Automation & Digital Marketing",
      },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "author", content: SITE_NAME },
      { name: "application-name", content: SITE_NAME },
      { name: "theme-color", content: "#f59e0b" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: DEFAULT_IMAGE },
      { property: "og:image:alt", content: `${SITE_NAME} brand preview` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: DEFAULT_IMAGE },
    ],
    links: [
      {
        rel: "stylesheet",
        href: stylesheetHref,
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/logo.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/logo.png",
      },
    ],
    scripts: [organizationSchema(), websiteSchema()].map(jsonLd),
  };
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: DEFAULT_IMAGE,
    email: contactDetails.email,
    telephone: contactDetails.phone,
    founder: {
      "@type": "Person",
      name: "Harsh Shukla",
      jobTitle: "Founder & CEO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: contactDetails.email,
      telephone: contactDetails.phone,
      availableLanguage: ["English", "Hindi"],
    },
    areaServed: ["India", "United States", "Europe", "Global"],
    knowsAbout: [
      "Custom Software Development",
      "Artificial Intelligence",
      "Workflow Automation",
      "Digital Marketing",
      "Search Engine Optimization",
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function webPageSchema(
  path: string,
  title: string,
  description: string,
  pageType = "WebPage",
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function breadcrumbSchema(items: Array<BreadcrumbItem>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function servicesCatalogSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Mango Stack AI Services",
    url: absoluteUrl("/services"),
    itemListElement: servicesList.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: "Global",
        serviceType: service.tag,
        url: absoluteUrl(`/services#${service.id}`),
      },
    })),
  };
}

export function faqSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
