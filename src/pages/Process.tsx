import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Lightbulb, Rocket, TrendingUp, FileText, Phone, Calendar } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ScrollTransition } from '@/components/animations/ScrollTransition';
import { TextReveal } from '@/components/animations/TextReveal';

export default function Process() {
  const { language, t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { key: 'discovery', icon: Search, color: 'bg-primary/10 text-primary' },
    { key: 'strategy', icon: Lightbulb, color: 'bg-apricot/10 text-apricot' },
    { key: 'execution', icon: Rocket, color: 'bg-gold-light/20 text-gold-dark' },
    { key: 'optimization', icon: TrendingUp, color: 'bg-primary/10 text-primary' },
  ];

  const reporting = [
    { key: 'weekly', icon: FileText },
    { key: 'monthly', icon: Phone },
    { key: 'quarterly', icon: Calendar },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero grain-overlay relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-overline uppercase tracking-widest mb-6 animate-fade-in">
              {language === 'en' ? 'How We Work' : 'Comment nous travaillons'}
            </span>
            <h1 className="font-editorial text-display-lg mb-6 animate-fade-in delay-100">
              {t('process.title')}
            </h1>
            <p className="text-body-lg text-muted-foreground animate-fade-in delay-200">
              {t('process.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Process Steps */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Step Navigation */}
            <ScrollTransition direction="left" className="lg:col-span-4">
              <div className="sticky top-32 space-y-2">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <button
                      key={step.key}
                      onClick={() => setActiveStep(index)}
                      className={cn(
                        "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300",
                        activeStep === index
                          ? "bg-card border border-border shadow-md"
                          : "hover:bg-secondary/30"
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                        activeStep === index ? step.color : "bg-muted text-muted-foreground"
                      )}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-caption text-muted-foreground mb-1">
                          {t(`process.${step.key}.duration`)}
                        </p>
                        <p className={cn(
                          "text-heading-md font-medium",
                          activeStep === index ? "text-foreground" : "text-muted-foreground"
                        )}>
                          {t(`process.${step.key}.title`)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </ScrollTransition>

            {/* Step Content */}
            <ScrollTransition direction="right" className="lg:col-span-8">
              <div className="min-h-[400px]">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.key}
                      className={cn(
                        "transition-all duration-500",
                        activeStep === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8 absolute pointer-events-none"
                      )}
                    >
                      <div className="p-8 md:p-12 rounded-3xl bg-gradient-card border border-border">
                        <div className={cn(
                          "w-20 h-20 rounded-2xl flex items-center justify-center mb-8",
                          step.color
                        )}>
                          <Icon className="h-10 w-10" />
                        </div>
                        <h2 className="font-editorial text-display-sm mb-4">
                          {t(`process.${step.key}.title`)}
                        </h2>
                        <p className="text-body-lg text-muted-foreground mb-8 max-w-xl">
                          {t(`process.${step.key}.description`)}
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                          <span className="text-body-sm font-medium">
                            {t(`process.${step.key}.duration`)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress Indicator */}
              <div className="flex gap-2 mt-8">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      activeStep === index
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted hover:bg-muted-foreground/30"
                    )}
                  />
                ))}
              </div>
            </ScrollTransition>
          </div>
        </div>
      </section>

      {/* Reporting Cadence */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <ScrollTransition className="text-center mb-16">
            <h2 className="font-editorial text-display-sm">
              <TextReveal text={t('process.reporting.title')} />
            </h2>
          </ScrollTransition>
          <ScrollTransition stagger={true} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reporting.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className="p-8 rounded-2xl bg-card border border-border text-center card-editorial"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-editorial text-heading-xl mb-3">
                    {t(`process.reporting.${item.key}.title`)}
                  </h3>
                  <p className="text-body-md text-muted-foreground">
                    {t(`process.reporting.${item.key}.text`)}
                  </p>
                </div>
              );
            })}
          </ScrollTransition>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollTransition className="text-center mb-12">
              <h2 className="font-editorial text-display-sm mb-8">
                <TextReveal text={language === 'en' ? 'What to Expect' : 'À quoi s\'attendre'} />
              </h2>
              <p className="text-body-lg text-muted-foreground mb-12">
                {language === 'en'
                  ? 'A typical engagement timeline from kickoff to optimization'
                  : 'Un calendrier d\'engagement typique du lancement à l\'optimisation'
                }
              </p>
            </ScrollTransition>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

              <div className="space-y-12">
                {[
                  { week: '1', title: { en: 'Discovery & Audit', fr: 'Découverte et audit' } },
                  { week: '2', title: { en: 'Strategy & Roadmap', fr: 'Stratégie et feuille de route' } },
                  { week: '3-4', title: { en: 'Build & Launch', fr: 'Construction et lancement' } },
                  { week: '5+', title: { en: 'Optimize & Scale', fr: 'Optimiser et développer' } },
                ].map((item, index) => (
                  <ScrollTransition key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
                  <div
                    key={index}
                    className={cn(
                      "relative md:w-1/2",
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                    )}
                  >
                    <div className="hidden md:block absolute top-4 w-4 h-4 rounded-full bg-primary border-4 border-background"
                      style={{
                        left: index % 2 === 0 ? 'auto' : '-8px',
                        right: index % 2 === 0 ? '-8px' : 'auto',
                      }}
                    />
                    <div className="p-6 rounded-2xl bg-gradient-card border border-border">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-caption font-medium mb-3">
                        {language === 'en' ? `Week ${item.week}` : `Semaine ${item.week}`}
                      </span>
                      <h3 className="font-editorial text-heading-lg">{item.title[language]}</h3>
                    </div>
                  </div>
                  </ScrollTransition>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-gold text-primary-foreground relative overflow-hidden">
        <ScrollTransition yOffset={40} className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-editorial text-display-md mb-6"><TextReveal text={t('cta.primary.title')} /></h2>
          <p className="text-body-lg opacity-90 max-w-xl mx-auto mb-8">{t('cta.primary.text')}</p>
          <Button asChild size="lg" variant="secondary" className="group">
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
