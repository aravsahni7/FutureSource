// NorthPeak Websites - Site Data (CMS-like editable structure)

export const siteConfig = {
  name: "MyWebMake Websites",
  tagline: "Built to rank. Built to sell.",
  description: "We build high-converting websites that make small businesses look legit, rank locally, and generate leads—without hassle.",
  email: "mywebmake0@gmail.com",
  phone: "4385207931",
  phoneFormatted: "(438) 520-7931",
  location: "Montreal (MTL)",
  serviceArea: "Based in Montreal (MTL) • Serving clients online across Canada",
  bookingUrl: "https://calendar.app.google/mRDbY28SKnRGNa1B6",
  social: {
    instagram: "@aravsahni7",
    linkedin: "@aravsahni",
  },
  ctas: {
    primary: "Book a Free 15-Min Call",
    secondary: "Get a Quote",
  },
};

export const navigation = [
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "business-website",
    title: "Business Website",
    shortDesc: "Professional 5-8 page websites that establish credibility",
    description: "A complete online presence for your small business. We build professional, mobile-first websites that showcase your services, build trust with visitors, and turn them into customers.",
    icon: "Globe",
    features: [
      "5-8 custom-designed pages",
      "Mobile-responsive design",
      "Contact forms & booking integration",
      "SEO-ready structure",
      "Analytics setup",
      "30-day post-launch support",
    ],
    idealFor: "Service businesses, contractors, professionals, and local shops ready to establish a strong online presence.",
    timeline: "2-4 weeks",
  },
  {
    id: "local-seo",
    title: "Local SEO Foundation",
    shortDesc: "Get found when locals search for your services",
    description: "We optimize your website to rank in local searches. From Google Business Profile setup to on-page optimization, we lay the foundation for long-term local visibility.",
    icon: "MapPin",
    features: [
      "Google Business Profile optimization",
      "Local keyword research",
      "On-page SEO optimization",
      "Schema markup implementation",
      "Citation building guidance",
      "Monthly progress reports",
    ],
    idealFor: "Any local business wanting to appear in 'near me' searches and Google Maps results.",
    timeline: "2-3 weeks initial setup + ongoing",
  },
  {
    id: "landing-pages",
    title: "Landing Pages for Ads",
    shortDesc: "High-converting pages for your ad campaigns",
    description: "Single-page designs built specifically to convert paid traffic. Whether you're running Google Ads or social campaigns, these pages are optimized for one goal: getting leads.",
    icon: "Target",
    features: [
      "Conversion-focused design",
      "A/B testing ready",
      "Fast loading speeds",
      "Lead capture forms",
      "Thank you page setup",
      "Tracking pixel integration",
    ],
    idealFor: "Businesses running paid ads who want to maximize their return on ad spend.",
    timeline: "1-2 weeks",
  },
  {
    id: "ecommerce-starter",
    title: "E-commerce Starter",
    shortDesc: "Start selling products online with a clean store",
    description: "A streamlined online store to start selling your products. Simple checkout, inventory management, and all the essentials to launch your e-commerce business.",
    icon: "ShoppingBag",
    features: [
      "Up to 25 products setup",
      "Secure checkout integration",
      "Inventory management",
      "Order notifications",
      "Mobile shopping experience",
      "Basic analytics",
    ],
    idealFor: "Small retailers, artisans, and service providers ready to sell products online.",
    timeline: "3-5 weeks",
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    shortDesc: "Transform your outdated site into a modern lead machine",
    description: "Your current website isn't working. We'll redesign it with modern aesthetics, improved user experience, and conversion-focused layouts that actually generate results.",
    icon: "RefreshCw",
    features: [
      "Complete visual overhaul",
      "Improved navigation & UX",
      "Mobile optimization",
      "Speed improvements",
      "Content restructuring",
      "SEO preservation & improvement",
    ],
    idealFor: "Businesses with outdated websites that no longer reflect their brand or generate leads.",
    timeline: "3-5 weeks",
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    shortDesc: "Keep your website secure, updated, and performing",
    description: "Ongoing care for your website so you can focus on your business. We handle updates, backups, security monitoring, and small content changes.",
    icon: "Shield",
    features: [
      "Regular backups",
      "Security monitoring",
      "Software updates",
      "Monthly content updates",
      "Performance monitoring",
      "Priority support",
    ],
    idealFor: "Any business with a website that needs ongoing care and peace of mind.",
    timeline: "Monthly retainer",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We start with a free 15-minute call to understand your business, goals, and what you need from your website.",
    clientProvides: ["Business overview", "Goals and pain points", "Competitor examples you like"],
    weProvide: ["Project assessment", "Timeline estimate", "Custom quote"],
    duration: "15-30 min",
  },
  {
    step: 2,
    title: "Content Gathering",
    description: "We guide you through collecting the essential content—photos, service details, and brand materials.",
    clientProvides: ["Logo & brand colors", "Photos (or we source stock)", "Service/product details", "Contact info"],
    weProvide: ["Content checklist", "Copy guidance templates", "Photo recommendations"],
    duration: "3-7 days",
  },
  {
    step: 3,
    title: "Design & Wireframes",
    description: "We create the visual direction and layout structure for your website, ensuring it matches your brand and goals.",
    clientProvides: ["Design preferences", "Competitor examples", "Feedback on concepts"],
    weProvide: ["Wireframe layouts", "Color & typography selection", "Design mockups"],
    duration: "5-7 days",
  },
  {
    step: 4,
    title: "Development",
    description: "We build your website with clean code, mobile responsiveness, and all the features we agreed upon.",
    clientProvides: ["Timely feedback", "Content approvals"],
    weProvide: ["Fully functional website", "Mobile optimization", "Form integrations"],
    duration: "7-14 days",
  },
  {
    step: 5,
    title: "Review & Revisions",
    description: "You review the completed site and we make adjustments. We include up to 2 rounds of revisions.",
    clientProvides: ["Detailed feedback", "Final approvals"],
    weProvide: ["Up to 2 revision rounds", "Bug fixes", "Final polishing"],
    duration: "3-5 days",
  },
  {
    step: 6,
    title: "Launch",
    description: "We handle the technical launch—domain connection, SSL, speed optimization, and going live.",
    clientProvides: ["Domain access", "Final approval"],
    weProvide: ["Domain setup", "SSL certificate", "Launch checklist completion"],
    duration: "1-2 days",
  },
  {
    step: 7,
    title: "Post-Launch Support",
    description: "30 days of included support after launch for any issues or small adjustments you need.",
    clientProvides: ["Questions and feedback"],
    weProvide: ["Bug fixes", "Minor adjustments", "Training on updates"],
    duration: "30 days included",
  },
];

export const demoProjects = [
  {
    id: "modern-barbershop",
    title: "Urban Cuts Barbershop",
    industry: "Barber",
    category: "Business Website",
    description: "A bold, modern website design for a contemporary barbershop. Features online booking integration and service showcase.",
    features: ["Online booking", "Service gallery", "Team profiles", "Mobile-first design"],
    designedFor: "Bookings & brand presence",
    image: "/placeholder.svg",
    isDemo: true,
  },
  {
    id: "dental-clinic",
    title: "Bright Smile Dental",
    industry: "Dental",
    category: "Business Website",
    description: "Clean, trustworthy design for a family dental practice. Emphasis on patient comfort and easy appointment scheduling.",
    features: ["Appointment forms", "Service pages", "Insurance info", "Patient resources"],
    designedFor: "Patient trust & appointments",
    image: "/placeholder.svg",
    isDemo: true,
  },
  {
    id: "contractor-site",
    title: "Summit Renovations",
    industry: "Contractor",
    category: "Business Website",
    description: "Professional contractor website showcasing past work and expertise. Built for generating quote requests.",
    features: ["Project gallery", "Quote forms", "Service areas", "Testimonial sections"],
    designedFor: "Quote generation",
    image: "/placeholder.svg",
    isDemo: true,
  },
  {
    id: "fitness-studio",
    title: "Core Fitness Studio",
    industry: "Fitness",
    category: "Business Website",
    description: "Energetic, motivating design for a local fitness studio. Features class schedules and membership signups.",
    features: ["Class schedules", "Trainer profiles", "Membership tiers", "Contact forms"],
    designedFor: "Memberships & class bookings",
    image: "/placeholder.svg",
    isDemo: true,
  },
  {
    id: "restaurant-landing",
    title: "Maple Bistro",
    industry: "Restaurant",
    category: "Landing Page",
    description: "Appetizing single-page design for a local restaurant. Menu showcase and reservation integration ready.",
    features: ["Menu display", "Reservation button", "Location map", "Hours & contact"],
    designedFor: "Reservations & visibility",
    image: "/placeholder.svg",
    isDemo: true,
  },
  {
    id: "realtor-site",
    title: "Montreal Home Finder",
    industry: "Real Estate",
    category: "Business Website",
    description: "Sophisticated real estate website for showcasing listings and capturing buyer/seller leads.",
    features: ["Listing showcase", "Lead capture", "Area guides", "Agent profile"],
    designedFor: "Lead generation",
    image: "/placeholder.svg",
    isDemo: true,
  },
  {
    id: "spa-wellness",
    title: "Serenity Spa & Wellness",
    industry: "Other",
    category: "Business Website",
    description: "Calming, elegant design for a day spa. Emphasizes relaxation and easy service booking.",
    features: ["Service menu", "Online booking", "Gift cards", "Team bios"],
    designedFor: "Bookings & gift card sales",
    image: "/placeholder.svg",
    isDemo: true,
  },
  {
    id: "auto-shop",
    title: "Precision Auto Care",
    industry: "Contractor",
    category: "Business Website",
    description: "Trustworthy design for an auto repair shop. Clear service listings and appointment scheduling.",
    features: ["Service list", "Appointment forms", "Certifications", "Customer reviews section"],
    designedFor: "Appointments & trust",
    image: "/placeholder.svg",
    isDemo: true,
  },
];

export const industries = [
  "All",
  "Barber",
  "Dental",
  "Fitness",
  "Contractor",
  "Restaurant",
  "Real Estate",
  "Other",
];

export const blogPosts = [
  {
    id: "local-seo-checklist",
    title: "Local SEO Checklist for Small Businesses in 2024",
    excerpt: "A step-by-step guide to getting your business found in local searches. From Google Business Profile to on-page optimization.",
    category: "Local SEO",
    author: "Arav Sahni",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "contractor-website-layout",
    title: "Best Website Layout for Contractors",
    excerpt: "Learn what pages and elements contractors need on their website to generate more quote requests.",
    category: "Web Design",
    author: "Arav Sahni",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "/placeholder.svg",
  },
  {
    id: "homepage-that-converts",
    title: "What to Put on a Homepage That Converts",
    excerpt: "The essential elements every small business homepage needs to turn visitors into leads.",
    category: "Conversions",
    author: "Arav Sahni",
    date: "2024-01-05",
    readTime: "7 min read",
    image: "/placeholder.svg",
  },
  {
    id: "website-visitors-to-calls",
    title: "How to Turn Website Visitors Into Phone Calls",
    excerpt: "Practical tips for making your website work harder to get more calls and inquiries.",
    category: "Conversions",
    author: "Arav Sahni",
    date: "2023-12-28",
    readTime: "5 min read",
    image: "/placeholder.svg",
  },
  {
    id: "google-business-profile-tips",
    title: "7 Google Business Profile Tips for Local Businesses",
    excerpt: "Maximize your Google Business Profile to get more visibility and clicks from local searchers.",
    category: "Local SEO",
    author: "Arav Sahni",
    date: "2023-12-20",
    readTime: "6 min read",
    image: "/placeholder.svg",
  },
  {
    id: "mobile-first-design-importance",
    title: "Why Mobile-First Design Matters for Your Business",
    excerpt: "More than half your visitors are on phones. Here's why your website needs to be mobile-first.",
    category: "Web Design",
    author: "Arav Sahni",
    date: "2023-12-15",
    readTime: "5 min read",
    image: "/placeholder.svg",
  },
  {
    id: "website-speed-matters",
    title: "Website Speed: Why Every Second Counts",
    excerpt: "Slow websites lose customers. Learn why speed matters and how to make your site faster.",
    category: "Performance",
    author: "Arav Sahni",
    date: "2023-12-10",
    readTime: "6 min read",
    image: "/placeholder.svg",
  },
  {
    id: "small-business-website-mistakes",
    title: "5 Website Mistakes Small Businesses Make",
    excerpt: "Common website mistakes that cost small businesses leads—and how to avoid them.",
    category: "Web Design",
    author: "Arav Sahni",
    date: "2023-12-05",
    readTime: "7 min read",
    image: "/placeholder.svg",
  },
];

export const blogCategories = ["All", "Local SEO", "Web Design", "Conversions", "Performance"];

export const faqs = [
  {
    question: "Do you work with brand-new businesses?",
    answer: "Absolutely! Many of our clients are just starting out. We'll help you establish a professional online presence from day one. You don't need an existing website or even a logo—we can guide you through getting everything you need.",
  },
  {
    question: "What if I don't have photos or copy for my website?",
    answer: "No problem. We provide content guidance templates to help you gather what you need. If you don't have professional photos, we can source high-quality stock images that fit your brand. We also offer copywriting guidance to help you write effective content.",
  },
  {
    question: "How does pricing work without fixed packages?",
    answer: "Every business is different, so we provide custom quotes based on your specific needs. After our discovery call, you'll receive a detailed proposal with clear pricing—no hidden fees. This approach ensures you only pay for what you actually need.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most business websites take 2-4 weeks from kickoff to launch. Landing pages can be done in 1-2 weeks. The timeline depends on how quickly you can provide content and feedback. We'll give you a specific timeline in your quote.",
  },
  {
    question: "Can I update my website myself after launch?",
    answer: "Yes! We build websites that are easy to update. We'll provide training on making basic content changes. For more complex updates, we offer maintenance packages or can handle changes on a per-request basis.",
  },
  {
    question: "Do you do SEO?",
    answer: "Every website we build includes SEO-ready foundations—proper headings, meta tags, fast loading, mobile optimization, and clean code. For businesses wanting to actively rank in local searches, we offer a dedicated Local SEO Foundation service.",
  },
  {
    question: "What happens after my website launches?",
    answer: "Every project includes 30 days of post-launch support for bug fixes and small adjustments. After that, you can handle updates yourself, use our maintenance packages, or contact us for individual requests as needed.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes! Our maintenance packages include regular backups, security updates, performance monitoring, and a set number of content updates per month. It's peace of mind so you can focus on running your business.",
  },
  {
    question: "What platforms do you build on?",
    answer: "We use modern, reliable platforms suited to your needs. The specific technology depends on your project requirements—but rest assured, we focus on speed, security, and ease of use. We'll explain everything during our discovery call.",
  },
  {
    question: "Do you work with clients outside of Montreal?",
    answer: "Yes! While we're based in Montreal, we work with clients across Canada through video calls and online collaboration. The process is the same whether you're local or remote.",
  },
  {
    question: "What if I'm not happy with the design?",
    answer: "We include up to 2 rounds of revisions in every project. We work closely with you during the design phase to make sure we're on the right track before building. Our goal is your complete satisfaction.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "We typically split projects into milestones—a deposit to start, a payment at design approval, and a final payment at launch. For larger projects, we can discuss flexible payment arrangements during our discovery call.",
  },
];

export const trustIndicators = [
  "Mobile-first design",
  "SEO-ready foundations",
  "Fast loading speeds",
  "Secure & reliable",
  "30-day post-launch support",
  "Clear communication",
];

export const includedInEveryBuild = [
  {
    title: "Mobile-Responsive Design",
    description: "Looks great on phones, tablets, and desktops",
  },
  {
    title: "SEO-Ready Structure",
    description: "Proper headings, meta tags, and clean URLs",
  },
  {
    title: "Fast Loading Speeds",
    description: "Optimized images and efficient code",
  },
  {
    title: "Contact Forms",
    description: "Easy ways for visitors to reach you",
  },
  {
    title: "Analytics Setup",
    description: "Track your visitors and performance",
  },
  {
    title: "SSL Security Certificate",
    description: "Secure connection for your visitors",
  },
  {
    title: "30-Day Post-Launch Support",
    description: "We're here if you need us after launch",
  },
  {
    title: "Training & Documentation",
    description: "Learn to make basic updates yourself",
  },
];

export const whatWeBuild = [
  {
    title: "Business Websites",
    description: "5-8 page professional sites that establish credibility and generate leads",
    icon: "Building2",
  },
  {
    title: "Service Lead-Gen Sites",
    description: "Conversion-focused websites built to turn visitors into quote requests",
    icon: "Target",
  },
  {
    title: "E-commerce Starters",
    description: "Clean online stores to start selling your products",
    icon: "ShoppingBag",
  },
  {
    title: "Landing Pages",
    description: "Single-page designs optimized for ad campaigns",
    icon: "Layers",
  },
];

export const teamMembers = [
  {
    name: "Arav Sahni",
    role: "Founder & Lead Developer",
    bio: "I build clean, modern websites for small businesses so you can be found online and get more calls and bookings. Based in Montreal, I work with clients across Canada to create websites that actually work.",
    image: "/placeholder.svg",
    isFounder: true,
  },
];

export const companyValues = [
  {
    title: "Clarity Over Complexity",
    description: "We keep things simple. Clear communication, straightforward processes, no jargon.",
  },
  {
    title: "Quality Standards",
    description: "Every website meets our standards for speed, mobile experience, and clean code.",
  },
  {
    title: "Guidance & Support",
    description: "We don't just build and disappear. We guide you through the process and support you after launch.",
  },
  {
    title: "Honest Partnership",
    description: "We're upfront about timelines, pricing, and what we can deliver. No surprises.",
  },
];
