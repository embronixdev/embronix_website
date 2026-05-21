import React from 'react';

export default function Products({ products }) {
  return (
    <section id="products" className="section band-dark" aria-labelledby="products-title" data-reveal>
      <div className="container-shell">
        <p className="section-label">02 - Products</p>
        <h2 id="products-title">Product Range</h2>
        <div className="products-layout">
          {products.map((item) => (
            <article key={item.name} className="product-card">
              <img src={item.image} alt={`${item.name} machine placeholder`} className="product-image" />
              <p className="product-model">{item.name}</p>
              <h3>{item.title}</h3>
              <p className="product-one-line">{item.oneLine}</p>
              <ul>
                {item.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <a href="#contact" className="enquire-link">Enquire</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
