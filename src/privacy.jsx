import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { SiteFooter, SiteHeader } from './components/SiteChrome';

function PrivacyPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <SiteHeader ctaLabel="Contact Us" />

      <main id="main-content" className="legal-layout">
        <section className="legal-card" aria-labelledby="privacy-title">
          <h1 id="privacy-title" className="legal-title">Privacy Policy</h1>
          <p className="muted">This page explains how Embronix handles data submitted through this website.</p>

          <section>
            <h2>Data We Collect</h2>
            <p className="muted">We collect only the details you choose to share through this website, including your name and enquiry details submitted through the product enquiry flow or direct contact links.</p>
          </section>

          <section>
            <h2>Why We Collect It</h2>
            <p className="muted">We use this information only to respond to your business inquiry and provide relevant quotation or product information.</p>
          </section>

          <section>
            <h2>How We Use Your Data</h2>
            <p className="muted">Your inquiry data is not sold, not shared for marketing, and is used only to respond to your request. If you choose the WhatsApp enquiry option, your prepared message is opened in WhatsApp and is then handled under WhatsApp&apos;s own terms and privacy practices.</p>
          </section>

          <section>
            <h2>Tracking and Cookies</h2>
            <p className="muted">We do not run third-party tracking tools and do not use advertising cookies on this website.</p>
          </section>

          <section>
            <h2>Retention</h2>
            <p className="muted">Inquiry records are retained only for a reasonable business period needed for response, follow-up, and reference.</p>
          </section>

          <section>
            <h2>Privacy Contact</h2>
            <p className="muted">For privacy concerns, contact us at <a className="contact-link" href="mailto:sales@embronix.in">sales@embronix.in</a>.</p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p className="muted">This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000.</p>
          </section>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrivacyPage />
  </React.StrictMode>
);
