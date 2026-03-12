import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { teamMembers, companyValues, siteConfig } from "@/data/siteData";
import CTASection from "@/components/shared/CTASection";
import { Helmet } from "react-helmet-async";
import founderImage from "@/assets/image.png";

const About = () => (
  <>
    <Helmet>
      <title>About Us | MyWebMake Websites</title>
      <meta name="description" content="Meet the team behind MyWebMake Websites. We build modern, high-converting websites for small businesses in Montreal and across Canada." />
    </Helmet>
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="badge-accent mb-4 inline-block">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Helping Small Businesses Grow Online</h1>
            <p className="text-xl text-primary-foreground/80">We believe every small business deserves a website that works as hard as they do.</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold mb-4">Hi, I'm Arav.</h2>
              <p className="text-muted-foreground mb-4">I build clean, modern websites for small businesses so you can be found online and get more calls and bookings. Based in Montreal, I work with clients across Canada to create websites that actually work.</p>
              <p className="text-muted-foreground mb-4">I started MyWebMake Websites because I saw too many small businesses struggling with outdated websites that don't generate leads. You deserve better—a site that looks professional, loads fast, and helps you grow.</p>
              <p className="text-muted-foreground">Let's build something great together.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <img src={founderImage} alt="Arav Sahni - Founder" className="rounded-2xl shadow-xl w-full max-w-md mx-auto" />
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  </>
);

export default About;
