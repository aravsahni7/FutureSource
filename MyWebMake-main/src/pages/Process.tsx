import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { processSteps } from "@/data/siteData";
import CTASection from "@/components/shared/CTASection";
import { Helmet } from "react-helmet-async";

const Process = () => (
  <>
    <Helmet>
      <title>Our Process | MyWebMake Websites</title>
      <meta name="description" content="Our simple 7-step process from discovery call to launch. See exactly how we work with you to build your website." />
    </Helmet>
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="badge-accent mb-4 inline-block">Our Process</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">How We Work Together</h1>
            <p className="text-xl text-primary-foreground/80">A clear, simple process from first call to launch day. No surprises, just results.</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-12">
              {processSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-0 md:pl-20">
                  <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full bg-accent text-accent-foreground items-center justify-center font-heading font-bold text-xl">{step.step}</div>
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3 md:hidden"><div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">{step.step}</div><span className="text-sm text-accent">{step.duration}</span></div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <span className="hidden md:inline text-sm text-accent font-medium">{step.duration}</span>
                    <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
                      <div><h4 className="text-sm font-semibold text-foreground mb-2">You Provide:</h4><ul className="space-y-1">{step.clientProvides.map((item, j) => <li key={j} className="text-sm text-muted-foreground">• {item}</li>)}</ul></div>
                      <div><h4 className="text-sm font-semibold text-foreground mb-2">We Deliver:</h4><ul className="space-y-1">{step.weProvide.map((item, j) => <li key={j} className="text-sm text-muted-foreground">• {item}</li>)}</ul></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  </>
);

export default Process;
