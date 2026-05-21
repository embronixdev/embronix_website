# Embronix Corporate Website

A premium, highly performant, and fully responsive corporate web platform for **Embronix Pvt Ltd**, a leading Surat-based manufacturer and supplier of computerized embroidery machinery serving textile and garment units across India since 2008.

Designed with high-fidelity aesthetics, rigorous performance optimization, and accessibility compliance, this codebase serves as the official digital showcase of Embronix's product range, company values, and institutional services.

---

## Technology Stack

The project leverages a highly modern, efficient, and robust frontend stack:

- **Core Framework**: [React 18](https://react.dev/) — Declarative, component-based user interface architecture.
- **Build System & Dev Server**: [Vite 5](https://vite.dev/) — Lightning-fast development environment using native ESM and optimized Rollup production builds.
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) + Custom Vanilla CSS design system (featuring elegant dark themes, fluid typography, and professional color scales).
- **Typography**: [Manrope](https://fonts.google.com/specimen/Manrope) (highly readable sans-serif for UI & body copy) and [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (expressive serif for premium headers).
- **Post-processing**: [PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer) for cross-browser CSS prefix injection.

---

## Features & Architecture

### Premium Design & Aesthetics
- **Cohesive Dark Color System**: Tailored around rich navy blue primary backgrounds (`#0b1a2f`), charcoal secondary containers (`#11161d`), premium gold accents (`#b08d57`), and high-contrast paper elements (`#f5f2ec`).
- **Typography & Scale**: Styled with clamped responsive text dimensions (`clamp()`) to ensure headlines adapt fluidly from mobile displays to ultra-wide desktop monitors without text wrapping artifacts.
- **Micro-Animations & Scroll Interaction**: Built-in `IntersectionObserver`-based scroll reveal effects (`[data-reveal]`) that bring page components to life dynamically. Honors the `prefers-reduced-motion` media query for inclusive accessibility.

### Multi-Page Build Pipeline
Configured for multi-entry static building using Rollup options within Vite. This allows compiling three distinct pages from a unified development state:
1. **Homepage** (`index.html` → `/`)
2. **Privacy Policy** (`privacy.html` → `/privacy`)
3. **Terms of Service** (`terms.html` → `/terms`)

### Accessibility & Performance First
- **Semantic HTML**: Fully structured around HTML5 landmark elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`).
- **Keyboard Navigation**: Active skip-to-content links (`.skip-link`) for immediate screen reader/keyboard navigation bypass.
- **Optimized Assets**: Vectors and optimized SVGs are pre-loaded to achieve near-perfect Core Web Vitals (including excellent Largest Contentful Paint (LCP) performance).

---

## Directory Structure

```text
├── dist/                   # Production build outputs (compiled static files)
├── src/
│   ├── assets/             # Vector images and media assets for product lines
│   ├── components/         # Modular React components
│   │   └── embronix/
│   │       ├── About.jsx   # About segment with trust indicators
│   │       ├── Contact.jsx # Geo-interactive contact card with map embeds
│   │       ├── Footer.jsx  # Page footer
│   │       ├── Hero.jsx    # Premium hero banner & CTA
│   │       ├── Products.jsx# Dynamic grid displaying current machinery models
│   │       ├── TopBar.jsx  # Utility metadata header (GSTIN, helpline, hours)
│   │       ├── WhyUs.jsx   # Embronix core value checklist
│   │       └── data.js     # Centralized content state & data configuration
│   ├── App.jsx             # Root layout for home page and scroll effects
│   ├── index.css           # Core design system tokens, Tailwind directives & global overrides
│   ├── main.jsx            # Entry point for Homepage
│   ├── privacy.jsx         # Entry point for Privacy Policy
│   └── terms.jsx           # Entry point for Terms of Service
├── index.html              # Main HTML template
├── privacy.html            # Privacy Page HTML template
├── terms.html              # Terms Page HTML template
├── vite.config.js          # Multi-page Vite compilation configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS config
├── package.json            # Scripts & project dependencies
└── README.md               # Documentation (this file)
```

---

## Development & Build Guide

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.x or above recommended) and `npm` installed.

### 1. Installation

Clone the repository and install all development dependencies:

```bash
npm install
```

### 2. Run Locally in Development Mode

Spin up the local development server (binds to `0.0.0.0` for local network testing, defaulting to port `4173` or similar):

```bash
npm run dev
```

### 3. Production Compilation

Build optimized, minified, and cache-busted production assets. The output is placed in the `/dist` directory:

```bash
npm run build
```

### 4. Local Build Preview

Spin up a local server to test the compiled output under the `/dist` directory before initiating live deployment:

```bash
npm run preview
```

---

## Deployment

Since the compilation compiles down to pure static assets (HTML, CSS, JS, SVGs), the application can be hosted instantly on any modern CDN or static hosting platform:

### Firebase Hosting Setup

To deploy via Firebase, initialize standard hosting:
```bash
npx -y firebase-tools@latest init hosting
```
* Configure the public directory as `dist`.
* Build and deploy:
```bash
npm run build
npx -y firebase-tools@latest deploy --only hosting
```

### Alternative Deployments
You can drag-and-drop the generated `dist/` directory directly onto platforms like **Vercel**, **Netlify**, or configure a **GitHub Actions** workflow to publish automatically to **GitHub Pages**.

---

## Machinery Portfolio & Specs

The website showcases five core commercial product lines manufactured by Embronix:

| Model | Classification | Target Environment | Key Specifications |
| :--- | :--- | :--- | :--- |
| **EMX-915** | Single-Head 15-Needle | Boutique, sampling, and small-batch production | Up to 1,000 SPM, 15-needle configuration, tubular & flat frame support |
| **EMX-624** | 6-Head 24-Needle | Balanced throughput for contract embroidery units | 6 heads, 24 needles, high-stability production-grade frame |
| **EMX-1208** | 12-Head 8-Needle | High-volume setups and export-driven textile factories | 12-head line architecture, high-speed stitch control, repeat-optimized |
| **EMX-CAP** | Cap & Tubular Frame | Curved-surface applications and structured caps | Cap driver compatibility, tubular frame precision, quick fixture transitions |
| **EMX-SEQ** | Sequin & Cording | Value-added embellishment and decorative stitching | Sequin feed attachment, cording support, programmable decorative sequences |

---

## Institutional Reference Data

- **Headquarters**: F-8, Silicon Shoppers, Udhana, Surat, Gujarat, India
- **GSTIN**: `24AAMFE8719N1ZT`
- **Helpline**: +91 8866280427 (WhatsApp enabled)
- **General Mail**: sales@embronix.in
- **Operating Hours**: Monday - Saturday | 9:30 AM - 6:30 PM (IST)
- **Banking Partner**: HDFC Bank, Ring Road Branch, Surat

---

*Copyright &copy; 2008-2026 Embronix Pvt Ltd. All rights reserved.*
