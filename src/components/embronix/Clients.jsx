import React from 'react';

export default function Clients() {
  return (
    <section id="clients" className="section band-paper" aria-labelledby="clients-title" data-reveal>
      <div className="container-shell">
        <p className="section-label">Clients</p>
        <h2 id="clients-title">Clients & Partners</h2>
        <p className="body-copy">Trusted by leading garment houses and export units.</p>
        <div className="logo-strip" aria-label="Client and partner placeholders">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="logo-slot">LOGO</div>
          ))}
        </div>
      </div>
    </section>
  );
}
