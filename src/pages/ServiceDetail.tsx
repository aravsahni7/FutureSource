import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Target, Search, TrendingUp, Check } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { getServiceBySlug, getCaseStudiesByService, services } from '@/data/content';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ScrollTransition } from '@/components/animations/ScrollTransition';
import { TextReveal } from '@/components/animations/TextReveal';
import demoFitness from '@/assets/demo-fitness.jpg';
import demoRestaurant from '@/assets/demo-restaurant.jpg';
import myPapermake from '@/data/My papermake.PNG';


const iconMap: Record<string, React.ElementType> = {
  target: Target,
  search: Search,
  'trending-up': TrendingUp,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedCases = getCaseStudiesByService(service.id).slice(0, 2);
  const Icon = iconMap[service.icon] || Target;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-hero grain-overlay relative">
        <div className="container mx-auto px-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('common.back')} {t('nav.services')}
          </Link>

          <div className="flex flex-col md:flex-row items-start gap-5 md:gap-6 mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-caption text-muted-foreground uppercase tracking-wider mb-2">
                {service.tagline[language]}
              </p>
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-display-lg animate-fade-in break-words md:break-normal">
                {service.title[language]}
              </h1>
            </div>
          </div>

          <p className="text-body-lg text-muted-foreground w-full max-w-3xl animate-fade-in delay-100">
            {service.description[language]}
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <ScrollTransition className="mb-8">
            <h2 className="font-editorial text-display-sm">
              <TextReveal text={language === 'en' ? 'Expected Outcomes' : 'Résultats attendus'} />
            </h2>
          </ScrollTransition>
          <ScrollTransition stagger={true} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.outcomes[language].map((outcome, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gradient-card border border-border card-editorial"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="text-body-lg font-medium">{outcome}</p>
              </div>
            ))}
          </ScrollTransition>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-12">
            <h2 className="font-editorial text-display-sm mb-4">
              {language === 'en' ? 'What\'s Included' : 'Ce qui est inclus'}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {language === 'en'
                ? 'Everything you need to succeed with our comprehensive deliverables.'
                : 'Tout ce dont vous avez besoin pour réussir avec nos livrables complets.'
              }
            </p>
          </div>
          <ScrollTransition stagger={true} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables[language].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-sm hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-body-md font-bold text-primary">{i + 1}</span>
                </div>
                <p className="text-body-sm pt-1.5 leading-relaxed">{item}</p>
              </div>
            ))}
          </ScrollTransition>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="group">
              <Link to="/book-a-call">
                {t('nav.bookCall')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Demo Projects (Only for Web Design) */}
      {service.slug === 'web-design' && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-caption uppercase tracking-wider mb-4">
                  {language === 'en' ? 'Portfolio' : 'Portefeuille'}
                </span>
                <h2 className="font-editorial text-display-sm mb-4">
                  {language === 'en' ? 'Demo Concepts' : 'Concepts de démo'}
                </h2>
                <p className="text-body-lg text-muted-foreground">
                  {language === 'en'
                    ? 'Explore these demo concepts that showcase our design aesthetics. Your next project could look this amazing.'
                    : 'Explorez ces concepts démo qui mettent en valeur notre esthétique de conception. Votre prochain projet pourrait être aussi incroyable.'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Demo 1 */}
                <div className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="aspect-[4/3] bg-muted relative flex items-center justify-center p-4">
                    <img
                      src={demoFitness}
                      alt="Demo Concept - Fitness"
                      className="w-full h-full object-contain rounded-xl shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-md uppercase tracking-wider shadow-sm backdrop-blur-sm">
                      {t('demos.badge')}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm uppercase tracking-wider text-muted-foreground mb-2 block font-medium">{t('demos.fitness.industry')}</span>
                    <h3 className="font-editorial text-2xl mb-2 group-hover:text-primary transition-colors">{t('demos.fitness.title')}</h3>
                    <p className="text-muted-foreground mb-4">{t('demos.fitness.desc')}</p>
                  </div>
                </div>

                {/* Demo 2 */}
                <div className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="aspect-[4/3] bg-muted relative flex items-center justify-center p-4">
                    <img
                      src={demoRestaurant}
                      alt="Demo Concept - Restaurant"
                      className="w-full h-full object-contain rounded-xl shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-md uppercase tracking-wider shadow-sm backdrop-blur-sm">
                      {t('demos.badge')}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm uppercase tracking-wider text-muted-foreground mb-2 block font-medium">{t('demos.restaurant.industry')}</span>
                    <h3 className="font-editorial text-2xl mb-2 group-hover:text-primary transition-colors">{t('demos.restaurant.title')}</h3>
                    <p className="text-muted-foreground mb-4">{t('demos.restaurant.desc')}</p>
                  </div>
                </div>

                {/* Demo 3 */}
                <div className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="aspect-[4/3] bg-muted relative flex items-center justify-center p-4">
                    <img
                      src={myPapermake}
                      alt="Demo Concept - Product Based"
                      className="w-full h-full object-contain rounded-xl shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-md uppercase tracking-wider shadow-sm backdrop-blur-sm">
                      {t('demos.badge')}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm uppercase tracking-wider text-muted-foreground mb-2 block font-medium">{t('demos.product.industry')}</span>
                    <h3 className="font-editorial text-2xl mb-2 group-hover:text-primary transition-colors">{t('demos.product.title')}</h3>
                    <p className="text-muted-foreground mb-4">{t('demos.product.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ideal For / Not For */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <ScrollTransition stagger={true} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <h3 className="font-editorial text-heading-xl mb-4 flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                {language === 'en' ? 'Ideal For' : 'Idéal pour'}
              </h3>
              <p className="text-body-lg text-muted-foreground">
                {service.idealFor[language]}
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
              <h3 className="font-editorial text-heading-xl mb-4 flex items-center gap-3">
                <span className="text-destructive">✕</span>
                {language === 'en' ? 'Not For' : 'Pas pour'}
              </h3>
              <p className="text-body-lg text-muted-foreground">
                {service.notFor[language]}
              </p>
            </div>
          </ScrollTransition>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="py-12 bg-gradient-warm">
          <div className="container mx-auto px-6">
            <h2 className="font-editorial text-display-sm mb-8 text-center">
              {language === 'en' ? 'Frequently Asked Questions' : 'Questions fréquentes'}
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-card border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-heading-md font-medium text-left py-6">
                      {faq.question[language]}
                    </AccordionTrigger>
                    <AccordionContent className="text-body-md text-muted-foreground pb-6">
                      {faq.answer[language]}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {false && relatedCases.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="font-editorial text-display-sm mb-8">
              {language === 'en' ? 'Related Case Studies' : 'Études de cas associées'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedCases.map((caseStudy) => (
                <Link
                  key={caseStudy.id}
                  to={`/work/${caseStudy.slug}`}
                  className="group block"
                >
                  <article className="rounded-2xl border border-border bg-card overflow-hidden card-editorial">
                    <div className="aspect-video bg-gradient-editorial relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-editorial text-heading-lg text-muted-foreground/30">
                          {caseStudy.client}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-caption text-primary mb-2">{caseStudy.industry[language]}</p>
                      <h3 className="font-editorial text-heading-lg group-hover:text-primary transition-colors">
                        {caseStudy.title[language]}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
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
