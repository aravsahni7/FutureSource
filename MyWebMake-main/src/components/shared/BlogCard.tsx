import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  index?: number;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  image,
  featured = false,
  index = 0,
}: BlogCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group bg-card rounded-2xl border border-border overflow-hidden card-hover md:grid md:grid-cols-2"
      >
        {/* Image */}
        <div className="relative aspect-video md:aspect-auto bg-muted overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <Badge variant="secondary" className="w-fit mb-3">{category}</Badge>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
            <Link to={`/blog/${id}`}>
              {title}
            </Link>
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{author}</span>
            <span>•</span>
            <span>{formattedDate}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
    >
      {/* Image */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      {/* Content */}
      <div className="p-5 md:p-6">
        <Badge variant="secondary" className="mb-3">{category}</Badge>
        <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
          <Link to={`/blog/${id}`}>
            {title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{formattedDate}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {readTime}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
