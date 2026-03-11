import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/data/content';
import { cn } from '@/lib/utils';
import { Linkedin } from 'lucide-react';
import familyPhoto from '@/data/AAA.jpg';
import AmitPhoto from '@/data/Amit.png';
import AnshPhoto from '@/data/Ansh.png';
import AravPhoto from '@/data/Arav.png';

export default function About() {
  const { language, t } = useLanguage();

  const values = [
    { key: 'results', icon: Target },
    { key: 'partnership', icon: Users },
    { key: 'honesty', icon: Lightbulb },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero grain-overlay relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-overline uppercase tracking-widest mb-6 animate-fade-in">
              {language === 'en' ? 'Our Story' : 'Notre histoire'}
            </span>
            <h1 className="font-editorial text-display-lg mb-6 animate-fade-in delay-100">
              {t('about.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-editorial text-display-sm mb-6">
                {t('about.mission.title')}
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.mission.text')}
              </p>
              <div className="h-1 w-24 bg-gradient-gold rounded-full" />
            </div>
            <div className="relative">
              <img
                src={familyPhoto}
                alt="FutureSource leadership team"
                className="rounded-3xl object-cover w-full h-full border border-border shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-apricot/20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-editorial text-display-sm mb-8">
              {t('about.story.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              {t('about.story.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-editorial text-display-sm mb-16 text-center">
            {t('about.values.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colors = [
                'bg-primary/10 text-primary',
                'bg-apricot/10 text-apricot',
                'bg-gold-light/20 text-gold-dark',
              ];
              return (
                <div
                  key={value.key}
                  className="p-8 rounded-2xl bg-gradient-card border border-border text-center card-editorial"
                >
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6",
                    colors[index]
                  )}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-editorial text-heading-xl mb-3">
                    {t(`about.values.${value.key}.title`)}
                  </h3>
                  <p className="text-body-md text-muted-foreground">
                    {t(`about.values.${value.key}.text`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <h2 className="font-editorial text-display-sm mb-16 text-center">
            {t('about.team.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-16 max-w-full mx-auto">
            {teamMembers.map((member, index) => {
              const photos = {
                'Amit Sahni': AmitPhoto,
                'Ansh Sahni': AnshPhoto,
                'Arav Sahni': AravPhoto,
              };
              return (
                <div
                  key={member.id}
                  className="group text-center"
                >
                  <div className="relative mb-6 mx-auto w-40 h-40">
                    <img
                      src={photos[member.name] || ''}
                      alt={member.name}
                      className="absolute inset-0 rounded-full object-cover w-full h-full border border-border shadow-lg"
                    />
                  </div>
                  <h3 className="font-editorial text-heading-lg mb-1">{member.name}</h3>
                  <p className="text-body-sm text-primary mb-3">{member.role[language]}</p>
                  <p className="text-body-sm text-muted-foreground">{member.bio[language]}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              );
            })}
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
