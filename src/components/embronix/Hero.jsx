import React from 'react';

export default function Hero({ hero }) {
  return (
    <section id="hero" className="section hero-section" aria-labelledby="hero-title" data-reveal>
      <div className="container-shell hero-layout">
        <div className="hero-copy-wrap">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero-title">{hero.title}</h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#contact">{hero.primaryCta}</a>
            <a className="btn-secondary" href={hero.catalogueHref}>{hero.catalogueLabel}</a>
          </div>
        </div>
        <figure className="hero-image-wrap">
          <img src={hero.image} alt="Industrial multi-head embroidery machine placeholder" />
          <figcaption className="hero-image-meta">
            <span>EMX-1208 SERIES</span>
            <span>FACILITY · SACHIN GIDC, SURAT</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
