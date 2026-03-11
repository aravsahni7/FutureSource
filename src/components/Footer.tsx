import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/insights', label: t('nav.insights') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const serviceLinks = [
    { href: '/services/paid-ads', label: t('services.paidAds.title') },
    { href: '/services/seo-content', label: t('services.seo.title') },
    { href: '/services/cro-landing-pages', label: t('services.cro.title') },
    { href: '/services/account-based-marketing', label: t('Account Based Marketing (ABM)') },
    { href: '/services/high-performance-web-design', label: t('High-Performance Web Design') }
  ];

  const legalLinks = [
    { href: '/privacy', label: t('footer.privacy') },
    { href: '/terms', label: t('footer.terms') },
    { href: '/cookies', label: t('footer.cookies') },
  ];

  return (
    <footer className="bg-gradient-warm pt-20 pb-8 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Top Section - Newsletter */}
        <div className="max-w-2xl mx-auto text-center mb-16 pb-16 border-b border-border">
          <h3 className="font-editorial text-display-sm mb-4">
            {t('insights.newsletter.title')}
          </h3>
          <p className="text-body-lg text-muted-foreground mb-8">
            {t('insights.newsletter.description')}
          </p>

          {subscribed ? (
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 animate-fade-in">
              <p className="text-body-md text-foreground">
                {t('language') === 'fr'
                  ? '✓ Merci de votre inscription!'
                  : '✓ Thank you for subscribing!'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t('insights.newsletter.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background border-border"
              />
              <Button type="submit" className="group">
                {t('insights.newsletter.cta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          )}
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo variant="full" className="mb-6" />
            <p className="text-body-md text-muted-foreground mb-6">
              {t('footer.tagline')}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-heading-sm font-semibold mb-6">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-body-md text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-heading-sm font-semibold mb-6">
              {t('footer.servicesTitle')}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-body-md text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-heading-sm font-semibold mb-6">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3 text-body-md text-muted-foreground">
              <li>hello@futuresource.ca</li>
              <li>+1 (438) 923-5809</li>
              <li>
                Montréal, QC<br />
                Canada
              </li>
            </ul>
            <Button asChild variant="outline" size="sm" className="mt-6">
              <Link to="/book-a-call">{t('nav.bookCall')}</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-muted-foreground">
            © {new Date().getFullYear()} FutureSource. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
