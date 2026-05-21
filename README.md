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

## Deployment & Hosting

The website is hosted on the **Vercel Free Tier** with a custom domain managed via **Hostinger**.

### Vercel Deployment

1. **GitHub Integration (Recommended)**:
   * Push the repository to GitHub.
   * Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New** > **Project**.
   * Import this repository.
   * In **Build & Development Settings**, configure:
     * **Framework Preset**: `Vite` (Vercel automatically detects this)
     * **Build Command**: `npm run build`
     * **Output Directory**: `dist`
   * Click **Deploy**. Vercel will automatically build and deploy every push to the `main` branch.

2. **Local Vercel CLI Deployment (Alternative)**:
   ```bash
   npm i -g vercel
   vercel
   ```
   Follow the CLI prompts to link and deploy the project.

### Custom Domain Configuration (Hostinger)

To configure the custom domain purchased from Hostinger:

1. **Add Domain to Vercel**:
   * In your Vercel project, go to **Settings** > **Domains**.
   * Enter your custom domain and click **Add**.

2. **Configure DNS Records in Hostinger**:
   * Log into your **Hostinger Control Panel (hPanel)**.
   * Navigate to **Domains** > Select your domain > **DNS / Nameservers**.
   * Add/update the following records as requested by Vercel:
     * **A Record** (for root domain):
       * **Type**: `A`
       * **Name/Host**: `@`
       * **Points to**: `76.76.21.21`
       * **TTL**: `3600` (or default)
     * **CNAME Record** (for `www` subdomain):
       * **Type**: `CNAME`
       * **Name/Host**: `www`
       * **Points to**: `cname.vercel-dns.com`
       * **TTL**: `3600` (or default)
   * Vercel will automatically provision a free Let's Encrypt SSL certificate once DNS propagation is complete (usually takes from a few minutes up to 24 hours).

---

*Copyright &copy; 2026 Embronix. All rights reserved.*

---

*Developed and maintained by [nyomik.in](https://nyomik.in).*
