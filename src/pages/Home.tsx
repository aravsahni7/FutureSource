import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Sparkles, Eye, TrendingUp, Users, DollarSign, RefreshCcw } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { getFeaturedCaseStudies, testimonials } from '@/data/content';
import { ScrollTransition } from '@/components/animations/ScrollTransition';
import { TextReveal } from '@/components/animations/TextReveal';
import { CMSCRMLogos } from '@/components/CMSCRMLogo';

import demoFitness from '@/assets/demo-fitness.jpg';
import demoRestaurant from '@/assets/demo-restaurant.jpg';
import myPapermake from '@/data/My papermake.PNG';

export default function Home() {
  const { language, t } = useLanguage();
  const featuredCases = getFeaturedCaseStudies().slice(0, 3);

  return (
    <>
      {/* Hero Section - Editorial asymmetric layout */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero grain-overlay" />

        {/* Decorative elements */}
        <div className="absolute top-32 right-[10%] w-64 h-64 rounded-full bg-apricot/10 blur-3xl animate-float" />
        <div className="absolute bottom-32 left-[5%] w-48 h-48 rounded-full bg-primary/10 blur-2xl animate-float delay-500" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-8 space-y-8">
              <h1 className="font-bold text-[clamp(2.1rem,8vw,3.5rem)] md:text-display-lg lg:text-display-xl animate-fade-in delay-100 whitespace-pre-line leading-tight">
                {t('hero.headline').split('*').map((part, i) => {
                  if (i % 2 === 1) {
                    return (
                      <span key={i} className="relative whitespace-nowrap inline-block z-10">
                        {part}
                        <svg className="absolute -bottom-1 left-0 w-full h-[0.4em] transform -rotate-1 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                          <path d="M2,18 C 30,5 65,4 98,16" fill="none" stroke="#FC8264" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                      </span>
                    );
                  }
                  return <React.Fragment key={i}>{part}</React.Fragment>;
                })}
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

            {/* Visual Element — Animated Analytics Illustration */}
            <div className="lg:col-span-4 relative animate-fade-in-right delay-400">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Soft background circle */}
                <div className="absolute inset-[8%] rounded-full bg-primary/5" />

                <svg viewBox="0 0 500 500" className="w-full h-full relative z-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <style>{`
                      @keyframes spin-cw { to { transform: rotate(360deg); } }
                      @keyframes spin-ccw { to { transform: rotate(-360deg); } }
                      @keyframes bar-grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
                      @keyframes dash-move { to { stroke-dashoffset: -40; } }
                      @keyframes float-y { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
                      @keyframes float-y2 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                      @keyframes pulse-dot { 0%,100% { opacity:0.4; } 50% { opacity:1; } }
                      @keyframes orbit { to { transform: rotate(360deg); } }
                      .gear-cw { animation: spin-cw 8s linear infinite; }
                      .gear-ccw { animation: spin-ccw 6s linear infinite; }
                      .gear-cw-slow { animation: spin-cw 12s linear infinite; }
                      .bar-anim { transform-origin: bottom; animation: bar-grow 1.2s ease-out both; }
                      .bar-d1 { animation-delay: 0.1s; }
                      .bar-d2 { animation-delay: 0.25s; }
                      .bar-d3 { animation-delay: 0.4s; }
                      .bar-d4 { animation-delay: 0.55s; }
                      .bar-d5 { animation-delay: 0.7s; }
                      .trend-dash { stroke-dasharray: 8 6; animation: dash-move 1.5s linear infinite; }
                      .panel-float { animation: float-y 4s ease-in-out infinite; }
                      .panel-float2 { animation: float-y2 5s ease-in-out infinite; }
                      .dot-pulse { animation: pulse-dot 2s ease-in-out infinite; }
                      .dot-d1 { animation-delay: 0.3s; }
                      .dot-d2 { animation-delay: 0.7s; }
                      .dot-d3 { animation-delay: 1.1s; }
                      .orbit-ring { animation: orbit 20s linear infinite; }
                    `}</style>

                    {/* Proper arrowhead markers */}
                    <marker id="arrow-purple" markerWidth="24" markerHeight="20" refX="22" refY="10" orient="auto" markerUnits="userSpaceOnUse">
                      <path d="M0,0 L24,10 L0,20 Z" fill="hsl(270,77%,39%)" />
                    </marker>
                    <marker id="arrow-orange" markerWidth="24" markerHeight="20" refX="22" refY="10" orient="auto" markerUnits="userSpaceOnUse">
                      <path d="M0,0 L24,10 L0,20 Z" fill="#FC8264" />
                    </marker>
                  </defs>

                  {/* ——— ORBITING DATA PARTICLES ——— */}
                  <g className="orbit-ring" style={{ transformOrigin: '250px 250px' }}>
                    <circle cx="250" cy="60" r="4" fill="hsl(270,77%,39%)" opacity="0.5" />
                    <circle cx="440" cy="250" r="3" fill="#FC8264" opacity="0.4" />
                    <circle cx="250" cy="440" r="3.5" fill="hsl(270,77%,60%)" opacity="0.35" />
                    <circle cx="60" cy="250" r="3" fill="#FC8264" opacity="0.45" />
                  </g>

                  {/* ——— LARGE GEAR (top-right) — proper cog shape ——— */}
                  <g className="gear-cw" style={{ transformOrigin: '380px 120px' }}>
                    <path d={(() => {
                      const cx = 380, cy = 120, teeth = 8, outerR = 34, innerR = 24, holeR = 10;
                      let d = '';
                      for (let i = 0; i < teeth; i++) {
                        const a1 = (i / teeth) * Math.PI * 2 - Math.PI / 2;
                        const a2 = ((i + 0.35) / teeth) * Math.PI * 2 - Math.PI / 2;
                        const a3 = ((i + 0.5) / teeth) * Math.PI * 2 - Math.PI / 2;
                        const a4 = ((i + 0.85) / teeth) * Math.PI * 2 - Math.PI / 2;
                        d += `${i === 0 ? 'M' : 'L'}${cx + innerR * Math.cos(a1)},${cy + innerR * Math.sin(a1)} `;
                        d += `L${cx + outerR * Math.cos(a2)},${cy + outerR * Math.sin(a2)} `;
                        d += `L${cx + outerR * Math.cos(a3)},${cy + outerR * Math.sin(a3)} `;
                        d += `L${cx + innerR * Math.cos(a4)},${cy + innerR * Math.sin(a4)} `;
                      }
                      d += 'Z';
                      // Add center hole as a second subpath (reverse winding)
                      d += ` M${cx + holeR},${cy}`;
                      for (let i = 1; i <= 32; i++) {
                        const a = (i / 32) * Math.PI * 2;
                        d += ` L${cx + holeR * Math.cos(a)},${cy + holeR * Math.sin(a)}`;
                      }
                      d += 'Z';
                      return d;
                    })()} fill="#FC8264" fillRule="evenodd" />
                  </g>

                  {/* ——— SMALL GEAR (top-right, interlocking) ——— */}
                  <g className="gear-ccw" style={{ transformOrigin: '420px 158px' }}>
                    <path d={(() => {
                      const cx = 420, cy = 158, teeth = 6, outerR = 22, innerR = 15, holeR = 6;
                      let d = '';
                      for (let i = 0; i < teeth; i++) {
                        const a1 = (i / teeth) * Math.PI * 2 - Math.PI / 2;
                        const a2 = ((i + 0.3) / teeth) * Math.PI * 2 - Math.PI / 2;
                        const a3 = ((i + 0.5) / teeth) * Math.PI * 2 - Math.PI / 2;
                        const a4 = ((i + 0.8) / teeth) * Math.PI * 2 - Math.PI / 2;
                        d += `${i === 0 ? 'M' : 'L'}${cx + innerR * Math.cos(a1)},${cy + innerR * Math.sin(a1)} `;
                        d += `L${cx + outerR * Math.cos(a2)},${cy + outerR * Math.sin(a2)} `;
                        d += `L${cx + outerR * Math.cos(a3)},${cy + outerR * Math.sin(a3)} `;
                        d += `L${cx + innerR * Math.cos(a4)},${cy + innerR * Math.sin(a4)} `;
                      }
                      d += 'Z';
                      d += ` M${cx + holeR},${cy}`;
                      for (let i = 1; i <= 32; i++) {
                        const a = (i / 32) * Math.PI * 2;
                        d += ` L${cx + holeR * Math.cos(a)},${cy + holeR * Math.sin(a)}`;
                      }
                      d += 'Z';
                      return d;
                    })()} fill="hsl(270,77%,39%)" fillRule="evenodd" />
                  </g>

                  {/* ——— MEDIUM GEAR (bottom-left) ——— */}
                  <g className="gear-cw-slow" style={{ transformOrigin: '115px 370px' }}>
                    <path d={(() => {
                      const cx = 115, cy = 370, teeth = 7, outerR = 28, innerR = 19, holeR = 8;
                      let d = '';
                      for (let i = 0; i < teeth; i++) {
                        const a1 = (i / teeth) * Math.PI * 2 - Math.PI / 2;
                        const a2 = ((i + 0.3) / teeth) * Math.PI * 2 - Math.PI / 2;
                        const a3 = ((i + 0.5) / teeth) * Math.PI * 2 - Math.PI / 2;
                        const a4 = ((i + 0.8) / teeth) * Math.PI * 2 - Math.PI / 2;
                        d += `${i === 0 ? 'M' : 'L'}${cx + innerR * Math.cos(a1)},${cy + innerR * Math.sin(a1)} `;
                        d += `L${cx + outerR * Math.cos(a2)},${cy + outerR * Math.sin(a2)} `;
                        d += `L${cx + outerR * Math.cos(a3)},${cy + outerR * Math.sin(a3)} `;
                        d += `L${cx + innerR * Math.cos(a4)},${cy + innerR * Math.sin(a4)} `;
                      }
                      d += 'Z';
                      d += ` M${cx + holeR},${cy}`;
                      for (let i = 1; i <= 32; i++) {
                        const a = (i / 32) * Math.PI * 2;
                        d += ` L${cx + holeR * Math.cos(a)},${cy + holeR * Math.sin(a)}`;
                      }
                      d += 'Z';
                      return d;
                    })()} fill="hsl(270,60%,65%)" fillRule="evenodd" />
                  </g>

                  {/* ——— DASHBOARD PANEL (left, floating) ——— */}
                  <g className="panel-float">
                    <rect x="55" y="140" width="165" height="130" rx="12" fill="white" stroke="hsl(210,14%,88%)" strokeWidth="1.5"
                      filter="drop-shadow(0 4px 12px rgba(0,0,0,0.08))" />
                    <circle cx="72" cy="156" r="3.5" fill="hsl(0,70%,55%)" />
                    <circle cx="83" cy="156" r="3.5" fill="hsl(40,94%,55%)" />
                    <circle cx="94" cy="156" r="3.5" fill="hsl(130,50%,50%)" />
                    <line x1="70" y1="168" x2="205" y2="168" stroke="hsl(210,14%,90%)" strokeWidth="1" />
                    {/* Bar chart */}
                    <rect className="bar-anim bar-d1" x="80" y="220" width="16" height="35" rx="3" fill="hsl(270,77%,80%)" style={{ transformOrigin: '88px 255px' }} />
                    <rect className="bar-anim bar-d2" x="102" y="205" width="16" height="50" rx="3" fill="hsl(270,77%,65%)" style={{ transformOrigin: '110px 255px' }} />
                    <rect className="bar-anim bar-d3" x="124" y="215" width="16" height="40" rx="3" fill="#FC8264" style={{ transformOrigin: '132px 255px' }} />
                    <rect className="bar-anim bar-d4" x="146" y="195" width="16" height="60" rx="3" fill="hsl(270,77%,39%)" style={{ transformOrigin: '154px 255px' }} />
                    <rect className="bar-anim bar-d5" x="168" y="185" width="16" height="70" rx="3" fill="#FC8264" style={{ transformOrigin: '176px 255px' }} />
                  </g>

                  {/* ——— DASHBOARD PANEL (bottom-right, floating) ——— */}
                  <g className="panel-float2">
                    <rect x="290" y="300" width="145" height="110" rx="12" fill="white" stroke="hsl(210,14%,88%)" strokeWidth="1.5"
                      filter="drop-shadow(0 4px 12px rgba(0,0,0,0.08))" />
                    <circle cx="307" cy="316" r="3" fill="hsl(0,70%,55%)" />
                    <circle cx="317" cy="316" r="3" fill="hsl(40,94%,55%)" />
                    <circle cx="327" cy="316" r="3" fill="hsl(130,50%,50%)" />
                    <line x1="300" y1="326" x2="425" y2="326" stroke="hsl(210,14%,90%)" strokeWidth="1" />
                    <rect className="bar-anim bar-d1" x="310" y="370" width="12" height="25" rx="2" fill="hsl(24,94%,75%)" style={{ transformOrigin: '316px 395px' }} />
                    <rect className="bar-anim bar-d2" x="328" y="355" width="12" height="40" rx="2" fill="#FC8264" style={{ transformOrigin: '334px 395px' }} />
                    <rect className="bar-anim bar-d3" x="346" y="365" width="12" height="30" rx="2" fill="hsl(270,77%,70%)" style={{ transformOrigin: '352px 395px' }} />
                    <rect className="bar-anim bar-d4" x="364" y="350" width="12" height="45" rx="2" fill="hsl(270,77%,39%)" style={{ transformOrigin: '370px 395px' }} />
                    <rect className="bar-anim bar-d5" x="382" y="340" width="12" height="55" rx="2" fill="#FC8264" style={{ transformOrigin: '388px 395px' }} />
                  </g>

                  {/* ——— MAIN TREND LINE (purple) with proper arrowhead ——— */}
                  <polyline
                    points="80,320 140,290 200,310 260,240 320,220 380,160 430,100"
                    fill="none" stroke="hsl(270,77%,39%)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                    markerEnd="url(#arrow-purple)"
                  />

                  {/* ——— SECONDARY TREND LINE (orange dashed) with proper arrowhead ——— */}
                  <polyline
                    points="100,350 160,330 220,340 280,280 340,260 400,190"
                    fill="none" stroke="#FC8264" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="trend-dash"
                    markerEnd="url(#arrow-orange)"
                  />

                  {/* ——— PULSING DATA DOTS on trend intersections ——— */}
                  <circle className="dot-pulse" cx="200" cy="310" r="4" fill="hsl(270,77%,39%)" />
                  <circle className="dot-pulse dot-d1" cx="260" cy="240" r="4" fill="hsl(270,77%,39%)" />
                  <circle className="dot-pulse dot-d2" cx="320" cy="220" r="4" fill="hsl(270,77%,39%)" />
                  <circle className="dot-pulse dot-d3" cx="380" cy="160" r="4" fill="hsl(270,77%,39%)" />
                  <circle className="dot-pulse dot-d1" cx="220" cy="340" r="3.5" fill="#FC8264" />
                  <circle className="dot-pulse dot-d2" cx="280" cy="280" r="3.5" fill="#FC8264" />
                  <circle className="dot-pulse dot-d3" cx="340" cy="260" r="3.5" fill="#FC8264" />

                  {/* ——— DECORATIVE ACCENTS ——— */}
                  <circle cx="170" cy="100" r="3" fill="hsl(270,77%,39%)" opacity="0.15" />
                  <circle cx="310" cy="430" r="2.5" fill="#FC8264" opacity="0.2" />
                  <circle cx="450" cy="380" r="3" fill="hsl(270,60%,65%)" opacity="0.15" />
                  <circle cx="55" cy="310" r="2" fill="#FC8264" opacity="0.2" />
                  <rect x="452" y="228" width="7" height="7" rx="1.5" fill="#FC8264" opacity="0.2" transform="rotate(20 455.5 231.5)" />
                  <rect x="42" y="120" width="5" height="5" rx="1" fill="hsl(270,77%,39%)" opacity="0.15" transform="rotate(-15 44.5 122.5)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollTransition yOffset={30} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FC8264] text-white text-caption uppercase tracking-wider mb-4">
              Selected Work
            </span>
            <h2 className="text-display-md mb-4 font-bold tracking-tight">Website Development</h2>
            <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">{t('selectedWork.subtitle')}</p>
          </ScrollTransition>
          <ScrollTransition stagger={true} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Demo 1 */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-[#6419AD] transition-colors">
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
                <h3 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">{t('demos.fitness.title')}</h3>
                <p className="text-muted-foreground mb-4">{t('demos.fitness.desc')}</p>
              </div>
            </div>

            {/* Demo 2 */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-[#6419AD] transition-colors">
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
                <h3 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">{t('demos.restaurant.title')}</h3>
                <p className="text-muted-foreground mb-4">{t('demos.restaurant.desc')}</p>
              </div>
            </div>

            {/* Demo 3 */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-[#6419AD] transition-colors">
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
                <h3 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">{t('demos.product.title')}</h3>
                <p className="text-muted-foreground mb-4">{t('demos.product.desc')}</p>
              </div>
            </div>
          </ScrollTransition>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden flex items-center min-h-[600px] md:min-h-[700px] border-y border-border/40">
        {/* Background matching Hero section */}
        <div className="absolute inset-0 bg-gradient-hero grain-overlay z-0" />

        <div className="container mx-auto px-6 relative z-10 w-full h-full flex flex-col pt-4">

          {/* Cards Grid */}
          <ScrollTransition stagger={true} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto z-30 pb-16">

            {/* Card 1: Ad Spend */}
            <div className="bg-white rounded-[2rem] p-8 pt-32 pb-12 min-h-[380px] shadow-[0_10px_40px_-10px_rgba(139,92,246,0.15)] border border-white relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(249,115,22,0.3)] group flex flex-col items-center text-center justify-end">
              <div className="absolute top-0 left-0 right-0 text-[180px] font-bold leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-primary/20 to-transparent tracking-tighter group-hover:from-primary/30 transition-all duration-500">
                12
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full bg-[#FC8264] flex items-center justify-center mb-6 shadow-lg shadow-[#FC8264]/30 group-hover:scale-110 transition-transform duration-500">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-primary tracking-tight mb-2">
                  $12M+
                </h3>
                <p className="text-[10px] font-bold tracking-widest uppercase text-primary/70">
                  AD SPEND MANAGED
                </p>
              </div>
            </div>

            {/* Card 2: ROAS */}
            <div className="bg-white rounded-[2rem] p-8 pt-32 pb-12 min-h-[380px] shadow-[0_10px_40px_-10px_rgba(139,92,246,0.15)] border border-white relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(249,115,22,0.3)] group flex flex-col items-center text-center justify-end">
              <div className="absolute -top-2 left-0 right-0 text-[180px] font-bold leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-primary/20 to-transparent tracking-tighter group-hover:from-primary/30 transition-all duration-500">
                4.2
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full bg-[#FC8264] flex items-center justify-center mb-6 shadow-lg shadow-[#FC8264]/30 group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-primary tracking-tight mb-2">
                  4.2x
                </h3>
                <p className="text-[10px] font-bold tracking-widest uppercase text-primary/70">
                  AVERAGE ROAS
                </p>
              </div>
            </div>

            {/* Card 3: Revenue */}
            <div className="bg-white rounded-[2rem] p-8 pt-32 pb-12 min-h-[380px] shadow-[0_10px_40px_-10px_rgba(139,92,246,0.15)] border border-white relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(249,115,22,0.3)] group flex flex-col items-center text-center justify-end">
              <div className="absolute top-0 left-0 right-0 text-[180px] font-bold leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-primary/20 to-transparent tracking-tighter group-hover:from-primary/30 transition-all duration-500">
                48
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full bg-[#FC8264] flex items-center justify-center mb-6 shadow-lg shadow-[#FC8264]/30 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-primary tracking-tight mb-2">
                  $48M+
                </h3>
                <p className="text-[10px] font-bold tracking-widest uppercase text-primary/70">
                  REVENUE GENERATED
                </p>
              </div>
            </div>

            {/* Card 4: Brands Scaled */}
            <div className="bg-white rounded-[2rem] p-8 pt-32 pb-12 min-h-[380px] shadow-[0_10px_40px_-10px_rgba(139,92,246,0.15)] border border-white relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(249,115,22,0.3)] group flex flex-col items-center text-center justify-end">
              <div className="absolute top-0 left-0 right-0 text-[180px] font-bold leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-primary/20 to-transparent tracking-tighter group-hover:from-primary/30 transition-all duration-500">
                40
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full bg-[#FC8264] flex items-center justify-center mb-6 shadow-lg shadow-[#FC8264]/30 group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-primary tracking-tight mb-2">
                  40+
                </h3>
                <p className="text-[10px] font-bold tracking-widest uppercase text-primary/70">
                  BRANDS SCALED
                </p>
              </div>
            </div>

          </ScrollTransition>

          {/* Section Title - Centered */}
          <ScrollTransition delay={0.4} className="w-full mt-6 relative z-20 text-center flex flex-col items-center">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-5xl text-black leading-tight tracking-tight mb-4">
              {t('results.title')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              High-impact growth metrics across our client portfolio, delivered with precision.
            </p>
          </ScrollTransition>
        </div>
      </section>

      {/* Pillars Section - 2 Column Editorial Layout */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left Column: Heading */}
            <ScrollTransition direction="left" className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="font-bold text-display-lg md:text-[4.5rem] text-black leading-[1.05] tracking-tight mb-8">
                {t('pillars.title')}.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-md">
                {t('pillars.subtitle')}
              </p>
            </ScrollTransition>

            {/* Right Column: Numbered List */}
            <ScrollTransition stagger={true} direction="right" className="lg:col-span-7 space-y-16 md:space-y-24 mt-12 lg:mt-0">
              {[
                { key: 'strategic' },
                { key: 'creative' },
                { key: 'transparency' },
              ].map((pillar, index) => (
                <div key={pillar.key} className="flex gap-6 md:gap-12 items-start group">
                  {/* Stylized Number */}
                  <div className="relative shrink-0">
                    <span
                      className="font-editorial text-6xl md:text-[7rem] italic font-bold tracking-tighter"
                      style={{
                        color: '#FC8264',
                        textShadow: '5px 5px 0px hsl(24, 94%, 85%)',
                        lineHeight: '0.8'
                      }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 mt-2">
                    <h3 className="text-2xl md:text-3xl text-primary font-medium mb-3">
                      {t(`pillars.${pillar.key}.title`)}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {t(`pillars.${pillar.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollTransition>
          </div>
        </div>
      </section>

      {/* Technologies & Platforms Section - SEO & Brand Value */}
      <section className="py-24 bg-background border-y border-border/40">
        <div className="container mx-auto px-6">
          <ScrollTransition yOffset={30} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FC8264] text-white text-caption uppercase tracking-wider mb-4">
              Popular Platforms
            </span>
            <h2 className="font-bold text-display-sm md:text-display-md mb-4">Platforms We Master</h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We integrate and optimize across the industry's leading CMS, CRM, and e‑commerce platforms to deliver seamless solutions.
            </p>
          </ScrollTransition>

          <CMSCRMLogos
            category="all"
            showNames={true}
            className="mt-12"
          />

          {/* Supporting text for SEO */}
          <ScrollTransition yOffset={30} className="mt-16 text-center">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're running your business on WordPress, Shopify, HubSpot, Salesforce, Webflow, or any other leading platform, our expertise spans across all major CMS, CRM, and e-commerce solutions. We help you unlock the full potential of your tech stack.
            </p>
          </ScrollTransition>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-gold text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-background blur-3xl" />
        </div>
        <ScrollTransition yOffset={40} className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-bold text-display-md mb-6"><TextReveal text={t('cta.primary.title')} /></h2>
          <p className="text-body-lg opacity-90 max-w-xl mx-auto mb-8">{t('cta.primary.text')}</p>
          <Button asChild size="lg" className="group bg-[#FC8264] hover:bg-[#eb7355] text-white border-none transition-colors">
            <Link to="/book-a-call">
              {t('cta.primary.button')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </ScrollTransition>
      </section>
    </>
  );
}
