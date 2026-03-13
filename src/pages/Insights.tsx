import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogPosts, getFeaturedBlogPosts } from '@/data/content';
import { cn } from '@/lib/utils';
import fbArticleImg from '@/data/facebook-article.png';
import seoArticleImg from '@/data/seo.png';
import croArticleImg from '@/data/cro.png';
import googleAdsImg from '@/data/google-ads.png';
import cookieImg from '@/data/cookie.png';
import tiktokImg from '@/data/tiktok.png';
import cro2Img from '@/data/cro2.png';
import trendsImg from '@/data/what.png';
import creativeImg from '@/data/even.png';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'f8yRIopzVihwh4c7w';
const EMAILJS_SERVICE_ID = 'service_o5x843p';
const EMAILJS_TEMPLATE_ID = 'template_9aj5sqh';

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
  const [isSubscribed, setIsSubscribed] = useState(false);

  const featuredPosts = getFeaturedBlogPosts();
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          subscriber_email: email,
          to_email: 'hello@futuresource.ca',
        },
        EMAILJS_PUBLIC_KEY
      );
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Error sending newsletter subscription email:', error);
    }
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
                    "bg-gradient-editorial relative overflow-hidden",
                    index === 0 ? "aspect-[16/9]" : "aspect-video"
                  )}>
                    {post.slug === 'meta-ads-2025-playbook' && (
                      <img src={fbArticleImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'seo-content-strategy-guide' && (
                      <img src={seoArticleImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'conversion-rate-psychology' && (
                      <img src={croArticleImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'google-ads-performance-max' && (
                      <img src={googleAdsImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'attribution-modeling-guide' && (
                      <img src={cookieImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'tiktok-ads-for-ecommerce' && (
                      <img src={tiktokImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'ab-testing-mistakes' && (
                      <img src={cro2Img} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'marketing-trends-2025' && (
                      <img src={trendsImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'creative-testing-framework' && (
                      <img src={creativeImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
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
                  <div className="aspect-video bg-gradient-editorial relative overflow-hidden">
                    {post.slug === 'meta-ads-2025-playbook' && (
                      <img src={fbArticleImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'seo-content-strategy-guide' && (
                      <img src={seoArticleImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'conversion-rate-psychology' && (
                      <img src={croArticleImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'google-ads-performance-max' && (
                      <img src={googleAdsImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'attribution-modeling-guide' && (
                      <img src={cookieImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'tiktok-ads-for-ecommerce' && (
                      <img src={tiktokImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'ab-testing-mistakes' && (
                      <img src={cro2Img} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'marketing-trends-2025' && (
                      <img src={trendsImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
                    {post.slug === 'creative-testing-framework' && (
                      <img src={creativeImg} alt={post.title[language]} className="w-full h-full object-cover" />
                    )}
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
            {isSubscribed ? (
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 animate-fade-in">
                <h3 className="font-editorial text-heading-lg mb-2 text-primary">
                  {language === 'en' ? 'Welcome to the inner circle!' : 'Bienvenue dans le cercle restreint !'}
                </h3>
                <p className="text-body-md text-muted-foreground">
                  {language === 'en' 
                    ? 'Thanks for subscribing. Your first growth insight is heading to your inbox shortly.'
                    : 'Merci de vous être abonné. Votre premier insight de croissance arrive bientôt dans votre boîte de réception.'}
                </p>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </section>
    </>
  );
}
