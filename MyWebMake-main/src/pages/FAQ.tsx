import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { faqs } from "@/data/siteData";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import { Helmet } from "react-helmet-async";

const FAQ = () => (
  <>
    <Helmet>
      <title>FAQ | MyWebMake Websites</title>
      <meta name="description" content="Answers to common questions about our web design services, pricing, timelines, and process." />
    </Helmet>
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="badge-accent mb-4 inline-block">FAQ</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-foreground/80">Everything you need to know about working with us.</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <FAQAccordion faqs={faqs} defaultOpen="faq-0" />
        </div>
      </section>
      <CTASection />
    </Layout>
  </>
);

export default FAQ;
