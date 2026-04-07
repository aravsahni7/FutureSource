import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/data/content';
import { cn } from '@/lib/utils';
import { ScrollTransition } from '@/components/animations/ScrollTransition';
import { TextReveal } from '@/components/animations/TextReveal';

// Asset imports
import AmitPhoto from '@/data/Amit.png';
import AnshPhoto from '@/data/Ansh.png';
import AravPhoto from '@/data/Arav.png';
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
        @keyframes sprayIn {
          0%   { opacity: 0; filter: blur(18px); transform: scale(1.04); }
          30%  { opacity: 1; }
          100% { opacity: 1; filter: blur(0px);  transform: scale(1); }
        }
        @keyframes drip {
          0%   { transform: scaleY(0) translateY(-10px); opacity: 0; }
          60%  { opacity: 0.7; }
          100% { transform: scaleY(1) translateY(0); opacity: 0; }
        }
        .logo-path {
          opacity: 0;
          transform-origin: center;
        }
        .p1 { animation: sprayIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s forwards; }
        .p2 { animation: sprayIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.45s forwards; }
        .p3 { animation: sprayIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.75s forwards; }
        .drip {
          transform-origin: top center;
          animation: drip 0.7s ease-in forwards;
          opacity: 0;
        }
        .drip1 { animation-delay: 0.95s; }
        .drip2 { animation-delay: 1.3s; }
        .drip3 { animation-delay: 1.55s; }

        /* Graffiti outer glow — mimics paint bleeding past the edge */
        .graffiti-glow {
          filter:
            drop-shadow(0 0 12px rgba(192, 132, 252, 0.9))
            drop-shadow(0 0 28px rgba(192, 132, 252, 0.6))
            drop-shadow(0 0 55px rgba(192, 132, 252, 0.35))
            drop-shadow(0 0 90px rgba(192, 132, 252, 0.18));
        }
      `}</style>
      {/* Unified Hero & Mission Section */}
      <section className="relative w-full min-h-[90vh] bg-[#fcfcfd] overflow-hidden flex flex-col pt-32 pb-24">
        
        {/* Background SVG Flow Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-90">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full text-primary">
            <defs>
              <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="15" floodColor="#6419AD" floodOpacity="0.1" />
              </filter>
            </defs>

            {/* Very Thick Light Lavender Ribbon */}
            <path
              d="M-200,950 C200,600 400,-100 1640,150"
              fill="none"
              stroke="#efe3fd"
              strokeWidth="200"
              strokeLinecap="round"
              className="animate-wave-flow"
              style={{ strokeDasharray: '4000', strokeDashoffset: '4000', animation: 'drawPath 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards, waveFlow 12s ease-in-out infinite alternate' }}
            />

            {/* Medium Solid Purple Ribbon */}
            <path
              d="M-50,200 C300,500 450,200 800,450 C1100,650 1300,400 1500,600"
              fill="none"
              stroke="#6419AD"
              strokeWidth="45"
              strokeLinecap="round"
              filter="url(#shadowFilter)"
              style={{ strokeDasharray: '4000', strokeDashoffset: '4000', animation: 'drawPath 3s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s' }}
            />

            {/* Intersecting Thick Purple Ribbon */}
            <path
              d="M-50,850 C250,900 650,450 700,200 C750,-50 1000,100 1500,200"
              fill="none"
              stroke="#803bc4"
              strokeWidth="65"
              strokeLinecap="round"
              filter="url(#shadowFilter)"
              style={{ strokeDasharray: '4000', strokeDashoffset: '4000', animation: 'drawPath 3s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s' }}
            />

            {/* Thin Thread Line */}
            <path
              d="M100,-50 C150,300 250,750 600,800 C900,850 1200,600 1500,450"
              fill="none"
              stroke="#6419AD"
              strokeWidth="3"
              style={{ strokeDasharray: '4000', strokeDashoffset: '4000', animation: 'drawPath 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.6s' }}
            />
            
            {/* Nodes and Accents */}
            <g style={{ animation: 'fadeInScale 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 1.5s', opacity: 0 }}>
              {/* Dots */}
              <circle cx="750" cy="350" r="14" fill="#FC8264" />
              <circle cx="750" cy="350" r="26" fill="#FC8264" opacity="0.2" />
              
              <circle cx="510" cy="550" r="12" fill="#FC8264" />
              <circle cx="510" cy="550" r="22" fill="#FC8264" opacity="0.2" />

              <circle cx="190" cy="565" r="14" fill="#FC8264" />
              <circle cx="190" cy="565" r="26" fill="#FC8264" opacity="0.2" />

              <circle cx="1060" cy="65" r="10" fill="#FC8264" />
              <circle cx="1270" cy="275" r="8" fill="#FC8264" />
              <circle cx="320" cy="790" r="16" fill="#FC8264" />

              {/* Splash Marks */}
              <path d="M490,290 Q510,310 530,295" fill="none" stroke="#FC8264" strokeWidth="6" strokeLinecap="round" />
              <path d="M500,320 Q515,310 520,330" fill="none" stroke="#FC8264" strokeWidth="6" strokeLinecap="round" />

              <path d="M620,520 Q640,510 660,530" fill="none" stroke="#FC8264" strokeWidth="6" strokeLinecap="round" />
              <path d="M650,550 Q655,530 680,515" fill="none" stroke="#FC8264" strokeWidth="6" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        <style>{`
          @keyframes drawPath {
            to { stroke-dashoffset: 0; }
          }
          @keyframes waveFlow {
            0%   { transform: translateY(0px) scaleY(1); }
            50%  { transform: translateY(-15px) scaleY(1.01); }
            100% { transform: translateY(0px) scaleY(1); }
          }
          @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}</style>

        <div className="container mx-auto px-6 relative z-10 flex flex-col h-full flex-grow">
          {/* Top Section - Title */}
          <div className="w-full flex flex-col items-center pt-16 md:pt-24 mt-8 animate-fade-in">
            <span 
              className="inline-block px-5 py-2.5 rounded-full bg-[#FC8264] text-white text-[11px] font-bold uppercase tracking-widest mb-6 shadow-[0_4px_15px_rgba(252,130,100,0.4)] relative"
            >
              <span className="relative z-10">{language === 'en' ? 'OUR STORY' : 'NOTRE HISTOIRE'}</span>
            </span>
            <h1 
              className="text-black text-center max-w-5xl px-6 md:px-0"
              style={{
                textShadow: '0 10px 40px rgba(0,0,0,0.05)',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2rem, 8vw, 6rem)',
                lineHeight: 0.92,
                letterSpacing: '-0.04em',
              }}
            >
              {language === 'en' ? (
                <>
                  <span className="uppercase">ABOUT</span>{' '}
                  <span style={{ fontSize: '1.15em' }}>FutureSource</span>
                </>
              ) : (
                <>
                  <span className="uppercase">{t('about.title').split(' ')[0]}</span>{' '}
                  <span style={{ fontSize: '1.15em' }}>
                    {t('about.title').split(' ').slice(1).join(' ')}
                  </span>
                </>
              )}
            </h1>
          </div>

          {/* Bottom/Right Section - Mission */}
          <div className="w-full flex justify-end mt-auto pt-32 md:pt-48 pb-12 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="max-w-lg text-right">
              {/* Mission Heading with hand-drawn SVG underline */}
              <div className="inline-flex flex-col items-end mb-8">
                <h2 
                  className="font-bold text-[clamp(2.5rem,5vw,4.5rem)] text-black tracking-tight leading-none"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {t('about.mission.title')}
                </h2>
                <svg width="280" height="28" viewBox="0 0 280 28" fill="none" className="mt-3 -mr-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14C45 9 200 3 276 12" stroke="#6419AD" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </div>

              <p className="text-[1.1rem] md:text-[1.2rem] text-black/80 font-medium leading-[1.6] mb-10 text-right">
                {t('about.mission.text')}
              </p>

              {/* Small CTA Pill */}
              <div className="inline-block px-6 py-2 rounded-full bg-[#FC8264] text-white text-sm font-bold uppercase tracking-[0.15em] relative group cursor-pointer hover:bg-[#eb7355] transition-colors shadow-[0_4px_15px_rgba(252,130,100,0.3)] hover:shadow-[0_4px_25px_rgba(252,130,100,0.5)]">
                <Link to="/book-a-call" className="relative z-10 flex items-center justify-center">
                  CTA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-warm overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <ScrollTransition direction="left" className="max-w-xl">
              <div className="inline-flex flex-col items-start mb-8">
                <h2 
                  className="font-bold text-[clamp(2.5rem,5vw,4.5rem)] text-black tracking-tight leading-none"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {t('about.story.title')}
                </h2>
                <svg width="280" height="28" viewBox="0 0 280 28" fill="none" className="mt-3 -ml-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14C45 9 200 3 276 12" stroke="#6419AD" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-[1.1rem] md:text-[1.2rem] text-black/80 font-medium leading-[1.6] mb-10 text-left">
                {t('about.story.text')}
              </p>
            </ScrollTransition>

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
                  <img src={img} alt="Team" className="w-full h-full object-cover" />
                </motion.div>
              ))}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-sans uppercase tracking-[0.3em] text-muted-foreground font-medium opacity-50">
                {isExpanded ? 'Click to stack' : 'Click to separate'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollTransition className="flex flex-col items-center mb-16">
            <div className="inline-flex flex-col items-center">
              <h2 
                className="font-bold text-[clamp(2.5rem,5vw,4.5rem)] text-black tracking-tight leading-none text-center"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {t('about.values.title')}
              </h2>
              <svg width="280" height="28" viewBox="0 0 280 28" fill="none" className="mt-3" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14C45 9 200 3 276 12" stroke="#6419AD" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </div>
          </ScrollTransition>
          <ScrollTransition stagger={true} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={value.key} className="p-8 rounded-2xl bg-gradient-card border border-border text-center card-editorial">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6",
                    index === 0 ? "bg-primary/10 text-primary" : index === 1 ? "bg-apricot/10 text-primary" : "bg-gold-light/20 text-gold-dark"
                  )}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-editorial text-heading-xl mb-3">{t(`about.values.${value.key}.title`)}</h3>
                  <p className="text-body-md text-muted-foreground">{t(`about.values.${value.key}.text`)}</p>
                </div>
              );
            })}
          </ScrollTransition>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <ScrollTransition className="flex flex-col items-center mb-16">
            <div className="inline-flex flex-col items-center">
              <h2 
                className="font-bold text-[clamp(2.5rem,5vw,4.5rem)] text-black tracking-tight leading-none text-center"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {t('about.team.title')}
              </h2>
              <svg width="280" height="28" viewBox="0 0 280 28" fill="none" className="mt-3" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14C45 9 200 3 276 12" stroke="#6419AD" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </div>
          </ScrollTransition>
          <ScrollTransition stagger={true} className="grid md:grid-cols-3 gap-12 max-w-full mx-auto">
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
          </ScrollTransition>
        </div>
      </section>

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