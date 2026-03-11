import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/data/content';
import { cn } from '@/lib/utils';

const filters = ['all', 'paid-ads', 'seo-content', 'cro-landing-pages', 'branding'] as const;

const filterLabels: Record<string, { en: string; fr: string }> = {
  all: { en: 'All', fr: 'Tout' },
  'paid-ads': { en: 'Paid Ads', fr: 'Publicité payante' },
  'seo-content': { en: 'SEO', fr: 'SEO' },
  'cro-landing-pages': { en: 'Web & CRO', fr: 'Web et CRO' },
  branding: { en: 'Branding', fr: 'Image de marque' },
};

export default function Work() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredCases = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.services.includes(activeFilter));

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero grain-overlay relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-overline uppercase tracking-widest mb-6 animate-fade-in">
              {language === 'en' ? 'Case Studies' : 'Études de cas'}
            </span>
            <h1 className="font-editorial text-display-lg mb-6 animate-fade-in delay-100">
              {t('work.title')}
            </h1>
            <p className="text-body-lg text-muted-foreground animate-fade-in delay-200">
              {t('work.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border bg-background sticky top-20 z-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-body-sm font-medium transition-all duration-300",
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {filterLabels[filter][language]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid - Magazine Layout */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <Link
                key={caseStudy.id}
                to={`/work/${caseStudy.slug}`}
                className={cn(
                  "group block",
                  index === 0 && "md:col-span-2"
                )}
              >
                <article className={cn(
                  "rounded-2xl border border-border bg-card overflow-hidden card-editorial",
                  index === 0 && "md:grid md:grid-cols-2"
                )}>
                  <div className={cn(
                    "bg-gradient-editorial relative",
                    index === 0 ? "aspect-[4/3] md:aspect-auto" : "aspect-video"
                  )}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={cn(
                        "font-editorial text-muted-foreground/30",
                        index === 0 ? "text-display-sm" : "text-heading-lg"
                      )}>
                        {caseStudy.client}
                      </span>
                    </div>
                  </div>
                  <div className={cn(
                    "p-6",
                    index === 0 && "md:p-10 md:flex md:flex-col md:justify-center"
                  )}>
                    <p className="text-caption text-primary mb-2">{caseStudy.industry[language]}</p>
                    <h2 className={cn(
                      "font-editorial mb-4 group-hover:text-primary transition-colors",
                      index === 0 ? "text-display-sm" : "text-heading-lg"
                    )}>
                      {caseStudy.title[language]}
                    </h2>
                    <p className={cn(
                      "text-muted-foreground mb-6",
                      index === 0 ? "text-body-lg" : "text-body-md"
                    )}>
                      {caseStudy.subtitle[language]}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {caseStudy.results.slice(0, 3).map((result, i) => (
                        <div key={i} className="text-center">
                          <p className="font-editorial text-heading-lg text-gradient-gold">{result.value}</p>
                          <p className="text-caption text-muted-foreground">{result.metric[language]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-gold text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-editorial text-display-md mb-6">{t('cta.primary.title')}</h2>
          <p className="text-body-lg opacity-90 max-w-xl mx-auto mb-8">{t('cta.primary.text')}</p>
          <Button asChild size="lg" variant="secondary" className="group">
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
