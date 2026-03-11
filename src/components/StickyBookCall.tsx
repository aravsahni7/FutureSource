import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

export function StickyBookCall() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 500px)
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link
      to="/book-a-call"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'fixed bottom-6 right-6 z-40 flex items-center gap-3 px-5 py-3 rounded-full',
        'bg-primary text-primary-foreground shadow-gold',
        'transition-all duration-500 ease-out',
        'hover:shadow-lg hover:scale-105',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      aria-label={t('nav.bookCall')}
    >
      <Calendar className="h-5 w-5" />
      <span
        className={cn(
          'font-body text-body-sm font-medium whitespace-nowrap',
          'transition-all duration-300 origin-left',
          isHovered ? 'opacity-100 max-w-32' : 'opacity-100 max-w-32 md:max-w-0 md:opacity-0'
        )}
      >
        {t('nav.bookCall')}
      </span>
    </Link>
  );
}

export default StickyBookCall;
