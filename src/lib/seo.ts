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
  "/insights/meta-ads-2025-playbook": {
    title: "Meta Ads 2025 Playbook | Strategy Guide for Facebook & Instagram",
    description: "Complete guide to Meta advertising in 2025. Strategies for Advantage+ campaigns, budget allocation, and ROI optimization.",
    keywords: "Meta ads, Facebook ads, Instagram ads, 2025 strategy, paid advertising",
    ogType: "article",
    ogImage: defaultImage,
  },
  "/insights/seo-content-strategy-guide": {
    title: "SEO Content Strategy Guide | Technical SEO Best Practices",
    description: "Comprehensive guide to developing an effective SEO content strategy. Expert recommendations for ranking and organic growth.",
    keywords: "SEO content strategy, technical SEO, content marketing, ranking factors",
    ogType: "article",
    ogImage: defaultImage,
  },
  "/insights/conversion-rate-psychology": {
    title: "Conversion Rate Psychology | Improve User Behavior & CRO",
    description: "Understanding psychological principles to improve conversion rates. Behavioral science insights for web design and marketing.",
    keywords: "CRO, conversion psychology, user behavior, web design principles",
    ogType: "article",
    ogImage: defaultImage,
  },
  "/insights/google-ads-performance-max": {
    title: "Google Ads Performance Max Guide | Campaign Optimization",
    description: "Master Google Performance Max campaigns. AI-driven advertising strategy for scaling on Google Search, Shopping, and Display.",
    keywords: "Google Ads, Performance Max, campaign optimization, AI advertising",
    ogType: "article",
    ogImage: defaultImage,
  },
  "/insights/attribution-modeling-guide": {
    title: "Attribution Modeling Guide | Multi-Touch Attribution Strategy",
    description: "Complete guide to attribution modeling in digital marketing. Understanding customer journey and touchpoint value.",
    keywords: "attribution modeling, customer journey, analytics, digital marketing",
    ogType: "article",
    ogImage: defaultImage,
  },
  "/insights/tiktok-ads-for-ecommerce": {
    title: "TikTok Ads for eCommerce | Strategy & Best Practices",
    description: "Expert guide to running profitable TikTok ad campaigns for eCommerce stores. Creative strategies and platform best practices.",
    keywords: "TikTok ads, eCommerce, paid advertising, social media marketing",
    ogType: "article",
    ogImage: defaultImage,
  },
  "/insights/ab-testing-mistakes": {
    title: "A/B Testing Mistakes to Avoid | CRO Best Practices",
    description: "Learn the most common A/B testing mistakes and how to run valid experiments. Proper statistical analysis and test design.",
    keywords: "A/B testing, CRO, experimentation, statistical significance",
    ogType: "article",
    ogImage: defaultImage,
  },
  "/insights/marketing-trends-2025": {
    title: "Digital Marketing Trends 2025 | Industry Predictions",
    description: "Top digital marketing trends and predictions for 2025. Expert insights on AI, automation, and marketing strategy shifts.",
    keywords: "marketing trends, 2025 predictions, digital marketing, industry insights",
    ogType: "article",
    ogImage: defaultImage,
  },
  "/insights/creative-testing-framework": {
    title: "Creative Testing Framework | Optimize Ad Creative Performance",
    description: "Systematic approach to testing and optimizing ad creative. Framework for improving creative performance and ROI.",
    keywords: "creative testing, ad creative, optimization framework, paid advertising",
    ogType: "article",
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
