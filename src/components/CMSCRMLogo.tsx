import React from 'react';
import { cn } from '@/lib/utils';

// Import logo images
import wordpressLogo from '@/data/wordpress logo.png';
import shopifyLogo from '@/data/shopify.png';
import webflowLogo from '@/data/webflow.png';
import drupalLogo from '@/data/drupal.png';
import hubspotLogo from '@/data/hubspot.png';
import salesforceLogo from '@/data/salesforce.png';
import stripeLogo from '@/data/stripe.jpg';
import mailchimpLogo from '@/data/mailchimp.webp';
import googleAnalyticsLogo from '@/data/google analytics.png';
import wixLogo from '@/data/wix.png';
import squarespaceLogo from '@/data/squarespace.png';
import pipedriveLogo from '@/data/pipedrive.png';

export interface CMSCRMTool {
  name: string;
  category: 'cms' | 'crm' | 'ecommerce' | 'email' | 'analytics';
  accentColor: string;
  logo: string;
  searchKeywords?: string[];
}

const tools: Record<string, CMSCRMTool> = {
  wordpress: {
    name: 'WordPress',
    category: 'cms',
    accentColor: '#0073AA',
    searchKeywords: ['wordpress', 'wordpress.com', 'wordpress hosting'],
    logo: wordpressLogo,
  },
  shopify: {
    name: 'Shopify',
    category: 'ecommerce',
    accentColor: '#96C832',
    searchKeywords: ['shopify', 'shopify store', 'ecommerce platform'],
    logo: shopifyLogo,
  },
  webflow: {
    name: 'Webflow',
    category: 'cms',
    accentColor: '#4353FF',
    searchKeywords: ['webflow', 'webflow website', 'webflow hosting'],
    logo: webflowLogo,
  },
  drupal: {
    name: 'Drupal',
    category: 'cms',
    accentColor: '#0678C0',
    searchKeywords: ['drupal', 'drupal cms', 'content management system'],
    logo: drupalLogo,
  },
  hubspot: {
    name: 'HubSpot',
    category: 'crm',
    accentColor: '#FF7A59',
    searchKeywords: ['hubspot', 'hubspot crm', 'customer relationship management'],
    logo: hubspotLogo,
  },
  salesforce: {
    name: 'Salesforce',
    category: 'crm',
    accentColor: '#00A1DE',
    searchKeywords: ['salesforce', 'salesforce crm', 'cloud computing'],
    logo: salesforceLogo,
  },
  stripe: {
    name: 'Stripe',
    category: 'ecommerce',
    accentColor: '#635BFF',
    searchKeywords: ['stripe', 'stripe payments', 'payment processing'],
    logo: stripeLogo,
  },
  mailchimp: {
    name: 'Mailchimp',
    category: 'email',
    accentColor: '#FFE01B',
    searchKeywords: ['mailchimp', 'mailchimp email', 'email marketing platform'],
    logo: mailchimpLogo,
  },
  google_analytics: {
    name: 'Google Analytics',
    category: 'analytics',
    accentColor: '#F9AB00',
    searchKeywords: ['google analytics', 'analytics', 'web analytics'],
    logo: googleAnalyticsLogo,
  },
  wix: {
    name: 'Wix',
    category: 'cms',
    accentColor: '#0099FF',
    searchKeywords: ['wix', 'wix website builder', 'website creation'],
    logo: wixLogo,
  },
  squarespace: {
    name: 'Squarespace',
    category: 'cms',
    accentColor: '#000000',
    searchKeywords: ['squarespace', 'squarespace website', 'website builder'],
    logo: squarespaceLogo,
  },
  pipedrive: {
    name: 'Pipedrive',
    category: 'crm',
    accentColor: '#6FD159',
    searchKeywords: ['pipedrive', 'pipedrive crm', 'sales crm'],
    logo: pipedriveLogo,
  },
};

export interface CMSCRMLogosProps {
  category?: 'cms' | 'crm' | 'ecommerce' | 'email' | 'analytics' | 'all';
  ids?: string[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  showNames?: boolean;
}

export function CMSCRMLogo({ name, accentColor }: { name: keyof typeof tools; accentColor?: boolean }) {
  const tool = tools[name];
  if (!tool) return null;

  return (
    <div className={cn('flex flex-col items-center gap-2')}>
      <div
        className="w-12 h-12 flex items-center justify-center rounded-lg hover:scale-110 transition-transform"
        style={{
          backgroundColor: `${tool.accentColor}15`,
        }}
      >
        <img
          src={tool.logo}
          alt={tool.name}
          className="w-full h-full object-contain p-1"
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground text-center">{tool.name}</span>
    </div>
  );
}

export function CMSCRMLogos({
  category = 'all',
  ids,
  title,
  subtitle,
  className,
  showNames = true,
}: CMSCRMLogosProps) {
  let displayTools: Record<string, CMSCRMTool>;

  if (ids && ids.length > 0) {
    displayTools = ids.reduce(
      (acc, id) => {
        if (tools[id]) {
          acc[id] = tools[id];
        }
        return acc;
      },
      {} as Record<string, CMSCRMTool>
    );
  } else if (category === 'all') {
    displayTools = tools;
  } else {
    displayTools = Object.entries(tools).reduce(
      (acc, [key, tool]) => {
        if (tool.category === category) {
          acc[key] = tool;
        }
        return acc;
      },
      {} as Record<string, CMSCRMTool>
    );
  }

  return (
    <div className={cn('py-12', className)}>
      {title && (
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
          {subtitle && <p className="text-muted-foreground text-sm md:text-base">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">
        {Object.entries(displayTools).map(([key, tool]) => (
          <div
            key={key}
            className="flex flex-col items-center gap-3 group"
            title={`${tool.name} - ${tool.category.toUpperCase()}`}
          >
            <div
              className={cn(
                "flex items-center justify-center rounded-xl group-hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md",
                (key === 'shopify' || key === 'salesforce') ? "w-16 h-16 md:w-20 md:h-20" : "w-14 h-14 md:w-16 md:h-16"
              )}
              style={{
                backgroundColor: `${tool.accentColor}12`,
              }}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-full h-full object-contain"
              />
            </div>
            {showNames && (
              <div className="text-xs font-medium text-muted-foreground text-center leading-tight">{tool.name}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
