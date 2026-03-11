import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { getBlogPostBySlug, blogPosts } from '@/data/content';
import { cn } from '@/lib/utils';
import fbArticleImg from '@/data/facebook article.PNG';

const categoryLabels: Record<string, { en: string; fr: string }> = {
  strategy: { en: 'Strategy', fr: 'Stratégie' },
  paidMedia: { en: 'Paid Media', fr: 'Médias payants' },
  seo: { en: 'SEO', fr: 'SEO' },
  cro: { en: 'CRO', fr: 'CRO' },
  trends: { en: 'Trends', fr: 'Tendances' },
};

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero grain-overlay relative">
        <div className="container mx-auto px-6">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('common.back')} {t('nav.insights')}
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-caption">
                {categoryLabels[post.category]?.[language] || post.category}
              </span>
              <span className="text-caption text-muted-foreground">{post.readTime[language]}</span>
            </div>

            <h1 className="font-editorial text-display-lg mb-6 animate-fade-in">
              {post.title[language]}
            </h1>

            <p className="text-body-lg text-muted-foreground mb-8 animate-fade-in delay-100">
              {post.excerpt[language]}
            </p>

            <div className="flex items-center gap-6 text-body-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString(language === 'fr' ? 'fr-CA' : 'en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime[language]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Placeholder article content */}
              <div className="prose prose-lg max-w-none">
              <div className="aspect-video rounded-2xl bg-gradient-editorial mb-12 overflow-hidden">
                <a
                  href="https://www.jonloomer.com/meta-advertising-changes-2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={fbArticleImg}
                    alt={post.title[language]}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>

              {post.slug === 'meta-ads-2025-playbook' ? (
                <>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">Source: Jon Loomer Digital</p>

                  <h2 className="font-editorial text-heading-xl mt-6 mb-4">Recap</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                    After managing millions in spend across the Meta ecosystem, this guide breaks down how the platform has shifted from manual granular targeting to an AI-driven "Advantage+" model. It focuses on how to work with the algorithm rather than trying to outsmart it.
                  </p>

                  <h2 className="font-editorial text-heading-xl mt-8 mb-4">Key Takeaways:</h2>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>The "Power of Broad":</strong> In 2025, niche interest targeting is largely obsolete; the algorithm performs best when given broad parameters and high-quality creative signals.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Creative as Targeting:</strong> With manual targeting restricted, the "hook" and messaging in your ad creative are now the primary ways the algorithm identifies your ideal audience.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Conversion API (CAPI) Necessity:</strong> Server-side tracking is no longer optional; it is the only way to feed the AI enough data to maintain stable ROAS.
                      </span>
                    </li>
                  </ul>

                  <div className="p-8 rounded-2xl bg-gradient-card border border-border my-12">
                    <p className="font-editorial text-heading-lg text-center italic">
                      "AI doesn't see your brand the old way—it looks for trust, clarity, and signal. In 2025, your creative is your targeting."
                    </p>
                  </div>

                  <h2 className="font-editorial text-heading-xl mt-12 mb-4">Conclusion</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    To succeed, marketers must stop micromanaging audiences and start over-indexing on creative variety. Next step: Audit your current campaigns and consolidate small ad sets into one broad Advantage+ Shopping Campaign.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt[language]}
                  </p>

                  <h2 className="font-editorial text-heading-xl mt-12 mb-4">
                    {language === 'en' ? 'Key Takeaways' : 'Points clés'}
                  </h2>
                  <ul className="space-y-3 mb-8">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span className="text-body-md text-muted-foreground">
                          {language === 'en' 
                            ? `Key insight #${i} from this article that provides actionable value.`
                            : `Point clé #${i} de cet article qui apporte une valeur actionnable.`
                          }
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-8 rounded-2xl bg-gradient-card border border-border my-12">
                    <p className="font-editorial text-heading-lg text-center italic">
                      "{language === 'en' 
                        ? 'A compelling quote or statistic that highlights the main point of this article.'
                        : 'Une citation ou statistique convaincante qui met en évidence le point principal de cet article.'
                      }"
                    </p>
                  </div>

                  <h2 className="font-editorial text-heading-xl mt-12 mb-4">
                    {language === 'en' ? 'Conclusion' : 'Conclusion'}
                  </h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    {language === 'en'
                      ? 'The conclusion summarizes the key points and provides a clear next step for readers who want to implement these strategies.'
                      : 'La conclusion résume les points clés et fournit une prochaine étape claire pour les lecteurs qui souhaitent implémenter ces stratégies.'
                    }
                  </p>
                </>
              )}
            </div>

            {/* Share & CTA */}
            <div className="mt-16 p-8 rounded-2xl bg-gradient-warm border border-border text-center">
              <h3 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Ready to Apply These Strategies?' : 'Prêt à appliquer ces stratégies?'}
              </h3>
              <p className="text-body-md text-muted-foreground mb-6">
                {t('cta.primary.text')}
              </p>
              <Button asChild className="group">
                <Link to="/book-a-call">
                  {t('cta.primary.button')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-6">
            <h2 className="font-editorial text-display-sm mb-8">
              {language === 'en' ? 'Related Articles' : 'Articles connexes'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/insights/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="h-full rounded-2xl border border-border bg-card overflow-hidden card-editorial flex flex-col">
                    <div className="aspect-video bg-gradient-editorial" />
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-caption text-primary mb-2">
                        {categoryLabels[relatedPost.category]?.[language]}
                      </span>
                      <h3 className="font-editorial text-heading-md group-hover:text-primary transition-colors">
                        {relatedPost.title[language]}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
