import React, { useEffect, useState } from 'react';
import TopBar from './components/embronix/TopBar';
import Hero from './components/embronix/Hero';
import About from './components/embronix/About';
import Products from './components/embronix/Products';
import WhyUs from './components/embronix/WhyUs';
import Contact from './components/embronix/Contact';
import Footer from './components/embronix/Footer';
import { about, contacts, hero, products, trustSignals, utility, whyUs } from './components/embronix/data';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      document.querySelectorAll('[data-reveal]').forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <TopBar utility={utility} />
      <header className="site-nav" aria-label="Primary">
        <div className="container-shell site-nav-inner">
          <a className="brand-mark" href="#hero">EMBRONIX</a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <ul className="nav-list">
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="nav-actions">
            <a className="btn-primary nav-cta" href="#contact">Request Quote</a>
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <div
          id="mobile-nav-panel"
          className={`mobile-nav-panel${mobileMenuOpen ? ' is-open' : ''}`}
        >
          <nav className="container-shell" aria-label="Mobile navigation">
            <ul className="mobile-nav-list">
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a></li>
              <li><a href="#why" onClick={() => setMobileMenuOpen(false)}>Why Us</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>
            <a className="btn-primary mobile-nav-cta" href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Request Quote
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <Hero hero={hero} />
        <About about={about} trustSignals={trustSignals} />
        <Products products={products} />
        <WhyUs whyUs={whyUs} />
        <Contact contacts={contacts} />
      </main>

      <Footer />
    </>
  );
}

export default App;
