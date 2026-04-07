import React, { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import bookImg from '@/data/3d-book-simple.png';

const categories = ['all', 'strategy', 'abm', 'paidMedia', 'seo', 'salesPipeline', 'cro', 'trends'] as const;

const categoryLabels: Record<string, { en: string; fr: string }> = {
  all: { en: 'All', fr: 'Tout' },
  strategy: { en: 'Strategy', fr: 'Stratégie' },
  abm: { en: 'ABM', fr: 'ABM' },
  paidMedia: { en: 'Paid Media', fr: 'Médias payants' },
  seo: { en: 'SEO', fr: 'SEO' },
  salesPipeline: { en: 'Sales Pipeline', fr: 'Pipeline de ventes' },
  cro: { en: 'CRO', fr: 'CRO' },
  trends: { en: 'Trends', fr: 'Tendances' },
};

// Organic floating positions around the center
const pillStyles: Record<string, React.CSSProperties> = {
  all: { bottom: '0%', left: '50%', transform: 'translate(-50%, 0)' },
  strategy: { top: '15%', left: '20%', transform: 'translate(-50%, -50%) rotate(-6deg)' },
  abm: { top: '40%', left: '5%', transform: 'translate(-50%, -50%) rotate(2deg)' },
  paidMedia: { top: '70%', left: '18%', transform: 'translate(-50%, -50%) rotate(-4deg)' },
  seo: { top: '35%', left: '28%', transform: 'translate(-50%, -50%) rotate(3deg)' },
  salesPipeline: { top: '18%', right: '15%', transform: 'translate(50%, -50%) rotate(5deg)' },
  cro: { top: '40%', right: '5%', transform: 'translate(50%, -50%) rotate(-2deg)' },
  trends: { top: '70%', right: '18%', transform: 'translate(50%, -50%) rotate(4deg)' },
};

export default function Insights() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-24 pb-16 relative overflow-hidden flex flex-col items-center"
        style={{
          background: 'linear-gradient(180deg, hsl(220 14% 96%) 0%, hsl(0 0% 100%) 100%)',
          minHeight: '100vh',
        }}
      >
        <div className="container mx-auto px-6 flex flex-col items-center justify-center relative z-10 w-full flex-grow">
          
          <h1
            className="text-center mb-12 animate-fade-in"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              color: 'hsl(0 0% 8%)',
              letterSpacing: '-0.02em',
            }}
          >
            {language === 'en' ? 'Insights' : 'Perspectives'}
          </h1>

          {/* Central 3D Graphic with Floating Pills */}
          <div
            className="relative flex items-center justify-center animate-fade-in delay-100"
            style={{
              width: '100%',
              maxWidth: '800px',
              height: '400px',
              marginBottom: '4rem',
            }}
          >
            {/* Glowing background behind image */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(162, 59, 255, 0.4) 0%, rgba(162, 59, 255, 0) 70%)',
                filter: 'blur(30px)',
                zIndex: 0,
              }}
            />

            {/* Central Book Image */}
            <img
              src={bookImg}
              alt="Knowledge and Insights"
              className="relative z-10"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'contain',
                mixBlendMode: 'darken',
                maskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)',
              }}
            />

            {/* Floating Category Pills */}
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "absolute whitespace-nowrap px-6 py-3 rounded-2xl shadow-sm transition-all duration-300 z-20 hover:scale-105",
                    isActive
                      ? "text-white shadow-md shadow-purple-500/30"
                      : "bg-white/70 backdrop-blur-md text-slate-700 hover:bg-white border border-white"
                  )}
                  style={{
                    backgroundColor: isActive ? '#6419AD' : undefined,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    ...pillStyles[category],
                  }}
                >
                  {categoryLabels[category][language]}
                </button>
              );
            })}
          </div>

          {/* Empty State message */}
          <div className="flex flex-col items-center justify-center text-center animate-fade-in delay-200 mt-8">
            <h2
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                color: 'hsl(0 0% 8%)',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              {language === 'en' ? 'Stay Tuned!' : 'Restez à l\'écoute!'}
            </h2>

            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '1.15rem',
                color: 'hsl(0 0% 45%)',
                maxWidth: '500px',
                lineHeight: 1.6,
              }}
            >
              {language === 'en'
                ? 'We\'re crafting insightful articles to help you grow. Our first set of growth guides will be dropping soon.'
                : 'Nous préparons des articles perspicaces pour vous aider à croître. Nos premiers guides seront bientôt disponibles.'}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
