# Migration Documentation: WordPress → Static Next.js

## Overview

This document describes the migration of [jwvpost619.org](https://jwvpost619.org/) from a WordPress website to a static Next.js site deployed via GitHub Pages.

## Source Site

- **URL:** https://jwvpost619.org/
- **Platform:** WordPress with Divi theme
- **Pages:** Home, Who We Are, Contact

## Target Deployment

- **URL:** https://freeforcharity.github.io/FFC-EX-jwvpost619.org/
- **Platform:** Next.js 16 with static export, deployed via GitHub Pages

## What Was Migrated

### Pages

| WordPress Page            | Static Route  | Description                                |
| ------------------------- | ------------- | ------------------------------------------ |
| Home (/)                  | `/`           | Hero, mission, FAQ, social links, CTA      |
| Who We Are (/who-we-are/) | `/who-we-are` | Mission, accomplishments, services, events |
| Contact (/contact/)       | `/contact`    | Contact info, location, FAQ, CTA           |

### Content

- **Text content:** All page text, headings, descriptions, and FAQ items
- **Navigation:** Home → Who We Are → Contact (matching WordPress site)
- **Contact information:** Phone, email, mailing address, physical location
- **Social media:** Facebook group link

### Images

All images were downloaded from the WordPress uploads directory and stored locally:

| WordPress Image                                      | Local Path                             | Description                      |
| ---------------------------------------------------- | -------------------------------------- | -------------------------------- |
| cropped-JWV-emblem.jpg                               | `/Images/jwv/jwv-emblem.jpg`           | JWV Post 619 logo (512×512)      |
| JWV-emblem.jpg                                       | `/Images/jwv/jwv-emblem-full.jpg`      | Full JWV emblem (664×691)        |
| thumbnail_manahouse2024.jpg                          | `/Images/jwv/manahouse2024.jpg`        | MANA House (1080×720)            |
| thumbnail_coalition-of-volunteers-for-veterans-1.jpg | `/Images/jwv/coalition-volunteers.jpg` | Coalition volunteers (1920×1694) |
| JWVevent3-1.jpg                                      | `/Images/jwv/jwv-event3.jpg`           | JWV event photo (2048×1536)      |
| 481075570_622440817097715_6742122402731088940_n.jpg  | `/Images/jwv/fb-group-photo.jpg`       | Facebook group photo (2048×1393) |
| thumbnail_AZVetsHome2024.jpg                         | `/Images/jwv/az-vets-home.jpg`         | AZ Veterans Home (1080×720)      |
| jwvevent.jpg                                         | `/Images/jwv/jwv-event.jpg`            | JWV event (406×289)              |
| 1008.jpg                                             | `/Images/jwv/social-luncheon.jpg`      | Social luncheon (640×426)        |
| 1002jpg.jpg                                          | `/Images/jwv/stand-down.jpg`           | Stand Down event (2048×1187)     |
| 1006.jpg                                             | `/Images/jwv/location-map.jpg`         | Location map (2048×1642)         |

### Branding

| Element      | Value       |
| ------------ | ----------- |
| Gold         | `#9d8741`   |
| Navy         | `#1d3557`   |
| Light Blue   | `#b5d8ee`   |
| Dark Gray    | `#535859`   |
| Light        | `#eeefee`   |
| Heading Font | EB Garamond |
| Body Font    | Open Sans   |

## What Was Not Migrated

- **WordPress admin/CMS:** The site is now a static site with no CMS
- **Hello World post:** Default WordPress placeholder post (not real content)
- **WordPress plugins:** Hummingbird, Divi Builder, etc.
- **Contact form submission:** WordPress form handling replaced with mailto/tel links
- **Search functionality:** WordPress search not applicable to static site
- **Comments:** No comments system in the static version

## Technical Details

### Files Changed

- **New pages:** `src/app/page.tsx`, `src/app/who-we-are/page.tsx`, `src/app/contact/page.tsx`
- **Updated components:** Header (JWV nav + logo), Footer (JWV branding)
- **Data files:** `src/data/faqs.ts` (18 JWV-specific FAQs)
- **Configuration:** `layout.tsx`, `next.config.ts`, `sitemap.ts`, `robots.ts`, `CNAME`, `site.webmanifest`
- **Fonts:** `src/lib/fonts.ts` (EB Garamond + Open Sans)
- **Tests:** Updated unit and E2E tests for new content

### Removed FFC-Specific Content

- 18+ component directories (about-us, donate, volunteer, etc.)
- 5 FFC-specific pages (donation-policy, security-acknowledgements, etc.)
- FFC data files (team, testimonials, FFC-specific FAQs)

### Retained Infrastructure

- Next.js build system with static export
- GitHub Pages deployment workflow
- Google Tag Manager integration
- Cookie consent component
- Privacy Policy, Cookie Policy, Terms of Service (updated for JWV)
- Asset path helper for GitHub Pages compatibility
- Testing infrastructure (Jest + Playwright)

## How to Update Content

1. **Text content:** Edit the page files in `src/app/` directly
2. **FAQ items:** Edit `src/data/faqs.ts`
3. **Images:** Add to `public/Images/jwv/` and reference with `assetPath()`
4. **Navigation:** Edit menu items in `src/components/header/index.tsx`
5. **Contact info:** Update in Footer, Contact page, and FAQ data

## Build and Deploy

```bash
npm install        # Install dependencies
npm run format     # Format code
npm run lint       # Check for lint errors
npm test           # Run unit tests
npm run build      # Build static export
npm run test:e2e   # Run E2E tests
```

The site deploys automatically via GitHub Actions when changes are merged to `main`.
