import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
}

const SectionHeader = ({
  badge,
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {badge && (
        <span className="badge-accent mb-4 inline-block">{badge}</span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg text-muted-foreground max-w-2xl",
          centered && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
