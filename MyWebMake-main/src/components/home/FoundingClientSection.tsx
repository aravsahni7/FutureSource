import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteData";
import { Star, Calendar, ArrowRight } from "lucide-react";

const FoundingClientSection = () => {
  return (
    <section className="section-padding-sm bg-accent/5 border-y border-accent/20">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Early Partner Offer</span>
          </div>
          
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Founding Client Spots Available
          </h2>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're just getting started, and that means extra attention for our first clients. 
            You'll get hands-on, personalized service as we build our portfolio together. 
            Let's create something great.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" />
                Claim Your Spot
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                Learn About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundingClientSection;
