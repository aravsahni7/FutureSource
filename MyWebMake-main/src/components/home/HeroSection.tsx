import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig, trustIndicators } from "@/data/siteData";
import { Calendar, ArrowRight, Smartphone, Search, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-20 md:pt-0"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      
      {/* Content */}
      <div className="relative container-wide py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Founding Client Spots Available
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Websites That Rank.{" "}
            <span className="text-accent">Websites That Sell.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl"
          >
            We build modern, mobile-first websites for small businesses ready to be found 
            online and turn visitors into customers. Fast, SEO-ready, and built to convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button variant="hero" size="xl" asChild>
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                {siteConfig.ctas.primary}
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/quote">
                {siteConfig.ctas.secondary}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            {[
              { icon: Smartphone, label: "Mobile-First Design" },
              { icon: Search, label: "SEO-Ready" },
              { icon: Zap, label: "Fast Loading" },
              { icon: Shield, label: "30-Day Support" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/70 text-sm"
              >
                <item.icon className="w-4 h-4 text-accent" />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
