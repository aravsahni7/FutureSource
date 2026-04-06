import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Quote } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { getCaseStudyBySlug } from '@/data/content';
import { cn } from '@/lib/utils';
import { ScrollTransition } from '@/components/animations/ScrollTransition';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudy) {
    return <Navigate to="/work" replace />;
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero grain-overlay relative">
        <div className="container mx-auto px-6">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('common.back')} {t('nav.work')}
          </Link>

          <p className="text-caption text-primary uppercase tracking-wider mb-4">
            {caseStudy.industry[language]}
          </p>
          <h1 className="font-editorial text-display-lg mb-6 max-w-4xl animate-fade-in">
            {caseStudy.title[language]}
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-3xl animate-fade-in delay-100">
            {caseStudy.subtitle[language]}
          </p>

          {/* Client Badge */}
          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-caption font-bold text-primary">
                {caseStudy.client.charAt(0)}
              </span>
            </div>
            <span className="text-body-md font-medium">{caseStudy.client}</span>
          </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-12 bg-gradient-gold text-primary-foreground">
        <div className="container mx-auto px-6">
          <ScrollTransition stagger={true} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudy.results.map((result, i) => (
              <div key={i} className="text-center">
                <p className="font-editorial text-display-sm mb-1">{result.value}</p>
                <p className="text-body-sm opacity-80">{result.metric[language]}</p>
                {result.change && (
                  <p className="text-caption opacity-60">{result.change}</p>
                )}
              </div>
            ))}
          </ScrollTransition>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <ScrollTransition className="space-y-16">
            {/* Context */}
            <div>
              <h2 className="font-editorial text-display-sm mb-6">
                {t('work.caseStudy.context')}
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                {caseStudy.context[language]}
              </p>
            </div>

            {/* Strategy */}
            <div>
              <h2 className="font-editorial text-display-sm mb-6">
                {t('work.caseStudy.strategy')}
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                {caseStudy.strategy[language]}
              </p>
            </div>

            {/* Execution */}
            <div>
              <h2 className="font-editorial text-display-sm mb-6">
                {t('work.caseStudy.execution')}
              </h2>
              <div className="space-y-4">
                {caseStudy.execution[language].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-xl bg-gradient-card border border-border"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-body-sm font-bold text-primary">{i + 1}</span>
                    </div>
                    <p className="text-body-lg pt-0.5">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Results Detail */}
            <div>
              <h2 className="font-editorial text-display-sm mb-6">
                {t('work.caseStudy.results')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-gradient-card border border-border"
                  >
                    <p className="font-editorial text-display-sm text-gradient-gold mb-2">
                      {result.value}
                    </p>
                    <p className="text-body-md text-muted-foreground">
                      {result.metric[language]}
                    </p>
                    {result.change && (
                      <p className="text-caption text-primary mt-1">{result.change}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollTransition>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
              <blockquote className="font-editorial text-heading-xl md:text-display-sm mb-8">
                "{caseStudy.testimonial.quote[language]}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-heading-md font-bold text-primary">
                    {caseStudy.testimonial.name[language].charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-body-lg font-medium">{caseStudy.testimonial.name[language]}</p>
                  <p className="text-body-sm text-muted-foreground">
                    {caseStudy.testimonial.role[language]}, {caseStudy.testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-background">
        <ScrollTransition yOffset={40} className="container mx-auto px-6 text-center">
          <h2 className="font-editorial text-display-md mb-6">
            {language === 'en' ? 'Want Similar Results?' : 'Vous voulez des résultats similaires?'}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto mb-8">
            {t('cta.primary.text')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link to="/book-a-call">
                {t('cta.primary.button')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/work">{t('selectedWork.viewAll')}</Link>
            </Button>
          </div>
        </ScrollTransition>
      </section>
    </>
  );
}
