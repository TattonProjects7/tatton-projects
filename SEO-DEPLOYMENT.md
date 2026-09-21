# Tatton Projects — SEO deployment update

Prepared 21 September 2026.

## Added
- `services.html` service hub
- `office-fit-out-manchester.html`
- `shopfitting-manchester.html`
- `commercial-refurbishment-manchester.html`
- `extension-builders-altrincham.html`
- `extension-builders-hale.html`
- `new-build-homes-cheshire.html`
- Service-page responsive styles in `styles.css`
- Service and Breadcrumb structured data on the six landing pages
- Canonical tags, titles, descriptions and social metadata
- Internal links between the new service pages
- Service links in site navigation/footer
- New service URLs in the generated sitemap

## Corrected
- EstiMate links in the active homepage/build generator now point to `https://www.esti-mate.app` rather than the old `estimate-app.business` domain.

## Build
`node build-pages.js` completed successfully and regenerated project/blog pages and `sitemap.xml`.

## Publish
Upload/commit these files to the existing `TattonProjects7/tatton-projects` repository. Vercel's existing build command will run `node build-pages.js`.

## After deployment
1. Open each new URL and check it visually on mobile and desktop.
2. Submit `https://www.tatton-projects.co.uk/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
3. Request indexing for the service hub and six new landing pages in Search Console.
4. Do not create duplicate near-identical location pages. Add new location pages only when they contain genuinely local/project-specific evidence.
