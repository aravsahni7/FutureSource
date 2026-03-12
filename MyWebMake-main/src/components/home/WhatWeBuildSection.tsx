import { motion } from "framer-motion";
import { Building2, Target, ShoppingBag, Layers } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const whatWeBuild = [
  {
    title: "Business Websites",
    description: "5-8 page professional sites that establish credibility and generate leads for your services",
    icon: Building2,
  },
  {
    title: "Service Lead-Gen Sites",
    description: "Conversion-focused websites built to turn visitors into quote requests and phone calls",
    icon: Target,
  },
  {
    title: "E-commerce Starters",
    description: "Clean online stores to start selling your products with secure checkout",
    icon: ShoppingBag,
  },
  {
    title: "Landing Pages",
    description: "Single-page designs optimized for your ad campaigns and maximum conversions",
    icon: Layers,
  },
];

const WhatWeBuildSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeader
          badge="What We Build"
          title="Websites That Work as Hard as You Do"
          subtitle="From simple landing pages to full business websites—we create online presences that help small businesses grow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeBuild.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border p-6 text-center card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent transition-colors duration-300">
                <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuildSection;
