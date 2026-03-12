import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/siteData";
import CTASection from "@/components/shared/CTASection";
import { Helmet } from "react-helmet-async";
import demoFitness from "@/assets/demo-fitness.jpg";
import demoRestaurant from "@/assets/demo-restaurant.jpg";

const demoProjects = [
  {
    id: "fitness-studio",
    title: "Physical Therapy",
    industry: "Fitness",
    description: "Energetic therapy website",
    designedFor: "Selling Products",
    image: demoFitness,
  },
  {
    id: "restaurant-landing",
    title: "Pizzeria",
    industry: "Restaurant",
    description: "Appetizing restaurant design",
    designedFor: "Reservations",
    image: demoRestaurant,
  },
];

const Work = () => {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? demoProjects
      : demoProjects.filter((p) => p.industry === filter);

  return (
    <>
      <Helmet>
        <title>Demo Work | MyWebMake Websites</title>
        <meta
          name="description"
          content="Browse our demo website concepts for barbers, dentists, contractors, restaurants, and more. Your project could be next."
        />
      </Helmet>

      <Layout>
        <section className="pt-32 pb-16 bg-primary text-primary-foreground">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="badge-accent mb-4 inline-block">Demo Work</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Sample Concepts & Design Ideas
              </h1>
              <p className="text-xl text-primary-foreground/80">
                These are demo concepts showcasing the quality of our work. Your
                project could look this good.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="flex flex-wrap gap-2 mb-8">
              {industries.map((ind) => (
                <Button
                  key={ind}
                  variant={filter === ind ? "accent" : "outline"}
                  size="sm"
                  onClick={() => setFilter(ind)}
                >
                  {ind}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden card-hover"
                >
                  {/* IMAGE BLOCK (UPDATED TO BE MORE "ZOOMED OUT") */}
                  <div className="aspect-[4/3] bg-muted relative flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-contain p-4"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary/90">
                      Demo Concept
                    </Badge>
                  </div>

                  <div className="p-5">
                    <Badge variant="secondary" className="mb-2">
                      {p.industry}
                    </Badge>
                    <h3 className="font-heading text-lg font-bold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {p.description}
                    </p>
                    <p className="text-xs text-accent mt-2">
                      Designed for: {p.designedFor}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12 p-8 bg-accent/5 rounded-2xl border border-accent/20">
              <p className="text-lg font-medium mb-4">
                Your project could be featured here next.
              </p>
              <Button variant="accent" asChild>
                <a href="/quote">Start Your Project</a>
              </Button>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default Work;
