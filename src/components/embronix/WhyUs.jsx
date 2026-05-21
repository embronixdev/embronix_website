import React from 'react';

export default function WhyUs({ whyUs }) {
  return (
    <section id="why" className="section" aria-labelledby="why-title" data-reveal>
      <div className="container-shell">
        <div className="why-header-grid">
          <div className="why-header-left">
            <span className="section-label">Institutional Excellence</span>
            <h2 id="why-title">Why Embronix is the Industry Choice</h2>
          </div>
          <div className="why-header-right">
            <p className="why-header-desc">
              In high-volume textile manufacturing, equipment downtime directly compromises profitability. 
              We do not simply supply machinery — we deliver a complete engineering security system engineered 
              for structural rigidity, immediate engineer dispatch, and continuous operational uptime.
            </p>
          </div>
        </div>

        <div className="why-list">
          {whyUs.map((item, idx) => (
            <article key={item.title} className="why-item">
              <div className="why-item-header">
                <span className="why-number-badge">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <div className="why-item-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
