// FutureSource structured content data

import { Language } from '@/i18n/translations';

export interface Service {
  id: string;
  slug: string;
  icon: string;
  title: { en: string; fr: string };
  tagline: { en: string; fr: string };
  description: { en: string; fr: string };
  idealFor: { en: string; fr: string };
  notFor: { en: string; fr: string };
  deliverables: { en: string[]; fr: string[] };
  outcomes: { en: string[]; fr: string[] };
  faqs: Array<{
    question: { en: string; fr: string };
    answer: { en: string; fr: string };
  }>;
}

export const services: Service[] = [
  {
    id: 'web-design',
    slug: 'high-performance-web-design',
    icon: 'sparkles',
    title: { en: 'High-Performance Web Design', fr: 'Conception Web Haute Performance' },
    tagline: { en: 'Business Websites • E-commerce • Landing Pages', fr: 'Sites d\'entreprise • E-commerce • Pages d\'atterrissage' },
    description: {
      en: 'Professional online presences that turn visitors into leads. We don\'t just build "pretty" sites; we build conversion-focused digital assets optimized for speed, mobile, and growth.',
      fr: 'Présences en ligne professionnelles qui transforment les visiteurs en leads. Nous ne créons pas seulement des sites "jolis"; nous construisons des actifs numériques axés sur la conversion, optimisés pour la vitesse, le mobile et la croissance.',
    },
    idealFor: {
      en: 'Local businesses and growing service providers needing a professional, high-converting HQ.',
      fr: 'Entreprises locales et prestataires de services en croissance ayant besoin d\'un siège en ligne professionnel et à forte conversion.',
    },
    notFor: {
      en: 'Hobbyists or those looking for the cheapest DIY template with no strategy.',
      fr: 'Passionnés ou personnes cherchant le modèle DIY le moins cher sans stratégie.',
    },
    deliverables: {
      en: [
        'Custom mobile-first design',
        'High-speed performance tuning',
        'Conversion-optimized layouts',
        'CMS setup (WordPress/Shopify)',
        'Built-in SEO foundations',
        '30-day post-launch support',
      ],
      fr: [
        'Conception mobile-first sur mesure',
        'Optimisation des performances rapides',
        'Dispositions optimisées pour la conversion',
        'Configuration CMS (WordPress/Shopify)',
        'Fondations SEO intégrées',
        'Support post-lancement 30 jours',
      ],
    },
    outcomes: {
      en: [
        'Fast-loading, mobile-first websites',
        'Higher lead conversion from web traffic',
        'Easily-managed CMS for non-technical teams',
      ],
      fr: [
        'Sites rapides et mobile-first',
        'Taux de conversion supérieurs à partir du trafic web',
        'CMS facile à gérer pour les équipes non techniques',
      ],
    },
    faqs: [],
  },
  {
    id: 'paid-ads',
    slug: 'paid-ads',
    icon: 'target',
    title: { en: 'Paid Advertising', fr: 'Publicité payante' },
    tagline: { en: 'Meta • Google • TikTok', fr: 'Meta • Google • TikTok' },
    description: {
      en: 'Strategic paid media buying across platforms. From creative strategy to campaign optimization, we scale what converts and cut what doesn\'t.',
      fr: 'Achat média payant stratégique sur toutes les plateformes. De la stratégie créative à l\'optimisation des campagnes, nous amplifions ce qui convertit et coupons ce qui ne fonctionne pas.',
    },
    idealFor: {
      en: 'Brands ready to scale with a set monthly ad budget and clear product-market fit',
      fr: 'Marques prêtes à croître avec un budget pub mensuel fixe et une adéquation produit-marché claire',
    },
    notFor: {
      en: 'Pre-revenue startups or brands without validated offers',
      fr: 'Startups pré-revenus ou marques sans offres validées',
    },
    deliverables: {
      en: [
        'Platform strategy & account setup',
        'Creative brief & ad copywriting',
        'Audience research & targeting',
        'Campaign build & launch',
        'Ongoing optimization & scaling',
        'Weekly performance reports',
      ],
      fr: [
        'Stratégie de plateforme et configuration de compte',
        'Brief créatif et rédaction publicitaire',
        'Recherche d\'audience et ciblage',
        'Construction et lancement de campagne',
        'Optimisation et mise à l\'échelle continues',
        'Rapports de performance hebdomadaires',
      ],
    },
    outcomes: {
      en: [
        'Lower customer acquisition costs',
        'Higher return on ad spend (ROAS)',
        'Scalable acquisition channels',
        'Clear attribution and tracking',
      ],
      fr: [
        'Coûts d\'acquisition clients plus bas',
        'Meilleur retour sur dépenses publicitaires (ROAS)',
        'Canaux d\'acquisition évolutifs',
        'Attribution et suivi clairs',
      ],
    },
    faqs: [
      {
        question: { en: 'What\'s the minimum ad budget to get started?', fr: 'Quel est le budget pub minimum pour commencer?' },
        answer: {
          en: 'We typically work with brands spending $10,000+ monthly on ads. This allows for meaningful testing and optimization.',
          fr: 'Nous travaillons généralement avec des marques dépensant 10 000$+ mensuellement en publicités. Cela permet des tests et optimisations significatifs.',
        },
      },
      {
        question: { en: 'How long until we see results?', fr: 'Combien de temps avant de voir des résultats?' },
        answer: {
          en: 'Initial data comes within 2-4 weeks. Meaningful optimization typically takes 60-90 days to reach optimal performance.',
          fr: 'Les données initiales arrivent en 2-4 semaines. L\'optimisation significative prend généralement 60-90 jours pour atteindre des performances optimales.',
        },
      },
      {
        question: { en: 'Do you create the ad creatives?', fr: 'Créez-vous les créatifs publicitaires?' },
        answer: {
          en: 'We provide creative strategy and briefs. For production, we can work with your team or connect you with our creative partners.',
          fr: 'Nous fournissons la stratégie créative et les briefs. Pour la production, nous pouvons travailler avec votre équipe ou vous connecter avec nos partenaires créatifs.',
        },
      },
    ],
  },
  {
    id: 'seo-content',
    slug: 'seo-content',
    icon: 'search',
    title: { en: 'SEO & Content', fr: 'SEO et contenu' },
    tagline: { en: 'Organic Growth Engine', fr: 'Moteur de croissance organique' },
    description: {
      en: 'Technical SEO, content strategy, and link building that compounds over time. Build sustainable organic traffic that reduces dependency on paid channels.',
      fr: 'SEO technique, stratégie de contenu et création de liens qui se composent dans le temps. Construisez un trafic organique durable qui réduit la dépendance aux canaux payants.',
    },
    idealFor: {
      en: 'Brands committed to long-term organic growth with a 6-12 month horizon',
      fr: 'Marques engagées dans la croissance organique à long terme avec un horizon de 6-12 mois',
    },
    notFor: {
      en: 'Those seeking immediate results—SEO is a long-term investment',
      fr: 'Ceux cherchant des résultats immédiats—le SEO est un investissement à long terme',
    },
    deliverables: {
      en: [
        'Technical SEO audit & fixes',
        'Keyword research & strategy',
        'Content calendar & briefs',
        'On-page optimization',
        'Link building outreach',
        'Monthly SEO reporting',
      ],
      fr: [
        'Audit SEO technique et corrections',
        'Recherche de mots-clés et stratégie',
        'Calendrier de contenu et briefs',
        'Optimisation on-page',
        'Prospection de liens',
        'Rapports SEO mensuels',
      ],
    },
    outcomes: {
      en: [
        'Higher organic search rankings',
        'Increased organic traffic',
        'Lower long-term acquisition costs',
        'Authority in your niche',
      ],
      fr: [
        'Meilleurs classements en recherche organique',
        'Augmentation du trafic organique',
        'Coûts d\'acquisition à long terme plus bas',
        'Autorité dans votre niche',
      ],
    },
    faqs: [
      {
        question: { en: 'How long until we see SEO results?', fr: 'Combien de temps avant de voir des résultats SEO?' },
        answer: {
          en: 'SEO is a long-term play. Initial improvements can appear in 3-6 months, with significant results typically at 6-12 months.',
          fr: 'Le SEO est un jeu à long terme. Les améliorations initiales peuvent apparaître en 3-6 mois, avec des résultats significatifs généralement à 6-12 mois.',
        },
      },
      {
        question: { en: 'Do you write the content?', fr: 'Écrivez-vous le contenu?' },
        answer: {
          en: 'We provide content strategy, briefs, and editing. Writing can be done by your team, our writers, or a combination.',
          fr: 'Nous fournissons la stratégie de contenu, les briefs et l\'édition. La rédaction peut être faite par votre équipe, nos rédacteurs, ou une combinaison.',
        },
      },
    ],
  },
  {
    id: 'abm',
    slug: 'account-based-marketing',
    icon: 'target',
    title: { en: 'Account Based Marketing (ABM)', fr: 'Marketing basé sur les comptes (ABM)' },
    tagline: { en: 'Targeted B2B Growth', fr: 'Croissance B2B ciblée' },
    description: {
      en: 'Tailored, account-focused programs that engage high-value prospects with personalized campaigns, content, and outreach. We align sales and marketing to accelerate pipeline and close enterprise deals.',
      fr: 'Programmes sur mesure axés sur les comptes qui mobilisent des prospects à forte valeur avec des campagnes, du contenu et des actions personnalisés. Nous alignons les ventes et le marketing pour accélérer le pipeline et conclure des contrats d\'entreprise.',
    },
    idealFor: {
      en: 'B2B companies targeting specific high-value accounts and enterprise deals',
      fr: 'Entreprises B2B ciblant des comptes à forte valeur et des contrats d\'entreprise',
    },
    notFor: {
      en: 'Small one-off consumer sales where account-level targeting is not relevant',
      fr: 'Ventes consommateurs ponctuelles où le ciblage par compte n\'est pas pertinent',
    },
    deliverables: {
      en: [
        'Account selection & ICP mapping',
        'Personalized campaign strategy & playbooks',
        'Multi-channel outreach (email, ads, LinkedIn)',
        'Sales enablement materials & sequences',
        'Pipeline reporting and attribution',
      ],
      fr: [
        'Sélection de comptes et cartographie ICP',
        'Stratégie de campagne personnalisée et playbooks',
        'Prospection multicanal (email, publicités, LinkedIn)',
        'Matériel et séquences d\'activation des ventes',
        'Reporting du pipeline et attribution',
      ],
    },
    outcomes: {
      en: [
        'Shorter sales cycles for target accounts',
        'Higher win rates on enterprise opportunities',
        'Clearer pipeline attribution to marketing efforts',
      ],
      fr: [
        'Cycles de vente plus courts pour les comptes ciblés',
        'Taux de réussite plus élevé sur les opportunités enterprise',
        'Attribution du pipeline plus claire aux efforts marketing',
      ],
    },
    faqs: [],
  },
  {
    id: 'cro-landing-pages',
    slug: 'cro-landing-pages',
    icon: 'trending-up',
    title: { en: 'CRO & Landing Pages', fr: 'CRO et pages d\'atterrissage' },
    tagline: { en: 'Conversion Optimization', fr: 'Optimisation des conversions' },
    description: {
      en: 'Turn more visitors into customers. From landing page design to A/B testing and UX optimization, we maximize the value of every click.',
      fr: 'Convertissez plus de visiteurs en clients. De la conception de pages d\'atterrissage aux tests A/B et à l\'optimisation UX, nous maximisons la valeur de chaque clic.',
    },
    idealFor: {
      en: 'Brands with existing traffic looking to maximize ROI',
      fr: 'Marques avec du trafic existant cherchant à maximiser le ROI',
    },
    notFor: {
      en: 'Sites without meaningful traffic volume—focus on acquisition first',
      fr: 'Sites sans volume de trafic significatif—concentrez-vous d\'abord sur l\'acquisition',
    },
    deliverables: {
      en: [
        'Conversion audit & heuristic analysis',
        'Landing page design & development',
        'A/B testing strategy & execution',
        'User behavior analysis',
        'Funnel optimization',
        'Conversion rate reporting',
      ],
      fr: [
        'Audit de conversion et analyse heuristique',
        'Conception et développement de pages d\'atterrissage',
        'Stratégie et exécution de tests A/B',
        'Analyse du comportement utilisateur',
        'Optimisation de l\'entonnoir',
        'Rapports de taux de conversion',
      ],
    },
    outcomes: {
      en: [
        'Higher conversion rates',
        'Lower cost per acquisition',
        'Better user experience',
        'Data-driven optimizations',
      ],
      fr: [
        'Taux de conversion plus élevés',
        'Coût par acquisition plus bas',
        'Meilleure expérience utilisateur',
        'Optimisations basées sur les données',
      ],
    },
    faqs: [
      {
        question: { en: 'What conversion rate improvement can we expect?', fr: 'Quelle amélioration du taux de conversion peut-on attendre?' },
        answer: {
          en: 'Results vary by industry and baseline, but we typically see 20-50% improvement in conversion rates within 90 days.',
          fr: 'Les résultats varient selon l\'industrie et la base de référence, mais nous voyons généralement une amélioration de 20-50% des taux de conversion en 90 jours.',
        },
      },
    ],
  },
];

export interface Testimonial {
  id: string;
  name: { en: string; fr: string };
  role: { en: string; fr: string };
  company: string;
  quote: { en: string; fr: string };
  results?: { en: string; fr: string };
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: { en: 'Sarah Chen', fr: 'Sarah Chen' },
    role: { en: 'Head of Marketing', fr: 'Directrice marketing' },
    company: 'Lumina Skincare',
    quote: {
      en: 'FutureSource transformed our paid media strategy. We went from burning budget to scaling profitably within 3 months.',
      fr: 'FutureSource a transformé notre stratégie médias payants. Nous sommes passés de gaspiller notre budget à croître de manière rentable en 3 mois.',
    },
    results: { en: '340% ROAS increase', fr: 'Augmentation de 340% du ROAS' },
  },
  {
    id: '2',
    name: { en: 'Marc Dubois', fr: 'Marc Dubois' },
    role: { en: 'Founder & CEO', fr: 'Fondateur et PDG' },
    company: 'NordFit Equipment',
    quote: {
      en: 'They don\'t just run campaigns—they understand our business. The strategic insight has been invaluable.',
      fr: 'Ils ne font pas que gérer des campagnes—ils comprennent notre entreprise. L\'insight stratégique a été inestimable.',
    },
    results: { en: '$2.4M revenue attributed', fr: '2,4M$ de revenus attribués' },
  },
  {
    id: '3',
    name: { en: 'Emily Wright', fr: 'Emily Wright' },
    role: { en: 'Director of Growth', fr: 'Directrice de la croissance' },
    company: 'Altura Coffee',
    quote: {
      en: 'The transparency is refreshing. We always know exactly where our money goes and what it\'s producing.',
      fr: 'La transparence est rafraîchissante. Nous savons toujours exactement où va notre argent et ce qu\'il produit.',
    },
    results: { en: '67% CAC reduction', fr: 'Réduction de 67% du CAC' },
  },
  {
    id: '4',
    name: { en: 'David Okonkwo', fr: 'David Okonkwo' },
    role: { en: 'VP Marketing', fr: 'VP Marketing' },
    company: 'TechFlow SaaS',
    quote: {
      en: 'Our organic traffic tripled in 8 months. Their SEO approach is methodical, strategic, and actually works.',
      fr: 'Notre trafic organique a triplé en 8 mois. Leur approche SEO est méthodique, stratégique et fonctionne vraiment.',
    },
    results: { en: '3x organic traffic', fr: '3x le trafic organique' },
  },
];

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: { en: string; fr: string };
  services: string[];
  heroImage?: string;
  title: { en: string; fr: string };
  subtitle: { en: string; fr: string };
  context: { en: string; fr: string };
  strategy: { en: string; fr: string };
  execution: { en: string[]; fr: string[] };
  results: Array<{
    metric: { en: string; fr: string };
    value: string;
    change?: string;
  }>;
  testimonial?: Testimonial;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'lumina-skincare-paid-media',
    client: 'Lumina Skincare',
    industry: { en: 'Beauty & Skincare', fr: 'Beauté et soins de la peau' },
    services: ['paid-ads'],
    title: {
      en: 'Scaling a DTC Skincare Brand to 7-Figure Revenue',
      fr: 'Développer une marque de soins DTC vers des revenus à 7 chiffres',
    },
    subtitle: {
      en: 'How strategic Meta & Google Ads drove 340% ROAS improvement',
      fr: 'Comment les publicités stratégiques Meta et Google ont généré une amélioration de 340% du ROAS',
    },
    context: {
      en: 'Lumina Skincare had product-market fit but struggled to scale profitably. Their previous agency was burning through budget without clear attribution or optimization.',
      fr: 'Lumina Skincare avait une adéquation produit-marché mais peinait à croître de manière rentable. Leur agence précédente brûlait le budget sans attribution ni optimisation claires.',
    },
    strategy: {
      en: 'We rebuilt their entire funnel with clear attribution, developed a creative testing framework, and implemented a scaling protocol based on unit economics.',
      fr: 'Nous avons reconstruit tout leur entonnoir avec une attribution claire, développé un cadre de test créatif et implémenté un protocole de mise à l\'échelle basé sur l\'économie unitaire.',
    },
    execution: {
      en: [
        'Rebuilt tracking with server-side attribution',
        'Developed 50+ creative variations for testing',
        'Launched structured prospecting & retargeting campaigns',
        'Implemented weekly optimization protocol',
      ],
      fr: [
        'Reconstruction du suivi avec attribution côté serveur',
        'Développement de 50+ variations créatives pour les tests',
        'Lancement de campagnes structurées de prospection et retargeting',
        'Implémentation d\'un protocole d\'optimisation hebdomadaire',
      ],
    },
    results: [
      { metric: { en: 'ROAS Improvement', fr: 'Amélioration du ROAS' }, value: '340%', change: '+340%' },
      { metric: { en: 'Monthly Revenue', fr: 'Revenus mensuels' }, value: '$420K', change: 'from $85K' },
      { metric: { en: 'CAC Reduction', fr: 'Réduction du CAC' }, value: '-45%', change: '' },
      { metric: { en: 'Ad Spend Scaled', fr: 'Budget pub augmenté' }, value: '4x', change: 'profitably' },
    ],
    testimonial: testimonials[0],
    featured: true,
  },
  {
    id: '2',
    slug: 'nordfit-equipment-full-funnel',
    client: 'NordFit Equipment',
    industry: { en: 'Fitness & Equipment', fr: 'Fitness et équipement' },
    services: ['paid-ads', 'seo-content'],
    title: {
      en: 'Building a Multi-Channel Growth Engine',
      fr: 'Construire un moteur de croissance multi-canal',
    },
    subtitle: {
      en: 'Combining paid media with SEO for sustainable growth',
      fr: 'Combiner les médias payants avec le SEO pour une croissance durable',
    },
    context: {
      en: 'NordFit was entirely dependent on paid media. They needed to diversify channels and build sustainable organic traffic while maintaining paid performance.',
      fr: 'NordFit dépendait entièrement des médias payants. Ils devaient diversifier les canaux et construire un trafic organique durable tout en maintenant les performances payantes.',
    },
    strategy: {
      en: 'We developed an integrated strategy: optimize paid for efficiency while building SEO foundations that would compound over time.',
      fr: 'Nous avons développé une stratégie intégrée : optimiser le payant pour l\'efficacité tout en construisant des fondations SEO qui se composeraient dans le temps.',
    },
    execution: {
      en: [
        'Restructured Google Ads for better segmentation',
        'Launched comprehensive SEO program',
        'Created content hub targeting buyer journey',
        'Built link-building outreach program',
      ],
      fr: [
        'Restructuration de Google Ads pour une meilleure segmentation',
        'Lancement d\'un programme SEO complet',
        'Création d\'un hub de contenu ciblant le parcours acheteur',
        'Construction d\'un programme de prospection de liens',
      ],
    },
    results: [
      { metric: { en: 'Total Revenue', fr: 'Revenus totaux' }, value: '$2.4M', change: 'in 12 months' },
      { metric: { en: 'Organic Traffic', fr: 'Trafic organique' }, value: '+180%', change: '' },
      { metric: { en: 'Blended ROAS', fr: 'ROAS mixte' }, value: '5.2x', change: '' },
      { metric: { en: 'Channel Dependency', fr: 'Dépendance aux canaux' }, value: '-40%', change: 'on paid' },
    ],
    testimonial: testimonials[1],
    featured: true,
  },
  {
    id: '3',
    slug: 'altura-coffee-conversion',
    client: 'Altura Coffee',
    industry: { en: 'Food & Beverage', fr: 'Alimentation et boissons' },
    services: ['cro-landing-pages', 'paid-ads'],
    title: {
      en: 'Doubling Conversion Rates Through CRO',
      fr: 'Doubler les taux de conversion grâce au CRO',
    },
    subtitle: {
      en: 'How landing page optimization transformed their funnel',
      fr: 'Comment l\'optimisation des pages d\'atterrissage a transformé leur entonnoir',
    },
    context: {
      en: 'Altura was driving significant traffic but leaving money on the table with a 1.2% conversion rate. They needed to maximize the value of every click.',
      fr: 'Altura générait un trafic significatif mais laissait de l\'argent sur la table avec un taux de conversion de 1,2%. Ils devaient maximiser la valeur de chaque clic.',
    },
    strategy: {
      en: 'We ran a comprehensive conversion audit and implemented a systematic A/B testing program to optimize every stage of the funnel.',
      fr: 'Nous avons effectué un audit de conversion complet et implémenté un programme de tests A/B systématique pour optimiser chaque étape de l\'entonnoir.',
    },
    execution: {
      en: [
        'Complete conversion audit and heuristic analysis',
        'Redesigned landing pages based on user behavior',
        'Ran 12 A/B tests across key funnel points',
        'Optimized checkout flow for mobile',
      ],
      fr: [
        'Audit de conversion complet et analyse heuristique',
        'Refonte des pages d\'atterrissage basée sur le comportement utilisateur',
        'Exécution de 12 tests A/B sur les points clés de l\'entonnoir',
        'Optimisation du flux de paiement pour mobile',
      ],
    },
    results: [
      { metric: { en: 'Conversion Rate', fr: 'Taux de conversion' }, value: '2.8%', change: 'from 1.2%' },
      { metric: { en: 'CAC Reduction', fr: 'Réduction du CAC' }, value: '67%', change: '' },
      { metric: { en: 'Revenue Per Visitor', fr: 'Revenu par visiteur' }, value: '+112%', change: '' },
      { metric: { en: 'Mobile Conversions', fr: 'Conversions mobiles' }, value: '+85%', change: '' },
    ],
    testimonial: testimonials[2],
    featured: true,
  },
  {
    id: '4',
    slug: 'techflow-saas-seo',
    client: 'TechFlow SaaS',
    industry: { en: 'B2B SaaS', fr: 'SaaS B2B' },
    services: ['seo-content'],
    title: {
      en: 'Tripling Organic Traffic in 8 Months',
      fr: 'Tripler le trafic organique en 8 mois',
    },
    subtitle: {
      en: 'A methodical SEO approach for B2B lead generation',
      fr: 'Une approche SEO méthodique pour la génération de leads B2B',
    },
    context: {
      en: 'TechFlow had almost no organic presence in a competitive SaaS market. They needed to build authority and generate inbound leads.',
      fr: 'TechFlow n\'avait presque aucune présence organique dans un marché SaaS compétitif. Ils devaient construire leur autorité et générer des leads entrants.',
    },
    strategy: {
      en: 'We developed a content-led SEO strategy focused on bottom-of-funnel keywords with clear purchase intent.',
      fr: 'Nous avons développé une stratégie SEO axée sur le contenu, concentrée sur les mots-clés de bas de l\'entonnoir avec une intention d\'achat claire.',
    },
    execution: {
      en: [
        'Technical SEO overhaul and site structure optimization',
        'Created comprehensive keyword mapping',
        'Launched pillar content strategy',
        'Built strategic link-building program',
      ],
      fr: [
        'Refonte technique du SEO et optimisation de la structure du site',
        'Création d\'une cartographie complète des mots-clés',
        'Lancement d\'une stratégie de contenu pilier',
        'Construction d\'un programme stratégique de création de liens',
      ],
    },
    results: [
      { metric: { en: 'Organic Traffic', fr: 'Trafic organique' }, value: '3x', change: 'in 8 months' },
      { metric: { en: 'Ranking Keywords', fr: 'Mots-clés classés' }, value: '+420', change: 'top 10' },
      { metric: { en: 'Organic Leads', fr: 'Leads organiques' }, value: '+280%', change: '' },
      { metric: { en: 'Domain Rating', fr: 'Note de domaine' }, value: '52', change: 'from 28' },
    ],
    testimonial: testimonials[3],
    featured: false,
  },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: { en: string; fr: string };
  excerpt: { en: string; fr: string };
  content?: { en: string; fr: string };
  category: string;
  author: string;
  publishedAt: string;
  readTime: { en: string; fr: string };
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'meta-ads-2025-playbook',
    title: {
      en: 'The 2025 Meta Ads Playbook: What\'s Actually Working',
      fr: 'Le manuel Meta Ads 2025 : Ce qui fonctionne vraiment',
    },
    excerpt: {
      en: 'After managing $50M+ in Meta ad spend, here are the strategies that consistently drive results in 2025.',
      fr: 'Après avoir géré plus de 50M$ en dépenses publicitaires Meta, voici les stratégies qui génèrent constamment des résultats en 2025.',
    },
    category: 'paidMedia',
    author: 'Alex Chen',
    publishedAt: '2025-01-15',
    readTime: { en: '8 min read', fr: '8 min de lecture' },
    featured: true,
  },
  {
    id: '2',
    slug: 'seo-content-strategy-guide',
    title: {
      en: 'Building a Content Strategy That Actually Ranks',
      fr: 'Construire une stratégie de contenu qui se classe vraiment',
    },
    excerpt: {
      en: 'A step-by-step framework for developing SEO content that drives traffic and conversions.',
      fr: 'Un cadre étape par étape pour développer du contenu SEO qui génère du trafic et des conversions.',
    },
    category: 'seo',
    author: 'Sarah Mitchell',
    publishedAt: '2025-01-10',
    readTime: { en: '12 min read', fr: '12 min de lecture' },
    featured: true,
  },
  {
    id: '3',
    slug: 'conversion-rate-psychology',
    title: {
      en: 'The Psychology of High-Converting Landing Pages',
      fr: 'La psychologie des pages d\'atterrissage à forte conversion',
    },
    excerpt: {
      en: 'Understanding the cognitive principles that make visitors take action.',
      fr: 'Comprendre les principes cognitifs qui poussent les visiteurs à agir.',
    },
    category: 'cro',
    author: 'Marcus Thompson',
    publishedAt: '2025-01-05',
    readTime: { en: '10 min read', fr: '10 min de lecture' },
    featured: false,
  },
  {
    id: '4',
    slug: 'google-ads-performance-max',
    title: {
      en: 'Performance Max in 2025: How to Make It Actually Work',
      fr: 'Performance Max en 2025 : Comment le faire vraiment fonctionner',
    },
    excerpt: {
      en: 'A practical guide to getting results from Google\'s AI-driven campaign type.',
      fr: 'Un guide pratique pour obtenir des résultats du type de campagne alimenté par l\'IA de Google.',
    },
    category: 'paidMedia',
    author: 'Alex Chen',
    publishedAt: '2024-12-28',
    readTime: { en: '7 min read', fr: '7 min de lecture' },
    featured: false,
  },
  {
    id: '5',
    slug: 'attribution-modeling-guide',
    title: {
      en: 'Attribution in a Post-Cookie World: What Actually Matters',
      fr: 'L\'attribution dans un monde post-cookies : Ce qui compte vraiment',
    },
    excerpt: {
      en: 'How to measure marketing effectiveness when traditional tracking is dying.',
      fr: 'Comment mesurer l\'efficacité marketing quand le suivi traditionnel est en déclin.',
    },
    category: 'strategy',
    author: 'Sarah Mitchell',
    publishedAt: '2024-12-20',
    readTime: { en: '9 min read', fr: '9 min de lecture' },
    featured: true,
  },
  {
    id: '6',
    slug: 'tiktok-ads-for-ecommerce',
    title: {
      en: 'TikTok Ads for E-commerce: A Complete Framework',
      fr: 'Publicités TikTok pour le e-commerce : Un cadre complet',
    },
    excerpt: {
      en: 'How to approach TikTok advertising for product-based businesses.',
      fr: 'Comment aborder la publicité TikTok pour les entreprises basées sur les produits.',
    },
    category: 'paidMedia',
    author: 'Marcus Thompson',
    publishedAt: '2024-12-15',
    readTime: { en: '11 min read', fr: '11 min de lecture' },
    featured: false,
  },
  {
    id: '7',
    slug: 'ab-testing-mistakes',
    title: {
      en: '7 A/B Testing Mistakes That Kill Your Conversion Rates',
      fr: '7 erreurs de tests A/B qui tuent vos taux de conversion',
    },
    excerpt: {
      en: 'Common pitfalls that lead to false conclusions and wasted optimization efforts.',
      fr: 'Pièges courants qui mènent à de fausses conclusions et des efforts d\'optimisation gaspillés.',
    },
    category: 'cro',
    author: 'Emily Wright',
    publishedAt: '2024-12-10',
    readTime: { en: '6 min read', fr: '6 min de lecture' },
    featured: false,
  },
  {
    id: '8',
    slug: 'marketing-trends-2025',
    title: {
      en: 'Marketing Trends 2025: Separating Signal from Noise',
      fr: 'Tendances marketing 2025 : Séparer le signal du bruit',
    },
    excerpt: {
      en: 'Our take on what trends actually matter for growth marketers this year.',
      fr: 'Notre avis sur les tendances qui comptent vraiment pour les marketeurs de croissance cette année.',
    },
    category: 'trends',
    author: 'Alex Chen',
    publishedAt: '2024-12-05',
    readTime: { en: '8 min read', fr: '8 min de lecture' },
    featured: false,
  },
  {
    id: '9',
    slug: 'creative-testing-framework',
    title: {
      en: 'The Creative Testing Framework That Scales Winners',
      fr: 'Le cadre de test créatif qui amplifie les gagnants',
    },
    excerpt: {
      en: 'A systematic approach to finding and scaling winning ad creatives.',
      fr: 'Une approche systématique pour trouver et amplifier les créatifs publicitaires gagnants.',
    },
    category: 'paidMedia',
    author: 'Sarah Mitchell',
    publishedAt: '2024-11-28',
    readTime: { en: '10 min read', fr: '10 min de lecture' },
    featured: false,
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: { en: string; fr: string };
  bio: { en: string; fr: string };
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'amit',
    name: 'Amit Sahni',
    role: { en: 'Founder & CEO', fr: 'Fondateur et PDG' },
    bio: {
      en: 'Brings over 20 years of hands-on experience helping businesses build structure and clarity.',
      fr: 'Apporte plus de 20 ans d’expérience terrain pour structurer la croissance.',
    },
    linkedin: 'https://www.linkedin.com/in/amitsahni015/',
  },
  {
    id: 'arav',
    name: 'Arav Sahni',
    role: { en: 'Website Design Consultant', fr: 'Consultant en conception web' },
    bio: {
      en: 'Focused on modern website design and conversion-driven user experiences.',
      fr: 'Spécialisé en conception moderne et expériences orientées conversion.',
    },
    linkedin: 'https://www.linkedin.com/in/aravsahni/',
  },
  {
    id: 'ansh',
    name: 'Ansh Sahni',
    role: { en: 'Growth Marketing Consultant', fr: 'Consultant en marketing de croissance' },
    bio: {
      en: 'Builds and executes practical growth systems across digital channels.',
      fr: 'Met en place des systèmes de croissance concrets.',
    },
    linkedin: 'https://www.linkedin.com/in/anshsahni/',
  },
];



// Helper function to get content by language
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(c => c.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(c => c.featured);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(p => p.featured);
}

export function getCaseStudiesByService(serviceId: string): CaseStudy[] {
  return caseStudies.filter(c => c.services.includes(serviceId));
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(p => p.category === category);
}
