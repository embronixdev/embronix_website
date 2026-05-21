import React from 'react';

export default function Contact({ contacts }) {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title" data-reveal>
      <div className="container-shell">
        <p className="section-label">Contact</p>
        <h2 id="contact-title">Get in Touch</h2>
        <div className="contact-columns">
          <div>
            <h3>Registered Office</h3>
            <p className="body-copy" style={{ whiteSpace: 'pre-line' }}>{contacts.office}</p>
            <a className="text-link" href={contacts.map} target="_blank" rel="noopener noreferrer">View on map</a>
            <iframe
              className="map-embed"
              title="Embronix location map"
              src={contacts.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3>Reach Us</h3>
            <p><a className="text-link" href={`tel:${contacts.phone.replace(/\s/g, '')}`}>{contacts.phone}</a></p>
            <p><a className="text-link" href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
            <a className="btn-primary" href={contacts.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div>
            <h3>Compliance</h3>
            <p className="body-copy"><strong>GSTIN:</strong> {contacts.gst}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
