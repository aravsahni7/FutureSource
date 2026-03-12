import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MapPin, Target, ShoppingBag, RefreshCw, Shield, Building2, Layers } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  MapPin,
  Target,
  ShoppingBag,
  RefreshCw,
  Shield,
  Building2,
  Layers,
};

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  features?: string[];
  timeline?: string;
  index?: number;
}

const ServiceCard = ({
  id,
  title,
  shortDesc,
  icon,
  features,
  timeline,
  index = 0,
}: ServiceCardProps) => {
  const IconComponent = iconMap[icon] || Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl border border-border p-6 md:p-8 card-hover"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
        <IconComponent className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
      </div>
      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4">
        {shortDesc}
      </p>
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      {timeline && (
        <p className="text-sm text-accent font-medium mb-4">
          Timeline: {timeline}
        </p>
      )}
      <Button variant="ghost" className="group/btn p-0 h-auto text-accent hover:text-accent/80" asChild>
        <Link to={`/services#${id}`}>
          Learn more
          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default ServiceCard;
