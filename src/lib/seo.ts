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
}

const baseUrl = "https://futuresource.ca";
const defaultImage = "https://futuresource.ca/og-image.png";

export const seoData: Record<string, SEOMetadata> = {
  "/": {
    title: "FutureSource | Web Design & Web Development Marketing Agency Montreal",
    description: "Experienced Web Development & Digital Marketing Agency in Montreal. Scaling brands using technical SEO, Paid Ads, CRO, and Account-Based Marketing (ABM).",
    keywords: "web design, web development, digital marketing, SEO, Montreal, agency",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/services": {
    title: "Digital Marketing & Web Design Services | FutureSource",
    description: "Comprehensive digital marketing services including Web Design, SEO, Paid Ads, CRO, and Account-Based Marketing. Scale your business effectively.",
    keywords: "digital marketing services, SEO services, paid ads, web design, CRO",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/services/web-design": {
    title: "Web Design Services | FutureSource | Montreal Agency",
    description: "Professional web design and development services. Custom websites built for conversion and performance. Technical expertise meets creative design.",
    keywords: "web design, web development, custom website, responsive design, Montreal",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/services/paid-ads": {
    title: "Paid Advertising Services | Google Ads, Facebook Ads, TikTok | FutureSource",
    description: "Expert paid advertising management across Google, Facebook, Instagram, and TikTok. ROI-focused campaigns that scale your revenue.",
    keywords: "paid ads, Google Ads, Facebook ads, TikTok ads, PPC, advertising management",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/services/seo-content": {
    title: "SEO & Content Marketing Services | Technical SEO | FutureSource",
    description: "Strategic SEO and content marketing to increase organic visibility. Technical SEO, content strategy, and on-page optimization services.",
    keywords: "SEO services, content marketing, technical SEO, organic traffic, ranking",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/services/cro-landing-pages": {
    title: "CRO & Landing Page Optimization Services | FutureSource",
    description: "Conversion rate optimization and high-performing landing page design. A/B testing, user experience optimization, and conversion focused design.",
    keywords: "CRO, conversion rate optimization, landing pages, A/B testing, optimization",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/services/account-based-marketing": {
    title: "Account-Based Marketing (ABM) Services | FutureSource",
    description: "Targeted ABM strategies for B2B businesses. Personalized marketing campaigns focused on high-value accounts and enterprise clients.",
    keywords: "account-based marketing, ABM, B2B marketing, targeted marketing, enterprise",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/about": {
    title: "About FutureSource | Digital Marketing Agency Montreal",
    description: "Learn about FutureSource, our mission, team, and approach to digital marketing. Scaling ambitious brands since day one.",
    keywords: "about us, digital marketing agency, Montreal, team, mission",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/process": {
    title: "Our Digital Marketing Process | FutureSource",
    description: "Understand our proven process for strategy, implementation, and optimization. Transparent and results-driven approach.",
    keywords: "marketing process, strategy, implementation, optimization, methodology",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/pricing": {
    title: "Digital Marketing Pricing & Packages | FutureSource",
    description: "Flexible pricing plans for digital marketing services. Transparent pricing for Web Design, SEO, Paid Ads, and CRO.",
    keywords: "pricing, digital marketing packages, service plans, costs",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/insights": {
    title: "Digital Marketing Insights & Blog Articles | FutureSource",
    description: "Read our latest insights on digital marketing trends, strategies, and best practices. Expert articles on SEO, paid ads, and CRO.",
    keywords: "digital marketing blog, insights, articles, trends, best practices",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/contact": {
    title: "Contact FutureSource | Get in Touch with Our Team",
    description: "Contact our digital marketing agency. Get in touch to discuss your project and how we can help scale your business.",
    keywords: "contact us, digital marketing consultation, get in touch",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/book-a-call": {
    title: "Book a Call | Digital Marketing Consultation | FutureSource",
    description: "Schedule a consultation call with our digital marketing strategists. Discuss your goals and see how we can help.",
    keywords: "consultation, book a call, digital marketing strategy session",
    ogType: "website",
    ogImage: defaultImage,
  },
  "/privacy": {
    title: "Privacy Policy | FutureSource",
    description: "Privacy policy and data protection practices of FutureSource digital marketing agency.",
    keywords: "privacy policy, data protection, GDPR",
    ogType: "website",
    robots: "noindex, nofollow",
  },
  "/terms": {
    title: "Terms of Service | FutureSource",
    description: "Terms of service and conditions for using FutureSource services.",
    keywords: "terms of service, legal, conditions",
    ogType: "website",
    robots: "noindex, nofollow",
  },
  "/cookies": {
    title: "Cookie Policy | FutureSource",
    description: "Cookie policy and settings for FutureSource website.",
    keywords: "cookie policy, cookies, website settings",
    ogType: "website",
    robots: "noindex, nofollow",
  },
};

export function getSEOData(pathname: string): SEOMetadata {
  return seoData[pathname] || seoData["/"];
}

export function getCanonicalUrl(pathname: string): string {
  return `${baseUrl}${pathname}`;
}
