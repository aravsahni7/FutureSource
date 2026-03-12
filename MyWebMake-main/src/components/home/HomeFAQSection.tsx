import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import FAQAccordion from "@/components/shared/FAQAccordion";

const homeFAQs = [
  {
    question: "Do you work with brand-new businesses?",
    answer: "Absolutely! Many of our clients are just starting out. We'll help you establish a professional online presence from day one. You don't need an existing website or even a logo—we can guide you through getting everything you need.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most business websites take 2-4 weeks from kickoff to launch. Landing pages can be done in 1-2 weeks. The timeline depends on how quickly you can provide content and feedback. We'll give you a specific timeline in your quote.",
  },
  {
    question: "What if I don't have photos or copy for my website?",
    answer: "No problem. We provide content guidance templates to help you gather what you need. If you don't have professional photos, we can source high-quality stock images that fit your brand. We also offer copywriting guidance to help you write effective content.",
  },
  {
    question: "How does pricing work?",
    answer: "Every business is different, so we provide custom quotes based on your specific needs. After our discovery call, you'll receive a detailed proposal with clear pricing—no hidden fees. This approach ensures you only pay for what you actually need.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes! Every project includes 30 days of post-launch support. After that, we offer optional maintenance packages that include regular backups, security updates, and content changes. You can also request updates on an as-needed basis.",
  },
  {
    question: "What happens after my website launches?",
    answer: "You're not alone after launch. We include 30 days of support for any issues or small adjustments. We'll also train you on making basic updates yourself. For ongoing care, maintenance packages are available.",
  },
];

const HomeFAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeader
          badge="FAQ"
          title="Common Questions"
          subtitle="Quick answers to the questions we hear most often."
        />

        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={homeFAQs} defaultOpen="faq-0" />
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/faq">
                View All FAQs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQSection;
