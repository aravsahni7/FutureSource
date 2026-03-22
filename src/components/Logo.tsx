import React from 'react';
import logoImg from '@/data/logo.png';

interface LogoProps {
  variant?: 'full' | 'mark' | 'wordmark';
  className?: string;
  color?: 'default' | 'light' | 'dark';
}

export function Logo({ variant = 'full', className = '', color = 'default' }: LogoProps) {
  const colorClasses = {
    default: 'text-foreground',
    light: 'text-primary-foreground',
    dark: 'text-charcoal',
  };

  const accentColor = color === 'light' ? 'hsl(42, 55%, 75%)' : 'hsl(42, 50%, 58%)';
  const textColor = color === 'light' ? 'currentColor' : 'currentColor';

  if (variant === 'mark') {
    return (
      <img
        src={logoImg}
        alt="FutureSource"
        className={`h-10 w-10 object-contain ${className}`}
      />
    );
  }

  if (variant === 'wordmark') {
    return (
      <img
        src={logoImg}
        alt="FutureSource"
        className={`h-10 object-contain ${className}`}
      />
    );
  }

  // Full logo - mark + wordmark
  return (
    <img
      src={logoImg}
      alt="FutureSource"
      className={`h-10 object-contain ${className}`}
    />
  );
}

// Alternative logo variants for the codebase
export function LogoVariant2({ className = '' }: { className?: string }) {
  return (
    <img src={logoImg} alt="FutureSource" className={`h-10 object-contain ${className}`} />
  );
}

export function LogoVariant3({ className = '' }: { className?: string }) {
  return (
    <img src={logoImg} alt="FutureSource" className={`h-10 object-contain ${className}`} />
  );
}

export default Logo;
