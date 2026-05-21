import React from 'react';

export default function TopBar({ utility }) {
  return (
    <div className="top-utility" aria-label="Company utility details">
      <div className="container-shell top-utility-inner">
        <span>{utility.gst}</span>
        <span>{utility.hours}</span>
        <a href={`tel:${utility.phone.replace(/\s/g, '')}`}>{utility.phone}</a>
      </div>
    </div>
  );
}
