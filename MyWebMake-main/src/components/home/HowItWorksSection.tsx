import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Video, Palette, Code, CheckCircle, Rocket, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "Quick 15-minute call to understand your goals and give you a custom quote.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Design & Plan",
    description: "We create your website design and structure based on your brand and needs.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Build & Review",
    description: "We build your site and you review it. Two rounds of revisions included.",
    icon: Code,
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We go live and support you for 30 days. You're never left on your own.",
    icon: Rocket,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <SectionHeader
          badge="How It Works"
          title="Simple, Clear Process"
          subtitle="No surprises. No endless back-and-forth. Just a straightforward process to get your site live."
          className="text-center [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/70"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+30px)] w-[calc(100%-30px)] h-0.5 bg-primary-foreground/20" />
              )}
              
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 text-center relative">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-xs font-bold text-accent mb-2 block">{step.number}</span>
                <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <Link to="/process">
              See Full Process Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
