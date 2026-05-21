import React from 'react';

export default function Hero({ hero }) {
  return (
    <section
      id="hero"
      className="hero-section"
      aria-labelledby="hero-title"
      data-reveal
      style={{ backgroundImage: `url(${hero.bg})` }}
    >
      {/* Blurred overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container-shell hero-content">
        <p className="hero-badge">Industrial Embroidery Machinery</p>

        <h1 id="hero-title" className="hero-title">{hero.title}</h1>

        <p className="hero-sub">{hero.sub}</p>

        <div className="hero-actions">
          <a className="btn-primary" href="#contact">{hero.primaryCta}</a>
          <a
            className="hero-wa-link"
            href={hero.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">150+</span>
            <span className="hero-stat-label">Machines delivered</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat-value">40+</span>
            <span className="hero-stat-label">Active clients</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat-value">42</span>
            <span className="hero-stat-label">Field engineers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
