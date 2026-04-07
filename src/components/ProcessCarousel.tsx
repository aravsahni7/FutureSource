import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import TransparentImage from '@/components/TransparentImage';
import './ProcessCarousel.css';

import discoveryImg from '@/assets/process-discovery.png';
import strategyImg from '@/assets/process-strategy.png';
import executionImg from '@/assets/process-execution.png';
import optimizationImg from '@/assets/process-optimization.png';

interface ProcessSlide {
  key: string;
  number: string;
  image: string;
  nextLabel?: { en: string; fr: string };
  prevLabel?: { en: string; fr: string };
  ctaButton?: { en: string; fr: string };
  ctaLink?: string;
}

const slides: ProcessSlide[] = [
  {
    key: 'discovery',
    number: '01',
    image: discoveryImg,
    nextLabel: { en: 'Next: Strategy', fr: 'Suivant: Stratégie' },
  },
  {
    key: 'strategy',
    number: '02',
    image: strategyImg,
    prevLabel: { en: 'Prev: Discovery', fr: 'Préc: Découverte' },
    nextLabel: { en: 'Next: Execution', fr: 'Suivant: Exécution' },
  },
  {
    key: 'execution',
    number: '03',
    image: executionImg,
    prevLabel: { en: 'Prev: Strategy', fr: 'Préc: Stratégie' },
    nextLabel: { en: 'Next: Optimization', fr: 'Suivant: Optimisation' },
  },
  {
    key: 'optimization',
    number: '04',
    image: optimizationImg,
    prevLabel: { en: 'Prev: Execution', fr: 'Préc: Exécution' },
    ctaButton: { en: 'Explore Results', fr: 'Explorer les résultats' },
    ctaLink: '/work',
  },
];

const AUTO_SLIDE_INTERVAL = 6000;

export default function ProcessCarousel() {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % slides.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + slides.length) % slides.length);
  }, [activeIndex, goTo]);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    autoSlideRef.current = setInterval(() => {
      goNext();
    }, AUTO_SLIDE_INTERVAL);
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [goNext, isPaused]);

  const pauseAutoSlide = useCallback(() => {
    setIsPaused(true);
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  }, []);

  const resumeAutoSlide = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDelta(0);
    pauseAutoSlide();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX;
    setDragDelta(delta);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 80;
    if (dragDelta < -threshold) {
      goNext();
    } else if (dragDelta > threshold) {
      goPrev();
    }
    setDragDelta(0);
    // Resume auto-slide after 3s of inactivity
    setTimeout(resumeAutoSlide, 3000);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragDelta(0);
    pauseAutoSlide();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - dragStartX;
    setDragDelta(delta);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { goNext(); pauseAutoSlide(); setTimeout(resumeAutoSlide, 3000); }
      if (e.key === 'ArrowLeft') { goPrev(); pauseAutoSlide(); setTimeout(resumeAutoSlide, 3000); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, pauseAutoSlide, resumeAutoSlide]);

  const currentSlide = slides[activeIndex];

  return (
    <section
      className="process-carousel"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => { if (isDragging) handleMouseUp(); }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Background number */}
      <div className="process-carousel__bg-number" key={`num-${activeIndex}`}>
        {currentSlide.number}
      </div>

      {/* Decorative network lines SVG (subtle) */}
      <svg className="process-carousel__network" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="80" r="3" fill="hsl(270 77% 39% / 0.08)" />
        <circle cx="200" cy="150" r="2" fill="hsl(270 77% 39% / 0.06)" />
        <circle cx="320" cy="60" r="2.5" fill="hsl(270 77% 39% / 0.07)" />
        <circle cx="1050" cy="100" r="3" fill="hsl(270 77% 39% / 0.08)" />
        <circle cx="1100" cy="200" r="2" fill="hsl(270 77% 39% / 0.06)" />
        <circle cx="950" cy="50" r="2.5" fill="hsl(270 77% 39% / 0.07)" />
        <circle cx="1150" cy="350" r="2" fill="hsl(270 77% 39% / 0.05)" />
        <line x1="100" y1="80" x2="200" y2="150" stroke="hsl(270 77% 39% / 0.05)" strokeWidth="1" />
        <line x1="200" y1="150" x2="320" y2="60" stroke="hsl(270 77% 39% / 0.05)" strokeWidth="1" />
        <line x1="1050" y1="100" x2="1100" y2="200" stroke="hsl(270 77% 39% / 0.05)" strokeWidth="1" />
        <line x1="950" y1="50" x2="1050" y2="100" stroke="hsl(270 77% 39% / 0.05)" strokeWidth="1" />
        <line x1="1100" y1="200" x2="1150" y2="350" stroke="hsl(270 77% 39% / 0.05)" strokeWidth="1" />
      </svg>

      {/* Slide content */}
      <div className="process-carousel__content">
        {/* Left: Image */}
        <div className="process-carousel__image-area" key={`img-${activeIndex}`}>
          <TransparentImage
            src={currentSlide.image}
            alt={t(`process.${currentSlide.key}.title`)}
            className={`process-carousel__image process-carousel__image--${currentSlide.key}`}
            threshold={230}
            draggable={false}
          />
        </div>

        {/* Right: Text content */}
        <div className="process-carousel__text-area" key={`text-${activeIndex}`}>
          <h2 className="process-carousel__title">
            {t(`process.${currentSlide.key}.title`)}
          </h2>

          <span className="process-carousel__duration">
            {t(`process.${currentSlide.key}.duration`)}
          </span>

          <p className="process-carousel__description">
            {t(`process.${currentSlide.key}.description`)}
          </p>

          {currentSlide.ctaButton && (
            <a href={currentSlide.ctaLink} className="process-carousel__cta">
              {currentSlide.ctaButton[language]}
            </a>
          )}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="process-carousel__nav">
        {currentSlide.prevLabel && (
          <button
            className="process-carousel__arrow process-carousel__arrow--prev"
            onClick={(e) => { e.stopPropagation(); goPrev(); pauseAutoSlide(); setTimeout(resumeAutoSlide, 3000); }}
            aria-label="Previous step"
          >
            <ChevronLeft className="process-carousel__arrow-icon" />
            <span className="process-carousel__arrow-label">
              {currentSlide.prevLabel[language]}
            </span>
          </button>
        )}
        {currentSlide.nextLabel && (
          <button
            className="process-carousel__arrow process-carousel__arrow--next"
            onClick={(e) => { e.stopPropagation(); goNext(); pauseAutoSlide(); setTimeout(resumeAutoSlide, 3000); }}
            aria-label="Next step"
          >
            <span className="process-carousel__arrow-label">
              {currentSlide.nextLabel[language]}
            </span>
            <ChevronRight className="process-carousel__arrow-icon" />
          </button>
        )}
      </div>

      {/* Dot indicators */}
      <div className="process-carousel__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`process-carousel__dot ${activeIndex === index ? 'process-carousel__dot--active' : ''}`}
            onClick={(e) => { e.stopPropagation(); goTo(index); pauseAutoSlide(); setTimeout(resumeAutoSlide, 3000); }}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar for auto-slide */}
      <div className="process-carousel__progress">
        <div
          className={`process-carousel__progress-bar ${isPaused ? 'process-carousel__progress-bar--paused' : ''}`}
          key={`progress-${activeIndex}-${isPaused}`}
          style={{
            animationDuration: `${AUTO_SLIDE_INTERVAL}ms`,
          }}
        />
      </div>
    </section>
  );
}
