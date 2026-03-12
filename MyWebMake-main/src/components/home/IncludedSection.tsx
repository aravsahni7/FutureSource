import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const includedItems = [
  {
    title: "Mobile-Responsive Design",
    description: "Looks great on phones, tablets, and desktops",
  },
  {
    title: "SEO-Ready Structure",
    description: "Proper headings, meta tags, and clean URLs",
  },
  {
    title: "Fast Loading Speeds",
    description: "Optimized images and efficient code",
  },
  {
    title: "Contact Forms",
    description: "Easy ways for visitors to reach you",
  },
  {
    title: "Analytics Setup",
    description: "Track your visitors and performance",
  },
  {
    title: "SSL Security Certificate",
    description: "Secure connection for your visitors",
  },
  {
    title: "30-Day Post-Launch Support",
    description: "We're here if you need us after launch",
  },
  {
    title: "Training & Documentation",
    description: "Learn to make basic updates yourself",
  },
];

const IncludedSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeader
          badge="Our Standards"
          title="What's Included in Every Build"
          subtitle="No matter the project size, every website we create meets these quality standards."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-3xl p-6 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {includedItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IncludedSection;
