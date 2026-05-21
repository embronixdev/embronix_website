import React from 'react';

export default function About({ about, trustSignals }) {
  return (
    <section id="about" className="section" aria-labelledby="about-title" data-reveal>
      <div className="container-shell section-grid-two">
        <div>
          <p className="section-label">01 - About</p>
          <h2 id="about-title">About Us</h2>
          <p className="body-copy">{about.mission}</p>
          <p className="body-copy">{about.founder}</p>
        </div>
        <div className="trust-grid">
          {trustSignals.map((item) => (
            <article key={item.label} className="trust-card">
              <p className="trust-value">{item.value}</p>
              <p className="trust-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
