import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, FileText } from "lucide-react";

const HowQuotesWorkSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-accent mb-4 inline-block">Custom Quotes</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get a Quote That Fits Your Business
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We don't do one-size-fits-all pricing. Every small business is unique, 
              so we create custom quotes based on exactly what you need—nothing more, nothing less.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Tell us about your business and goals",
                "We'll discuss what features you actually need",
                "Receive a clear, itemized quote—no hidden fees",
                "Choose to proceed when you're ready",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-accent text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="accent" size="lg" asChild>
                <Link to="/quote">
                  <FileText className="w-4 h-4" />
                  Request a Quote
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/faq">
                  <MessageSquare className="w-4 h-4" />
                  FAQ About Pricing
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-warm" />
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>
              
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-1/2" />
                <div className="h-20 bg-secondary rounded-xl mt-6" />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <span className="text-sm font-medium text-accent">Your Goals</span>
                  </div>
                  <div className="h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <span className="text-sm font-medium text-accent">Custom Price</span>
                  </div>
                </div>
                <div className="h-12 bg-accent rounded-xl mt-4 flex items-center justify-center">
                  <span className="text-accent-foreground font-medium">Get Your Quote</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-accent/10 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowQuotesWorkSection;
