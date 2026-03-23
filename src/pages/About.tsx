import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/data/content';
import { cn } from '@/lib/utils';
import AmitPhoto from '@/data/Amit.png';
import AnshPhoto from '@/data/Ansh.png';
import AravPhoto from '@/data/Arav.png';

// Image imports
import AravAnsh from '@/data/aravansh.jpg';
import AravDad from '@/data/aravdad.jpg';
import AllTeam from '@/data/all.jpg';

export default function About() {
  const { language, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const values = [
    { key: 'results', icon: Target },
    { key: 'partnership', icon: Users },
    { key: 'honesty', icon: Lightbulb },
  ];

  const stackImages = [AravAnsh, AravDad, AllTeam];

  return (
    <>
      <style>{`
        /* Drawing Animation for Circle and F */
        @keyframes drawStroke {
          from { stroke-dashoffset: 600; }
          to { stroke-dashoffset: 0; }
        }

        /* Clean Pop-in for the Dot to prevent glitching */
        @keyframes dotAppear {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-circle-draw {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawStroke 2s ease-in-out forwards;
        }

        .animate-f-draw {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawStroke 1.5s ease-in-out 1s forwards;
        }

        .animate-dot-smooth {
          transform-origin: 65px 65px;
          opacity: 0;
          animation: dotAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 2.2s forwards;
        }

        .neon-pulse {
          animation: pulse-glow 4s ease-in-out infinite;
          animation-delay: 2.5s;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
      `}</style>

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-hero grain-overlay relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-overline uppercase tracking-widest mb-6">
              {language === 'en' ? 'Our Story' : 'Notre histoire'}
            </span>
            <h1 className="font-editorial text-display-lg mb-6 animate-fade-in">
              {t('about.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-left order-2 lg:order-1">
              <h2 className="font-editorial text-display-sm mb-6">
                {t('about.mission.title')}
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.mission.text')}
              </p>
              <div className="h-1 w-24 bg-gradient-gold rounded-full" />
            </div>

            <div className="flex-shrink-0 relative p-8 order-1 lg:order-2">
              <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full neon-pulse opacity-0" />
              
              <svg 
                viewBox="0 0 100 100" 
                className="w-64 h-64 md:w-[420px] md:h-[420px] text-purple-400 relative z-10"
                style={{ 
                  filter: 'drop-shadow(0 0 8px rgba(192, 132, 252, 0.7))' 
                }}
              >
                {/* Outer Circle - 1.5 thickness */}
                <circle 
                  cx="50" cy="50" r="46" 
                  fill="none" stroke="currentColor" strokeWidth="1.5" 
                  className="animate-circle-draw"
                />
                {/* Internal 'F' - 1.5 thickness */}
                <path 
                  d="M 35 30 H 60 V 38 H 45 V 48 H 55 V 56 H 45 V 70 H 35 Z" 
                  fill="none" stroke="currentColor" strokeWidth="1.5" 
                  strokeLinejoin="round"
                  className="animate-f-draw"
                />
                {/* Internal '.' - 1.5 thickness, Smooth scale animation */}
                <circle 
                  cx="65" cy="65" r="5" 
                  fill="none" stroke="currentColor" strokeWidth="1.5" 
                  className="animate-dot-smooth"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-warm overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16">
            <div className="max-w-xl">
              <h2 className="font-editorial text-display-sm mb-8">
                {t('about.story.title')}
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.story.text')}
              </p>
              <div className="h-1 w-24 bg-gradient-gold rounded-full" />
            </div>

            <div 
              className="relative w-full max-w-[500px] h-[400px] flex items-center justify-center cursor-pointer group lg:ml-12"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {stackImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="absolute w-48 h-64 md:w-56 md:h-72 rounded-2xl border-[6px] border-white shadow-2xl overflow-hidden bg-white"
                  initial={false}
                  animate={{
                    x: isExpanded ? (idx - 1) * 215 : (idx - 1) * 45,
                    rotate: isExpanded ? 0 : (idx - 1) * 12,
                    y: isExpanded ? 0 : idx === 1 ? -20 : 12,
                    zIndex: isExpanded ? 10 : idx === 1 ? 20 : 10,
                    scale: isExpanded ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                >
                  <img src={img} alt={`Team view ${idx}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-sans uppercase tracking-[0.3em] text-muted-foreground font-medium opacity-50">
                {isExpanded ? 'Click to stack' : 'Click to separate'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Team Sections remain the same as previous stable version */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-editorial text-display-sm mb-12 text-center">
            {t('about.values.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={value.key} className="p-8 rounded-2xl bg-gradient-card border border-border text-center card-editorial">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6",
                    index === 0 ? "bg-primary/10 text-primary" : index === 1 ? "bg-apricot/10 text-apricot" : "bg-gold-light/20 text-gold-dark"
                  )}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-editorial text-heading-xl mb-3">{t(`about.values.${value.key}.title`)}</h3>
                  <p className="text-body-md text-muted-foreground">{t(`about.values.${value.key}.text`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <h2 className="font-editorial text-display-sm mb-12 text-center">
            {t('about.team.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-full mx-auto">
            {teamMembers.map((member) => {
              const photos = { 'Amit Sahni': AmitPhoto, 'Ansh Sahni': AnshPhoto, 'Arav Sahni': AravPhoto };
              return (
                <div key={member.id} className="text-center group">
                  <div className="relative mb-6 mx-auto w-40 h-40">
                    <img 
                      src={photos[member.name] || ''} 
                      alt={member.name} 
                      className="absolute inset-0 rounded-full object-cover w-full h-full border-2 border-border shadow-xl transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <h3 className="font-editorial text-heading-lg mb-1">{member.name}</h3>
                  <p className="text-body-sm text-primary mb-3 font-medium uppercase tracking-wider">{member.role[language]}</p>
                  <p className="text-body-sm text-muted-foreground max-w-xs mx-auto mb-4">{member.bio[language]}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
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
      <section className="py-20 bg-gradient-gold text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-editorial text-display-md mb-6">{t('cta.primary.title')}</h2>
          <p className="text-body-lg opacity-90 max-w-xl mx-auto mb-8">{t('cta.primary.text')}</p>
          <Button asChild size="lg" variant="secondary" className="group px-8">
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