import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Sparkles, Eye, TrendingUp, Users, DollarSign } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { getFeaturedCaseStudies, testimonials } from '@/data/content';
import { cn } from '@/lib/utils';
import demoFitness from '@/assets/demo-fitness.jpg';
import demoRestaurant from '@/assets/demo-restaurant.jpg';
import myPapermake from '@/data/My papermake.PNG';
import demoAi from '@/assets/demo-ai.png';
import demoMyweb from '@/assets/demo-myweb.png';
import ReactDOM from 'react-dom';

import { useEffect, useRef, useState } from 'react';

function ArcCarousel({ images }) {
  const currentRotation = useRef(0);
  const [rotation, setRotation] = useState(0);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const rafRef = useRef(null);
  const autoRotate = useRef(true);
  const anchorRef = useRef(null);
  const [anchorPos, setAnchorPos] = useState({ top: 0, left: 0, width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      if (anchorRef.current) {
        const rect = anchorRef.current.getBoundingClientRect();
        setAnchorPos({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height,
        });
      }
    };
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update);
    };
  }, []);

  useEffect(() => {
    let last = null;
    const step = (ts) => {
      if (autoRotate.current) {
        if (last !== null) {
          currentRotation.current -= (ts - last) * 0.008;
          setRotation(currentRotation.current);
        }
        last = ts;
      } else {
        last = null;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    autoRotate.current = false;
    startY.current = e.clientY;
    e.preventDefault();
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    setRotation(currentRotation.current + (e.clientY - startY.current) * 0.4);
  };
  const onMouseUp = (e) => {
    if (!isDragging.current) return;
    currentRotation.current += (e.clientY - startY.current) * 0.4;
    isDragging.current = false;
    autoRotate.current = true;
  };
  const onTouchStart = (e) => {
    autoRotate.current = false;
    startY.current = e.touches[0].clientY;
  };
  const onTouchMove = (e) => {
    setRotation(currentRotation.current + (e.touches[0].clientY - startY.current) * 0.4);
  };
  const onTouchEnd = (e) => {
    currentRotation.current += (e.changedTouches[0].clientY - startY.current) * 0.4;
    autoRotate.current = true;
  };

  const count = images.length;
  const radius = 280;
  const relCx = 520;
  const relCy = anchorPos.height / 2;
  const absCx = anchorPos.left + relCx;
  const absCy = anchorPos.top + relCy;

  const imgW = 280;
  const imgH = 175;

  const imageCards = images.map((src, i) => {
    const baseAngleDeg = (360 / count) * i;
    const totalAngleDeg = baseAngleDeg + rotation;
    const rad = (totalAngleDeg * Math.PI) / 180;

    const x = absCx + radius * Math.cos(rad);
    const y = absCy + radius * Math.sin(rad);

    // Hard clip on the right — never render past anchor right edge (prevents horizontal scroll)
    const anchorRight = anchorPos.left + anchorPos.width;
    if (x - imgW / 2 > anchorRight) return null;

    // Extend top/bottom render zone by full image height so images creep in/out smoothly
    const topEdge = anchorPos.top - imgH;
    const bottomEdge = anchorPos.top + anchorPos.height + imgH;
    if (y < topEdge || y > bottomEdge) return null;

    return (
      <div
        key={i}
        style={{
          position: 'absolute',
          left: x,
          top: y,
          transform: 'translate(-50%, -50%)',
          zIndex: 45,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: `${imgW}px`,
            height: `${imgH}px`,
            borderRadius: '16px',
            border: '3px solid hsl(270 77% 39%)',
            boxShadow: '0 4px 32px hsl(270 77% 39% / 0.4)',
            overflow: 'hidden',
            background: '#fff',
          }}
        >
          <img
            src={src}
            alt={`Demo ${i + 1}`}
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <div
        ref={anchorRef}
        style={{ width: '100%', height: '520px', position: 'relative', cursor: 'grab' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      />

      {typeof document !== 'undefined' &&
        ReactDOM.createPortal(
          <div
            style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, zIndex: 45, pointerEvents: 'none' }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            {imageCards}
          </div>,
          document.body
        )}
    </>
  );
}




export default function Home() {
  const { language, t } = useLanguage();
  const featuredCases = getFeaturedCaseStudies().slice(0, 3);

  return (
    <>
      {/* Hero Section - Editorial asymmetric layout */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-hero grain-overlay" />

        {/* Decorative elements */}
        <div className="absolute top-32 right-[10%] w-64 h-64 rounded-full bg-apricot/10 blur-3xl animate-float" />
        <div className="absolute bottom-32 left-[5%] w-48 h-48 rounded-full bg-primary/10 blur-2xl animate-float delay-500" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-overline uppercase tracking-widest mb-6">
                  {t('hero.tagline')}
                </span>
              </div>

              <h1 className="font-editorial text-display-lg md:text-display-xl animate-fade-in delay-100">
                {t('hero.headline')}
              </h1>

              <p className="text-body-lg text-muted-foreground max-w-xl animate-fade-in delay-200">
                {t('hero.subheadline')}
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
                <Button asChild size="lg" className="group">
                  <Link to="/book-a-call">
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

           
            {/* Visual Element - Rotating arc with demo images */}
            <div className="lg:col-span-5 relative animate-fade-in-right delay-400">
              <ArcCarousel
                images={[demoFitness, demoRestaurant, myPapermake, demoAi, demoMyweb]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section - Vertical timeline style */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="font-editorial text-display-md mb-4">{t('pillars.title')}</h2>
            <p className="text-body-lg text-muted-foreground">{t('pillars.subtitle')}</p>
          </div>

          <div className="relative">
            <div className="space-y-12">
              {[
                { icon: Target, key: 'strategic', color: 'bg-primary/10 text-primary' },
                { icon: Sparkles, key: 'creative', color: 'bg-apricot/10 text-apricot' },
                { icon: Eye, key: 'transparency', color: 'bg-gold-light/20 text-gold-dark' },
              ].map((pillar, index) => (
                <div key={pillar.key} className="relative flex gap-8 items-start group">
                  <div className={cn(
                    "relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110",
                    pillar.color
                  )}>
                    <pillar.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-editorial text-heading-xl mb-3">
                      {t(`pillars.${pillar.key}.title`)}
                    </h3>
                    <p className="text-body-lg text-muted-foreground max-w-xl">
                      {t(`pillars.${pillar.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-editorial text-display-md mb-4">{t('results.title')}</h2>
            <p className="text-body-lg text-muted-foreground">{t('results.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'spend', icon: DollarSign },
              { key: 'roas', icon: TrendingUp },
              { key: 'revenue', icon: Target },
              { key: 'brands', icon: Users },
            ].map((stat) => (
              <div key={stat.key} className="text-center p-8 rounded-2xl bg-card border border-border card-editorial flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-editorial text-display-sm text-gradient-gold leading-tight mb-2">
                  {t(`results.stats.${stat.key}.value`)}
                </h3>
                <p className="text-caption uppercase tracking-wider text-muted-foreground">
                  {t(`results.stats.${stat.key}.label`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-caption uppercase tracking-wider mb-4">
              {t('selectedWork.title')}
            </span>
            <h2 className="font-editorial text-display-md mb-4">{t('selectedWork.title')}</h2>
            <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">{t('selectedWork.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Demo 1 */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="aspect-[4/3] bg-muted relative flex items-center justify-center p-4">
                <img
                  src={demoFitness}
                  alt="Demo Concept - Fitness"
                  className="w-full h-full object-contain rounded-xl shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-md uppercase tracking-wider shadow-sm backdrop-blur-sm">
                  {t('demos.badge')}
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm uppercase tracking-wider text-muted-foreground mb-2 block font-medium">{t('demos.fitness.industry')}</span>
                <h3 className="font-editorial text-2xl mb-2 group-hover:text-primary transition-colors">{t('demos.fitness.title')}</h3>
                <p className="text-muted-foreground mb-4">{t('demos.fitness.desc')}</p>
              </div>
            </div>
            
            {/* Demo 2 */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="aspect-[4/3] bg-muted relative flex items-center justify-center p-4">
                <img
                  src={demoRestaurant}
                  alt="Demo Concept - Restaurant"
                  className="w-full h-full object-contain rounded-xl shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-md uppercase tracking-wider shadow-sm backdrop-blur-sm">
                  {t('demos.badge')}
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm uppercase tracking-wider text-muted-foreground mb-2 block font-medium">{t('demos.restaurant.industry')}</span>
                <h3 className="font-editorial text-2xl mb-2 group-hover:text-primary transition-colors">{t('demos.restaurant.title')}</h3>
                <p className="text-muted-foreground mb-4">{t('demos.restaurant.desc')}</p>
              </div>
            </div>
            
            {/* Demo 3 */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="aspect-[4/3] bg-muted relative flex items-center justify-center p-4">
                <img
                  src={myPapermake}
                  alt="Demo Concept - Product Based"
                  className="w-full h-full object-contain rounded-xl shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-md uppercase tracking-wider shadow-sm backdrop-blur-sm">
                  {t('demos.badge')}
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm uppercase tracking-wider text-muted-foreground mb-2 block font-medium">{t('demos.product.industry')}</span>
                <h3 className="font-editorial text-2xl mb-2 group-hover:text-primary transition-colors">{t('demos.product.title')}</h3>
                <p className="text-muted-foreground mb-4">{t('demos.product.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-gold text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-background blur-3xl" />
        </div>
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
