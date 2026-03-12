import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import demoRestaurant from "@/assets/demo-restaurant.jpg";
import demoFitness from "@/assets/demo-fitness.jpg";

const demoProjects = [
  {
    id: "restaurant-landing",
    title: "Gourmet Haven",
    industry: "Restaurant",
    description: "Elegant design with menu highlights",
    designedFor: "Reservations & online orders",
    image: demoRestaurant,
  },
  {
    id: "fitness-studio",
    title: "Peak Performance Physical Therapy",
    industry: "Fitness",
    description: "Dynamic design with products",
    designedFor: "Memberships & products",
    image: demoFitness,
  },
];

const WorkHighlightsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <SectionHeader
          badge="Demo Concepts"
          title="Sample Work & Design Concepts"
          subtitle="These are demo concepts showcasing the quality and variety of websites we build. Your project could look this good."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {demoProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Image (UPDATED TO BE MORE "ZOOMED OUT") */}
              <div className="relative aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={`${project.title} - Demo concept`}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm text-xs">
                    Demo Concept
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <Badge variant="secondary" className="mb-2 text-xs">
                  {project.industry}
                </Badge>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {project.description}
                </p>
                <p className="text-xs text-accent font-medium">
                  Designed for: {project.designedFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-foreground font-medium mb-4">
            Your project could be featured here next.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/work">
              View All Demo Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkHighlightsSection;