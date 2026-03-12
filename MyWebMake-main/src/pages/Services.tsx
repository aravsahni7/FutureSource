import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { services } from "@/data/siteData";
import { Globe, MapPin, Target, ShoppingBag, RefreshCw, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CTASection from "@/components/shared/CTASection";
import { Helmet } from "react-helmet-async";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Globe, MapPin, Target, ShoppingBag, RefreshCw, Shield };

const Services = () => (
  <>
    <Helmet>
      <title>Our Services | MyWebMake Websites</title>
      <meta name="description" content="Website design, local SEO, landing pages, e-commerce, and maintenance for small businesses. Get a custom quote today." />
    </Helmet>
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="badge-accent mb-4 inline-block">Our Services</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Everything You Need to Succeed Online</h1>
            <p className="text-xl text-primary-foreground/80">From brand-new websites to ongoing support—we help small businesses establish and grow their online presence.</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-wide space-y-16">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div key={service.id} id={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-2 gap-8 items-start p-8 bg-card border border-border rounded-3xl">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4"><Icon className="w-7 h-7 text-accent" /></div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-3">{service.title}</h2>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-sm text-accent font-medium mb-4">Timeline: {service.timeline}</p>
                  <p className="text-sm text-muted-foreground"><strong>Ideal for:</strong> {service.idealFor}</p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">{service.features.map((f, j) => <li key={j} className="flex items-center gap-2 text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-accent" />{f}</li>)}</ul>
                  <Button variant="accent" className="mt-6" asChild><Link to="/quote">Get a Quote</Link></Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <CTASection />
    </Layout>
  </>
);

export default Services;
