# ClinyQAi Limited corporate website

Responsive React and Vite website, deployed by GitHub Actions to GitHub Pages.

Website: https://clinyqai.com/

## Development

Use Node.js 24 and npm. Run `npm ci`, then `npm run dev`.

Run `npm run build` and `npm test` to check the production output. `npm run preview` serves the production build at `/`.

## Deployment

Repository Settings → Pages → Build and deployment → Source must be **GitHub Actions**. Pull requests build and test without deployment. Merging into `main` builds, prerenders, checks and deploys `dist/`. The workflow can also be started manually. Actions are pinned to verified release commit SHAs; deployment permissions are limited to the deploy job.

The Vite base, canonical URL, social metadata and sitemap target https://clinyqai.com/. GitHub Pages uses clinyqai.com as its custom domain. Cloudflare DNS points the apex to the four GitHub Pages A addresses and www to clinical-quality-artifical-intelligence.github.io, using DNS-only records.

## Content and assets

- `src/App.jsx`: page content, email, booking link and external resources.
- `src/styles.css`: mobile-first responsive behaviour, focus styles and reduced-motion support.
- `public/clinyqai-logo.jpeg`: the supplied logo, preserved without modification. It is also used for the favicon and social preview.
- The book-shaped illustration is a typographic treatment, not a reproduction of the handbook cover.
- Fonts are self-hosted using the Manrope Fontsource package (SIL Open Font License, included in the dependency).
- Company number and jurisdiction are supplied by the site owner. The postal address is omitted at the owner's request. No founder biography, personal photo, client logos, certifications or endorsements are included.
- Contact opens the supplied Google booking link or the visitor's email application. No form submission service is used.

## Accessibility and privacy

Semantic landmarks, one H1, a skip link, descriptive links, keyboard-operable mobile navigation with Escape/focus return, reduced-motion support and native disclosure for privacy information. The build prerenders the full page; navigation and content remain available without JavaScript. No analytics, advertising scripts, third-party font requests or non-essential cookies are added. GitHub hosting and linked services have their own privacy practices.

The build tests check prerendered content, metadata, in-page anchors, generated asset paths and logo integrity. Browser checks should cover keyboard navigation, mobile menu, narrow layouts, text zoom, external destinations and console errors after substantive changes.

## Rights

No licence to reuse ClinyQAi branding, website copy or the linked handbook is granted by publication of this repository. The handbook is hosted separately; this website links to it and does not distribute its contents.

The public page omits registration details and repository links at the owner�s request. Solutions emphasise healthcare teams and education, with direct enquiry and handbook pathways.
