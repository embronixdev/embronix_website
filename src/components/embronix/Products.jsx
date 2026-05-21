import React, { useState } from 'react';
import ProductModal from './ProductModal';

export default function Products({ products }) {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <section id="products" className="section band-dark" aria-labelledby="products-title" data-reveal>
      <div className="container-shell">
        <p className="section-label">Products</p>
        <h2 id="products-title">Product Range</h2>
        <div className="products-layout">
          {products.map((item) => (
            <article key={item.name} className="product-card">
              <div className="product-image-wrapper">
                <img src={item.image} alt={`${item.name} industrial embroidery machine`} className="product-image" />
                <div className="product-image-overlay"></div>
              </div>
              <div className="product-card-content">
                <span className="product-model">{item.name}</span>
                <h3>{item.title}</h3>
                <p className="product-one-line">{item.oneLine}</p>
                <button 
                  type="button" 
                  className="enquire-link"
                  onClick={() => setActiveProduct(item)}
                >
                  View Details & Quote <span className="cta-arrow">&rarr;</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProductModal 
        product={activeProduct} 
        onClose={() => setActiveProduct(null)} 
      />
    </section>
  );
}
