import React from 'react';

export default function About({ about, trustSignals }) {
  return (
    <section id="about" className="section" aria-labelledby="about-title" data-reveal>
      <div className="container-shell about-layout-grid">
        <div className="about-header-grid">
          <div className="about-intro-col">
            <p className="section-label">About</p>
            <h2 id="about-title" className="about-title-large">{about.headline}</h2>
            <p className="body-copy about-mission">{about.mission}</p>
          </div>
          
          <div className="about-stats-col">
            <div className="trust-grid-horizontal-top">
              {trustSignals.map((item) => (
                <article key={item.label} className="trust-card-premium">
                  <div className="trust-accent-bar" />
                  <div className="trust-card-body">
                    <p className="trust-value-large">{item.value}</p>
                    <p className="trust-label-premium">{item.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="about-details-grid">
          <div className="about-pledge-col">
            <div className="founder-pledge">
              <span className="pledge-label">The Embronix Pledge</span>
              <blockquote>"{about.founder}"</blockquote>
              <cite className="pledge-author">— Executive Management, Embronix</cite>
            </div>
          </div>

          <div className="about-pillars-col">
            <div className="pillars-list">
              {about.pillars && about.pillars.map((pillar) => (
                <div key={pillar.title} className="pillar-item">
                  <div className="pillar-indicator" />
                  <div className="pillar-text">
                    <h4>{pillar.title}</h4>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
