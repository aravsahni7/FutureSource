import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Target, Search, TrendingUp, Sparkles, Check, X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { services } from '@/data/content';
import { cn } from '@/lib/utils';
import { ScrollTransition } from '@/components/animations/ScrollTransition';
import { TextReveal } from '@/components/animations/TextReveal';

// 3D images for each service card
import serviceWebDesign3d from '@/assets/service-web-design-3d.png';
import servicePaidAds3d from '@/assets/service-paid-ads-3d.png';
import serviceSeoContent3d from '@/assets/service-seo-content-3d.png';
import serviceAbm3d from '@/assets/service-abm-3d.png';
import serviceCro3d from '@/assets/service-cro-3d.png';

// Demo concept images
import demoFitness from '@/assets/demo-fitness.jpg';
import demoRestaurant from '@/assets/demo-restaurant.jpg';
import myPapermake from '@/data/My papermake.PNG';

const service3dImages: Record<string, string> = {
  'web-design': serviceWebDesign3d,
  'paid-ads': servicePaidAds3d,
  'seo-content': serviceSeoContent3d,
  'abm': serviceAbm3d,
  'cro-landing-pages': serviceCro3d,
};

// Short display titles for the large editorial typography (front of card)
const serviceDisplayTitles: Record<string, { en: string[]; fr: string[] }> = {
  'web-design': {
    en: ['WEB', 'DESIGN'],
    fr: ['DESIGN', 'WEB'],
  },
  'paid-ads': {
    en: ['PAID', 'ADS'],
    fr: ['PUB', 'PAYANTE'],
  },
  'seo-content': {
    en: ['SEO &', 'CONTENT'],
    fr: ['SEO &', 'CONTENU'],
  },
  'abm': {
    en: ['ABM', 'GROWTH'],
    fr: ['ABM', 'B2B'],
  },
  'cro-landing-pages': {
    en: ['CRO &', 'LANDING'],
    fr: ['CRO &', 'PAGES'],
  },
};

function ServiceFlipCard({
  service,
  index,
  language,
}: {
  service: typeof services[0];
  index: number;
  language: 'en' | 'fr';
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const displayTitle = serviceDisplayTitles[service.id] || { en: [service.title.en], fr: [service.title.fr] };
  const image3d = service3dImages[service.id];

  return (
    <div
      className="service-flip-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={cn("service-flip-card", isFlipped && "is-flipped")}>
        {/* ===== FRONT FACE ===== */}
        <div className="service-flip-front">
          <div className="service-card-number">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="service-card-front-content">
            <div className="service-card-title-area">
              {displayTitle[language].map((line, i) => (
                <span key={i} className="service-card-big-title">
                  {line}
                </span>
              ))}
            </div>
            {image3d && (
              <div className="service-card-3d-image">
                <img
                  src={image3d}
                  alt={service.title[language]}
                  draggable={false}
                />
              </div>
            )}
          </div>
          <div className="service-card-tagline">
            {service.tagline[language]}
          </div>
        </div>

        {/* ===== BACK FACE ===== */}
        <div className="service-flip-back">
          <div className="service-back-scroll">
            <div className="service-back-header">
              <span className="service-back-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="service-back-title">{service.title[language]}</h3>
              <p className="service-back-tagline">{service.tagline[language]}</p>
            </div>

            <p className="service-back-description">
              {service.description[language]}
            </p>

            <div className="service-back-sections">
              <div className="service-back-section">
                <div className="service-back-section-header">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{language === 'en' ? 'Ideal For' : 'Idéal pour'}</span>
                </div>
                <p>{service.idealFor[language]}</p>
              </div>

              <div className="service-back-section">
                <div className="service-back-section-header">
                  <X className="h-4 w-4 text-destructive" />
                  <span>{language === 'en' ? 'Not For' : 'Pas pour'}</span>
                </div>
                <p>{service.notFor[language]}</p>
              </div>
            </div>

            <div className="service-back-deliverables">
              <h4>{language === 'en' ? 'What You Get' : 'Ce que vous obtenez'}</h4>
              <ul>
                {service.deliverables[language].map((item, i) => (
                  <li key={i}>
                    <div className="service-deliverable-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>



            <div className="service-back-ctas">
              <Button asChild size="sm" className="group">
                <Link to="/book-a-call">
                  {language === 'en' ? 'Book a Call' : 'Réserver un appel'}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to={`/services/${service.slug}`}>
                  {language === 'en' ? 'Learn More' : 'En savoir plus'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { language, t } = useLanguage();
  const location = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const checkScroll = () => {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    };

    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.service-flip-card-container')?.clientWidth || 600;
    el.scrollBy({
      left: direction === 'left' ? -cardWidth - 32 : cardWidth + 32,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* ====== EDITORIAL HORIZONTAL SERVICES HERO ====== */}
      <section className="services-editorial-section">
        <div className="services-editorial-header">
          <div className="services-editorial-header-left">
            <h1 className="services-editorial-heading">
              <span className="services-editorial-heading-line1">
                {language === 'en' ? 'GROWTH' : 'MARKETING'}
              </span>
              <span className="services-editorial-heading-line2">
                {language === 'en' ? 'SERVICES' : 'DE CROISSANCE'}
              </span>
            </h1>
            <p className="services-editorial-subtitle">
              {t('services.subtitle')}
            </p>
          </div>
        </div>

        {/* Horizontal scroll area */}
        <div className="services-carousel-wrapper">
          <div
            className="services-carousel-track"
            ref={scrollContainerRef}
          >
            {services.map((service, index) => (
              <ServiceFlipCard
                key={service.id}
                service={service}
                index={index}
                language={language}
              />
            ))}
          </div>
        </div>

        {/* Bottom navigation row */}
        <div className="services-carousel-nav">
          <div className="services-carousel-nav-inner">
            <div className="flex items-center gap-6">
              <button
                className={cn(
                  "flex items-center text-foreground transition-all group",
                  !canScrollLeft ? "opacity-30 cursor-not-allowed" : "hover:opacity-70 cursor-pointer"
                )}
                onClick={() => scroll('left')}
                aria-label="Scroll left"
              >
                <div className="flex items-center">
                  <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                  <div className="w-[80px] h-[1px] bg-current ml-[-2px]" />
                </div>
              </button>
              
              <div className="flex flex-col">
                <span className="font-editorial font-bold text-sm tracking-wide text-foreground">
                  {language === 'en' ? 'Explore Our Services' : 'Explorez nos services'}
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">
                  {language === 'en' ? 'Scroll to explore' : 'Défiler pour explorer'}
                </span>
                <span className="text-xs text-muted-foreground/60 mt-0.5 italic">
                  {language === 'en' ? 'Hover for Details' : 'Survolez pour les détails'}
                </span>
              </div>
            </div>

            <button
              className={cn(
                "flex items-center text-foreground transition-all group",
                !canScrollRight ? "opacity-30 cursor-not-allowed" : "hover:opacity-70 cursor-pointer"
              )}
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <div className="flex items-center">
                <div className="w-[80px] h-[1px] bg-current mr-[-2px]" />
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ====== ENGAGEMENT TIERS (unchanged) ====== */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <ScrollTransition className="text-center mb-16">
            <h2 className="font-editorial text-display-md mb-4">
              <TextReveal text={t('services.packages.title')} />
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
              {language === 'en' 
                ? 'Choose the engagement level that matches your growth stage'
                : 'Choisissez le niveau d\'engagement qui correspond à votre stade de croissance'
              }
            </p>
          </ScrollTransition>

          <ScrollTransition stagger={true} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { key: 'starter', highlight: false },
              { key: 'growth', highlight: true },
              { key: 'scale', highlight: false },
            ].map((tier) => (
              <div
                key={tier.key}
                className={cn(
                  "rounded-2xl p-8 transition-all duration-500 card-editorial",
                  tier.highlight
                    ? "bg-[#FC8264] text-white shadow-lg"
                    : "bg-card border border-border"
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
                  variant="default"
                  className="w-full"
                >
                  <Link to="/book-a-call">
                    {t('nav.bookCall')}
                  </Link>
                </Button>
              </div>
            ))}
          </ScrollTransition>
        </div>
      </section>

      {/* ====== CTA (Matched to Home page) ====== */}
      <section className="py-24 bg-gradient-gold text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-background blur-3xl" />
        </div>
        <ScrollTransition yOffset={40} className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-bold text-display-md mb-6"><TextReveal text={t('cta.primary.title')} /></h2>
          <p className="text-body-lg opacity-90 max-w-xl mx-auto mb-8">{t('cta.primary.text')}</p>
          <Button asChild size="lg" className="group bg-[#FC8264] hover:bg-[#eb7355] text-white border-none transition-colors">
            <Link to="/book-a-call">
              {t('cta.primary.button')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </ScrollTransition>
      </section>
    </>
  );
}
