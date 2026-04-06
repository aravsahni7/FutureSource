import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, Users, Target, Lightbulb, Handshake } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ScrollTransition } from '@/components/animations/ScrollTransition';

export default function BookCall() {
  const { language, t } = useLanguage();

  const coverItems = [
    { key: 'goals', icon: Target },
    { key: 'challenges', icon: Lightbulb },
    { key: 'approach', icon: Users },
    { key: 'fit', icon: Handshake },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero grain-overlay relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-overline uppercase tracking-widest mb-6 animate-fade-in">
              {language === 'en' ? 'Free Consultation' : 'Consultation gratuite'}
            </span>
            <h1 className="font-editorial text-display-lg mb-6 animate-fade-in delay-100">
              {t('booking.title')}
            </h1>
            <p className="text-body-lg text-muted-foreground animate-fade-in delay-200">
              {t('booking.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Column - Info */}
            <ScrollTransition direction="left" className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                {/* Duration Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                  <span className="text-body-md font-medium">{t('booking.duration')}</span>
                </div>

                {/* What We'll Cover */}
                <div>
                  <h2 className="font-editorial text-heading-xl mb-6">
                    {t('booking.whatToCover.title')}
                  </h2>
                  <div className="space-y-4">
                    {coverItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.key}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gradient-card border border-border"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-body-md pt-2">
                            {t(`booking.whatToCover.items.${item.key}`)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Qualification */}
                <div className="p-6 rounded-2xl bg-gradient-warm border border-border">
                  <h3 className="font-editorial text-heading-lg mb-4">
                    {language === 'en' ? 'Best Fit For' : 'Idéal pour'}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { en: 'Brands across all marketing budget levels', fr: 'Marques avec tous types de budgets marketing' },
                      { en: 'Clear product-market fit', fr: 'Adéquation produit-marché claire' },
                      { en: 'Ready to scale within 3-6 months', fr: 'Prêt à croître dans 3-6 mois' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-body-md">{item[language]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollTransition>

            {/* Right Column - Calendar Embed */}
            <ScrollTransition direction="right" delay={0.2} className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card overflow-hidden min-h-[600px] shadow-editorial">
                <iframe 
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1i5ERsbEPZLlNNViXbcDg4mkXQJzKMJ0qiDPAqJMra3QP_WZVpJLHWczlrpnlzYuanydfLCu6v?gv=true" 
                  style={{ border: 0 }} 
                  width="100%" 
                  height="700" 
                  frameBorder="0"
                  title="Google Calendar Appointment Scheduling"
                ></iframe>
              </div>
              
              {/* Alternative Contact */}
              <div className="mt-8 text-center">
                <p className="text-body-md text-muted-foreground mb-4">
                  {language === 'en'
                    ? 'Alternatively, you can contact us directly:'
                    : 'Alternativement, vous pouvez nous contacter directement:'
                  }
                </p>
                <Button asChild variant="outline">
                  <Link to="/contact">{t('nav.contact')}</Link>
                </Button>
              </div>
            </ScrollTransition>
          </div>
        </div>
      </section>
    </>
  );
}
