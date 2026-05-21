import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { SiteFooter, SiteHeader } from './components/SiteChrome';

function TermsPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <SiteHeader ctaLabel="Contact Us" />

      <main id="main-content" className="legal-layout">
        <section className="legal-card" aria-labelledby="terms-title">
          <h1 id="terms-title" className="legal-title">Terms & Conditions</h1>
          <p className="muted">These terms apply to use of the Embronix Pvt Ltd website.</p>

          <section>
            <h2>Website Purpose</h2>
            <p className="muted">This website is provided for informational and business inquiry purposes only.</p>
          </section>

          <section>
            <h2>Product Information</h2>
            <p className="muted">Product specifications, availability, and pricing may change without prior notice.</p>
          </section>

          <section>
            <h2>Accuracy of Descriptions</h2>
            <p className="muted">Embronix Pvt Ltd is not liable for any unintentional inaccuracies in product descriptions on this website.</p>
          </section>

          <section>
            <h2>Inquiry Submissions</h2>
            <p className="muted">Submitting an inquiry does not create a binding order, agreement, or contract.</p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p className="muted">All content, text, design elements, and branding on this website belong to Embronix Pvt Ltd.</p>
          </section>

          <section>
            <h2>Jurisdiction</h2>
            <p className="muted">Any disputes are subject to the jurisdiction of courts in Surat, India.</p>
          </section>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TermsPage />
  </React.StrictMode>
);
