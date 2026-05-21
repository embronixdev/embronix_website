import heroImage from '../../assets/hero-machine.svg';
import emx915 from '../../assets/emx-915.svg';
import emx624 from '../../assets/emx-624.svg';
import emx1208 from '../../assets/emx-1208.svg';
import emxCap from '../../assets/emx-cap.svg';
import emxSeq from '../../assets/emx-seq.svg';

export const utility = {
  gst: 'GSTIN: 24AAMFE8719N1ZT',
  hours: 'Mon-Sat 9:30-18:30 IST',
  phone: '+91 8866280427'
};

export const hero = {
  eyebrow: 'Established 2008 · Surat, Gujarat',
  title: "Precision embroidery machinery for India's garment and textile industry.",
  sub: 'Manufacturing, supplying and servicing computerised embroidery machines across 18 states since 2008.',
  primaryCta: 'Request a Quote',
  catalogueLabel: 'Download Catalogue (PDF)',
  catalogueHref: '#',
  image: heroImage
};

export const about = {
  mission:
    'Embronix Pvt Ltd builds and supplies computerised embroidery machinery for production environments that demand consistency, service continuity, and long operating life.',
  founder:
    'Founder note: We are committed to equipment reliability, transparent support, and disciplined delivery standards for institutional textile operations.'
};

export const trustSignals = [
  { value: '2008', label: 'Year established' },
  { value: '1,400+', label: 'Machines delivered' },
  { value: '320+', label: 'Active institutional clients' },
  { value: '18', label: 'States serviced' }
];

export const products = [
  {
    name: 'EMX-915',
    title: 'Single-Head 15-Needle Embroidery Machine',
    oneLine: 'Compact platform for boutique and small-batch production.',
    specs: ['Up to 1,000 SPM', '15-needle configuration', 'Tubular and flat frame support'],
    image: emx915
  },
  {
    name: 'EMX-624',
    title: '6-Head 24-Needle Production Machine',
    oneLine: 'Balanced throughput for uniform and contract embroidery units.',
    specs: ['6 heads, 24 needles', 'Production-grade frame stability', 'Multi-order batch handling'],
    image: emx624
  },
  {
    name: 'EMX-1208',
    title: '12-Head 8-Needle High-Speed Machine',
    oneLine: 'High-volume setup for export-driven factories.',
    specs: ['12-head line architecture', 'High-speed stitch control', 'Optimised for repeat programs'],
    image: emx1208
  },
  {
    name: 'EMX-CAP',
    title: 'Specialised Cap & Tubular Frame Machine',
    oneLine: 'Dedicated system for structured cap and curved-surface applications.',
    specs: ['Cap driver compatibility', 'Tubular frame precision', 'Quick fixture transitions'],
    image: emxCap
  },
  {
    name: 'EMX-SEQ',
    title: 'Sequin & Cording Attachment Series',
    oneLine: 'Attachment-ready platform for value-added embellishment work.',
    specs: ['Sequin feed attachment', 'Cording support', 'Programmable decorative sequences'],
    image: emxSeq
  }
];

export const whyUs = [
  'In-house engineering & quality control',
  '24-month comprehensive warranty',
  'Pan-India service network (42 engineers, 14 cities)',
  'Genuine spare parts & lifetime technical support'
];

export const contacts = {
  office: 'F-8, Silicon Shoppers, Udhana, Surat',
  map: 'https://maps.google.com',
  mapEmbed: 'https://www.google.com/maps?q=21.172012,72.839019&z=17&output=embed',
  phone: '+91 8866280427',
  email: 'sales@embronix.in',
  whatsapp: 'https://wa.me/918866280427',
  gst: '24AAMFE8719N1ZT',
  bank: 'HDFC Bank, Ring Road Branch, Surat'
};
