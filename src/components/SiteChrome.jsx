import React from 'react';

export function SiteHeader({ ctaLabel = 'Request a Quote' }) {
  return (
    <header className="site-header" aria-label="Primary">
      <div className="container-shell site-nav-row">
        <div>
          <p className="brand-title">Embronix</p>
          <p className="brand-sub">Industrial Embroidery Machinery</p>
        </div>

        <nav aria-label="Header navigation">
          <ul className="nav-links">
            <li><a className="nav-link" href="/#about">About</a></li>
            <li><a className="nav-link" href="/#products">Products</a></li>
            <li><a className="nav-link" href="/#why">Why Embronix</a></li>
            <li><a className="nav-link" href="/#clients">Clients</a></li>
            <li><a className="nav-link" href="/#contact">Contact</a></li>
          </ul>
        </nav>

        <a className="btn-primary" href="/#contact">{ctaLabel}</a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-shell footer-row">
        <p>Embronix</p>
        <p>
          © {year} All rights reserved.{' '}
          <a href="/privacy.html">Privacy Policy</a> | <a href="/terms.html">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
}
