export type Language = 'en' | 'fr';

export const translations = {
  // Navigation
  nav: {
    home: { en: 'Home', fr: 'Accueil' },
    services: { en: 'Services', fr: 'Services' },
    work: { en: 'Work', fr: 'Réalisations' },
    about: { en: 'About', fr: 'À propos' },
    process: { en: 'Process', fr: 'Processus' },
    insights: { en: 'Insights', fr: 'Perspectives' },
    contact: { en: 'Contact', fr: 'Contact' },
    bookCall: { en: 'Book a Call', fr: 'Réserver un appel' },
  },

  // Hero Section
  hero: {
    tagline: {
      en: 'Performance Marketing for Ambitious Brands',
      fr: 'Marketing de performance pour marques ambitieuses',
    },
    headline: {
      en: 'We Turn Marketing\nSpend\u00A0Into\u00A0*Predictable*\n*Revenue*',
      fr: 'Nous transformons vos investissements marketing en\n*revenus* *prévisibles*',
    },
    subheadline: {
      en: 'FutureSource is a boutique growth agency helping premium brands scale profitably through strategic paid media, SEO, and conversion optimization.',
      fr: 'FutureSource est une agence de croissance boutique aidant les marques premium à croître de manière rentable grâce aux médias payants stratégiques, au SEO et à l\'optimisation des conversions.',
    },
    cta: {
      en: 'Start Your Growth Journey',
      fr: 'Démarrez votre parcours de croissance',
    },
    secondaryCta: {
      en: 'See Our Results',
      fr: 'Voir nos résultats',
    },
  },

  // Pillars Section
  pillars: {
    title: {
      en: 'What We\'re Known For',
      fr: 'Ce pour quoi nous sommes reconnus',
    },
    subtitle: {
      en: 'Three pillars that drive every engagement',
      fr: 'Trois piliers qui guident chaque engagement',
    },
    strategic: {
      title: { en: 'Strategic Precision', fr: 'Précision stratégique' },
      description: {
        en: 'Every dollar is allocated with intent. We don\'t spray and pray—we analyze, optimize, and scale what works.',
        fr: 'Chaque dollar est alloué avec intention. Nous ne dispersons pas—nous analysons, optimisons et amplifions ce qui fonctionne.',
      },
    },
    creative: {
      title: { en: 'Creative Excellence', fr: 'Excellence créative' },
      description: {
        en: 'Performance marketing meets brand-building. Ads that convert and elevate your positioning simultaneously.',
        fr: 'Le marketing de performance rencontre la construction de marque. Des publicités qui convertissent tout en élevant votre positionnement.',
      },
    },
    transparency: {
      title: { en: 'Radical Transparency', fr: 'Transparence radicale' },
      description: {
        en: 'Real-time dashboards, weekly reports, monthly strategy calls. You always know exactly where your investment goes.',
        fr: 'Tableaux de bord en temps réel, rapports hebdomadaires, appels stratégiques mensuels. Vous savez toujours exactement où va votre investissement.',
      },
    },
  },

  // Advantage Section (formerly Results)
  results: {
    title: { en: 'Live Results Snapshot', fr: 'Aperçu des résultats en direct' },
    subtitle: {
      en: 'Aggregate performance across our client portfolio',
      fr: 'Performance globale sur l\'ensemble de notre portefeuille clients',
    },
    stats: {
      spend: { value: { en: '$12M+', fr: '$12M+' }, label: { en: 'Ad Spend Managed', fr: 'Dépenses publicitaires gérées' } },
      roas: { value: { en: '4.2x', fr: '4.2x' }, label: { en: 'Average ROAS', fr: 'ROAS moyen' } },
      revenue: { value: { en: '$48M+', fr: '$48M+' }, label: { en: 'Revenue Generated', fr: 'Revenus générés' } },
      brands: { value: { en: '40+', fr: '40+' }, label: { en: 'Brands Scaled', fr: 'Marques développées' } },
    }
  },

  // Demo Concepts
  demos: {
    badge: { en: 'Demo Concept', fr: 'Concept Démo' },
    fitness: {
      industry: { en: 'Fitness Industry', fr: 'Industrie du Fitness' },
      title: { en: 'Physical Therapy', fr: 'Physiothérapie' },
      desc: { en: 'Energetic, modern therapy website designed for trust and booking conversions.', fr: 'Site web de thérapie moderne et dynamique conçu pour instaurer la confiance et générer des conversions.' }
    },
    restaurant: {
      industry: { en: 'Restaurant Industry', fr: 'Restauration' },
      title: { en: 'Pizzeria', fr: 'Pizzeria' },
      desc: { en: 'Appetizing, image-forward restaurant design optimized for online reservations.', fr: 'Design de restaurant appétissant et visuel optimisé pour les réservations en ligne.' }
    },
    product: {
      industry: { en: 'Product Based', fr: 'Basé sur les produits' },
      title: { en: 'Paper Products', fr: 'Produits en papier' },
      desc: {
        en: 'Calm, handcrafted e-commerce design focused on organic creativity and product storytelling.',
        fr: 'Design e-commerce calme et artisanal axé sur la créativité organique et le storytelling des produits.'
      }
    }
  },

  // Selected Work
  selectedWork: {
    title: { en: 'Selected Work', fr: 'Réalisations sélectionnées' },
    subtitle: {
      en: 'Case studies from brands we\'ve helped scale',
      fr: 'Études de cas de marques que nous avons aidées à croître',
    },
    viewCase: { en: 'View Case Study', fr: 'Voir l\'étude de cas' },
    viewAll: { en: 'View All Work', fr: 'Voir toutes les réalisations' },
  },

  // Services Page
  services: {
    title: { en: 'Our Services', fr: 'Nos services' },
    subtitle: {
      en: 'Full-funnel growth solutions tailored to your stage',
      fr: 'Solutions de croissance full-funnel adaptées à votre stade',
    },
    paidAds: {
      title: { en: 'Paid Advertising', fr: 'Publicité payante' },
      tagline: { en: 'Meta • Google • TikTok', fr: 'Meta • Google • TikTok' },
      description: {
        en: 'Strategic paid media buying across platforms. From creative strategy to campaign optimization, we scale what converts.',
        fr: 'Achat média payant stratégique sur toutes les plateformes. De la stratégie créative à l\'optimisation des campagnes, nous amplifions ce qui convertit.',
      },
      idealFor: {
        en: 'Brands seeking a tailored approach to scale, regardless of budget size',
        fr: 'Marques recherchant une approche sur mesure pour croître, peu importe la taille du budget',
      },
      notFor: {
        en: 'Pre-revenue startups or brands without product-market fit',
        fr: 'Startups pré-revenus ou marques sans adéquation produit-marché',
      },
    },
    seo: {
      title: { en: 'SEO & Content', fr: 'SEO et contenu' },
      tagline: { en: 'Organic Growth Engine', fr: 'Moteur de croissance organique' },
      description: {
        en: 'Technical SEO, content strategy, and link building that compounds over time. Build sustainable organic traffic.',
        fr: 'SEO technique, stratégie de contenu et création de liens qui se composent dans le temps. Construisez un trafic organique durable.',
      },
      idealFor: {
        en: 'Brands committed to long-term organic growth',
        fr: 'Marques engagées dans la croissance organique à long terme',
      },
      notFor: {
        en: 'Those seeking immediate results (SEO takes 6+ months)',
        fr: 'Ceux cherchant des résultats immédiats (le SEO prend 6+ mois)',
      },
    },
    cro: {
      title: { en: 'CRO & Landing Pages', fr: 'CRO et pages d\'atterrissage' },
      tagline: { en: 'Conversion Optimization', fr: 'Optimisation des conversions' },
      description: {
        en: 'Turn more visitors into customers. From landing page design to A/B testing and UX optimization.',
        fr: 'Convertissez plus de visiteurs en clients. De la conception de pages d\'atterrissage aux tests A/B et à l\'optimisation UX.',
      },
      idealFor: {
        en: 'Brands with existing traffic looking to maximize ROI',
        fr: 'Marques avec du trafic existant cherchant à maximiser le ROI',
      },
      notFor: {
        en: 'Sites without meaningful traffic volume yet',
        fr: 'Sites sans volume de trafic significatif encore',
      },
    },
    branding: {
      title: { en: 'Brand & Creative Strategy', fr: 'Stratégie de marque et créative' },
      tagline: { en: 'Optional Add-On', fr: 'Service complémentaire' },
      description: {
        en: 'Elevate your brand positioning and creative direction. Premium option for brands ready to level up.',
        fr: 'Élevez votre positionnement de marque et direction créative. Option premium pour les marques prêtes à évoluer.',
      },
    },
    abm: {
      title: { en: 'Account Based Marketing (ABM)', fr: 'Marketing basé sur les comptes (ABM)' },
      tagline: { en: 'Targeted B2B Growth', fr: 'Croissance B2B ciblée' },
      description: {
        en: 'Tailored programs that engage target accounts with personalized campaigns, content, and sales alignment to accelerate pipeline.',
        fr: 'Programmes sur mesure qui mobilisent les comptes cibles avec des campagnes personnalisées, du contenu et un alignement ventes pour accélérer le pipeline.',
      },
    },
    packages: {
      title: { en: 'Engagement Tiers', fr: 'Niveaux d\'engagement' },
      starter: {
        title: { en: 'Starter', fr: 'Démarrage' },
        description: {
          en: 'For brands testing the waters. Single-channel focus with foundational strategy.',
          fr: 'Pour les marques qui testent les eaux. Focus mono-canal avec stratégie fondamentale.',
        },
      },
      growth: {
        title: { en: 'Growth', fr: 'Croissance' },
        description: {
          en: 'Our most popular tier. Multi-channel execution with dedicated strategist.',
          fr: 'Notre niveau le plus populaire. Exécution multi-canal avec stratège dédié.',
        },
      },
      scale: {
        title: { en: 'Scale', fr: 'Expansion' },
        description: {
          en: 'Full-service partnership. All channels, creative production, and executive strategy.',
          fr: 'Partenariat full-service. Tous les canaux, production créative et stratégie exécutive.',
        },
      },
    },
  },

  // About Page
  about: {
    title: { en: 'About FutureSource', fr: 'À propos de FutureSource' },

    mission: {
      title: { en: 'Our Mission', fr: 'Notre mission' },
      text: {
        en: 'We work with SMBs and service-based businesses that need structure, clarity, and predictable growth—delivered by people who actually do the work.',
        fr: 'Nous aidons les PME et entreprises de services qui ont besoin de structure, de clarté et d’une croissance prévisible — livrées par des personnes qui font réellement le travail.',
      },
      cta: { en: 'Join Us', fr: 'Rejoignez-nous' },
    },

    story: {
      title: { en: 'Our Story', fr: 'Notre histoire' },
      text: {
        en: 'FutureSource is a founder-led, family-owned consultancy helping local and regional businesses grow through practical marketing, CRM, and digital growth solutions. As a newly launched startup, FutureSource is built on 20+ years of hands-on industry experience. We combine proven frameworks with modern execution to deliver measurable results—without the complexity or cost of large agencies. Founded by Amit Sahni alongside his sons Ansh and Arav, our team brings specialized expertise across strategy, growth marketing, and website design. This structure allows us to stay hands-on, accountable, and deeply invested in every client partnership.',
        fr: 'FutureSource est une firme de conseil familiale dirigée par ses fondateurs, aidant les entreprises locales et régionales à croître grâce à des solutions pratiques en marketing, CRM et croissance numérique. Bien que récemment lancée, FutureSource s’appuie sur plus de 20 ans d’expérience terrain. Nous combinons des cadres éprouvés à une exécution moderne pour offrir des résultats mesurables — sans la complexité ni les coûts des grandes agences. Fondée par Amit Sahni avec ses fils Ansh et Arav, l’équipe apporte une expertise spécialisée en stratégie, marketing de croissance et conception web.',
      },
    },

    values: {
      title: { en: 'How We Think', fr: 'Notre façon de penser' },
      results: {
        title: { en: 'Results Over Activity', fr: 'Résultats avant activité' },
        text: {
          en: 'We measure success by outcomes, not deliverables.',
          fr: 'Nous mesurons le succès par les résultats, pas par les livrables.',
        },
      },
      partnership: {
        title: { en: 'Partnership Over Vendor', fr: 'Partenariat avant fournisseur' },
        text: {
          en: 'We embed as an extension of your team.',
          fr: 'Nous nous intégrons comme une extension de votre équipe.',
        },
      },
      honesty: {
        title: { en: 'Honesty Over Hype', fr: 'Honnêteté avant battage' },
        text: {
          en: 'We tell you what works and what doesn’t.',
          fr: 'Nous vous disons ce qui fonctionne et ce qui ne fonctionne pas.',
        },
      },
    },

    team: {
      title: { en: 'Meet the Team', fr: 'Rencontrez l’équipe' },
    },

    tagline: {
      en: 'New startup. Deep experience. Proven execution.',
      fr: 'Nouvelle entreprise. Expérience approfondie. Exécution éprouvée.',
    },
  },


  // Process Page
  process: {
    title: { en: 'Our Process', fr: 'Notre processus' },
    subtitle: {
      en: 'How we turn strategy into results',
      fr: 'Comment nous transformons la stratégie en résultats',
    },
    discovery: {
      title: { en: 'Discovery', fr: 'Découverte' },
      description: {
        en: 'We dive deep into your business, goals, target audience, and market landscape. This phase involves stakeholder interviews, data analysis, and competitor research to build a solid foundation for growth.',
        fr: 'Nous plongeons dans votre entreprise, vos objectifs, votre public cible et le paysage du marché. Cette phase comprend des entretiens avec les parties prenantes, l\'analyse de données et la recherche concurrentielle pour bâtir une base solide de croissance.',
      },
      duration: { en: 'Week 1', fr: 'Semaine 1' },
    },
    strategy: {
      title: { en: 'Strategy', fr: 'Stratégie' },
      description: {
        en: 'Custom growth roadmap with channel priorities and budget allocation.',
        fr: 'Feuille de route de croissance personnalisée avec priorités de canaux et allocation de budget.',
      },
      duration: { en: 'Week 2', fr: 'Semaine 2' },
    },
    execution: {
      title: { en: 'Execution', fr: 'Exécution' },
      description: {
        en: 'Campaign build, creative development, and launch. We bring the strategy to life with precision and impact.',
        fr: 'Construction de campagne, développement créatif et lancement. Nous donnons vie à la stratégie avec précision et impact.',
      },
      duration: { en: 'Week 3-4', fr: 'Semaine 3-4' },
    },
    optimization: {
      title: { en: 'Optimization', fr: 'Optimisation' },
      description: {
        en: 'Continuous testing, refinement, and scaling of winning strategies to maximize performance over time. We actively monitor key metrics, analyze data, and implement iterative improvements to ensure your marketing efforts deliver sustained growth and long-term success.',
        fr: 'Tests continus, raffinement et mise à l\'échelle des stratégies gagnantes pour maximiser les performances au fil du temps. Nous surveillons activement les indicateurs clés, analysons les données et mettons en œuvre des améliorations itératives pour garantir que vos efforts marketing génèrent une croissance soutenue et un succès à long terme.',
      },
      duration: { en: 'Ongoing', fr: 'Continu' },
    },
    reporting: {
      title: { en: 'Reporting Cadence', fr: 'Cadence des rapports' },
      weekly: {
        title: { en: 'Weekly Updates', fr: 'Mises à jour hebdomadaires' },
        text: { en: 'Performance snapshot and quick wins', fr: 'Aperçu des performances et victoires rapides' },
      },
      monthly: {
        title: { en: 'Monthly Strategy Calls', fr: 'Appels stratégiques mensuels' },
        text: { en: 'Deep analysis and roadmap adjustments', fr: 'Analyse approfondie et ajustements de la feuille de route' },
      },
      quarterly: {
        title: { en: 'Quarterly Reviews', fr: 'Revues trimestrielles' },
        text: { en: 'Big picture assessment and planning', fr: 'Évaluation globale et planification' },
      },
    },
  },

  // Work/Portfolio Page
  work: {
    title: { en: 'Our Work', fr: 'Nos réalisations' },
    subtitle: {
      en: 'Results-driven case studies from brands we\'ve helped grow',
      fr: 'Études de cas axées sur les résultats de marques que nous avons aidées à croître',
    },
    filters: {
      all: { en: 'All', fr: 'Tout' },
      ads: { en: 'Paid Ads', fr: 'Publicité payante' },
      seo: { en: 'SEO', fr: 'SEO' },
      web: { en: 'Web & CRO', fr: 'Web et CRO' },
      branding: { en: 'Branding', fr: 'Image de marque' },
    },
    caseStudy: {
      context: { en: 'Context', fr: 'Contexte' },
      strategy: { en: 'Strategy', fr: 'Stratégie' },
      execution: { en: 'Execution', fr: 'Exécution' },
      results: { en: 'Results', fr: 'Résultats' },
      testimonial: { en: 'Client Testimonial', fr: 'Témoignage client' },
    },
  },

  // Insights/Blog
  insights: {
    title: { en: 'Insights', fr: 'Perspectives' },
    subtitle: {
      en: 'Strategies, trends, and learnings from the front lines of growth marketing',
      fr: 'Stratégies, tendances et apprentissages du terrain du marketing de croissance',
    },
    readMore: { en: 'Read Article', fr: 'Lire l\'article' },
    newsletter: {
      title: { en: 'Growth Newsletter', fr: 'Infolettre croissance' },
      description: {
        en: 'Actionable insights delivered monthly. No spam, unsubscribe anytime.',
        fr: 'Perspectives actionnables livrées mensuellement. Pas de spam, désabonnement à tout moment.',
      },
      placeholder: { en: 'Enter your email', fr: 'Entrez votre courriel' },
      cta: { en: 'Subscribe', fr: 'S\'abonner' },
    },
    categories: {
      strategy: { en: 'Strategy', fr: 'Stratégie' },
      paidMedia: { en: 'Paid Media', fr: 'Médias payants' },
      seo: { en: 'SEO', fr: 'SEO' },
      cro: { en: 'CRO', fr: 'CRO' },
      trends: { en: 'Trends', fr: 'Tendances' },
      abm: { en: 'ABM', fr: 'ABM' },
      salesPipeline: { en: 'Sales Pipeline', fr: 'Pipeline de ventes' },
    },
  },

  // Contact Page
  contact: {
    title: { en: 'Let\'s Talk', fr: 'Discutons' },
    subtitle: {
      en: 'Ready to accelerate your growth? Tell us about your brand.',
      fr: 'Prêt à accélérer votre croissance? Parlez-nous de votre marque.',
    },
    form: {
      name: { en: 'Full Name', fr: 'Nom complet' },
      email: { en: 'Email Address', fr: 'Adresse courriel' },
      company: { en: 'Company Name', fr: 'Nom de l\'entreprise' },
      website: { en: 'Website URL', fr: 'URL du site web' },
      message: { en: 'Tell us about your project', fr: 'Parlez-nous de votre projet' },
      submit: { en: 'Send Message', fr: 'Envoyer le message' },
    },
    success: {
      title: { en: 'Message Received', fr: 'Message reçu' },
      text: {
        en: 'We\'ll review your inquiry and respond within 24 hours.',
        fr: 'Nous examinerons votre demande et répondrons dans les 24 heures.',
      },
    },
  },

  // Book a Call Page
  booking: {
    title: { en: 'Book a Discovery Call', fr: 'Réserver un appel découverte' },
    subtitle: {
      en: 'Let\'s explore if we\'re the right fit for your growth goals.',
      fr: 'Explorons si nous sommes le bon partenaire pour vos objectifs de croissance.',
    },
    whatToCover: {
      title: { en: 'What We\'ll Cover', fr: 'Ce que nous couvrirons' },
      items: {
        goals: { en: 'Your current situation and growth goals', fr: 'Votre situation actuelle et vos objectifs de croissance' },
        challenges: { en: 'Key challenges and opportunities', fr: 'Défis clés et opportunités' },
        approach: { en: 'Our recommended approach', fr: 'Notre approche recommandée' },
        fit: { en: 'Whether we\'re the right partner', fr: 'Si nous sommes le bon partenaire' },
      },
    },
    duration: { en: '30 minutes', fr: '30 minutes' },
    embedPlaceholder: { en: 'Calendar booking widget', fr: 'Widget de réservation de calendrier' },
  },

  // CTA Sections
  cta: {
    primary: {
      title: { en: 'Ready to Scale?', fr: 'Prêt à croître?' },
      text: {
        en: 'Book a free discovery call to discuss your growth goals.',
        fr: 'Réservez un appel découverte gratuit pour discuter de vos objectifs de croissance.',
      },
      button: { en: 'Book Your Call', fr: 'Réservez votre appel' },
    },
    blueprint: {
      title: { en: 'Free Growth Blueprint', fr: 'Plan de croissance gratuit' },
      text: {
        en: 'Get our step-by-step framework for scaling profitably.',
        fr: 'Obtenez notre cadre étape par étape pour croître de manière rentable.',
      },
      button: { en: 'Download Free', fr: 'Télécharger gratuitement' },
    },
  },

  // Footer
  footer: {
    tagline: {
      en: 'Performance marketing for ambitious brands.',
      fr: 'Marketing de performance pour marques ambitieuses.',
    },
    quickLinks: { en: 'Quick Links', fr: 'Liens rapides' },
    servicesTitle: { en: 'Services', fr: 'Services' },
    legal: { en: 'Legal', fr: 'Légal' },
    privacy: { en: 'Privacy Policy', fr: 'Politique de confidentialité' },
    terms: { en: 'Terms of Service', fr: 'Conditions d\'utilisation' },
    cookies: { en: 'Cookie Policy', fr: 'Politique des cookies' },
    rights: { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
    contact: { en: 'Contact', fr: 'Contact' },
  },

  // Legal Pages
  legal: {
    privacy: {
      title: { en: 'Privacy Policy', fr: 'Politique de confidentialité' },
    },
    terms: {
      title: { en: 'Terms of Service', fr: 'Conditions d\'utilisation' },
    },
    cookies: {
      title: { en: 'Cookie Policy', fr: 'Politique des cookies' },
    },
  },

  // Pricing Page UI
  pricing: {
    title: { en: 'Choose the right plan for your business', fr: 'Choisissez le bon plan pour votre entreprise' },
    subtitle: {
      en: 'Scale effortlessly with features designed for growth, from startups to enterprise.',
      fr: 'Évoluez sans effort avec des fonctionnalités conçues pour la croissance, des startups aux entreprises.'
    },
    monthly: { en: 'Monthly', fr: 'Mensuel' },
    annually: { en: 'Annually', fr: 'Annuel' },
    save: { en: 'Save {{percent}}%', fr: 'Économisez {{percent}}%' },
    mostPopular: { en: 'Most Popular', fr: 'Le plus populaire' },
    keyFeatures: { en: 'Key Features:', fr: 'Fonctionnalités clés :' },
    billedAnnually: { en: 'Billed annually', fr: 'Facturé annuellement' },
    mo: { en: '/mo', fr: '/mois' },
    yr: { en: '/yr', fr: '/an' },
    moreFeatures: { en: '+ {{count}} more features', fr: '+ {{count}} autres fonctionnalités' },
    detailedComparison: { en: 'Detailed Feature Comparison', fr: 'Comparaison détaillée des fonctionnalités' },
    feature: { en: 'Feature', fr: 'Fonctionnalité' },
  },

  // Common
  common: {
    learnMore: { en: 'Learn More', fr: 'En savoir plus' },
    getStarted: { en: 'Get Started', fr: 'Commencer' },
    back: { en: 'Back', fr: 'Retour' },
    next: { en: 'Next', fr: 'Suivant' },
    previous: { en: 'Previous', fr: 'Précédent' },
    viewAll: { en: 'View All', fr: 'Voir tout' },
    readMore: { en: 'Read More', fr: 'Lire la suite' },
    close: { en: 'Close', fr: 'Fermer' },
    menu: { en: 'Menu', fr: 'Menu' },
    required: { en: '*Required Field*', fr: '*Champ obligatoire*' },
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(
  key: string,
  lang: Language
): string {
  const keys = key.split('.');
  let value: any = translations;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }

  if (value && typeof value === 'object' && lang in value) {
    return value[lang];
  }

  return key;
}
