import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogPosts, getFeaturedBlogPosts } from '@/data/content';
import { cn } from '@/lib/utils';

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

export default function Insights() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [email, setEmail] = useState('');

  const featuredPosts = getFeaturedBlogPosts();
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero grain-overlay relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-overline uppercase tracking-widest mb-6 animate-fade-in">
              {language === 'en' ? 'Growth Knowledge' : 'Connaissances croissance'}
            </span>
            <h1 className="font-editorial text-display-lg mb-6 animate-fade-in delay-100">
              {t('insights.title')}
            </h1>
            <p className="text-body-lg text-muted-foreground animate-fade-in delay-200">
              {t('insights.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-editorial text-heading-xl mb-8">
            {language === 'en' ? 'Featured Articles' : 'Articles vedettes'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 3).map((post, index) => (
              <Link
                key={post.id}
                to={`/insights/${post.slug}`}
                className={cn(
                  "group block",
                  index === 0 && "md:col-span-2 md:row-span-2"
                )}
              >
                <article className={cn(
                  "h-full rounded-2xl border border-border bg-card overflow-hidden card-editorial flex flex-col"
                )}>
                  <div className={cn(
                    "bg-gradient-editorial relative",
                    index === 0 ? "aspect-[16/9]" : "aspect-video"
                  )}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-editorial text-heading-lg text-muted-foreground/20">
                        {categoryLabels[post.category][language]}
                      </span>
                    </div>
                  </div>
                  <div className={cn(
                    "p-6 flex-1 flex flex-col",
                    index === 0 && "md:p-8"
                  )}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-caption">
                        {categoryLabels[post.category][language]}
                      </span>
                      <span className="text-caption text-muted-foreground">{post.readTime[language]}</span>
                    </div>
                    <h3 className={cn(
                      "font-editorial mb-3 group-hover:text-primary transition-colors flex-1",
                      index === 0 ? "text-heading-xl md:text-display-sm" : "text-heading-lg"
                    )}>
                      {post.title[language]}
                    </h3>
                    <p className="text-body-md text-muted-foreground">
                      {post.excerpt[language]}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-y border-border bg-background sticky top-20 z-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-body-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {categoryLabels[category][language]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/insights/${post.slug}`}
                className="group block"
              >
                <article className="h-full rounded-2xl border border-border bg-card overflow-hidden card-editorial flex flex-col">
                  <div className="aspect-video bg-gradient-editorial relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-editorial text-heading-md text-muted-foreground/20">
                        {categoryLabels[post.category][language]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-caption">
                        {categoryLabels[post.category][language]}
                      </span>
                      <span className="text-caption text-muted-foreground">{post.readTime[language]}</span>
                    </div>
                    <h3 className="font-editorial text-heading-lg mb-3 group-hover:text-primary transition-colors flex-1">
                      {post.title[language]}
                    </h3>
                    <p className="text-body-sm text-muted-foreground line-clamp-2">
                      {post.excerpt[language]}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-editorial text-display-sm mb-4">
              {t('insights.newsletter.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              {t('insights.newsletter.description')}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('insights.newsletter.placeholder')}
                className="flex-1"
                required
              />
              <Button type="submit">
                {t('insights.newsletter.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
