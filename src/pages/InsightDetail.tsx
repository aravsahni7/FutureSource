import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { getBlogPostBySlug, blogPosts } from '@/data/content';
import { cn } from '@/lib/utils';
import { ScrollTransition } from '@/components/animations/ScrollTransition';
import fbArticleImg from '@/data/facebook-article.png';
import seoArticleImg from '@/data/seo.png';
import croArticleImg from '@/data/cro.png';
import googleAdsImg from '@/data/google-ads.png';
import cookieImg from '@/data/cookie.png';
import tiktokImg from '@/data/tiktok.png';
import cro2Img from '@/data/cro2.png';
import trendsImg from '@/data/what.png';
import creativeImg from '@/data/even.png';

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
        <ScrollTransition className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Placeholder article content */}
              <div className="prose prose-lg max-w-none">
                {post.slug === 'meta-ads-2025-playbook' || post.slug === 'seo-content-strategy-guide' || post.slug === 'conversion-rate-psychology' || post.slug === 'google-ads-performance-max' || post.slug === 'attribution-modeling-guide' || post.slug === 'tiktok-ads-for-ecommerce' || post.slug === 'ab-testing-mistakes' || post.slug === 'marketing-trends-2025' || post.slug === 'creative-testing-framework' ? (
                  <div className="aspect-video rounded-2xl bg-gradient-editorial mb-12 overflow-hidden">
                    <a
                      href={
                        post.slug === 'seo-content-strategy-guide' 
                          ? "https://www.siteimprove.com/blog/seo-content-strategies/" 
                          : post.slug === 'conversion-rate-psychology'
                          ? "https://dool.agency/the-psychology-behind-high-converting-landing-pages-8-elements-youre-missing/"
                          : post.slug === 'google-ads-performance-max'
                          ? "https://www.dataslayer.ai/blog/google-ads-performance-max-complete-guide-2025"
                          : post.slug === 'attribution-modeling-guide'
                          ? "https://content.hubjoy.co/hubspot-attribution-the-2026-b2b-marketers-playbook"
                          : post.slug === 'tiktok-ads-for-ecommerce'
                          ? "https://blog.easyadsapp.com/2025/12/02/tiktok-ad-formats-that-convert-for-shopify-products-in-2025/"
                          : post.slug === 'ab-testing-mistakes'
                          ? "https://www.convert.com/blog/a-b-testing/ab-testing-mistakes/"
                          : post.slug === 'marketing-trends-2025'
                          ? "https://www.deloittedigital.com/nl/en/insights/perspective/marketing-trends-2025.html"
                          : post.slug === 'creative-testing-framework'
                          ? "https://www.evendigit.com/creative-testing-framework-increased-roas-127/"
                          : "https://www.jonloomer.com/meta-advertising-changes-2025/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={
                          post.slug === 'seo-content-strategy-guide' 
                            ? seoArticleImg 
                            : post.slug === 'conversion-rate-psychology'
                            ? croArticleImg
                            : post.slug === 'google-ads-performance-max'
                            ? googleAdsImg
                            : post.slug === 'attribution-modeling-guide'
                            ? cookieImg
                            : post.slug === 'tiktok-ads-for-ecommerce'
                            ? tiktokImg
                            : post.slug === 'ab-testing-mistakes'
                            ? cro2Img
                            : post.slug === 'marketing-trends-2025'
                            ? trendsImg
                            : post.slug === 'creative-testing-framework'
                            ? creativeImg
                            : fbArticleImg
                        }
                        alt={post.title[language]}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </div>
                ) : (
                  <div className="aspect-video rounded-2xl bg-gradient-editorial mb-12" />
                )}

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
              ) : post.slug === 'seo-content-strategy-guide' ? (
                <>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">Source: Siteimprove</p>

                  <h2 className="font-editorial text-heading-xl mt-6 mb-4">Recap</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                    This framework provides a step-by-step approach to moving away from "keyword stuffing" toward building topical authority. It outlines how search engines in 2025 prioritize "Helpful Content" and semantic relationships over simple term frequency.
                  </p>

                  <h2 className="font-editorial text-heading-xl mt-8 mb-4">Key Takeaways:</h2>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Topic Clusters over Keywords:</strong> Organize content into "Pillar Pages" that cover a broad topic, supported by "Cluster Content" that answers specific, long-tail questions.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>The E-E-A-T Audit:</strong> Google rewards Experience, Expertise, Authoritativeness, and Trustworthiness; content must include unique data or personal experience to rank.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Intent Mapping:</strong> Every piece of content must be mapped to a specific stage of the funnel (Informational, Navigational, or Transactional) to ensure it drives conversions, not just traffic.
                      </span>
                    </li>
                  </ul>

                  <div className="p-8 rounded-2xl bg-gradient-card border border-border my-12">
                    <p className="font-editorial text-heading-lg text-center italic">
                      "SEO isn't just keywords now. AI engines want real authority, clear branding, and the 'story' behind your expertise."
                    </p>
                  </div>

                  <h2 className="font-editorial text-heading-xl mt-12 mb-4">Conclusion</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    A successful 2025 strategy focuses on being the most helpful resource for a specific topic. Next step: Map your existing articles into clusters and identify "content gaps" where your competitors are providing more depth.
                  </p>
                </>
              ) : post.slug === 'conversion-rate-psychology' ? (
                <>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">Source: Dool Agency (Feat. Nielsen Norman Group research)</p>

                  <h2 className="font-editorial text-heading-xl mt-6 mb-4">Recap</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                    Understanding the cognitive principles that make visitors take action is the difference between a high bounce rate and a high conversion rate. This article explores how users process information under "decision fatigue."
                  </p>

                  <h2 className="font-editorial text-heading-xl mt-8 mb-4">Key Takeaways:</h2>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>The Paradox of Choice:</strong> Reducing the number of options and CTAs on a page decreases "analysis paralysis," leading to a significantly higher completion rate.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Cognitive Fluency:</strong> The easier a page is to read (font size, white space, simple language), the more likely a user is to perceive the offer as trustworthy.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>The Zeigarnik Effect:</strong> Using progress bars or multi-step forms keeps users engaged by leveraging the human brain's natural desire to complete a started task.
                      </span>
                    </li>
                  </ul>

                  <div className="p-8 rounded-2xl bg-gradient-card border border-border my-12">
                    <p className="font-editorial text-heading-lg text-center italic">
                      "People decide whether or not they like a product in 90 seconds—and 90% of that decision is based on visual hierarchy and psychological ease."
                    </p>
                  </div>

                  <h2 className="font-editorial text-heading-xl mt-12 mb-4">Conclusion</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    Effective CRO is about removing friction, not adding "tricks." Next step: Run a "5-second test" on your landing page to see if users can identify your primary value proposition and CTA immediately.
                  </p>
                </>
              ) : post.slug === 'google-ads-performance-max' ? (
                <>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">Source: Dataslayer / Search Engine Land</p>

                  <h2 className="font-editorial text-heading-xl mt-6 mb-4">Recap</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                    A practical guide to navigating Google’s most automated campaign type. It explains how to provide the right "inputs" (assets and signals) so the AI can find the highest-value customers across Search, YouTube, and Display.
                  </p>

                  <h2 className="font-editorial text-heading-xl mt-8 mb-4">Key Takeaways:</h2>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Asset Variety is King:</strong> Manually created videos and diverse image ratios (landscape, square, vertical) consistently outperform auto-generated Google assets by up to 40%.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Audience Signals, Not Targeting:</strong> Treat audience lists as "hints" for the AI to start from, rather than rigid boundaries, to allow for broader discovery.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Negative Keywords:</strong> Use account-level negative keyword lists to prevent PMax from cannibalizing your branded search traffic.
                      </span>
                    </li>
                  </ul>

                  <div className="p-8 rounded-2xl bg-gradient-card border border-border my-12">
                    <p className="font-editorial text-heading-lg text-center italic">
                      "Performance Max doesn't replace the marketer; it replaces the button-pusher. Your job is now to feed the machine the best possible data and creative."
                    </p>
                  </div>

                  <h2 className="font-editorial text-heading-xl mt-12 mb-4">Conclusion</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    PMax is a powerful tool when given high-quality assets and clear conversion goals. Next step: Replace any auto-generated videos in your asset groups with high-quality, 15-second vertical videos.
                  </p>
                </>
              ) : post.slug === 'attribution-modeling-guide' ? (
                <>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">Source: HubSpot / Hubjoy</p>

                  <h2 className="font-editorial text-heading-xl mt-6 mb-4">Recap</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                    As third-party cookies disappear, traditional "last-click" measurement is becoming increasingly inaccurate. This article explains how to move toward a more holistic, multi-touch attribution model.
                  </p>

                  <h2 className="font-editorial text-heading-xl mt-8 mb-4">Key Takeaways:</h2>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>The Shift to First-Party Data:</strong> Brands must prioritize capturing emails and phone numbers early to track the customer journey through their own CRM.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Multi-Touch Models:</strong> In a complex world, the "U-Shaped" model (giving 40% credit to the first and last touch) provides the best balance for understanding what starts and closes deals.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Incrementality over Attribution:</strong> Stop asking "which channel gets credit" and start asking "if I turned this channel off, how many sales would I actually lose?"
                      </span>
                    </li>
                  </ul>

                  <div className="p-8 rounded-2xl bg-gradient-card border border-border my-12">
                    <p className="font-editorial text-heading-lg text-center italic">
                      "84% of CMOs plan to move to multi-touch attribution by 2025. Perfect data doesn't exist; the goal is clarity, not perfection."
                    </p>
                  </div>

                  <h2 className="font-editorial text-heading-xl mt-12 mb-4">Conclusion</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    The future of measurement is a blend of data-driven models and qualitative customer feedback. Next step: Implement a "How did you hear about us?" survey on your checkout or thank-you page to capture "Dark Social" insights.
                  </p>
                </>
              ) : post.slug === 'tiktok-ads-for-ecommerce' ? (
                <>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">Source: Easy Ads / Shopify</p>

                  <h2 className="font-editorial text-heading-xl mt-6 mb-4">Recap</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                    TikTok is no longer just for viral dances; it’s a high-intent shopping engine. This framework shows e-commerce brands how to create ads that feel like organic content while driving direct sales.
                  </p>

                  <h2 className="font-editorial text-heading-xl mt-8 mb-4">Key Takeaways:</h2>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>The "Native" Aesthetic:</strong> Ads that look like "Lo-Fi" user-generated content (UGC) have 1.6x higher click-through rates than polished, professional commercials.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>The 3-Second Hook:</strong> You have less than three seconds to stop the scroll; use text overlays and high-energy motion to grab immediate attention.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>TikTok Shop Integration:</strong> Syncing your product catalog directly to TikTok allows for a frictionless "in-app" checkout that significantly boosts conversion rates.
                      </span>
                    </li>
                  </ul>

                  <div className="p-8 rounded-2xl bg-gradient-card border border-border my-12">
                    <p className="font-editorial text-heading-lg text-center italic">
                      "Success on TikTok isn't about being the loudest brand; it's about being the smartest. Don't make ads, make TikToks."
                    </p>
                  </div>

                  <h2 className="font-editorial text-heading-xl mt-12 mb-4">Conclusion</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    E-commerce brands should focus on volume and variety of creative to stay ahead of "ad fatigue." Next step: Partner with 3-5 small creators to produce "unboxing" or "how-to" videos for your top-selling products.
                  </p>
                </>
              ) : post.slug === 'ab-testing-mistakes' ? (
                <>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">Source: Convert / Contentsquare</p>

                  <h2 className="font-editorial text-heading-xl mt-6 mb-4">Recap</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                    Most A/B tests fail not because the hypothesis was wrong, but because the execution was flawed. This deep dive identifies the pitfalls that lead to "false winners" and wasted optimization efforts.
                  </p>

                  <h2 className="font-editorial text-heading-xl mt-8 mb-4">Key Takeaways:</h2>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>The "Peeking" Problem:</strong> Stopping a test as soon as it looks like it’s winning (before reaching statistical significance) often leads to implementing changes that don't actually help.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Testing Too Many Variables:</strong> If you change the headline, the button color, and the image at once, you’ll never know which change caused the result.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Ignoring Mobile:</strong> Many tests are designed on desktop, but because 70%+ of traffic is mobile, a "winner" on desktop can be a "loser" for the majority of your audience.
                      </span>
                    </li>
                  </ul>

                  <div className="p-8 rounded-2xl bg-gradient-card border border-border my-12">
                    <p className="font-editorial text-heading-lg text-center italic">
                      "Accurate test results lead to successful growth; inaccurate ones lead to expensive mistakes. Aim for 95% confidence before declaring a winner."
                    </p>
                  </div>

                  <h2 className="font-editorial text-heading-xl mt-12 mb-4">Conclusion</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    Rigorous testing requires patience and a strict adherence to the scientific method. Next step: Audit your last three "winning" tests to ensure they reached the required sample size and were tested across all device types.
                  </p>
                </>
              ) : post.slug === 'marketing-trends-2025' ? (
                <>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">Source: Deloitte Digital / HubSpot</p>

                  <h2 className="font-editorial text-heading-xl mt-6 mb-4">Recap</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                    This report separates fleeting hype from long-term shifts. It argues that as AI makes content creation easier, "Human-Centric" branding and community-building become the only sustainable competitive advantages.
                  </p>

                  <h2 className="font-editorial text-heading-xl mt-8 mb-4">Key Takeaways:</h2>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>AI as an Efficiency Layer:</strong> Generative AI is moving from a "novelty" to an integrated part of the marketing stack, used primarily for personalization at scale.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>The Death of the "Average":</strong> Consumers are gravitating toward brands that take a stand on social issues or offer hyper-personalized, one-to-one experiences.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Video First Strategy:</strong> Short-form video is now the primary discovery channel for Gen Z and Millennials, surpassing traditional search engines for many product categories.
                      </span>
                    </li>
                  </ul>

                  <div className="p-8 rounded-2xl bg-gradient-card border border-border my-12">
                    <p className="font-editorial text-heading-lg text-center italic">
                      "75% of consumers are more likely to purchase from brands that deliver personalized content. In 2025, personalization is no longer a 'nice-to-have'—it's the standard."
                    </p>
                  </div>

                  <h2 className="font-editorial text-heading-xl mt-12 mb-4">Conclusion</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    The brands that win in 2025 will be those that use technology to become more human, not less. Next step: Identify one way to add more personalization to your automated email welcome sequence.
                  </p>
                </>
              ) : post.slug === 'creative-testing-framework' ? (
                <>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">Source: EvenDigit / Revealbot</p>

                  <h2 className="font-editorial text-heading-xl mt-6 mb-4">Recap</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                    This systematic approach explains how to move away from "guessing" which ads will work. It outlines a "Sprint" model for testing creative concepts and scaling only the high-performers.
                  </p>

                  <h2 className="font-editorial text-heading-xl mt-8 mb-4">Key Takeaways:</h2>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Concept Testing vs. Iteration:</strong> First, test completely different "Big Ideas" (e.g., Emotional vs. Logical). Once a winning concept is found, then iterate on the details (e.g., Headline A vs. Headline B).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>The "Thumb-Stop" Metric:</strong> Evaluate ads based on "3-second view rate" to see if they are actually stopping the scroll before looking at the final conversion rate.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-body-md text-muted-foreground">
                        <strong>Predictable Pipelines:</strong> Don't wait for performance to drop to make new ads; run weekly creative "sprints" so you always have a "winning" asset ready to go.
                      </span>
                    </li>
                  </ul>

                  <div className="p-8 rounded-2xl bg-gradient-card border border-border my-12">
                    <p className="font-editorial text-heading-lg text-center italic">
                      "As algorithms automate bidding, testing creative is where marketers win or lose. It is now the primary driver of ROAS."
                    </p>
                  </div>

                  <h2 className="font-editorial text-heading-xl mt-12 mb-4">Conclusion</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    A disciplined creative testing framework turns advertising from a gamble into a predictable growth system. Next step: Create 3 different "hooks" for your best-performing ad and test them against each other for 7 days.
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
        </ScrollTransition>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-6">
            <h2 className="font-editorial text-display-sm mb-8">
              {language === 'en' ? 'Related Articles' : 'Articles connexes'}
            </h2>
            <ScrollTransition stagger={true} className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/insights/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="h-full rounded-2xl border border-border bg-card overflow-hidden card-editorial flex flex-col">
                    <div className="aspect-video bg-gradient-editorial relative overflow-hidden">
                      {relatedPost.slug === 'meta-ads-2025-playbook' && (
                        <img src={fbArticleImg} alt={relatedPost.title[language]} className="w-full h-full object-cover" />
                      )}
                      {relatedPost.slug === 'seo-content-strategy-guide' && (
                        <img src={seoArticleImg} alt={relatedPost.title[language]} className="w-full h-full object-cover" />
                      )}
                      {relatedPost.slug === 'conversion-rate-psychology' && (
                        <img src={croArticleImg} alt={relatedPost.title[language]} className="w-full h-full object-cover" />
                      )}
                      {relatedPost.slug === 'google-ads-performance-max' && (
                        <img src={googleAdsImg} alt={relatedPost.title[language]} className="w-full h-full object-cover" />
                      )}
                      {relatedPost.slug === 'attribution-modeling-guide' && (
                        <img src={cookieImg} alt={relatedPost.title[language]} className="w-full h-full object-cover" />
                      )}
                      {relatedPost.slug === 'tiktok-ads-for-ecommerce' && (
                        <img src={tiktokImg} alt={relatedPost.title[language]} className="w-full h-full object-cover" />
                      )}
                      {relatedPost.slug === 'ab-testing-mistakes' && (
                        <img src={cro2Img} alt={relatedPost.title[language]} className="w-full h-full object-cover" />
                      )}
                      {relatedPost.slug === 'marketing-trends-2025' && (
                        <img src={trendsImg} alt={relatedPost.title[language]} className="w-full h-full object-cover" />
                      )}
                      {relatedPost.slug === 'creative-testing-framework' && (
                        <img src={creativeImg} alt={relatedPost.title[language]} className="w-full h-full object-cover" />
                      )}
                    </div>
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
            </ScrollTransition>
          </div>
        </section>
      )}
    </>
  );
}
