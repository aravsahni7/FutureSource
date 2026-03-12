import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Check, Send } from "lucide-react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const steps = ["Business Info", "Goals", "Features", "Brand", "Timeline", "Contact"];

// ✅ FormSubmit token endpoint (no naked email)
const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/8dd27f27e4e10f264d98fcef7058381a";

const Quote = () => {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    businessType: "",
    industry: "",
    goals: [] as string[],
    pages: "",
    features: [] as string[],
    hasLogo: "",
    hasContent: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const lastStep = steps.length - 1;

  const resetForm = () => {
    setStep(0);
    setForm({
      businessType: "",
      industry: "",
      goals: [],
      pages: "",
      features: [],
      hasLogo: "",
      hasContent: "",
      timeline: "",
      name: "",
      email: "",
      phone: "",
      notes: "",
    });
  };

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please enter your name and email before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();

      // FormSubmit special fields
      data.append("_subject", "New Quote Request - MyWebMake Websites");
      data.append("_template", "table");
      data.append("_captcha", "false");
      data.append("_replyto", form.email);

      // Honeypot field (spam trap): should remain empty
      data.append("_honey", "");

      // Include all fields
      data.append("Name", form.name);
      data.append("Email", form.email);
      data.append("Phone", form.phone || "N/A");

      data.append("Business Type", form.businessType || "N/A");
      data.append("Industry", form.industry || "N/A");

      data.append("Goals", form.goals.length ? form.goals.join(", ") : "N/A");
      data.append("Estimated Pages", form.pages || "N/A");
      data.append(
        "Features",
        form.features.length ? form.features.join(", ") : "N/A"
      );

      data.append("Has Logo", form.hasLogo || "N/A");
      data.append("Content Readiness", form.hasContent || "N/A");

      data.append("Timeline", form.timeline || "N/A");
      data.append("Notes", form.notes || "N/A");

      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error(`Submit failed with status ${res.status}`);

      toast.success("Quote request received! We'll get back to you within 24 hours.");
      resetForm();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong sending your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Get a Quote | MyWebMake Websites</title>
        <meta
          name="description"
          content="Request a custom quote for your website project. Tell us about your business and we'll provide a detailed proposal."
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
              <span className="badge-accent mb-4 inline-block">Get a Quote</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Tell Us About Your Project
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Fill out this quick form and we'll send you a custom quote within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-wide max-w-2xl">
            {/* Progress */}
            <div className="flex items-center justify-between mb-8">
              {steps.map((_, i) => (
                <div key={i} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      i <= step
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i < step ? <Check className="w-4 h-4" /> : i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`hidden sm:block w-8 md:w-16 h-0.5 mx-1 ${
                        i < step ? "bg-accent" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              {step === 0 && (
                <div className="space-y-6">
                  <h2 className="font-heading text-xl font-bold">
                    Tell us about your business
                  </h2>

                  <div>
                    <Label>Business Type</Label>
                    <RadioGroup
                      value={form.businessType}
                      onValueChange={(v) => setForm({ ...form, businessType: v })}
                      className="mt-2 grid grid-cols-2 gap-2"
                    >
                      {["New Business", "Established Business", "Side Project", "Non-Profit"].map(
                        (o) => (
                          <div
                            key={o}
                            className="flex items-center space-x-2 border rounded-lg p-3"
                          >
                            <RadioGroupItem value={o} id={o} />
                            <Label htmlFor={o}>{o}</Label>
                          </div>
                        )
                      )}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label>Industry</Label>
                    <Input
                      placeholder="e.g., Barber, Dental, Contractor..."
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-heading text-xl font-bold">
                    What are your main goals?
                  </h2>
                  <div className="space-y-3">
                    {[
                      "Get more leads/inquiries",
                      "Improve credibility",
                      "Enable online booking",
                      "Sell products online",
                      "Rank in local searches",
                      "Replace outdated website",
                    ].map((g) => (
                      <div
                        key={g}
                        className="flex items-center space-x-2 border rounded-lg p-3"
                      >
                        <Checkbox
                          checked={form.goals.includes(g)}
                          onCheckedChange={(c) =>
                            setForm({
                              ...form,
                              goals: c ? [...form.goals, g] : form.goals.filter((x) => x !== g),
                            })
                          }
                        />
                        <Label>{g}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-heading text-xl font-bold">
                    What features do you need?
                  </h2>

                  <div>
                    <Label>Estimated Pages</Label>
                    <RadioGroup
                      value={form.pages}
                      onValueChange={(v) => setForm({ ...form, pages: v })}
                      className="mt-2 space-y-2"
                    >
                      {["1-3 (Landing page)", "4-6 (Small site)", "7-10 (Full site)", "10+ (Large site)"].map(
                        (o) => (
                          <div
                            key={o}
                            className="flex items-center space-x-2 border rounded-lg p-3"
                          >
                            <RadioGroupItem value={o} id={o} />
                            <Label htmlFor={o}>{o}</Label>
                          </div>
                        )
                      )}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label>Features (select all that apply)</Label>
                    <div className="space-y-2 mt-2">
                      {[
                        "Online booking",
                        "Contact forms",
                        "E-commerce",
                        "Blog",
                        "Photo gallery",
                        "Testimonials section",
                      ].map((f) => (
                        <div
                          key={f}
                          className="flex items-center space-x-2 border rounded-lg p-3"
                        >
                          <Checkbox
                            checked={form.features.includes(f)}
                            onCheckedChange={(c) =>
                              setForm({
                                ...form,
                                features: c
                                  ? [...form.features, f]
                                  : form.features.filter((x) => x !== f),
                              })
                            }
                          />
                          <Label>{f}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="font-heading text-xl font-bold">
                    Brand & Content Readiness
                  </h2>

                  <div>
                    <Label>Do you have a logo?</Label>
                    <RadioGroup
                      value={form.hasLogo}
                      onValueChange={(v) => setForm({ ...form, hasLogo: v })}
                      className="mt-2 space-y-2"
                    >
                      {["Yes, ready to use", "Yes, needs updating", "No, I need one"].map((o) => (
                        <div
                          key={o}
                          className="flex items-center space-x-2 border rounded-lg p-3"
                        >
                          <RadioGroupItem value={o} id={o} />
                          <Label htmlFor={o}>{o}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label>Content readiness</Label>
                    <RadioGroup
                      value={form.hasContent}
                      onValueChange={(v) => setForm({ ...form, hasContent: v })}
                      className="mt-2 space-y-2"
                    >
                      {["I have all content ready", "I have some content", "I need help with content"].map(
                        (o) => (
                          <div
                            key={o}
                            className="flex items-center space-x-2 border rounded-lg p-3"
                          >
                            <RadioGroupItem value={o} id={o} />
                            <Label htmlFor={o}>{o}</Label>
                          </div>
                        )
                      )}
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* ✅ Budget step removed — this step is now Timeline only (no empty spacing) */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="font-heading text-xl font-bold">Timeline</h2>

                  <div>
                    <Label>When do you want to launch?</Label>
                    <RadioGroup
                      value={form.timeline}
                      onValueChange={(v) => setForm({ ...form, timeline: v })}
                      className="mt-2 space-y-2"
                    >
                      {["ASAP", "Within 1 month", "Within 2-3 months", "Flexible"].map((o) => (
                        <div
                          key={o}
                          className="flex items-center space-x-2 border rounded-lg p-3"
                        >
                          <RadioGroupItem value={o} id={o} />
                          <Label htmlFor={o}>{o}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-6">
                  <h2 className="font-heading text-xl font-bold">
                    Your Contact Information
                  </h2>
                  <Input
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Phone (optional)"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <Textarea
                    placeholder="Anything else we should know?"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                  />
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => setStep((s) => s - 1)}
                  disabled={step === 0 || isSubmitting}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>

                {step < lastStep ? (
                  <Button
                    variant="accent"
                    onClick={() => setStep((s) => s + 1)}
                    disabled={isSubmitting}
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    variant="accent"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Quote;
