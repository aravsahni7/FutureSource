// SEO metadata for all pages
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  robots?: string;
  schema?: Record<string, unknown>;
}

const baseUrl = "https://futuresource.ca";
const defaultImage = "https://futuresource.ca/og-image.png";

// Helper to generate canonical URLs
const createCanonical = (path: string) => `${baseUrl}${path}`;

export const seoData: Record<string, SEOMetadata> = {
  "/": {
    title: "FutureSource | Web Design & Digital Marketing Agency Montreal | WordPress, Shopify, Webflow",
    description: "Montreal's digital marketing agency specializing in web design with WordPress, Shopify, and Webflow. Expert SEO, Paid Ads, and CRO services. We scale ambitious brands.",
    keywords: "web design, web development, digital marketing, SEO, Montreal, agency, WordPress, Shopify, Webflow, Drupal, web design Montreal, digital marketing agency",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/"),
    robots: "index, follow",
  },
  "/services": {
    title: "Digital Marketing & Web Design Services | WordPress, Shopify, Webflow, HubSpot | FutureSource",
    description: "Full-suite digital marketing services including web design (WordPress, Shopify, Webflow), SEO, Paid Ads, CRO, and ABM. Integrated solutions across HubSpot and Salesforce CRM platforms.",
    keywords: "digital marketing services, SEO services, paid ads, web design, CRO, WordPress, Shopify, Webflow, HubSpot, Salesforce, CMS platforms, CRM integration",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/services"),
    robots: "index, follow",
  },
  "/services/web-design": {
    title: "Web Design Services | WordPress & Shopify Development | FutureSource Montreal",
    description: "Professional web design and development on WordPress, Shopify, Webflow, and Drupal. Custom high-performance websites built for conversion. Technical SEO, responsive design, and e-commerce optimization.",
    keywords: "web design, web development, WordPress web design, Shopify development, Webflow design, responsive design, custom website, e-commerce design, conversion-focused design, Montreal",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/services/web-design"),
    robots: "index, follow",
  },
  "/services/paid-ads": {
    title: "Paid Advertising Services | Google Ads, Facebook Ads, TikTok, Meta | FutureSource",
    description: "Expert paid advertising management across Google, Facebook, Instagram, and TikTok with integrated HubSpot and Salesforce CRM tracking. ROI-focused campaigns with detailed analytics and optimization.",
    keywords: "paid ads, Google Ads, Facebook ads, TikTok ads, PPC, advertising management, ad campaign optimization, Google Ads management, Facebook Ads specialist",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/services/paid-ads"),
    robots: "index, follow",
  },
  "/services/seo-content": {
    title: "SEO & Content Marketing Services | Technical SEO | FutureSource",
    description: "Strategic SEO and content marketing to increase organic visibility. Technical SEO, content strategy, and on-page optimization services.",
    keywords: "SEO services, content marketing, technical SEO, organic traffic, ranking",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/services/seo-content"),
    robots: "index, follow",
  },
  "/services/cro-landing-pages": {
    title: "CRO & Landing Page Optimization Services | FutureSource",
    description: "Conversion rate optimization and high-performing landing page design. A/B testing, user experience optimization, and conversion focused design.",
    keywords: "CRO, conversion rate optimization, landing pages, A/B testing, optimization",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/services/cro-landing-pages"),
    robots: "index, follow",
  },
  "/services/account-based-marketing": {
    title: "Account-Based Marketing (ABM) Services | FutureSource",
    description: "Targeted ABM strategies for B2B businesses. Personalized marketing campaigns focused on high-value accounts and enterprise clients.",
    keywords: "account-based marketing, ABM, B2B marketing, targeted marketing, enterprise",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/services/account-based-marketing"),
    robots: "index, follow",
  },
  "/about": {
    title: "About FutureSource | Digital Marketing Agency Montreal",
    description: "Learn about FutureSource, our mission, team, and approach to digital marketing. Scaling ambitious brands since day one.",
    keywords: "about us, digital marketing agency, Montreal, team, mission",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/about"),
    robots: "index, follow",
  },
  "/process": {
    title: "Our Digital Marketing Process | FutureSource",
    description: "Understand our proven process for strategy, implementation, and optimization. Transparent and results-driven approach.",
    keywords: "marketing process, strategy, implementation, optimization, methodology",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/process"),
    robots: "index, follow",
  },
  "/pricing": {
    title: "Digital Marketing Pricing & Packages | FutureSource",
    description: "Flexible pricing plans for digital marketing services. Transparent pricing for Web Design, SEO, Paid Ads, and CRO.",
    keywords: "pricing, digital marketing packages, service plans, costs",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/pricing"),
    robots: "index, follow",
  },
  "/insights": {
    title: "Digital Marketing Insights & Blog Articles | FutureSource",
    description: "Read our latest insights on digital marketing trends, strategies, and best practices. Expert articles on SEO, paid ads, and CRO.",
    keywords: "digital marketing blog, insights, articles, trends, best practices",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/insights"),
    robots: "index, follow",
  },
  "/contact": {
    title: "Contact FutureSource | Get in Touch with Our Team",
    description: "Contact our digital marketing agency. Get in touch to discuss your project and how we can help scale your business.",
    keywords: "contact us, digital marketing consultation, get in touch",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/contact"),
    robots: "index, follow",
  },
  "/book-a-call": {
    title: "Book a Call | Digital Marketing Consultation | FutureSource",
    description: "Schedule a consultation call with our digital marketing strategists. Discuss your goals and see how we can help.",
    keywords: "consultation, book a call, digital marketing strategy session",
    ogType: "website",
    ogImage: defaultImage,
    canonicalUrl: createCanonical("/book-a-call"),
    robots: "index, follow",
  },
  "/privacy": {
    title: "Privacy Policy | FutureSource",
    description: "Privacy policy and data protection practices of FutureSource digital marketing agency.",
    keywords: "privacy policy, data protection, GDPR",
    ogType: "website",
    canonicalUrl: createCanonical("/privacy"),
    robots: "noindex, follow",
  },
  "/terms": {
    title: "Terms of Service | FutureSource",
    description: "Terms of service and conditions for using FutureSource services.",
    keywords: "terms of service, legal, conditions",
    ogType: "website",
    canonicalUrl: createCanonical("/terms"),
    robots: "noindex, follow",
  },
  "/cookies": {
    title: "Cookie Policy | FutureSource",
    description: "Cookie policy and settings for FutureSource website.",
    keywords: "cookie policy, cookies, website settings",
    ogType: "website",
    canonicalUrl: createCanonical("/cookies"),
    robots: "noindex, follow",
  },
};

export function getSEOData(pathname: string): SEOMetadata {
  return seoData[pathname] || seoData["/"];
}

export function getCanonicalUrl(pathname: string): string {
  return `${baseUrl}${pathname}`;
}
