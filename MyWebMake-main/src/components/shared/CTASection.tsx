import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteData";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "light" | "accent";
  showSecondary?: boolean;
}

const CTASection = ({
  title = "Ready to Get Started?",
  subtitle = "Let's talk about your project. Book a free 15-minute call and let's see how we can help your business grow online.",
  variant = "default",
  showSecondary = true,
}: CTASectionProps) => {
  const bgClasses = {
    default: "bg-primary text-primary-foreground",
    light: "bg-secondary text-foreground",
    accent: "bg-accent text-accent-foreground",
  };

  const buttonVariants = {
    default: {
      primary: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent",
      secondary: "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20",
    },
    light: {
      primary: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent",
      secondary: "border-border bg-background text-foreground hover:bg-muted",
    },
    accent: {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "border-accent-foreground/30 bg-accent-foreground/10 text-accent-foreground hover:bg-accent-foreground/20",
    },
  };

  return (
    <section className={`section-padding ${bgClasses[variant]}`}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className={`text-lg mb-8 ${
            variant === "default" ? "text-primary-foreground/80" :
            variant === "accent" ? "text-accent-foreground/80" :
            "text-muted-foreground"
          }`}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className={`${buttonVariants[variant].primary} px-8`}
              asChild
            >
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                {siteConfig.ctas.primary}
              </a>
            </Button>
            {showSecondary && (
              <Button
                variant="outline"
                size="lg"
                className={buttonVariants[variant].secondary}
                asChild
              >
                <Link to="/quote">
                  {siteConfig.ctas.secondary}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
