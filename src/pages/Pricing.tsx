import React, { useState } from 'react';
import { PricingComponent, PriceTier, BillingCycle, Feature } from '@/components/ui/pricing-card';
import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollTransition } from '@/components/animations/ScrollTransition';

const featureTranslations: Record<string, { en: string, fr: string }> = {
  'Website Development': { en: 'Website Development', fr: 'Développement de site web' },
  'Local SEO Foundation': { en: 'Local SEO Foundation', fr: 'Fondation SEO locale' },
  'Website Maintenance': { en: 'Website Maintenance', fr: 'Maintenance de site web' },
  'Monthly Progress Reports': { en: 'Monthly Progress Reports', fr: 'Rapports de progrès mensuels' },
  'SEO Strategy & Technical Optimization': { en: 'SEO Strategy & Technical Optimization', fr: 'Stratégie SEO et optimisation technique' },
  'Advanced On-Page SEO': { en: 'Advanced On-Page SEO', fr: 'SEO on-page avancé' },
  'Content & Keyword Strategy': { en: 'Content & Keyword Strategy', fr: 'Stratégie de contenu et mots-clés' },
  'PPC Advertising': { en: 'PPC Advertising', fr: 'Publicité PPC' },
  'Advanced Analytics & Reporting': { en: 'Advanced Analytics & Reporting', fr: 'Analytique et rapports avancés' },
  'Website Support': { en: 'Website Support', fr: 'Support de site web' },
  'ABM Strategy & Planning': { en: 'ABM Strategy & Planning', fr: 'Stratégie et planification ABM' },
  'CRM & Data Infrastructure': { en: 'CRM & Data Infrastructure', fr: 'Infrastructure CRM et données' },
  'Personalized Messaging & Content': { en: 'Personalized Messaging & Content', fr: 'Messagerie et contenu personnalisés' },
  'Multi-Channel ABM Execution': { en: 'Multi-Channel ABM Execution', fr: 'Exécution ABM multicanal' },
  'Authority SEO & Link Building': { en: 'Authority SEO & Link Building', fr: 'SEO d\'autorité et création de liens' },
  'Local & International SEO': { en: 'Local & International SEO', fr: 'SEO local et international' },
  'Advanced Reporting & Revenue Attribution': { en: 'Advanced Reporting & Revenue Attribution', fr: 'Rapports avancés et attribution des revenus' },
  'Dedicated Account Manager': { en: 'Dedicated Account Manager', fr: 'Gestionnaire de compte dédié' },
  'Quarterly Audits': { en: 'Quarterly Audits', fr: 'Audits trimestriels' },
  'Social Media Management': { en: 'Social Media Management', fr: 'Gestion des réseaux sociaux' },
};

const planTranslations: Record<string, { name: { en: string, fr: string }, description: { en: string, fr: string } }> = {
  starter: {
    name: { en: 'Starter', fr: 'Départ' },
    description: { en: 'Perfect for local businesses starting their digital journey.', fr: 'Parfait pour les entreprises locales commençant leur parcours numérique.' }
  },
  growth: {
    name: { en: 'Growth', fr: 'Croissance' },
    description: { en: 'The sweet spot for growing companies needing scale.', fr: 'Le point idéal pour les entreprises en croissance ayant besoin d\'expansion.' }
  },
  scale: {
    name: { en: 'Scale', fr: 'Expansion' },
    description: { en: 'Full-service digital partnership for market leaders.', fr: 'Partenariat numérique complet pour les leaders du marché.' }
  }
};

const rawPlans: [PriceTier, PriceTier, PriceTier] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for local businesses starting their digital journey.',
    priceMonthly: 499,
    priceAnnually: 4990,
    isPopular: false,
    buttonLabel: 'Get Started',
    features: [
      { name: 'Website Development', isIncluded: true },
      { name: 'Local SEO Foundation', isIncluded: true },
      { name: 'Website Maintenance', isIncluded: true },
      { name: 'Monthly Progress Reports', isIncluded: true },
      { name: 'SEO Strategy & Technical Optimization', isIncluded: false },
      { name: 'Advanced On-Page SEO', isIncluded: false },
      { name: 'Content & Keyword Strategy', isIncluded: false },
      { name: 'PPC Advertising', isIncluded: false },
      { name: 'Advanced Analytics & Reporting', isIncluded: false },
      { name: 'Website Support', isIncluded: false },
      { name: 'ABM Strategy & Planning', isIncluded: false },
      { name: 'CRM & Data Infrastructure', isIncluded: false },
      { name: 'Personalized Messaging & Content', isIncluded: false },
      { name: 'Multi-Channel ABM Execution', isIncluded: false },
      { name: 'Authority SEO & Link Building', isIncluded: false },
      { name: 'Local & International SEO', isIncluded: false },
      { name: 'Advanced Reporting & Revenue Attribution', isIncluded: false },
      { name: 'Dedicated Account Manager', isIncluded: false },
      { name: 'Quarterly Audits', isIncluded: false },
      { name: 'Social Media Management', isIncluded: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'The sweet spot for growing companies needing scale.',
    priceMonthly: 699,
    priceAnnually: 6990,
    isPopular: true,
    buttonLabel: 'Choose Growth',
    features: [
      { name: 'Website Development', isIncluded: true },
      { name: 'Local SEO Foundation', isIncluded: true },
      { name: 'Website Maintenance', isIncluded: true },
      { name: 'Monthly Progress Reports', isIncluded: true },
      { name: 'SEO Strategy & Technical Optimization', isIncluded: true },
      { name: 'Advanced On-Page SEO', isIncluded: true },
      { name: 'Content & Keyword Strategy', isIncluded: true },
      { name: 'PPC Advertising', isIncluded: true },
      { name: 'Advanced Analytics & Reporting', isIncluded: true },
      { name: 'Website Support', isIncluded: true },
      { name: 'ABM Strategy & Planning', isIncluded: false },
      { name: 'CRM & Data Infrastructure', isIncluded: false },
      { name: 'Personalized Messaging & Content', isIncluded: false },
      { name: 'Multi-Channel ABM Execution', isIncluded: false },
      { name: 'Authority SEO & Link Building', isIncluded: false },
      { name: 'Local & International SEO', isIncluded: false },
      { name: 'Advanced Reporting & Revenue Attribution', isIncluded: false },
      { name: 'Dedicated Account Manager', isIncluded: false },
      { name: 'Quarterly Audits', isIncluded: false },
      { name: 'Social Media Management', isIncluded: false },
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'Full-service digital partnership for market leaders.',
    priceMonthly: 999,
    priceAnnually: 9990,
    isPopular: false,
    buttonLabel: 'Go Scale',
    features: [
      { name: 'Website Development', isIncluded: true },
      { name: 'Local SEO Foundation', isIncluded: true },
      { name: 'Website Maintenance', isIncluded: true },
      { name: 'Monthly Progress Reports', isIncluded: true },
      { name: 'SEO Strategy & Technical Optimization', isIncluded: true },
      { name: 'Advanced On-Page SEO', isIncluded: true },
      { name: 'Content & Keyword Strategy', isIncluded: true },
      { name: 'PPC Advertising', isIncluded: true },
      { name: 'Advanced Analytics & Reporting', isIncluded: true },
      { name: 'Website Support', isIncluded: true },
      { name: 'ABM Strategy & Planning', isIncluded: true },
      { name: 'CRM & Data Infrastructure', isIncluded: true },
      { name: 'Personalized Messaging & Content', isIncluded: true },
      { name: 'Multi-Channel ABM Execution', isIncluded: true },
      { name: 'Authority SEO & Link Building', isIncluded: true },
      { name: 'Local & International SEO', isIncluded: true },
      { name: 'Advanced Reporting & Revenue Attribution', isIncluded: true },
      { name: 'Dedicated Account Manager', isIncluded: true },
      { name: 'Quarterly Audits', isIncluded: true },
      { name: 'Social Media Management', isIncluded: true },
    ],
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const { language, t } = useLanguage();

  const translatedPlans: [PriceTier, PriceTier, PriceTier] = rawPlans.map(plan => ({
    ...plan,
    name: planTranslations[plan.id].name[language],
    description: planTranslations[plan.id].description[language],
    buttonLabel: t('nav.bookCall'),
    features: plan.features.map(f => ({
      ...f,
      name: featureTranslations[f.name]?.[language] || f.name
    }))
  })) as [PriceTier, PriceTier, PriceTier];

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-warm">
      <ScrollTransition className="container mx-auto px-6">
        <PricingComponent
          plans={translatedPlans}
          billingCycle={billingCycle}
          onCycleChange={setBillingCycle}
          onPlanSelect={(planId, cycle) => console.log('Selected:', planId, cycle)}
        />
      </ScrollTransition>
    </div>
  );
}
