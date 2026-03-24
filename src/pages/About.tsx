import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/data/content';
import { cn } from '@/lib/utils';

// Asset imports
import AmitPhoto from '@/data/Amit.png';
import AnshPhoto from '@/data/Ansh.png';
import AravPhoto from '@/data/Arav.png';
import AravAnsh from '@/data/aravansh.jpg';
import AravDad from '@/data/aravdad.jpg';
import AllTeam from '@/data/all.jpg';

export default function About() {
  const { language, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const values = [
    { key: 'results', icon: Target },
    { key: 'partnership', icon: Users },
    { key: 'honesty', icon: Lightbulb },
  ];

  const stackImages = [AravAnsh, AravDad, AllTeam];

  return (
    <>
      <style>{`
        @keyframes sprayIn {
          0%   { opacity: 0; filter: blur(18px); transform: scale(1.04); }
          30%  { opacity: 1; }
          100% { opacity: 1; filter: blur(0px);  transform: scale(1); }
        }
        @keyframes drip {
          0%   { transform: scaleY(0) translateY(-10px); opacity: 0; }
          60%  { opacity: 0.7; }
          100% { transform: scaleY(1) translateY(0); opacity: 0; }
        }
        .logo-path {
          opacity: 0;
          transform-origin: center;
        }
        .p1 { animation: sprayIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s forwards; }
        .p2 { animation: sprayIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.45s forwards; }
        .p3 { animation: sprayIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.75s forwards; }
        .drip {
          transform-origin: top center;
          animation: drip 0.7s ease-in forwards;
          opacity: 0;
        }
        .drip1 { animation-delay: 0.95s; }
        .drip2 { animation-delay: 1.3s; }
        .drip3 { animation-delay: 1.55s; }

        /* Graffiti outer glow — mimics paint bleeding past the edge */
        .graffiti-glow {
          filter:
            drop-shadow(0 0 12px rgba(192, 132, 252, 0.9))
            drop-shadow(0 0 28px rgba(192, 132, 252, 0.6))
            drop-shadow(0 0 55px rgba(192, 132, 252, 0.35))
            drop-shadow(0 0 90px rgba(192, 132, 252, 0.18));
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-hero grain-overlay relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-overline uppercase tracking-widest mb-6">
              {language === 'en' ? 'Our Story' : 'Notre histoire'}
            </span>
            <h1 className="font-editorial text-display-lg mb-6 animate-fade-in">
              {t('about.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-left order-2 lg:order-1">
              <h2 className="font-editorial text-display-sm mb-6">
                {t('about.mission.title')}
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.mission.text')}
              </p>
              <div className="h-1 w-24 bg-gradient-gold rounded-full" />
            </div>

            <div className="flex-shrink-0 relative p-12 order-1 lg:order-2 graffiti-glow">
              <svg
                viewBox="0 0 488 454"
                className="w-64 h-64 md:w-[450px] md:h-[450px] text-purple-400 overflow-visible"
              >
                <defs>
                  {/*
                    GRAFFITI SPRAY PAINT FILTER STACK
                    ===================================
                    1. feTurbulence  — generates organic noise (the "spray" randomness)
                    2. feDisplacementMap — warps the paths using that noise so edges wobble
                       like paint displaced by air pressure
                    3. feMorphology dilate — fattens every stroke; makes thin lines bold
                       and turns hairlines into proper paint coverage
                    4. feGaussianBlur (soft) — bleeds the colour outward, simulating
                       overspray and paint soaking into a surface
                    5. feGaussianBlur (tight) — a sharper second pass that keeps the
                       core legible while still feeling hand-sprayed
                    6. feMerge — composites soft-bleed + tight-core + fat-body so the
                       result reads as a single, weighted, painterly mark
                  */}
                  <filter id="graffiti" x="-40%" y="-40%" width="180%" height="180%">
                    <feTurbulence type="turbulence" baseFrequency="0.018 0.022" numOctaves="4" seed="12" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" result="warped"/>
                    <feMorphology operator="erode" radius="1.5" in="warped" result="eroded"/>
                    <feMorphology operator="dilate" radius="3" in="eroded" result="fat"/>
                    <feGaussianBlur in="fat" stdDeviation="5" result="bigBleed"/>
                    <feGaussianBlur in="fat" stdDeviation="1" result="core"/>
                    <feComponentTransfer in="bigBleed" result="fadedBleed">
                      <feFuncA type="linear" slope="0.35"/>
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode in="fadedBleed"/>
                      <feMergeNode in="core"/>
                      <feMergeNode in="fat"/>
                    </feMerge>
                  </filter>
                </defs>

                <g
                  transform="translate(0, 454) scale(0.1, -0.1)"
                  fill="currentColor"
                  filter="url(#graffiti)"
                >
                  <path className="logo-path p1" d="M2150 4314 c-19 -2 -77 -9 -128 -15 -623 -72 -1220 -490 -1517 -1061 -180 -347 -265 -746 -236 -1105 35 -424 179 -802 430 -1128 64 -84 233 -257 317 -325 387 -317 870 -477 1379 -457 241 10 426 49 660 140 567 219 1022 716 1202 1312 134 446 112 929 -62 1362 -271 675 -851 1141 -1565 1258 -92 15 -408 28 -480 19z m335 -28 c55 -4 106 -9 114 -12 8 -3 37 -7 65 -10 28 -3 69 -10 91 -17 22 -6 45 -12 50 -12 40 -4 85 -18 85 -26 0 -6 4 -8 9 -4 5 3 21 0 36 -7 15 -7 21 -14 14 -18 -7 -5 -5 -9 6 -13 9 -4 13 -3 10 2 -11 18 11 19 46 1 20 -9 60 -25 87 -35 28 -10 48 -23 45 -28 -4 -6 1 -8 11 -4 10 4 28 -1 43 -10 14 -10 33 -18 41 -19 8 -2 24 -12 36 -23 12 -12 30 -21 39 -21 9 0 20 -7 25 -16 5 -9 13 -17 18 -17 5 -1 8 -6 6 -10 -1 -5 2 -6 7 -3 5 3 20 -3 34 -14 14 -11 29 -20 33 -20 4 0 32 -19 63 -42 31 -24 60 -42 64 -40 5 1 6 -1 4 -5 -5 -8 22 -38 33 -38 3 0 4 -4 2 -10 -2 -5 0 -7 4 -3 9 10 36 -11 28 -23 -3 -5 1 -6 9 -3 16 6 31 -22 21 -39 -5 -9 -4 -9 6 0 9 9 19 5 42 -15 26 -24 27 -28 13 -38 -9 -7 -12 -15 -6 -18 5 -3 11 -1 13 6 3 9 9 8 22 -5 9 -9 14 -22 11 -28 -4 -5 1 -19 11 -30 13 -15 14 -19 3 -19 -12 0 -12 -2 1 -9 26 -17 32 1 9 25 -27 29 -21 41 8 14 12 -10 24 -16 29 -12 4 4 4 1 0 -5 -4 -7 -3 -13 2 -13 15 0 65 -78 57 -89 -3 -6 0 -9 7 -6 12 5 78 -73 78 -91 0 -3 16 -26 35 -51 21 -28 33 -53 30 -62 -3 -9 -3 -12 1 -8 11 10 56 -71 48 -86 -4 -6 -4 -9 1 -5 12 11 109 -195 98 -206 -4 -3 -2 -6 4 -6 5 0 10 -7 11 -15 1 -8 3 -22 4 -30 1 -8 6 -15 11 -15 5 0 7 -9 4 -20 -3 -11 -2 -20 3 -20 10 0 39 -105 42 -157 2 -22 6 -39 11 -36 7 4 8 1 13 -47 1 -14 7 -56 13 -95 5 -38 8 -71 6 -73 -2 -3 0 -13 6 -24 15 -27 14 -375 -1 -413 -6 -16 -11 -51 -12 -77 0 -26 -4 -48 -10 -48 -6 0 -7 -7 -4 -15 3 -9 -1 -39 -8 -68 -29 -109 -49 -172 -58 -184 -6 -7 -8 -20 -4 -28 3 -8 1 -15 -5 -15 -6 0 -9 -7 -5 -15 3 -8 1 -15 -5 -15 -6 0 -8 -4 -5 -9 8 -13 -4 -42 -15 -35 -5 3 -6 -3 -2 -12 4 -10 2 -15 -3 -11 -5 3 -11 -5 -12 -17 -3 -39 -112 -247 -125 -239 -7 3 -9 3 -5 -2 7 -7 -17 -63 -31 -75 -16 -13 -45 -53 -33 -46 17 10 15 -2 -7 -29 -14 -19 -21 -21 -31 -12 -10 9 -11 9 -6 -1 10 -17 -32 -84 -47 -75 -7 3 -9 3 -5 -2 15 -16 -117 -169 -137 -158 -5 4 -7 3 -3 -2 11 -12 -12 -47 -28 -41 -7 3 -13 1 -11 -3 3 -11 -55 -66 -66 -63 -5 1 -6 -2 -3 -7 3 -5 -27 -33 -66 -62 -40 -30 -75 -57 -76 -61 -2 -5 -8 -8 -13 -8 -6 0 -22 -11 -36 -24 -15 -14 -31 -22 -36 -19 -6 3 -15 -1 -21 -9 -15 -21 -92 -59 -101 -50 -5 4 -5 2 -1 -5 4 -8 -31 -29 -101 -63 -60 -28 -116 -56 -126 -61 -10 -5 -22 -7 -27 -4 -4 3 -10 0 -12 -6 -2 -7 -18 -12 -35 -13 -17 0 -29 -4 -27 -8 7 -11 -43 -21 -58 -12 -7 4 -9 3 -5 -2 8 -8 -67 -31 -133 -39 -19 -3 -64 -11 -100 -20 -36 -8 -99 -18 -140 -21 -102 -9 -290 -10 -278 -3 6 4 -21 4 -58 2 -41 -3 -106 2 -159 12 -110 19 -116 21 -135 28 -8 3 -35 8 -60 12 -82 11 -329 99 -381 136 -14 10 -29 16 -33 12 -3 -3 -15 2 -26 12 -12 11 -27 20 -35 21 -8 1 -29 13 -47 26 -43 31 -69 46 -90 54 -10 3 -15 11 -11 17 4 7 0 8 -12 3 -15 -5 -16 -4 -5 9 7 9 10 18 6 22 -3 3 -6 1 -6 -5 0 -20 -24 -13 -55 16 -17 16 -36 27 -43 24 -16 -5 -16 10 0 27 11 11 9 11 -9 2 -18 -9 -24 -8 -36 9 -7 11 -16 17 -19 14 -3 -3 -23 15 -43 40 -20 25 -41 44 -45 41 -11 -7 -71 60 -68 76 2 9 -4 13 -16 11 -13 -3 -17 1 -13 12 4 11 1 13 -10 9 -11 -4 -14 -3 -9 6 5 7 -5 24 -25 44 -18 18 -27 23 -19 12 14 -18 14 -19 -2 -6 -10 7 -18 19 -18 25 0 7 -11 23 -25 36 -14 13 -23 30 -20 38 2 7 1 11 -4 8 -11 -7 -34 20 -61 72 -12 23 -27 42 -33 42 -6 0 -8 3 -5 6 3 3 -9 29 -28 57 -19 29 -32 58 -29 65 3 7 1 11 -4 8 -12 -8 -74 121 -65 136 4 6 3 8 -4 4 -12 -7 -27 28 -31 70 0 8 -5 12 -11 9 -6 -4 -7 1 -3 11 5 12 3 15 -6 9 -10 -6 -11 -3 -1 15 8 15 8 20 1 16 -11 -7 -30 30 -35 69 -2 11 -9 33 -15 49 -7 16 -10 35 -7 42 3 7 1 14 -5 16 -5 2 -14 26 -19 53 -5 28 -16 86 -25 130 -25 130 -34 312 -21 460 4 50 7 103 6 118 0 16 4 26 9 23 5 -3 7 2 4 13 -4 15 2 55 23 158 2 12 8 33 13 45 5 13 9 25 9 28 3 38 62 229 73 235 5 4 7 11 3 16 -3 5 6 25 20 43 14 19 23 36 20 39 -3 2 9 32 26 65 16 32 30 65 30 72 0 7 6 10 13 7 8 -3 14 3 14 15 1 11 9 28 17 37 9 10 16 24 16 32 0 23 30 60 42 53 6 -4 8 -2 4 4 -3 6 -2 13 4 17 6 4 8 10 5 15 -3 5 0 12 6 16 7 4 9 3 5 -4 -3 -6 -3 -13 2 -16 4 -2 9 4 9 15 2 22 28 51 37 41 4 -3 5 0 2 8 -3 8 4 26 15 40 11 14 17 19 13 11 -5 -9 -3 -12 5 -7 6 4 9 11 6 15 -2 5 9 26 25 46 17 21 30 34 30 30 0 -5 9 0 20 10 11 10 18 20 16 22 -8 8 93 105 103 98 7 -4 8 1 4 12 -3 10 -3 15 1 11 5 -4 19 4 31 18 13 14 32 26 43 27 14 1 18 6 14 22 -3 11 -2 17 3 13 4 -4 19 4 34 18 14 13 32 22 39 19 7 -3 10 0 7 5 -4 6 4 14 17 19 13 6 19 10 13 11 -10 0 2 8 130 85 33 19 71 43 85 53 19 13 23 14 16 2 -4 -8 0 -6 8 4 9 11 16 17 16 13 0 -4 11 0 25 9 13 8 30 12 36 8 7 -4 9 -3 5 4 -3 6 -2 13 4 17 5 3 10 1 10 -6 0 -9 5 -8 18 2 32 26 63 40 74 33 7 -4 8 -3 4 4 -10 16 7 15 23 0 10 -11 11 -9 5 5 -3 10 -3 17 2 15 5 -1 19 3 30 10 12 6 24 9 26 6 3 -2 27 5 54 16 27 12 63 22 79 22 17 0 35 4 40 9 6 4 30 9 53 10 23 2 42 7 42 12 0 5 14 7 30 5 17 -3 30 -1 30 4 0 5 3 7 8 5 4 -2 54 1 112 7 121 13 232 13 375 2z" />
                  <path className="logo-path p2" d="M2970 3251 c0 -8 -217 -11 -729 -11 -623 0 -730 -2 -741 -14 -15 -19 -17 -1884 -2 -1913 9 -17 24 -18 166 -18 86 0 156 -3 156 -7 0 -5 4 -8 10 -8 5 0 7 6 4 14 -3 7 2 16 10 19 14 6 16 52 16 387 l0 381 398 -3 c310 -2 404 0 423 10 24 13 24 15 22 143 -1 89 -6 137 -15 151 -13 19 -26 20 -418 21 l-405 2 0 255 0 255 565 1 c311 1 572 5 581 8 9 4 16 17 15 29 -1 12 3 25 9 29 6 5 6 8 -2 8 -7 0 -13 8 -13 18 0 10 6 24 13 31 10 11 10 14 0 18 -7 3 -13 11 -13 18 0 7 6 16 13 18 9 4 9 6 -1 6 -9 1 -10 6 -3 20 6 10 7 21 3 25 -10 11 -8 70 3 78 6 4 0 8 -12 8 -12 0 -29 7 -37 16 -9 8 -16 11 -16 5z m30 -171 l0 -140 -582 0 -583 0 0 -280 0 -280 423 0 422 0 0 -140 0 -140 -421 0 -420 1 1 -391 1 -390 -166 0 -165 0 0 950 0 950 745 0 745 0 0 -140z" />
                  <path className="logo-path p3" d="M2988 2035 c-2 -3 -18 -6 -34 -9 -51 -6 -88 -19 -113 -37 -13 -10 -28 -16 -34 -12 -6 3 -7 1 -3 -5 4 -7 2 -12 -3 -12 -6 0 -11 -5 -11 -10 0 -6 -11 -22 -25 -36 -14 -14 -25 -34 -25 -45 0 -11 -4 -18 -8 -15 -9 5 -10 -7 -13 -97 -1 -41 4 -74 14 -94 9 -17 13 -33 10 -37 -4 -3 -1 -6 6 -6 8 0 11 -6 7 -16 -3 -8 -2 -13 3 -10 5 3 22 -10 39 -30 17 -20 36 -33 41 -29 6 3 11 -1 11 -9 0 -9 5 -16 11 -16 5 0 7 6 3 13 -4 6 1 5 12 -5 31 -26 85 -36 140 -26 27 4 55 9 62 10 6 1 12 5 12 10 0 4 9 8 19 8 10 0 22 7 25 16 4 9 13 14 22 10 8 -3 12 -2 9 3 -3 5 5 17 17 25 12 9 19 16 15 16 -4 0 1 9 11 20 43 46 56 159 28 238 -8 22 -11 44 -8 48 4 4 2 4 -5 0 -7 -3 -14 2 -18 14 -3 11 -10 20 -15 20 -5 0 -8 6 -6 13 1 6 1 9 -1 4 -3 -4 -9 -4 -14 -1 -6 3 -5 12 3 22 10 13 10 14 0 8 -7 -4 -27 1 -45 12 -40 23 -84 36 -117 33 -20 -1 -22 0 -10 8 8 6 10 11 4 11 -6 0 -13 -2 -16 -5z m113 -63 c147 -76 172 -292 47 -397 -123 -104 -289 -78 -375 58 -33 53 -43 154 -20 210 59 141 215 199 348 129z" />
                </g>

                {/* Paint drip particles — fall and fade after each shape sprays in */}
                <g fill="currentColor" opacity="0.6">
                  <rect className="drip drip1" x="236" y="388" width="4" height="22" rx="2"/>
                  <rect className="drip drip1" x="255" y="390" width="3" height="16" rx="1.5" style={{animationDelay:'1.05s'}}/>
                  <rect className="drip drip2" x="310" y="385" width="4" height="28" rx="2"/>
                  <rect className="drip drip2" x="328" y="388" width="3" height="18" rx="1.5" style={{animationDelay:'1.38s'}}/>
                  <rect className="drip drip3" x="338" y="310" width="3" height="20" rx="1.5"/>
                  <rect className="drip drip3" x="350" y="312" width="2" height="14" rx="1" style={{animationDelay:'1.62s'}}/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-warm overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16">
            <div className="max-w-xl">
              <h2 className="font-editorial text-display-sm mb-8">
                {t('about.story.title')}
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.story.text')}
              </p>
              <div className="h-1 w-24 bg-gradient-gold rounded-full" />
            </div>

            <div
              className="relative w-full max-w-[500px] h-[400px] flex items-center justify-center cursor-pointer group lg:ml-12"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {stackImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="absolute w-48 h-64 md:w-56 md:h-72 rounded-2xl border-[6px] border-white shadow-2xl overflow-hidden bg-white"
                  initial={false}
                  animate={{
                    x: isExpanded ? (idx - 1) * 215 : (idx - 1) * 45,
                    rotate: isExpanded ? 0 : (idx - 1) * 12,
                    y: isExpanded ? 0 : idx === 1 ? -20 : 12,
                    zIndex: isExpanded ? 10 : idx === 1 ? 20 : 10,
                    scale: isExpanded ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                >
                  <img src={img} alt="Team" className="w-full h-full object-cover" />
                </motion.div>
              ))}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-sans uppercase tracking-[0.3em] text-muted-foreground font-medium opacity-50">
                {isExpanded ? 'Click to stack' : 'Click to separate'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-editorial text-display-sm mb-12 text-center">
            {t('about.values.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={value.key} className="p-8 rounded-2xl bg-gradient-card border border-border text-center card-editorial">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6",
                    index === 0 ? "bg-primary/10 text-primary" : index === 1 ? "bg-apricot/10 text-primary" : "bg-gold-light/20 text-gold-dark"
                  )}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-editorial text-heading-xl mb-3">{t(`about.values.${value.key}.title`)}</h3>
                  <p className="text-body-md text-muted-foreground">{t(`about.values.${value.key}.text`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <h2 className="font-editorial text-display-sm mb-12 text-center">
            {t('about.team.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-full mx-auto">
            {teamMembers.map((member) => {
              const photos = { 'Amit Sahni': AmitPhoto, 'Ansh Sahni': AnshPhoto, 'Arav Sahni': AravPhoto };
              return (
                <div key={member.id} className="text-center group">
                  <div className="relative mb-6 mx-auto w-40 h-40">
                    <img
                      src={photos[member.name] || ''}
                      alt={member.name}
                      className="absolute inset-0 rounded-full object-cover w-full h-full border-2 border-border shadow-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-editorial text-heading-lg mb-1">{member.name}</h3>
                  <p className="text-body-sm text-primary mb-3 font-medium uppercase tracking-wider">{member.role[language]}</p>
                  <p className="text-body-sm text-muted-foreground max-w-xs mx-auto mb-4">{member.bio[language]}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-editorial text-display-md mb-6">{t('cta.primary.title')}</h2>
          <p className="text-body-lg opacity-90 max-w-xl mx-auto mb-8">{t('cta.primary.text')}</p>
          <Button asChild size="lg" variant="secondary" className="group px-8">
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