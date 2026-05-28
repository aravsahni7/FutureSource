import { useEffect } from 'react';

const SITE_URL = 'https://futuresource.ca';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  schema?: object | object[];
}

function setMeta(property: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function removeSchemaScripts() {
  document.querySelectorAll('script[data-rh-schema]').forEach(el => el.remove());
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
  schema,
}: SEOProps) {
  const fullTitle = title.includes('FutureSource') ? title : `${title} | FutureSource`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  useEffect(() => {
    document.title = fullTitle;

    setMeta('description', description);
    setMeta('author', 'FutureSource');

    if (noIndex) {
      setMeta('robots', 'noindex, nofollow');
    }

    if (canonicalUrl) {
      setLink('canonical', canonicalUrl);
    }

    // Open Graph
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', ogType, 'property');
    setMeta('og:image', ogImage, 'property');
    if (canonicalUrl) setMeta('og:url', canonicalUrl, 'property');

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Structured data
    removeSchemaScripts();
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach(s => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-rh-schema', '1');
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }
  }, [fullTitle, description, canonicalUrl, ogImage, ogType, noIndex, schema]);

  return null;
}
