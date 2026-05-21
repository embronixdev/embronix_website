import React from 'react';

export default function WhyUs({ whyUs }) {
  return (
    <section id="why" className="section" aria-labelledby="why-title" data-reveal>
      <div className="container-shell">
        <p className="section-label">03 - Why Embronix</p>
        <h2 id="why-title">Why Embronix</h2>
        <div className="why-list">
          {whyUs.map((item, idx) => (
            <article key={item} className="why-item">
              <p className="why-number">{String(idx + 1).padStart(2, '0')}</p>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
