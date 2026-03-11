import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Sparkles, Eye, TrendingUp, Users, DollarSign } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { getFeaturedCaseStudies, testimonials } from '@/data/content';
import { cn } from '@/lib/utils';

export default function Home() {
  const { language, t } = useLanguage();
  const featuredCases = getFeaturedCaseStudies().slice(0, 3);

  return (
    <>
      {/* Hero Section - Editorial asymmetric layout */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero grain-overlay" />
        
        {/* Decorative elements */}
        <div className="absolute top-32 right-[10%] w-64 h-64 rounded-full bg-apricot/10 blur-3xl animate-float" />
        <div className="absolute bottom-32 left-[5%] w-48 h-48 rounded-full bg-primary/10 blur-2xl animate-float delay-500" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-overline uppercase tracking-widest mb-6">
                  {t('hero.tagline')}
                </span>
              </div>
              
              <h1 className="font-editorial text-display-lg md:text-display-xl animate-fade-in delay-100">
                {t('hero.headline')}
              </h1>
              
              <p className="text-body-lg text-muted-foreground max-w-xl animate-fade-in delay-200">
                {t('hero.subheadline')}
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
                <Button asChild size="lg" className="group">
                  <Link to="/book-a-call">
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/work">{t('hero.secondaryCta')}</Link>
                </Button>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="lg:col-span-5 relative animate-fade-in-right delay-400">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-card border border-border shadow-editorial rotate-3" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-card border border-border shadow-lg -rotate-3" />
                <div className="relative rounded-3xl bg-card border border-border p-8 shadow-md">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-caption text-muted-foreground">ROAS</p>
                        <p className="text-heading-lg font-editorial">4.8x</p>
                      </div>
                    </div>
                    <div className="h-24 bg-gradient-to-r from-primary/20 via-apricot/30 to-primary/10 rounded-xl" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-secondary/50">
                        <p className="text-caption text-muted-foreground">CAC</p>
                        <p className="text-heading-md font-editorial text-gradient-gold">-42%</p>
                      </div>
                      <div className="p-4 rounded-xl bg-secondary/50">
                        <p className="text-caption text-muted-foreground">Revenue</p>
                        <p className="text-heading-md font-editorial text-gradient-accent">+180%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section - Vertical timeline style */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="font-editorial text-display-md mb-4">{t('pillars.title')}</h2>
            <p className="text-body-lg text-muted-foreground">{t('pillars.subtitle')}</p>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            <div className="space-y-12">
              {[
                { icon: Target, key: 'strategic', color: 'bg-primary/10 text-primary' },
                { icon: Sparkles, key: 'creative', color: 'bg-apricot/10 text-apricot' },
                { icon: Eye, key: 'transparency', color: 'bg-gold-light/20 text-gold-dark' },
              ].map((pillar, index) => (
                <div key={pillar.key} className="relative flex gap-8 items-start group">
                  <div className={cn(
                    "relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110",
                    pillar.color
                  )}>
                    <pillar.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-editorial text-heading-xl mb-3">
                      {t(`pillars.${pillar.key}.title`)}
                    </h3>
                    <p className="text-body-lg text-muted-foreground max-w-xl">
                      {t(`pillars.${pillar.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-editorial text-display-md mb-4">{t('results.title')}</h2>
            <p className="text-body-lg text-muted-foreground">{t('results.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'adSpend', value: '$12M+', icon: DollarSign },
              { key: 'roas', value: '4.2x', icon: TrendingUp },
              { key: 'revenue', value: '$48M+', icon: TrendingUp },
              { key: 'clients', value: '40+', icon: Users },
            ].map((stat) => (
              <div key={stat.key} className="text-center p-8 rounded-2xl bg-card border border-border card-editorial">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-editorial text-display-sm text-gradient-gold mb-2">{stat.value}</p>
                <p className="text-body-sm text-muted-foreground">{t(`results.${stat.key}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
            <div>
              <h2 className="font-editorial text-display-md mb-4">{t('selectedWork.title')}</h2>
              <p className="text-body-lg text-muted-foreground">{t('selectedWork.subtitle')}</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/work">
                {t('selectedWork.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCases.map((caseStudy, index) => (
              <Link
                key={caseStudy.id}
                to={`/work/${caseStudy.slug}`}
                className="group block"
              >
                <article className="rounded-2xl border border-border bg-card overflow-hidden card-editorial">
                  <div className="aspect-video bg-gradient-editorial relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-editorial text-heading-lg text-muted-foreground/30">{caseStudy.client}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-caption text-primary mb-2">{caseStudy.industry[language]}</p>
                    <h3 className="font-editorial text-heading-lg mb-3 group-hover:text-primary transition-colors">
                      {caseStudy.title[language]}
                    </h3>
                    <div className="flex gap-4">
                      {caseStudy.results.slice(0, 2).map((result, i) => (
                        <span key={i} className="text-body-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">{result.value}</span> {result.metric[language]}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-gold text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-background blur-3xl" />
        </div>
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
