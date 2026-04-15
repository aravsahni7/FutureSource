import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import bookImg from '@/data/3d-book-simple.png';
import strategyImage from '@/data/Strategyimage.png';
import paidAdsImage from '@/data/paid ads.png';
import { ArrowRight } from 'lucide-react';

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

// Blog posts data
const blogPosts = [
  {
    id: 'growth-architecture',
    slug: 'growth-architecture',
    title: 'Growth Architecture: Turning Your Website Into an Asset',
    excerpt: 'Strategic leaders recognize that a digital presence represents far more than a static expense. Learn how to transform your website into a powerful financial asset.',
    category: 'strategy',
    categories: ['Strategy', 'Business'],
    author: 'Amit Sahni',
    readTime: '10 min',
    publishDate: '2026-04-15',
    featured: true,
    featuredImage: strategyImage,
  },
  {
    id: 'montreal-paid-ads',
    slug: 'montreal-paid-ads',
    title: 'Stop Burning Cash in Montreal Digital Marketing 2026',
    excerpt: 'Strategies that scaled your ad campaign in 2024 are now costing you money. Learn how to build a Creative Engine that drives results in Montreal\'s unique bilingual market.',
    category: 'paidMedia',
    categories: ['Paid Ads', 'Marketing'],
    author: 'Amit Sahni',
    readTime: '12 min',
    publishDate: '2026-04-15',
    featured: true,
    featuredImage: paidAdsImage,
  },
];

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
        className="pt-20 pb-8 relative overflow-hidden flex flex-col items-center"
        style={{
          background: 'linear-gradient(180deg, hsl(220 14% 96%) 0%, hsl(0 0% 100%) 100%)',
        }}
      >
        <div className="container mx-auto px-6 flex flex-col items-center justify-center relative z-10 w-full flex-grow">
          
          <h1
            className="text-center mb-12 animate-fade-in"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(3.5rem, 8vw, 6rem)',
              color: 'hsl(0 0% 8%)',
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
            }}
          >
            {language === 'en' ? 'INSIGHTS' : 'PERSPECTIVES'}
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
            {categories.map((category, index) => {
              const isActive = activeCategory === category;
              return (
                <div
                  key={category}
                  className="absolute z-20 pointer-events-auto"
                  style={{
                    ...pillStyles[category],
                  }}
                >
                  <div
                    style={{
                      animation: 'float 6s ease-in-out infinite',
                      animationDelay: `${index * 0.45}s`,
                    }}
                  >
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        "whitespace-nowrap px-6 py-3 rounded-2xl shadow-sm transition-all duration-300 hover:scale-105",
                        isActive
                          ? "text-white shadow-md shadow-purple-500/30"
                          : "bg-white/70 backdrop-blur-md text-slate-700 hover:bg-white border border-white"
                      )}
                      style={{
                        backgroundColor: isActive ? '#6419AD' : undefined,
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontWeight: 600,
                        fontSize: '1.05rem',
                      }}
                    >
                      {categoryLabels[category][language]}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State message - Hidden for visual but kept for SEO */}
          <div className="sr-only flex flex-col items-center justify-center text-center animate-fade-in delay-200 mt-8">
            <h2
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'hsl(0 0% 8%)',
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
              }}
            >
              {language === 'en' ? 'Latest Insights' : 'Derniers Aperçus'}
            </h2>

            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '0.95rem',
                color: 'hsl(0 0% 45%)',
                maxWidth: '500px',
                lineHeight: 1.6,
                marginBottom: '0.5rem',
              }}
            >
              {language === 'en'
                ? 'Strategic growth guides and industry insights to help you build a thriving business.'
                : 'Guides de croissance stratégique et perspectives du secteur pour vous aider à construire une entreprise prospère.'}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="pt-0 pb-20 md:pb-28 bg-white relative">
        <div className="container mx-auto px-6">
          {/* Strategy Section */}
          {activeCategory === 'strategy' && (
            <div className="mb-20">
              <h2
                className="text-3xl md:text-4xl font-bold mb-12"
                style={{
                  color: 'hsl(0 0% 8%)',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  letterSpacing: '-0.02em',
                }}
              >
                {language === 'en' ? 'Strategies' : 'Stratégies'}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter((post) => post.category === 'strategy')
                  .map((post) => (
                    <ArticleCard key={post.id} post={post} language={language} />
                  ))}
              </div>
            </div>
          )}

          {/* Paid Media Section */}
          {activeCategory === 'paidMedia' && (
            <div className="mb-20">
              <h2
                className="text-3xl md:text-4xl font-bold mb-12"
                style={{
                  color: 'hsl(0 0% 8%)',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  letterSpacing: '-0.02em',
                }}
              >
                {language === 'en' ? 'Paid Media' : 'Médias Payants'}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter((post) => post.category === 'paidMedia')
                  .map((post) => (
                    <ArticleCard key={post.id} post={post} language={language} />
                  ))}
              </div>
            </div>
          )}

          {/* All Section */}
          {activeCategory === 'all' && (
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-12"
                style={{
                  color: 'hsl(0 0% 8%)',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  letterSpacing: '-0.02em',
                }}
              >
                {language === 'en' ? 'All Articles' : 'Tous les Articles'}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <ArticleCard key={post.id} post={post} language={language} />
                ))}
              </div>
            </div>
          )}

          {/* Other Categories Coming Soon */}
          {activeCategory !== 'all' && activeCategory !== 'strategy' && activeCategory !== 'paidMedia' && (
            <div className="text-center py-12">
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: 'hsl(0 0% 25%)' }}
              >
                {language === 'en' ? 'Coming Soon' : 'Prochainement'}
              </h3>
              <p style={{ color: 'hsl(0 0% 45%)' }}>
                {language === 'en'
                  ? `More insightful articles in the ${categoryLabels[activeCategory]?.en} category are being prepared.`
                  : `Plus d'articles perspicaces dans la catégorie ${categoryLabels[activeCategory]?.fr} sont en préparation.`}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

// Article Card Component
function ArticleCard({ post, language }: { post: any; language: string }) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <div
        className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl h-full flex flex-col hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(210 14% 92%) 100%)',
          border: '1px solid hsl(210 14% 85%)',
          boxShadow: '0 4px 12px -4px hsl(0 0% 0% / 0.08)',
        }}
      >
        {/* Featured Image Placeholder */}
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-48 object-cover relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div
            className="w-full h-48 relative overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{
              background: 'linear-gradient(135deg, hsl(270 77% 39%) 0%, hsl(270 90% 85%) 100%)',
            }}
          >
            <div className="text-center text-white/60">
              <svg
                className="w-12 h-12 mx-auto mb-2 opacity-40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm">Featured Image</p>
            </div>
          </div>
        )}

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category Badge */}
          <div className="mb-4 flex items-center gap-2">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: 'hsl(270 77% 39%)' }}
            >
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
            <span className="text-xs text-slate-500">{post.readTime} read</span>
          </div>

          {/* Title */}
          <h3
            className="text-lg md:text-xl font-bold mb-3 text-slate-900 line-clamp-3 group-hover:text-purple-600 transition-colors flex-grow"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              letterSpacing: '-0.01em',
            }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-grow">
            {post.excerpt}
          </p>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-4 transition-all duration-300">
            <span>{language === 'en' ? 'Read Article' : 'Lire l\'article'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Link>
  );
}
