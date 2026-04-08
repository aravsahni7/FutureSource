import { Helmet } from "react-helmet-async";
import { getSEOData, getCanonicalUrl } from "@/lib/seo";

interface MetaHeadProps {
  pathname: string;
}

export function MetaHead({ pathname }: MetaHeadProps) {
  const seo = getSEOData(pathname);
  const canonicalUrl = getCanonicalUrl(pathname);

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
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
