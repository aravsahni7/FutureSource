# FutureSource SEO Optimization Plan

## Issues Identified

### 🔴 Critical Issues (Preventing Indexing)

1. **Hidden Work Page**
   - Status: ✅ FIXED - Set `hideWork = false` in Work.tsx
   - Impact: All /work/* pages were returning empty with 200 status code
   - Result: Google discovered them but couldn't index empty pages

2. **No Dynamic Meta Tags**
   - Status: ✅ FIXED - Added react-helmet-async integration
   - Impact: Every page showed the same meta title/description as homepage
   - Result: Google saw duplicate content across all pages

3. **Client-Side Rendering Inefficiency**
   - Status: ⚠️ REQUIRES ACTION - Need pre-rendering solution
   - Impact: Google's crawler must execute JavaScript to see page content
   - Server-side: None - GitHub Pages is static hosting
   - Solution: Implement pre-rendering before deployment

## Changes Made ✅

### 1. **Dynamic Meta Tag System**
- **File**: `src/lib/seo.ts` - Database of all page metadata
- **Component**: `src/components/MetaHead.tsx` - Updates `<head>` tags per page
- **App Integration**: Updated `src/App.tsx` to use HelmetProvider + LocationTracker
- **Result**: Each page now has unique title, description, and OG tags

### 2. **Fixed Hidden Work Page**
- **File**: Modified `src/pages/Work.tsx`
- **Change**: Set `hideWork = false`
- **Result**: /work and all case study pages now render properly

### 3. **Improved robots.txt**
- **File**: `public/robots.txt`
- **Changes**:
  - Added crawl-delay for better crawl efficiency
  - Blocked low-quality bot crawlers (MJ12bot, AhrefsBot)
  - Kept sitemap reference

## Next Steps Required

### ✅ Before Next Deployment

1. **Test the meta tags are working**
   ```bash
   npm run build
   npm run preview
   # Visit each page and check:
   # - Browser title changes correctly
   # - View page source to verify <meta> tags in <head>
   # - Check canonical URLs are correct
   ```

2. **Verify content is rendering**
   - Visit: https://futuresource.ca/work
   - Visit: https://futuresource.ca/services
   - Verify pages show proper content (not empty)

3. **Deploy and submit to Google**
   - Push changes to GitHub
   - Go to Google Search Console → Coverage
   - Watch the "Discovered - currently not indexed" count decrease

### ⚠️ Additional Improvements (Recommended)

#### Option A: Pre-rendering (Best for SEO on GitHub Pages)
Pre-render pages to static HTML before deployment for maximum crawlability:

```bash
npm install -D prerender-spa-plugin
```

Update `vite.config.ts`:
```typescript
import PrerenderSPAPlugin from 'prerender-spa-plugin';

export default defineConfig({
  plugins: [
    // ... existing plugins
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/', '/services', '/services/web-design', '/services/paid-ads',
        '/services/seo-content', '/services/cro-landing-pages', 
        '/services/account-based-marketing',
        '/work', '/work/techflow-saas-seo', '/work/lumina-skincare-paid-media',
        '/work/altura-coffee-conversion', '/work/nordfit-equipment-full-funnel',
        '/about', '/process', '/pricing',
        '/insights', '/insights/meta-ads-2025-playbook', // ... all insight pages
        '/contact', '/book-a-call',
        '/privacy', '/terms', '/cookies'
      ],
      renderer: new Renderer({ maxPort: 5430 })
    })
  ]
});
```

#### Option B: Migrate to Vercel or Netlify
These platforms have better support for dynamic JaveScript-heavy sites:
- Automatic pre-rendering options
- Server-side rendering support
- Better caching strategies
- Native GitHub integration

#### Option C: Add Structured Data (Schema.org Markup)
Already partially done in `index.html`, but needs to be expanded per page:
- Organization schema (homepage) ✅
- BreadcrumbList schema (service/insight pages)
- Article schema (blog posts)
- LocalBusiness schema (contact page)

### 📊 Monitoring & Testing

1. **Google Search Console**
   - Submit updated sitemap
   - Use "Request indexing" for key pages
   - Monitor Coverage report for changes

2. **Check your site with Google's tools**
   - [Rich Results Test](https://search.google.com/test/rich-results)
   - [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
   - [Page Speed Insights](https://pagespeed.web.dev/)

3. **Verify SEO improvements**
   ```bash
   # Run Lighthouse audit
   npm install -g lighthouse
   lighthouse https://futuresource.ca --view
   ```

## Key Metrics to Watch

After implementing these changes:
- Pages should move from "Discovered" → "Indexed" within 7-14 days
- Check Google Search Console Coverage tab for improvements
- Use Google Analytics to verify traffic from organic search
- Monitor keyword rankings in GSC

## Questions to Address

Did you recently:
- [ ] Modify robots.txt or add noindex tags?
- [ ] Change site structure or URLs?
- [ ] Move from another domain?
- [ ] Remove internal links to these pages?
- [ ] Add any JavaScript that blocks content rendering?

If yes to any, this could also contribute to indexing issues.

## Support Resources

- [Google: Why pages aren't indexed](https://developers.google.com/search/docs/beginner/why-not-indexed)
- [React SEO best practices](https://developers.google.com/search/docs/advanced-seo/javascript)
- [GitHub Pages limitations for SEO](https://github.blog/changelog/2022-06-30-github-pages-support-for-serverless-functions/)
