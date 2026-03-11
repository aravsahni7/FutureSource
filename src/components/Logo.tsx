import React from 'react';

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
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`h-10 w-10 ${className}`}
        aria-label="FutureSource"
      >
        {/* Abstract mark - interlocking F and S suggesting growth/future */}
        <circle cx="20" cy="20" r="18" stroke={accentColor} strokeWidth="2" fill="none" />
        <path 
          d="M14 12 L14 28 M14 12 L26 12 M14 20 L22 20" 
          stroke={textColor} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={colorClasses[color]}
        />
        <circle cx="26" cy="24" r="3" fill={accentColor} />
      </svg>
    );
  }

  if (variant === 'wordmark') {
    return (
      <span className={`font-editorial text-2xl font-medium tracking-tight ${colorClasses[color]} ${className}`}>
        Future<span className="text-gradient-gold">Source</span>
      </span>
    );
  }

  // Full logo - mark + wordmark
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        aria-label="FutureSource"
      >
        <circle cx="20" cy="20" r="18" stroke={accentColor} strokeWidth="2" fill="none" />
        <path 
          d="M14 12 L14 28 M14 12 L26 12 M14 20 L22 20" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={colorClasses[color]}
        />
        <circle cx="26" cy="24" r="3" fill={accentColor} />
      </svg>
      <span className={`font-editorial text-xl font-medium tracking-tight ${colorClasses[color]}`}>
        Future<span className="text-gradient-gold">Source</span>
      </span>
    </div>
  );
}

// Alternative logo variants for the codebase
export function LogoVariant2({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 140 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`h-10 ${className}`}
      aria-label="FutureSource"
    >
      {/* Geometric arrow mark */}
      <polygon 
        points="8,20 20,8 32,20 20,32" 
        fill="none" 
        stroke="hsl(42, 50%, 58%)" 
        strokeWidth="2"
      />
      <line x1="20" y1="14" x2="20" y2="26" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="14" r="2" fill="hsl(25, 90%, 65%)" />
      <text x="44" y="26" className="font-editorial text-lg" fill="currentColor" fontFamily="Playfair Display">
        FutureSource
      </text>
    </svg>
  );
}

export function LogoVariant3({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 140 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`h-10 ${className}`}
      aria-label="FutureSource"
    >
      {/* Minimal line mark */}
      <rect x="8" y="12" width="24" height="16" rx="2" fill="none" stroke="hsl(42, 50%, 58%)" strokeWidth="2" />
      <line x1="12" y1="18" x2="24" y2="18" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="24" x2="20" y2="24" stroke="currentColor" strokeWidth="2" />
      <circle cx="28" cy="24" r="2" fill="hsl(25, 90%, 65%)" />
      <text x="44" y="26" className="font-editorial text-lg" fill="currentColor" fontFamily="Playfair Display">
        FutureSource
      </text>
    </svg>
  );
}

export default Logo;
