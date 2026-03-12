import { motion } from "framer-motion";
import { Smartphone, Search, Zap, PenLine, Sliders, BarChart3, Check } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const benefits = [
  {
    title: "Fast Turnarounds",
    description: "Most websites launch in 2-4 weeks. We respect your time and get you online quickly.",
    icon: Zap,
  },
  {
    title: "Mobile-First Design",
    description: "Your site looks perfect on every device. Because most of your visitors are on their phones.",
    icon: Smartphone,
  },
  {
    title: "SEO Foundations",
    description: "Built-in optimization so search engines can find you. Proper structure from day one.",
    icon: Search,
  },
  {
    title: "Copy Guidance",
    description: "Not sure what to write? We help you craft messaging that connects with customers.",
    icon: PenLine,
  },
  {
    title: "Easy Updates",
    description: "Make basic changes yourself, or let us handle it. You're never stuck.",
    icon: Sliders,
  },
  {
    title: "Analytics Ready",
    description: "Track your visitors and understand what's working. Data to grow smarter.",
    icon: BarChart3,
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        <SectionHeader
          badge="Why Choose Us"
          title="Built Different, Built Better"
          subtitle="Every website we create is designed with your business goals in mind—not just to look pretty."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
