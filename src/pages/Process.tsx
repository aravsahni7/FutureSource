import React, { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Phone, Calendar } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { ScrollTransition } from '@/components/animations/ScrollTransition';
import { TextReveal } from '@/components/animations/TextReveal';
import ProcessCarousel from '@/components/ProcessCarousel';

export default function Process() {
  const { language, t } = useLanguage();

  const reporting = [
    { key: 'weekly', icon: FileText },
    { key: 'monthly', icon: Phone },
    { key: 'quarterly', icon: Calendar },
  ];

  // --- Scroll-driven orange dot on timeline path ---
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const timelinePathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const handleTimelineScroll = useCallback(() => {
    const container = timelineSectionRef.current;
    const path = timelinePathRef.current;
    const dot = dotRef.current;
    if (!container || !path || !dot) return;

    const containerRect = container.getBoundingClientRect();
    const viewH = window.innerHeight;

    // Progress: 0 when container top hits bottom of viewport, 1 when container bottom hits top
    const raw = (viewH - containerRect.top) / (containerRect.height + viewH);
    const progress = Math.min(1, Math.max(0, raw));

    const totalLength = path.getTotalLength();
    const point = path.getPointAtLength(progress * totalLength);

    // The SVG viewBox is "0 0 120 1000" and is positioned absolute within the container
    const svgEl = path.ownerSVGElement;
    if (!svgEl) return;
    const svgRect = svgEl.getBoundingClientRect();

    // Map SVG viewBox coords → pixel coords relative to the container
    const scaleX = svgRect.width / 120;
    const scaleY = svgRect.height / 1000;
    const dotX = (svgRect.left - containerRect.left) + point.x * scaleX;
    const dotY = (svgRect.top - containerRect.top) + point.y * scaleY;

    dot.style.left = `${dotX}px`;
    dot.style.top = `${dotY}px`;
    dot.style.opacity = '1';
  }, []);

  useEffect(() => {
    handleTimelineScroll(); // initial position
    window.addEventListener('scroll', handleTimelineScroll, { passive: true });
    window.addEventListener('resize', handleTimelineScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleTimelineScroll);
      window.removeEventListener('resize', handleTimelineScroll);
    };
  }, [handleTimelineScroll]);

  return (
    <>
      {/* Hero — Modern Dynamic */}
      <section className="relative overflow-hidden" style={{
        paddingTop: '10rem',
        paddingBottom: '6rem',
        background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(220 14% 97%) 60%, hsl(220 14% 95%) 100%)',
      }}>
        {/* Geometric wave / mesh background */}
        <svg
          className="process-hero-waves absolute bottom-0 right-0 pointer-events-none"
          style={{ width: '55%', height: 'auto', opacity: 0.10 }}
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Flowing wave mesh lines */}
          {Array.from({ length: 14 }).map((_, i) => (
            <path
              key={`wave-${i}`}
              d={`M0 ${280 + i * 10} Q150 ${240 + i * 12 - Math.sin(i * 0.7) * 40} 300 ${260 + i * 10 + Math.cos(i * 0.5) * 30} T600 ${220 + i * 12}`}
              stroke="hsl(270 40% 60%)"
              strokeWidth="1"
              fill="none"
              style={{
                animation: `processWaveDrift ${6 + i * 0.4}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
          {/* Diagonal mesh accents */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`diag-${i}`}
              x1={300 + i * 35}
              y1={0}
              x2={100 + i * 35}
              y2={400}
              stroke="hsl(270 30% 70%)"
              strokeWidth="0.5"
              opacity={0.4 - i * 0.04}
            />
          ))}
        </svg>

        <style>{`
          @keyframes processWaveDrift {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-8px); }
          }
          @media (max-width: 768px) {
            .process-hero-waves {
              display: none !important;
            }
          }
        `}</style>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <span
              className="inline-block mb-8 animate-fade-in"
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                background: 'hsl(270 60% 95%)',
                color: 'hsl(270 50% 45%)',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                border: '1px solid hsl(270 50% 88%)',
              }}
            >
              {language === 'en' ? 'How we work' : 'Comment nous travaillons'}
            </span>

            {/* Title — split styling */}
            <h1
              className="animate-fade-in delay-100 flex flex-col"
              style={{
                lineHeight: 0.95,
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ 
                display: 'block',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                letterSpacing: '-0.04em',
                color: 'hsl(0 0% 8%)',
                textTransform: 'uppercase',
              }}>
                {language === 'en' ? 'OUR' : 'NOTRE'}
              </span>
              <span style={{ 
                display: 'block',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                letterSpacing: '-0.02em',
                color: 'hsl(270 77% 39%)',
                textTransform: 'uppercase'
              }}>
                {language === 'en' ? 'PROCESS' : 'PROCESSUS'}
              </span>
            </h1>

            {/* Subtitle — italic script */}
            <p
              className="animate-fade-in delay-200"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
                lineHeight: 1.4,
                color: 'hsl(0 0% 20%)',
                maxWidth: '480px',
              }}
            >
              {t('process.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Process Carousel — Full-page sliding pages */}
      <ProcessCarousel />

      {/* Reporting Cadence — Dark grid + flowing wave design */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: '5rem 0 6rem',
          background: 'hsl(0 0% 100%)',
        }}
      >
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(hsla(220, 14%, 94%, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, hsla(220, 14%, 94%, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            opacity: 0.8,
          }}
        />

        {/* Flowing orange/coral wave SVG behind cards */}
        <svg
          className="process-reporting-waves absolute w-full h-full pointer-events-none"
          style={{ top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1, minHeight: '600px' }}
          viewBox="0 -50 1200 600"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(15 90% 60%)" stopOpacity="0.7" />
              <stop offset="50%" stopColor="hsl(10 85% 58%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(15 90% 60%)" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(15 85% 62%)" stopOpacity="0.4" />
              <stop offset="50%" stopColor="hsl(10 80% 55%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(15 85% 62%)" stopOpacity="0.4" />
            </linearGradient>
            <filter id="waveBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
            </filter>
          </defs>
          {/* Primary wave — thicker, more prominent */}
          <path
            d="M-50 320 C150 260, 280 380, 450 280 S700 200, 850 300 S1050 380, 1250 260"
            stroke="url(#waveGrad1)"
            strokeWidth="45"
            fill="none"
            strokeLinecap="round"
            filter="url(#waveBlur)"
            style={{ animation: 'reportingWaveFlow 8s ease-in-out infinite alternate' }}
          />
          {/* Secondary wave — lighter, offset */}
          <path
            d="M-50 300 C200 240, 320 360, 500 270 S720 190, 880 290 S1080 370, 1250 240"
            stroke="url(#waveGrad2)"
            strokeWidth="35"
            fill="none"
            strokeLinecap="round"
            filter="url(#waveBlur)"
            style={{ animation: 'reportingWaveFlow 10s ease-in-out infinite alternate-reverse' }}
          />
        </svg>

        <style>{`
          @keyframes reportingWaveFlow {
            0% { transform: translateY(0px) translateX(0px); }
            100% { transform: translateY(-12px) translateX(15px); }
          }
          @keyframes reportingCardGlow {
            0%, 100% { box-shadow: 0 0 20px hsl(270 77% 50% / 0.1); }
            50% { box-shadow: 0 0 35px hsl(270 77% 50% / 0.15); }
          }
          @media (max-width: 768px) {
            .process-reporting-waves {
              display: none !important;
            }
          }
        `}</style>

        <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
          {/* Title — Playfair italic purple */}
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'hsl(270 77% 39%)',
              marginBottom: '3.5rem',
            }}
          >
            {t('process.reporting.title')}
          </h2>

          {/* Cards grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reporting.map((item, index) => {
              const Icon = item.icon;
              const isFirst = index === 0;
              return (
                <div
                  key={item.key}
                  style={{
                    padding: '2.5rem 2rem',
                    borderRadius: '1.25rem',
                    background: 'hsla(0, 0%, 100%, 0.95)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: isFirst
                      ? '1.5px solid hsl(270 70% 60% / 0.5)'
                      : '1px solid hsl(220 14% 90%)',
                    boxShadow: isFirst
                      ? '0 0 30px hsl(270 77% 50% / 0.1)'
                      : '0 4px 20px hsl(0 0% 0% / 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    animation: isFirst ? 'reportingCardGlow 4s ease-in-out infinite' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 12px 35px hsl(270 77% 50% / 0.15)';
                    e.currentTarget.style.borderColor = 'hsl(270 70% 60% / 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    if (!isFirst) {
                      e.currentTarget.style.boxShadow = '0 4px 20px hsl(0 0% 0% / 0.04)';
                      e.currentTarget.style.borderColor = 'hsl(220 14% 90%)';
                    } else {
                      e.currentTarget.style.boxShadow = '0 0 30px hsl(270 77% 50% / 0.1)';
                      e.currentTarget.style.borderColor = 'hsl(270 70% 60% / 0.5)';
                    }
                  }}
                >
                  {/* Icon badge */}
                  <div
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      borderRadius: '0.75rem',
                      background: 'hsl(270 77% 39%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      boxShadow: '0 4px 12px hsl(270 77% 39% / 0.3)',
                    }}
                  >
                    <Icon style={{ width: '1.4rem', height: '1.4rem', color: '#fff' }} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 800,
                      fontSize: '1.35rem',
                      lineHeight: 1.2,
                      color: 'hsl(0 0% 8%)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {t(`process.reporting.${item.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      color: 'hsl(0 0% 30%)',
                    }}
                  >
                    {t(`process.reporting.${item.key}.text`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Expectations — Dynamic curved path design */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: '5rem 0 6rem',
          background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(220 14% 96%) 100%)',
        }}
      >
        <div className="container mx-auto px-6">
          {/* Header */}
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              color: 'hsl(0 0% 8%)',
              textAlign: 'center',
              marginBottom: '0.75rem',
            }}
          >
            {language === 'en' ? 'What to Expect' : 'À quoi s\'attendre'}
          </h2>
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '1rem',
              color: 'hsl(0 0% 45%)',
              textAlign: 'center',
              marginBottom: '4rem',
            }}
          >
            {language === 'en'
              ? 'A typical engagement timeline from kickoff to optimization'
              : 'Un calendrier d\'engagement typique du lancement à l\'optimisation'
            }
          </p>

          {/* Timeline container */}
          <div
            ref={timelineSectionRef}
            className="relative mx-auto hidden md:block"
            style={{ maxWidth: '900px' }}
          >
            {/* Curved SVG path */}
            <svg
              className="absolute pointer-events-none"
              style={{
                left: '50%',
                top: 0,
                transform: 'translateX(-50%)',
                width: '120px',
                height: '100%',
                zIndex: 1,
              }}
              viewBox="0 0 120 1000"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                ref={timelinePathRef}
                d="M60 0 C60 80, 20 120, 20 200 S80 280, 80 380 S30 460, 30 540 S90 620, 90 700 S40 780, 40 860 S60 920, 60 1000"
                stroke="hsl(270 77% 45%)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Orange accent dot — follows path on scroll */}
            <div
              ref={dotRef}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                transform: 'translate(-50%, -50%)',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: 'hsl(15 90% 58%)',
                boxShadow: '0 0 16px hsl(15 90% 58% / 0.5)',
                zIndex: 5,
                opacity: 0,
                transition: 'opacity 0.3s ease',
                willChange: 'left, top',
                pointerEvents: 'none',
              }}
            />

            {/* Timeline items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {[
                {
                  num: '01',
                  week: { en: 'Week 1', fr: 'Semaine 1' },
                  title: { en: 'Discovery & Audit', fr: 'Découverte et audit' },
                  desc: {
                    en: 'Understanding your goals, user needs, and market landscape through research and audits.',
                    fr: 'Comprendre vos objectifs, les besoins des utilisateurs et le paysage du marché par la recherche et les audits.',
                  },
                  side: 'left' as const,
                },
                {
                  num: '02',
                  week: { en: 'Week 2', fr: 'Semaine 2' },
                  title: { en: 'Strategy & Roadmap', fr: 'Stratégie et feuille de route' },
                  desc: {
                    en: 'Developing a comprehensive plan with key milestones and deliverables for project success.',
                    fr: 'Élaborer un plan complet avec des jalons clés et des livrables pour le succès du projet.',
                  },
                  side: 'right' as const,
                },
                {
                  num: '03',
                  week: { en: 'Week 3-4', fr: 'Semaine 3-4' },
                  title: { en: 'Build & Launch', fr: 'Construction et lancement' },
                  desc: {
                    en: 'Executing the plan with iterative development, testing, and a seamless deployment.',
                    fr: 'Exécuter le plan avec un développement itératif, des tests et un déploiement sans faille.',
                  },
                  side: 'left' as const,
                },
                {
                  num: '04',
                  week: { en: 'Week 5+', fr: 'Semaine 5+' },
                  title: { en: 'Optimize & Scale', fr: 'Optimiser et développer' },
                  desc: {
                    en: 'Continuous monitoring, analysis, and refinement to enhance performance and achieve growth.',
                    fr: 'Surveillance continue, analyse et raffinement pour améliorer les performances et atteindre la croissance.',
                  },
                  side: 'right' as const,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 80px 1fr',
                    alignItems: 'center',
                    minHeight: '180px',
                  }}
                >
                  {/* Left column */}
                  <div style={{ paddingRight: '2rem' }}>
                    {item.side === 'left' ? (
                      /* Card */
                      <div
                        style={{
                          padding: '1.75rem 2rem',
                          borderRadius: '1rem',
                          background: 'hsl(0 0% 100%)',
                          border: '1px solid hsl(220 14% 90%)',
                          boxShadow: '0 2px 12px hsl(0 0% 0% / 0.04)',
                          textAlign: 'center',
                          transition: 'all 0.4s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = '0 8px 28px hsl(0 0% 0% / 0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 12px hsl(0 0% 0% / 0.04)';
                        }}
                      >
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '0.3rem 1rem',
                            borderRadius: '999px',
                            background: 'hsl(270 90% 92%)',
                            color: 'hsl(270 77% 35%)',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            marginBottom: '0.75rem',
                          }}
                        >
                          {item.week[language]}
                        </span>
                        <h3
                          style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 800,
                            fontSize: '1.2rem',
                            color: 'hsl(0 0% 8%)',
                            marginBottom: '0.5rem',
                          }}
                        >
                          {item.title[language]}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: '0.88rem',
                            lineHeight: 1.6,
                            color: 'hsl(0 0% 40%)',
                          }}
                        >
                          {item.desc[language]}
                        </p>
                      </div>
                    ) : (
                      /* Background number */
                      <div style={{ textAlign: 'right', paddingRight: '1rem' }}>
                        <span
                          style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 900,
                            fontSize: 'clamp(5rem, 10vw, 8rem)',
                            lineHeight: 1,
                            color: 'hsl(220 14% 90%)',
                            userSelect: 'none',
                          }}
                        >
                          {item.num}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Center spacer (for the curve path) */}
                  <div />

                  {/* Right column */}
                  <div style={{ paddingLeft: '2rem' }}>
                    {item.side === 'right' ? (
                      /* Card */
                      <div
                        style={{
                          padding: '1.75rem 2rem',
                          borderRadius: '1rem',
                          background: 'hsl(0 0% 100%)',
                          border: '1px solid hsl(220 14% 90%)',
                          boxShadow: '0 2px 12px hsl(0 0% 0% / 0.04)',
                          textAlign: 'center',
                          transition: 'all 0.4s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = '0 8px 28px hsl(0 0% 0% / 0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 12px hsl(0 0% 0% / 0.04)';
                        }}
                      >
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '0.3rem 1rem',
                            borderRadius: '999px',
                            background: 'hsl(270 90% 92%)',
                            color: 'hsl(270 77% 35%)',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            marginBottom: '0.75rem',
                          }}
                        >
                          {item.week[language]}
                        </span>
                        <h3
                          style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 800,
                            fontSize: '1.2rem',
                            color: 'hsl(0 0% 8%)',
                            marginBottom: '0.5rem',
                          }}
                        >
                          {item.title[language]}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: '0.88rem',
                            lineHeight: 1.6,
                            color: 'hsl(0 0% 40%)',
                          }}
                        >
                          {item.desc[language]}
                        </p>
                      </div>
                    ) : (
                      /* Background number */
                      <div style={{ textAlign: 'left', paddingLeft: '1rem' }}>
                        <span
                          style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 900,
                            fontSize: 'clamp(5rem, 10vw, 8rem)',
                            lineHeight: 1,
                            color: 'hsl(220 14% 90%)',
                            userSelect: 'none',
                          }}
                        >
                          {item.num}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile fallback — stacked layout */}
          <div className="md:hidden" style={{ maxWidth: '500px', margin: '0 auto' }}>
            {[
              {
                num: '01',
                week: { en: 'Week 1', fr: 'Semaine 1' },
                title: { en: 'Discovery & Audit', fr: 'Découverte et audit' },
                desc: {
                  en: 'Understanding your goals, user needs, and market landscape through research and audits.',
                  fr: 'Comprendre vos objectifs, les besoins des utilisateurs et le paysage du marché par la recherche et les audits.',
                },
              },
              {
                num: '02',
                week: { en: 'Week 2', fr: 'Semaine 2' },
                title: { en: 'Strategy & Roadmap', fr: 'Stratégie et feuille de route' },
                desc: {
                  en: 'Developing a comprehensive plan with key milestones and deliverables for project success.',
                  fr: 'Élaborer un plan complet avec des jalons clés et des livrables pour le succès du projet.',
                },
              },
              {
                num: '03',
                week: { en: 'Week 3-4', fr: 'Semaine 3-4' },
                title: { en: 'Build & Launch', fr: 'Construction et lancement' },
                desc: {
                  en: 'Executing the plan with iterative development, testing, and a seamless deployment.',
                  fr: 'Exécuter le plan avec un développement itératif, des tests et un déploiement sans faille.',
                },
              },
              {
                num: '04',
                week: { en: 'Week 5+', fr: 'Semaine 5+' },
                title: { en: 'Optimize & Scale', fr: 'Optimiser et développer' },
                desc: {
                  en: 'Continuous monitoring, analysis, and refinement to enhance performance and achieve growth.',
                  fr: 'Surveillance continue, analyse et raffinement pour améliorer les performances et atteindre la croissance.',
                },
              },
            ].map((item, index) => (
              <div key={index} style={{ position: 'relative', marginBottom: '2rem', paddingLeft: '3rem' }}>
                {/* Vertical line */}
                {index < 3 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '0.55rem',
                      top: '2rem',
                      bottom: '-2rem',
                      width: '3px',
                      background: 'hsl(270 77% 45%)',
                      borderRadius: '2px',
                    }}
                  />
                )}
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '1.25rem',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: index === 2 ? 'hsl(15 90% 58%)' : 'hsl(270 77% 45%)',
                    boxShadow: index === 2 ? '0 0 12px hsl(15 90% 58% / 0.4)' : 'none',
                  }}
                />
                {/* Step number */}
                <span
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 900,
                    fontSize: '2.5rem',
                    color: 'hsl(220 14% 90%)',
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.num}
                </span>
                <div
                  style={{
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    background: 'hsl(0 0% 100%)',
                    border: '1px solid hsl(220 14% 90%)',
                    boxShadow: '0 2px 12px hsl(0 0% 0% / 0.04)',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.85rem',
                      borderRadius: '999px',
                      background: 'hsl(270 90% 92%)',
                      color: 'hsl(270 77% 35%)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.week[language]}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      color: 'hsl(0 0% 8%)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {item.title[language]}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      color: 'hsl(0 0% 40%)',
                    }}
                  >
                    {item.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
