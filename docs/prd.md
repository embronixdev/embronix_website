# Product Requirements Document (PRD)

## Project: Embronix Corporate Web Platform

---

## 1. Document Control

- **Version**: 1.0.0
- **Status**: Approved
- **Author**: Technical Architecture Team
- **Target Release**: Q2 2026
- **Last Updated**: 2026-05-21

---

## 2. Product Overview & Strategic Objectives

### 2.1 Background
Embronix Pvt Ltd (established in 2008 in Surat, Gujarat) is a premier institutional manufacturer and supplier of computerized embroidery machinery. The company has delivered over 1,400 machines across 18 Indian states, catering to boutiques, contract embroidery units, and high-volume textile exporters.

### 2.2 Objective
The objective is to establish a high-performance, single-page application (SPA) style corporate landing platform featuring dedicated multi-page static sub-routes for legal compliance (Terms & Privacy). The platform serves as the central digital showcase, credibility engine, and lead-generation portal for Embronix's computerized machinery range.

### 2.3 Success Metrics
- **Performance**: Perfect or near-perfect Google Lighthouse performance scores (specifically target Largest Contentful Paint [LCP] < 1.5s).
- **Compliance**: Flawless static delivery of GSTIN compliance, privacy policy, and terms of service.
- **Accessibility**: 100% WCAG 2.1 AA keyboard navigability and compatibility with modern screen readers.
- **Responsive Fidelity**: Seamless rendering across small mobile viewport widths (320px) up to high-resolution desktop viewports (1920px+).

---

## 3. Target Audience & User Personas

1. **Boutique & Small-Batch Creators (EMX-915 Focus)**
   * *Profile*: Custom garment designers and small-scale boutique operators.
   * *Needs*: Precision, compact equipment footprint, simple maintenance, and tubular frame versatility.
2. **Contract Embroidery & Batch Units (EMX-624 Focus)**
   * *Profile*: Industrial units taking medium-scale uniform, dress, and garment orders.
   * *Needs*: Multi-head throughput, continuous frame stability, and robust warranty/spare-parts logistics.
3. **High-Volume Textile Exporters (EMX-1208 Focus)**
   * *Profile*: Large factory operations in textile hubs (e.g., Surat GIDC, Gwalior, Tiruppur, Ludhiana).
   * *Needs*: Multi-head line architecture, high stitches-per-minute (SPM) capacity, programmable cording/sequin attachments, and lifetime technical SLA support.

---

## 4. Technical Architecture & System Design

### 4.1 System Diagram & Tech Stack
The platform is designed as a modular static client-side application built with modern compilation systems:

- **Frontend Core**: React 18.3 (Component-driven view layer)
- **Compilation Tooling**: Vite 5.4 (Rapid ESM development server, ultra-fast Hot Module Replacement)
- **Build Engine**: Rollup (Configured for multi-entry code splitting to compile discrete static HTML outputs)
- **Styling Pipeline**: Tailwind CSS v3 + PostCSS + Autoprefixer
- **Typography Engine**: Google Fonts Integration
  - Primary UI & Body: **Manrope** (Clean geometric sans-serif)
  - Headers & Accents: **Cormorant Garamond** (Premium, elegant serif)

### 4.2 Multi-Page Routing & Compilation
To maximize SEO indexability and simplify hosting requirements, Vite is configured to compile three separate physical HTML page inputs:
1. `index.html` (Compiles to `/` via `src/main.jsx`)
2. `privacy.html` (Compiles to `/privacy` via `src/privacy.jsx`)
3. `terms.html` (Compiles to `/terms` via `src/terms.jsx`)

---

## 5. Functional Requirements & Feature Catalog

### 5.1 Global Shared Shell Component (`SiteChrome`)
- **Top Utility bar**:
  - Render institutional parameters: GSTIN (`24AAMFE8719N1ZT`), Operating Hours (`Mon-Sat 9:30-18:30 IST`), and a click-to-call phone number link (`+91 8866280427`).
- **Sticky Navigation Header**:
  - Logo placement with Cormorant Garamond serif branding.
  - Smooth-scrolling navigation anchors linking directly to `#about`, `#products`, `#why`, and `#contact` sections.
  - Prominent "Request Quote" CTA button linking to the contact section.
  - Blur-based background styling (`backdrop-filter: blur(6px)`) with transparent color mixing.

### 5.2 Landing Page Features (`App.jsx`)

#### 5.2.1 Hero Section
- **Visual Presentation**: Dual-column layout matching a strong typography headline against an industrial multi-head machinery figure.
- **Copy Hierarchy**: Eyebrow text, high-impact headline, subhead, and prominent action buttons.
- **CTA Actions**: Primary CTA "Request a Quote" (anchors to `#contact`) and secondary CTA "Download Catalogue (PDF)" (links to catalogue asset).
- **Machine Figcaption**: Displays specific machinery series (`EMX-1208`) and the facility location (`Sachin GIDC, Surat`) to ground brand authenticity.

#### 5.2.2 About & Credibility Section
- **Corporate Mission**: Focuses on equipment consistency, long operating life, and service continuity.
- **Trust Indicators (Quantitative metrics)**:
  - Year Established: `2008`
  - Machines Delivered: `1,400+`
  - Active Institutional Clients: `320+`
  - States Serviced: `18`

#### 5.2.3 Product Showcase Section
- **Layout Architecture**: Responsive grid matching different screen-size parameters (3-column layout for larger viewports, collapsing to 1-column on mobile screens).
- **Product Portfolio & Catalog Details**:
  - **EMX-915**: Single-Head 15-Needle, compact boutique platform. Specs: Up to 1,000 SPM, 15-needle, tubular/flat frame support.
  - **EMX-624**: 6-Head 24-Needle contract batch machine. Specs: 6 heads, 24 needles, high-stability production frame.
  - **EMX-1208**: 12-Head 8-Needle high-volume industrial export machine. Specs: 12 heads, 8 needles, high-speed stitch control, repeat-optimized.
  - **EMX-CAP**: Specialized Cap & Tubular frame machine. Specs: Cap driver compatible, tubular frame precision, quick fixtures.
  - **EMX-SEQ**: Sequin & Cording Attachment series. Specs: Sequin feed attachment, cording support, programmable sequences.
- **Lead Capture Hook**: Every product card contains a direct "Enquire" link anchoring to the contact form.

#### 5.2.4 "Why Us" Value Checklist
- High-fidelity numbered grid showcasing core competitive advantages:
  1. In-house engineering and rigorous quality control.
  2. 24-month comprehensive institutional warranty.
  3. Pan-India service network (42 engineers across 14 cities).
  4. Genuine spare parts & lifetime technical support availability.

#### 5.2.5 Clients & Partners Strip
- Inline logo horizontal marquee/strip displaying placeholder slots for major garment houses and export units to build industry trust.

#### 5.2.6 Geo-Interactive Contact & Compliance Section
- **Registered Office Details**: Registered address at `F-8, Silicon Shoppers, Udhana, Surat`.
- **Location Map**: High-performance interactive Google Maps `<iframe>` with lazy loading enabled to preserve initial viewport rendering speeds.
- **Direct Contact Hooks**: Click-to-call phone, direct email link, and a custom API WhatsApp button (`https://wa.me/918866280427`).
- **Banking Compliance Details**: Displays HDFC Bank (Ring Road Branch, Surat) details alongside the official GSTIN.

### 5.3 Legal Sub-Pages
- Dedicated standalone static views (`privacy.jsx` and `terms.jsx`) mirroring the shared `SiteChrome` design.
- **Privacy Policy**: Covers localized data collection rules (name, company, phone, email), exclusion of cookies/ad-tracking, retention limits, and compliance with the Indian Information Technology Act, 2000.
- **Terms of Service**: Details equipment ordering, warranty provisions, service limitations, liability caps, and legal jurisdiction in Surat, Gujarat.

---

## 6. Non-Functional Requirements & System Safeguards

### 6.1 Performance & Resource Loading
- **IntersectionObserver Animations**: Dynamic visual reveals (`data-reveal`) triggered via scroll. Elements must animate only when scrolling into view.
- **Reduced Motion Support**: Immediate override on scroll animations when system settings detect `prefers-reduced-motion: reduce`, ensuring instantaneous display.
- **Asset Optimization**: High-efficiency SVG vector graphics used for product illustrations to eliminate rasterization lag.
- **Lazy Loading**: Map embed iframes and heavy media elements must utilize native browser lazy-loading attributes (`loading="lazy"`).

### 6.2 Visual Aesthetics & Branding Standards
- **Premium Color Palette**:
  - Primary Background: Navy Blue (`#0b1a2f`)
  - Secondary Container Background: Charcoal (`#11161d`)
  - Typography Main: Light Steel (`#dbe2ee`)
  - Muted Copy: Steel Grey (`#a9b4c8`)
  - Primary Accent & Border color: Warm Gold (`#b08d57`)
  - Accent Containers: Cream Paper (`#f5f2ec`) with deep Ink text (`#1a2434`) for high-contrast sections.

### 6.3 Accessibility & Quality Control
- **Skip Navigation**: Prepend an active screen-reader bypass link (`.skip-link`) at the start of every page, pointing to `#main-content`.
- **Semantic landmarks**: Strict layout using `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` elements.
- **Interactive States**: Clearly styled keyboard `:focus-visible` highlights, visible tap-targets on mobile viewports (minimum 44x44px).
- **SEO & Social Optimization**: Every page output has unique descriptive titles, meta keywords, open-graph cards (`og:title`, `og:description`), and language specifiers (`lang="en"`).

---

## 7. Deployment & Domain Strategy

### 7.1 Hosting Target
- **Platform**: Vercel Free Tier.
- **Configuration**: Standard static application build. Build command configured to `npm run build`, and public directory target set to `dist`.

### 7.2 Domain Routing (Hostinger DNS Mapping)
- Root domain routed to Vercel global edge A records pointing to IP `76.76.21.21`.
- `www` subdomain routed to `cname.vercel-dns.com` via CNAME mapping inside the Hostinger DNS Zone Editor.
- Automatic Let's Encrypt SSL configuration triggered inside Vercel's Domain Settings panel.
