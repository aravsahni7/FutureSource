import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhatWeBuildSection from "@/components/home/WhatWeBuildSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import IncludedSection from "@/components/home/IncludedSection";
import WorkHighlightsSection from "@/components/home/WorkHighlightsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import HowQuotesWorkSection from "@/components/home/HowQuotesWorkSection";
import FoundingClientSection from "@/components/home/FoundingClientSection";
import HomeFAQSection from "@/components/home/HomeFAQSection";
import ContactMiniSection from "@/components/home/ContactMiniSection";
import CTASection from "@/components/shared/CTASection";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MyWebMake Websites | Modern Websites for Small Businesses in Montreal</title>
        <meta name="description" content="We build high-converting, mobile-first websites for small businesses. SEO-ready, fast loading, and designed to generate leads. Based in Montreal, serving Canada." />
        <meta property="og:title" content="MyWebMake Websites | Built to Rank. Built to Sell." />
        <meta property="og:description" content="Modern websites for small businesses that want to be found online and turn visitors into customers." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Layout>
        <HeroSection />
        <WhatWeBuildSection />
        <BenefitsSection />
        <IncludedSection />
        <WorkHighlightsSection />
        <HowItWorksSection />
        <HowQuotesWorkSection />
        <FoundingClientSection />
        <HomeFAQSection />
        <ContactMiniSection />
        <CTASection 
          title="Ready to Build Your Online Presence?"
          subtitle="Let's create a website that makes your business shine. Book a free call and let's get started."
        />
      </Layout>
    </>
  );
};

export default Index;
