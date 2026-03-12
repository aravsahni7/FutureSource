import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/siteData";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { Mail, Phone, Calendar, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const contactFAQs = [
  {
    question: "How long does it take to get a response?",
    answer: "We typically respond within 24 hours during business days.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! Our initial 15-minute discovery call is completely free.",
  },
  {
    question: "Can I book a call outside business hours?",
    answer:
      "Our booking calendar shows available slots. We can often accommodate different time zones.",
  },
];

// ✅ FormSubmit token endpoint (no naked email)
const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/8dd27f27e4e10f264d98fcef7058381a";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill out your name, email, and message.");
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();

      // FormSubmit special fields
      data.append("_subject", "New Contact Message - MyWebMake Websites");
      data.append("_template", "table");
      data.append("_captcha", "false");
      data.append("_replyto", form.email);

      // Honeypot field (spam trap): should remain empty
      data.append("_honey", "");

      // Include fields
      data.append("Name", form.name);
      data.append("Email", form.email);
      data.append("Phone", form.phone || "N/A");
      data.append("Message", form.message);

      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Submit failed with status ${res.status}`);
      }

      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | MyWebMake Websites</title>
        <meta
          name="description"
          content="Get in touch with MyWebMake Websites. Book a free call or send us a message. Based in Montreal, serving clients across Canada."
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
              <span className="badge-accent mb-4 inline-block">Contact</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Let's Talk About Your Project
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Book a free call or send us a message. We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl font-bold mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>

                  <Input
                    placeholder="Phone (optional)"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />

                  <Textarea
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                  />

                  <Button type="submit" variant="accent" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold mb-6">Or Book a Call</h3>
                  <Button variant="accent" size="lg" className="w-full mb-6" asChild>
                    <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">
                      <Calendar className="w-5 h-5" />
                      {siteConfig.ctas.primary}
                    </a>
                  </Button>

                  <div className="space-y-4">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-accent"
                    >
                      <Mail className="w-5 h-5" />
                      {siteConfig.email}
                    </a>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-accent"
                    >
                      <Phone className="w-5 h-5" />
                      {siteConfig.phoneFormatted}
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5" />
                      {siteConfig.serviceArea}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold mb-4">Quick FAQ</h3>
                  <FAQAccordion faqs={contactFAQs} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
