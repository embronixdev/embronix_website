# Embronix Corporate Website

A multi-page React application built with Vite and Tailwind CSS.

---

## Technology Stack

- **Core Framework**: React 18
- **Build System & Dev Server**: Vite 5 (configured for multi-page static compilation via Rollup)
- **Styling**: Tailwind CSS v3 & Custom PostCSS design tokens
- **Typography**: Manrope (UI & Body) and Cormorant Garamond (Headers)
- **Post-processing**: PostCSS & Autoprefixer

---

## Features & Architecture

### Multi-Page Build Pipeline
Configured for multi-entry static building using Rollup options within Vite. This allows compiling three distinct pages from a unified development state:
1. Homepage (`index.html` → `/`)
2. Privacy Policy (`privacy.html` → `/privacy`)
3. Terms of Service (`terms.html` → `/terms`)

### Accessibility & Performance
- **Semantic HTML**: Built using HTML5 landmark elements.
- **Keyboard Navigation**: Active skip-to-content links (`.skip-link`) for accessibility.
- **LCP Optimization**: Preloaded vector graphic assets to optimize Largest Contentful Paint.

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

Ensure you have Node.js (v18.x or above) and npm installed.

### 1. Installation

```bash
npm install
```

### 2. Run Locally in Development Mode

```bash
npm run dev
```

### 3. Production Compilation

```bash
npm run build
```

### 4. Local Build Preview

```bash
npm run preview
```

---

## Deployment

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
Static files in the `dist/` directory can be hosted on Vercel, Netlify, or GitHub Pages.

---

*Copyright &copy; 2026 Embronix. All rights reserved.*

---

*Developed and maintained by [nyomik.in](https://nyomik.in).*
