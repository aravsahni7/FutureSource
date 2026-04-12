import { Helmet } from "react-helmet-async";
import { getSEOData, getCanonicalUrl } from "@/lib/seo";

interface MetaHeadProps {
  pathname: string;
}

export function MetaHead({ pathname }: MetaHeadProps) {
  const seo = getSEOData(pathname);
  const canonicalUrl = seo.canonicalUrl || getCanonicalUrl(pathname);

  // Organization schema for homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FutureSource",
    "url": "https://futuresource.ca",
    "logo": "https://futuresource.ca/logo.png",
    "description": "Digital Marketing & Web Design Agency in Montreal",
    "sameAs": [
      "https://www.facebook.com/futuresource",
      "https://www.linkedin.com/company/futuresource",
      "https://twitter.com/futuresource"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Montreal",
      "addressRegion": "QC",
      "addressCountry": "CA"
    }
  };

  // Service schema for service pages
  const serviceSchema = pathname.startsWith('/services/') ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": seo.title,
    "description": seo.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "FutureSource",
      "url": "https://futuresource.ca"
    },
    "areaServed": {
      "@type": "City",
      "name": "Montreal"
    }
  } : null;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {seo.robots && <meta name="robots" content={seo.robots} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.ogTitle || seo.title} />
      <meta property="og:description" content={seo.ogDescription || seo.description} />
      <meta property="og:type" content={seo.ogType || "website"} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.ogTitle || seo.title} />
      <meta name="twitter:description" content={seo.ogDescription || seo.description} />
      <meta name="twitter:image" content={seo.ogImage} />
      
      {/* Self-Referencing Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* JSON-LD Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(pathname === "/" ? organizationSchema : serviceSchema || organizationSchema)}
      </script>
      
      {seo.schema && (
        <script type="application/ld+json">
          {JSON.stringify(seo.schema)}
        </script>
      )}
    </Helmet>
  );
}
