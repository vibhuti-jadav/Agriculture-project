SEO Powerfile — Sitaram Minerals

Summary
- Added richer JSON-LD for Organization/LocalBusiness (contact, address, opening hours, availableLanguage).
- Added Product JSON-LD entries for each product in the site data.
- Expanded `public/sitemap.xml` with product URLs, lastmod, changefreq and image entry.
- Updated `public/sitemap-index.xml` lastmod.
- Kept existing meta tags, Open Graph and Twitter cards in `index.html`.

Immediate Actions (do these now)
1. Deploy the updated site to production (so sitemap and JSON-LD are publicly reachable).
2. In Google Search Console: Add property (https://sitaramminerals.com) and verify.
3. Submit sitemap: https://sitaramminerals.com/sitemap-index.xml or https://sitaramminerals.com/sitemap.xml.
4. Run Google Rich Results Test and Mobile-Friendly Test on the home page.

Recommended Next Steps
- Add unique, crawlable product pages (e.g., /products/{id}) that render the same product JSON-LD and visible product content (title, description, images, CTA).
- Add server-side rendering (SSR) or prerendering for important pages to improve indexing of dynamic content.
- Add structured Product Offer details with real prices and availability when you have pricing.
- Build an on-site blog with keyword-targeted articles (3–6 posts initially) about dolomite, vermicompost, soil amendment best practices.
- Start a local citations campaign (Google Business Profile, local directories) and collect 5–10 high-quality backlinks.

Checklist for launch validation
- [ ] Production site has updated `index.html` JSON-LD served
- [ ] `https://sitaramminerals.com/sitemap.xml` returns 200
- [ ] `https://sitaramminerals.com/robots.txt` references the sitemap
- [ ] Rich Results Test: no blocking errors
- [ ] Search Console: sitemap submitted and indexed URLs appearing

If you want, I can:
- Generate individual product pages and routes for `/products/{id}` (includes meta tags + JSON-LD).
- Add `react-helmet-async` to support per-page meta tags and SSR-friendly rendering.
- Run Rich Results and PageSpeed tests and report any issues.

— Generated: 2026-01-29
