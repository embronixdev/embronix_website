import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ProductModal({ product, onClose }) {
  // ── ALL hooks must be called unconditionally (Rules of Hooks) ──
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const [formState, setFormState] = useState('idle'); // idle | submitting | success
  const [wasValidated, setWasValidated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const hasMultipleImages = Boolean(product) && Array.isArray(product.images) && product.images.length > 1;

  // Reset form + slide when a new product opens
  useEffect(() => {
    if (!product) return;
    setFormData({
      name: '',
      message: `Hello, I would like to request technical specifications, pricing, and availability details for the Embronix ${product.name} (${product.title}).`
    });
    setFormState('idle');
    setWasValidated(false);
    setCurrentSlide(0);
    setIsPaused(false);
  }, [product]);

  // Carousel autoplay
  useEffect(() => {
    if (!hasMultipleImages || isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % product.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [hasMultipleImages, isPaused, product]);

  // Keyboard + scroll lock — cleanup ALWAYS restores scroll
  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // remove inline style entirely
    };
  }, [product, onClose]);

  // ── Early return AFTER all hooks ──
  if (!product) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildWhatsAppMessage = () => `Hello Embronix!

I would like to request a quotation for:
*Machine*: ${product.name} (${product.title})

*Name*: ${formData.name}

*Requirement Summary*:
${formData.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!e.currentTarget.checkValidity()) {
      setWasValidated(true);
      return;
    }
    
    setFormState('submitting');
    
    const waMessage = buildWhatsAppMessage();

    const whatsappUrl = `https://wa.me/918866280427?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormState('success');
    }, 800);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return createPortal(
    <div className="modal-overlay" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content is-visible">
        <button className="modal-close" onClick={onClose} aria-label="Close details dialog">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="modal-body-grid">
          {/* Left Column: Product Technical Details */}
          <div className="modal-details-col">
            <span className="product-model">{product.name}</span>
            <h2 id="modal-title">{product.title}</h2>
            
            {hasMultipleImages ? (
              <figure 
                className="modal-image-wrap carousel-container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {product.images.map((imgSrc, idx) => (
                    <img 
                      key={idx} 
                      src={imgSrc} 
                      alt={`${product.name} industrial embroidery machine view ${idx + 1}`} 
                      className={`carousel-slide ${idx === currentSlide ? 'active' : ''}`}
                    />
                  ))}
                </div>
                
                {/* Chevron Navigation Controls */}
                <button 
                  type="button"
                  className="carousel-btn prev-btn" 
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + product.images.length) % product.images.length)}
                  aria-label="Previous image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button 
                  type="button"
                  className="carousel-btn next-btn" 
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % product.images.length)}
                  aria-label="Next image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Indicator Dots */}
                <div className="carousel-dots">
                  {product.images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </figure>
            ) : (
              <figure className="modal-image-wrap">
                <img src={product.image} alt={`${product.name} industrial embroidery machine`} />
              </figure>
            )}
            
            <p className="product-desc">{product.oneLine}</p>
            
            <div className="modal-specs-wrap">
              <h3>Features & Highlights</h3>
              <ul className="modal-specs-list" style={{ marginBottom: '24px' }}>
                {product.specs.map((spec) => (
                  <li key={spec}>
                    <span className="spec-bullet"></span>
                    {spec}
                  </li>
                ))}
              </ul>

              {product.techParams && (
                <>
                  <h3 style={{ marginTop: '24px' }}>Technical Parameters</h3>
                  <table className="tech-specs-table">
                    <tbody>
                      {Object.entries(product.techParams).map(([key, val]) => (
                        <tr key={key}>
                          <th>{key}</th>
                          <td>{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="modal-form-col">
            {formState === 'success' ? (
              <div className="form-success-state">
                <div className="success-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3>Opening WhatsApp...</h3>
                <p>Thanks, <strong>{formData.name}</strong>. Your enquiry for <strong>{product.name}</strong> is ready.</p>
                <p className="muted" style={{ marginBottom: '24px' }}>We are opening WhatsApp with your message prepared. If it does not open, use the button below.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                  <a 
                    href={`https://wa.me/918866280427?text=${encodeURIComponent(buildWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px', fontWeight: '600' }}
                  >
                    Open WhatsApp Chat
                  </a>
                  <button className="enquire-link" onClick={onClose} style={{ alignSelf: 'center', marginTop: '8px' }}>
                    Back to Showcase
                  </button>
                </div>
              </div>
            ) : (
              <>
                <span className="form-badge">Institutional Quote Enquiry</span>
                <h3 className="modal-form-title">Request Pricing & Specs</h3>
                <p className="modal-form-intro">Share your name and a short requirement summary. We will open WhatsApp with a ready-to-send enquiry for the {product.name}.</p>
                
                <form className={`modal-form ${wasValidated ? 'was-validated' : ''}`} onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name">Your Name <span className="req-dot">•</span></label>
                    <div className="input-wrapper">
                      <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g., Rajesh Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={formState === 'submitting'}
                      />
                    </div>
                    <span className="form-error-msg">
                      <svg className="err-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      Please enter your name.
                    </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Requirement Details</label>
                    <div className="input-wrapper">
                      <svg className="input-icon textarea-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={formState === 'submitting'}
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className={`btn-primary submit-btn ${formState === 'submitting' ? 'loading' : ''}`}
                    disabled={formState === 'submitting'}
                  >
                    {formState === 'submitting' ? (
                      <>
                        <span className="spinner"></span>
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        <svg className="wa-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.019-5.101-2.871-6.956C16.611 1.99 14.137.972 11.99 1.002c-5.43.003-9.853 4.414-9.856 9.856 0 1.754.463 3.467 1.341 4.975L2.483 20.35l4.164-1.196zm12.39-7.25c-.27-.135-1.602-.79-1.85-.88-.25-.09-.43-.135-.61.135-.18.27-.7 1.135-.86 1.305-.16.17-.32.19-.59.05-.27-.135-1.144-.421-2.18-1.346-.807-.72-1.353-1.61-1.512-1.88-.16-.27-.015-.417.12-.552.12-.123.27-.315.405-.473.135-.158.18-.27.27-.45.09-.18.045-.338-.02-.473-.067-.135-.61-1.472-.837-2.013-.22-.53-.44-.457-.61-.466-.156-.008-.337-.008-.517-.008-.18 0-.473.067-.72.338-.247.27-.945.923-.945 2.25s.967 2.61 1.102 2.79c.135.18 1.902 2.904 4.607 4.07 2.705 1.166 2.705.778 3.192.734.487-.044 1.574-.643 1.797-1.263.225-.62.225-1.15.158-1.263-.067-.113-.247-.18-.517-.315z"/>
                        </svg>
                        Request Quote via WhatsApp
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
