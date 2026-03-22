import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Target, Search, TrendingUp, Sparkles, Check, X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { services } from '@/data/content';
import { cn } from '@/lib/utils';
import demoFitness from '@/assets/demo-fitness.jpg';
import demoRestaurant from '@/assets/demo-restaurant.jpg';
import myPapermake from '@/data/My papermake.PNG';

const iconMap: Record<string, React.ElementType> = {
  target: Target,
  search: Search,
  'trending-up': TrendingUp,
  sparkles: Sparkles,
};

export default function Services() {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [activeService, setActiveService] = useState(services[0].id);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && services.find(s => s.id === hash)) {
      setActiveService(hash);
    }
  }, [location.hash]);

  const scrollToService = (id: string) => {
    setActiveService(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero grain-overlay relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-overline uppercase tracking-widest mb-6 animate-fade-in">
              {language === 'en' ? 'Growth Services' : 'Services de croissance'}
            </span>
            <h1 className="font-editorial text-display-lg mb-6 animate-fade-in delay-100">
              {t('services.title')}
            </h1>
            <p className="text-body-lg text-muted-foreground animate-fade-in delay-200">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services with Sticky Nav */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sticky Side Navigation */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32">
                <nav className="space-y-2 sticky-nav-line pl-6">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToService(service.id)}
                      className={cn(
                        "block w-full text-left py-3 px-4 rounded-lg transition-all duration-300",
                        activeService === service.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      <span className="text-body-md">{service.title[language]}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Service Cards */}
            <div className="lg:col-span-9 space-y-24">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon] || Target;
                const colors = [
                  'bg-primary/10 text-primary border-primary/20',
                  'bg-apricot/10 text-apricot border-apricot/20',
                  'bg-gold-light/20 text-gold-dark border-gold-light/30',
                ];
                const colorClass = colors[index % colors.length];

                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-32"
                  >
                    <div className={cn(
                      "rounded-3xl border p-8 md:p-12 transition-all duration-500",
                      colorClass.split(' ').slice(0, 1).join(' '),
                      "border-border bg-card"
                    )}>
                      {/* Header */}
                      <div className="flex items-start gap-6 mb-8">
                        <div className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0",
                          colorClass.split(' ').slice(0, 2).join(' ')
                        )}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <p className="text-caption text-muted-foreground uppercase tracking-wider mb-2">
                            {service.tagline[language]}
                          </p>
                          <h2 className="font-editorial text-display-sm">
                            {service.title[language]}
                          </h2>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl">
                        {service.description[language]}
                      </p>

                      {/* Ideal For / Not For */}
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="p-6 rounded-xl bg-secondary/30">
                          <div className="flex items-center gap-2 mb-3">
                            <Check className="h-5 w-5 text-primary" />
                            <span className="text-heading-sm font-medium">
                              {language === 'en' ? 'Ideal For' : 'Idéal pour'}
                            </span>
                          </div>
                          <p className="text-body-md text-muted-foreground">
                            {service.idealFor[language]}
                          </p>
                        </div>
                        <div className="p-6 rounded-xl bg-secondary/30">
                          <div className="flex items-center gap-2 mb-3">
                            <X className="h-5 w-5 text-destructive" />
                            <span className="text-heading-sm font-medium">
                              {language === 'en' ? 'Not For' : 'Pas pour'}
                            </span>
                          </div>
                          <p className="text-body-md text-muted-foreground">
                            {service.notFor[language]}
                          </p>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="mb-8">
                        <h3 className="font-editorial text-heading-lg mb-4">
                          {language === 'en' ? 'What You Get' : 'Ce que vous obtenez'}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.deliverables[language].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                              <span className="text-body-md">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Demo Projects (Only for Web Design) */}
                      {service.id === 'web-design' && (
                        <div className="mb-8 p-6 rounded-2xl bg-secondary/20 border border-primary/10">
                          <h3 className="font-editorial text-heading-lg mb-4">
                            {language === 'en' ? 'Demo Concepts' : 'Concepts de démo'}
                          </h3>
                          <p className="text-body-md text-muted-foreground mb-6">
                            {language === 'en'
                              ? 'Browse our demo website concepts. Your project could look this good.'
                              : 'Parcourez nos concepts de sites démo. Votre projet pourrait être aussi beau.'}
                          </p>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Demo 1 */}
                            <div className="bg-card border border-border rounded-xl overflow-hidden group">
                              <div className="aspect-[4/3] bg-muted relative flex items-center justify-center p-2">
                                <img
                                  src={demoFitness}
                                  alt="Demo Concept - Fitness"
                                  className="w-full h-full object-contain rounded-lg shadow-sm"
                                />
                                <div className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-md uppercase tracking-wider">
                                  Demo
                                </div>
                              </div>
                              <div className="p-4">
                                <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1 block">Fitness</span>
                                <h4 className="font-editorial text-lg mb-1">Physical Therapy</h4>
                                <p className="text-sm text-muted-foreground pb-2">Energetic therapy website</p>
                              </div>
                            </div>
                            
                            {/* Demo 2 */}
                            <div className="bg-card border border-border rounded-xl overflow-hidden group">
                              <div className="aspect-[4/3] bg-muted relative flex items-center justify-center p-2">
                                <img
                                  src={demoRestaurant}
                                  alt="Demo Concept - Restaurant"
                                  className="w-full h-full object-contain rounded-lg shadow-sm"
                                />
                                <div className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-md uppercase tracking-wider">
                                  Demo
                                </div>
                              </div>
                              <div className="p-4">
                                <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1 block">Restaurant</span>
                                <h4 className="font-editorial text-lg mb-1">Pizzeria</h4>
                                <p className="text-sm text-muted-foreground pb-2">Appetizing restaurant design</p>
                              </div>
                            </div>
                            
                            {/* Demo 3 */}
                            <div className="bg-card border border-border rounded-xl overflow-hidden group">
                              <div className="aspect-[4/3] bg-muted relative flex items-center justify-center p-2">
                                <img
                                  src={myPapermake}
                                  alt="Demo Concept - Product Based"
                                  className="w-full h-full object-contain rounded-lg shadow-sm"
                                />
                                <div className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-md uppercase tracking-wider">
                                  Demo
                                </div>
                              </div>
                              <div className="p-4">
                                <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1 block">Product Based</span>
                                <h4 className="font-editorial text-lg mb-1">Paper Products</h4>
                                <p className="text-sm text-muted-foreground pb-2">Calm handcrafted creativity</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="flex flex-wrap gap-4">
                        <Button asChild className="group">
                          <Link to="/book-a-call">
                            {t('nav.bookCall')}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link to={`/services/${service.slug}`}>
                            {t('common.learnMore')}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Tiers */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-editorial text-display-md mb-4">
              {t('services.packages.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
              {language === 'en' 
                ? 'Choose the engagement level that matches your growth stage'
                : 'Choisissez le niveau d\'engagement qui correspond à votre stade de croissance'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { key: 'starter', highlight: false },
              { key: 'growth', highlight: true },
              { key: 'scale', highlight: false },
            ].map((tier) => (
              <div
                key={tier.key}
                className={cn(
                  "rounded-2xl p-8 transition-all duration-500",
                  tier.highlight
                    ? "bg-gradient-gold text-primary-foreground scale-105 shadow-gold"
                    : "bg-card border border-border card-editorial"
                )}
              >
                {tier.highlight && (
                  <span className="inline-block px-3 py-1 rounded-full bg-background/20 text-caption uppercase tracking-wider mb-4">
                    {language === 'en' ? 'Most Popular' : 'Le plus populaire'}
                  </span>
                )}
                <h3 className="font-editorial text-heading-xl mb-3">
                  {t(`services.packages.${tier.key}.title`)}
                </h3>
                <p className={cn(
                  "text-body-md mb-6",
                  tier.highlight ? "opacity-90" : "text-muted-foreground"
                )}>
                  {t(`services.packages.${tier.key}.description`)}
                </p>
                <Button
                  asChild
                  variant={tier.highlight ? "secondary" : "outline"}
                  className="w-full"
                >
                  <Link to="/book-a-call">
                    {t('nav.bookCall')}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-editorial text-display-md mb-6">{t('cta.primary.title')}</h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto mb-8">
            {t('cta.primary.text')}
          </p>
          <Button asChild size="lg" className="group">
            <Link to="/book-a-call">
              {t('cta.primary.button')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
