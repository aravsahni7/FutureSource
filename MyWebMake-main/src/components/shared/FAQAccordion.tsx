import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  defaultOpen?: string;
}

const FAQAccordion = ({ faqs, defaultOpen }: FAQAccordionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Accordion
        type="single"
        collapsible
        defaultValue={defaultOpen}
        className="space-y-3"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
          >
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-accent py-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default FAQAccordion;
