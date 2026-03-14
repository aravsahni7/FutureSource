import React, { useState } from 'react';
import { PricingComponent, PriceTier, BillingCycle } from '@/components/ui/pricing-card';

const examplePlans: [PriceTier, PriceTier, PriceTier] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for local businesses starting their digital journey.',
    priceMonthly: 499,
    priceAnnually: 4990, // ~332.50/mo (2 months free)
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
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'The sweet spot for growing companies needing scale.',
    priceMonthly: 699,
    priceAnnually: 6990, //9.16/mo (2 months free)
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
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'Full-service digital partnership for market leaders.',
    priceMonthly: 999,
    priceAnnually: 9990,// ~749.16/mo (2 months free)
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
    ],
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-6">
        <PricingComponent
          plans={examplePlans}
          billingCycle={billingCycle}
          onCycleChange={setBillingCycle}
          onPlanSelect={(planId, cycle) => console.log('Selected:', planId, cycle)}
        />
      </div>
    </div>
  );
}
