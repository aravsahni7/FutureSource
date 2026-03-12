import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Eye } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  industry: string;
  category: string;
  description: string;
  features: string[];
  designedFor: string;
  image: string;
  isDemo?: boolean;
  index?: number;
}

const ProjectCard = ({
  id,
  title,
  industry,
  category,
  description,
  features,
  designedFor,
  image,
  isDemo = true,
  index = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        <img
          src={image}
          alt={`${title} - Demo concept for ${industry}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Demo Badge Overlay */}
        {isDemo && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
              Demo Concept
            </Badge>
          </div>
        )}
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/work/${id}`}
            className="w-12 h-12 rounded-full bg-accent flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300"
          >
            <Eye className="w-5 h-5 text-accent-foreground" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">{industry}</Badge>
          <Badge variant="outline" className="text-xs">{category}</Badge>
        </div>
        <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
          <Link to={`/work/${id}`}>
            {title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        <p className="text-xs text-accent font-medium">
          Designed for: {designedFor}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
