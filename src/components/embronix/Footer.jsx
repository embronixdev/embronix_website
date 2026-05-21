import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-shell">
        <div className="footer-main-row">
          <div className="footer-left">
            <span>Embronix · © 2026</span>
            <span className="footer-divider">·</span>
            <a href="/privacy.html">Privacy</a>
            <span className="footer-divider">·</span>
            <a href="/terms.html">Terms</a>
          </div>
          <div className="footer-right">
            GSTIN: 24AAMFE8719N1ZT
          </div>
        </div>
        <div className="footer-bottom-row">
          <p>
            This website is made and maintained by{' '}
            <a href="https://nyomik.in" target="_blank" rel="noopener noreferrer" className="nyomic-link">
              Nyomik Tech and Creative Studio
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
