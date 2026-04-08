import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Comprehensive SEO metadata for all pages
const seoData = {
  "/": {
    title: "FutureSource | Web Design & Web Development Marketing Agency Montreal",
    description: "Experienced Web Development & Digital Marketing Agency in Montreal. Scaling brands using technical SEO, Paid Ads, CRO, and Account-Based Marketing (ABM).",
    ogType: "website",
  },
  "/services": {
    title: "Digital Marketing & Web Design Services | FutureSource",
    description: "Comprehensive digital marketing services including Web Design, SEO, Paid Ads, CRO, and Account-Based Marketing. Scale your business effectively.",
    ogType: "website",
  },
  "/services/web-design": {
    title: "Web Design Services | FutureSource | Montreal Agency",
    description: "Professional web design and development services. Custom websites built for conversion and performance. Technical expertise meets creative design.",
    ogType: "website",
  },
  "/services/paid-ads": {
    title: "Paid Advertising Services | Google Ads, Facebook Ads, TikTok | FutureSource",
    description: "Expert paid advertising management across Google, Facebook, Instagram, and TikTok. ROI-focused campaigns that scale your revenue.",
    ogType: "website",
  },
  "/services/seo-content": {
    title: "SEO & Content Marketing Services | Technical SEO | FutureSource",
    description: "Strategic SEO and content marketing to increase organic visibility. Technical SEO, content strategy, and on-page optimization services.",
    ogType: "website",
  },
  "/services/cro-landing-pages": {
    title: "CRO & Landing Page Optimization Services | FutureSource",
    description: "Conversion rate optimization and high-performing landing page design. A/B testing, user experience optimization, and conversion focused design.",
    ogType: "website",
  },
  "/services/account-based-marketing": {
    title: "Account-Based Marketing (ABM) Services | FutureSource",
    description: "Targeted ABM strategies for B2B businesses. Personalized marketing campaigns focused on high-value accounts and enterprise clients.",
    ogType: "website",
  },
  "/about": {
    title: "About FutureSource | Digital Marketing Agency Montreal",
    description: "Learn about FutureSource, our mission, team, and approach to digital marketing. Scaling ambitious brands since day one.",
    ogType: "website",
  },
  "/process": {
    title: "Our Digital Marketing Process | FutureSource",
    description: "Understand our proven process for strategy, implementation, and optimization. Transparent and results-driven approach.",
    ogType: "website",
  },
  "/pricing": {
    title: "Digital Marketing Pricing & Packages | FutureSource",
    description: "Flexible pricing plans for digital marketing services. Transparent pricing for Web Design, SEO, Paid Ads, and CRO.",
    ogType: "website",
  },
  "/insights": {
    title: "Digital Marketing Insights & Blog Articles | FutureSource",
    description: "Read our latest insights on digital marketing trends, strategies, and best practices. Expert articles on SEO, paid ads, and CRO.",
    ogType: "website",
  },
  "/insights/meta-ads-2025-playbook": {
    title: "Meta Ads 2025 Playbook | Strategy Guide for Facebook & Instagram",
    description: "Complete guide to Meta advertising in 2025. Strategies for Advantage+ campaigns, budget allocation, and ROI optimization.",
    ogType: "article",
  },
  "/insights/seo-content-strategy-guide": {
    title: "SEO Content Strategy Guide | Technical SEO Best Practices",
    description: "Comprehensive guide to developing an effective SEO content strategy. Expert recommendations for ranking and organic growth.",
    ogType: "article",
  },
  "/insights/conversion-rate-psychology": {
    title: "Conversion Rate Psychology | Improve User Behavior & CRO",
    description: "Understanding psychological principles to improve conversion rates. Behavioral science insights for web design and marketing.",
    ogType: "article",
  },
  "/insights/google-ads-performance-max": {
    title: "Google Ads Performance Max Guide | Campaign Optimization",
    description: "Master Google Performance Max campaigns. AI-driven advertising strategy for scaling on Google Search, Shopping, and Display.",
    ogType: "article",
  },
  "/insights/attribution-modeling-guide": {
    title: "Attribution Modeling Guide | Multi-Touch Attribution Strategy",
    description: "Complete guide to attribution modeling in digital marketing. Understanding customer journey and touchpoint value.",
    ogType: "article",
  },
  "/insights/tiktok-ads-for-ecommerce": {
    title: "TikTok Ads for eCommerce | Strategy & Best Practices",
    description: "Expert guide to running profitable TikTok ad campaigns for eCommerce stores. Creative strategies and platform best practices.",
    ogType: "article",
  },
  "/insights/ab-testing-mistakes": {
    title: "A/B Testing Mistakes to Avoid | CRO Best Practices",
    description: "Learn the most common A/B testing mistakes and how to run valid experiments. Proper statistical analysis and test design.",
    ogType: "article",
  },
  "/insights/marketing-trends-2025": {
    title: "Digital Marketing Trends 2025 | Industry Predictions",
    description: "Top digital marketing trends and predictions for 2025. Expert insights on AI, automation, and marketing strategy shifts.",
    ogType: "article",
  },
  "/insights/creative-testing-framework": {
    title: "Creative Testing Framework | Optimize Ad Creative Performance",
    description: "Systematic approach to testing and optimizing ad creative. Framework for improving creative performance and ROI.",
    ogType: "article",
  },
  "/contact": {
    title: "Contact FutureSource | Get in Touch with Our Team",
    description: "Contact our digital marketing agency. Get in touch to discuss your project and how we can help scale your business.",
    ogType: "website",
  },
  "/book-a-call": {
    title: "Book a Call | Digital Marketing Consultation | FutureSource",
    description: "Schedule a consultation call with our digital marketing strategists. Discuss your goals and see how we can help.",
    ogType: "website",
  },
  "/privacy": {
    title: "Privacy Policy | FutureSource",
    description: "Privacy policy and data protection practices of FutureSource digital marketing agency.",
    ogType: "website",
    robots: "noindex, nofollow",
  },
  "/terms": {
    title: "Terms of Service | FutureSource",
    description: "Terms of service and conditions for using FutureSource services.",
    ogType: "website",
    robots: "noindex, nofollow",
  },
  "/cookies": {
    title: "Cookie Policy | FutureSource",
    description: "Cookie policy and settings for FutureSource website.",
    ogType: "website",
    robots: "noindex, nofollow",
  },
};

async function enhanceRoutes() {
  console.log('Enhancing static HTML files with comprehensive SEO metadata...');
  
  const distDir = path.resolve(__dirname, '../dist');
  const baseUrl = "https://futuresource.ca";

  Object.entries(seoData).forEach(([routePath, routeData]) => {
    if (routePath === '/') return; // Root HTML is already generated by Vite

    const routeDir = path.join(distDir, routePath);
    const indexPath = path.join(routeDir, 'index.html');

    if (!fs.existsSync(indexPath)) {
      console.warn(`⚠ Skipped ${routePath} (index.html not found)`);
      return;
    }

    let html = fs.readFileSync(indexPath, 'utf-8');

    // Update Title tag
    html = html.replace(
      /<title>.*?<\/title>/i,
      `<title>${routeData.title}</title>`
    );

    // Update meta description
    html = html.replace(
      /<meta name="description" content="[^"]*"/i,
      `<meta name="description" content="${routeData.description}"`
    );

    // Update Open Graph tags
    html = html.replace(
      /<meta property="og:title" content="[^"]*"/i,
      `<meta property="og:title" content="${routeData.title}"`
    );

    html = html.replace(
      /<meta property="og:description" content="[^"]*"/i,
      `<meta property="og:description" content="${routeData.description}"`
    );

    html = html.replace(
      /<meta property="og:type" content="[^"]*"/i,
      `<meta property="og:type" content="${routeData.ogType || 'website'}"`
    );

    // Update canonical URL
    const canonicalUrl = `${baseUrl}${routePath}`;
    html = html.replace(
      /<link rel="canonical" href="[^"]*"/i,
      `<link rel="canonical" href="${canonicalUrl}"`
    );

    // Add or update robots meta tag
    if (routeData.robots) {
      if (html.includes('<meta name="robots"')) {
        html = html.replace(
          /<meta name="robots" content="[^"]*"/i,
          `<meta name="robots" content="${routeData.robots}"`
        );
      } else {
        // Add after description meta tag
        html = html.replace(
          /(<meta name="description" content="[^"]*"[^>]*>)/i,
          `$1\n    <meta name="robots" content="${routeData.robots}" />`
        );
      }
    }

    fs.writeFileSync(indexPath, html);
    console.log(`✓ Enhanced SEO for: ${routePath}`);
  });

  console.log(`\n✓ Successfully enhanced SEO metadata for ${Object.keys(seoData).length - 1} pages!`);
}

enhanceRoutes().catch(console.error);
