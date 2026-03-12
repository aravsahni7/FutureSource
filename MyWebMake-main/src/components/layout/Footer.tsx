import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig, services } from "@/data/siteData";
import { Mail, Phone, Instagram, Linkedin, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ✅ Import the logo from src/assets (fixes production)
import logoImg from "@/assets/ChatGPT Image Dec 24, 2025, 08_00_51 AM.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing! Check your email for local growth tips.");
      setEmail("");
    }
  };

  const quickLinks = [
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Get a Quote", href: "/quote" },
    { name: "FAQ", href: "/faq" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={logoImg}
                  alt="MyWebMake Websites logo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">
                  MyWebMake
                </span>
                <span className="text-xs text-primary-foreground/60 -mt-0.5">
                  Websites
                </span>
              </div>
            </Link>

            <p className="text-primary-foreground/70 text-sm mb-4">{siteConfig.tagline}</p>
            <p className="text-primary-foreground/60 text-sm mb-6">
              High-converting websites for small businesses that want to be found online and get more leads.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={`https://instagram.com/${siteConfig.social.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={`https://linkedin.com/in/${siteConfig.social.linkedin.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>

              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {siteConfig.phoneFormatted}
                </a>
              </li>

              <li>
                <div className="flex items-start gap-2 text-primary-foreground/60 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{siteConfig.serviceArea}</span>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <Button variant="accentOutline" size="sm" asChild>
                <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book a Free Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} MyWebMake Websites. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
