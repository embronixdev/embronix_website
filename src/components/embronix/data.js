import heroBg from '../../assets/hero-bg.jpg';
import gt2408 from '../../assets/gt2408.png';
import gt2408Full from '../../assets/gt2408_full.png';
import gt2408Clips from '../../assets/gt2408_clips.png';
import gt2408Heads from '../../assets/gt2408_heads.png';
import gt930 from '../../assets/gt930.png';
import gt930Full from '../../assets/gt930_full.png';
import gt930Heads from '../../assets/gt930_heads.png';
import gt930Detail from '../../assets/gt930_detail.png';
import gt930Spools from '../../assets/gt930_spools.png';
import gm920 from '../../assets/gm920.png';
import gm920Full from '../../assets/gm920_full.png';
import gm920Detail1 from '../../assets/gm920_detail1.png';
import gm920Detail2 from '../../assets/gm920_detail2.png';
import gt906 from '../../assets/gt906.png';
import gt906Full from '../../assets/gt906_full.png';
import gt906Detail1 from '../../assets/gt906_detail1.png';
import gt906Detail2 from '../../assets/gt906_detail2.png';
import gtl906 from '../../assets/gtl906.png';
import gtl906Full from '../../assets/gtl906_full.png';
import gtl906Detail1 from '../../assets/gtl906_detail1.png';
import gtl906Detail2 from '../../assets/gtl906_detail2.png';

export const utility = {
  gst: 'GSTIN: 24AAMFE8719N1ZT',
  hours: 'Mon-Sat 9:30 AM - 6:30 PM IST',
  phone: '+91 8866280427'
};

export const hero = {
  title: "Computerised embroidery machines for India's textile industry.",
  sub: 'Supplying and servicing multi-head embroidery machines.',
  primaryCta: 'Request a Quote',
  whatsapp: 'https://wa.me/918866280427',
  bg: heroBg
};

export const about = {
  headline: 'Built for continuous production. Engineered for zero downtime.',
  mission:
    'Embronix supplies and services heavy-duty computerised embroidery machinery for high-volume production environments where structural rigidity, speed consistency, and service continuity are non-negotiable.',
  founder:
    'Our mandate is simple: zero compromise on equipment build quality, disciplined delivery standards, and transparent after-sales engineering support for institutional textile operations.',
  pillars: [
    { title: 'Vibration-Resistant Frames', desc: 'Heavy-duty bridge structures built to withstand maximum RPM continuous loads.' },
    { title: 'Pan-India Engineering Support', desc: 'A dedicated team of 42 field engineers covering major textile hubs.' },
    { title: 'Direct Institutional Pricing', desc: 'Eliminating intermediaries to ensure lower equipment lifecycle costs.' }
  ]
};

export const trustSignals = [
  { value: '150+', label: 'Machines delivered' },
  { value: '40+', label: 'Active institutional clients' }
];

export const products = [
  {
    name: 'GT2408',
    title: 'High-Speed Multi-Head with Vertical Clips System',
    oneLine: 'Engineered with vertical automatic clips for continuous large-scale fabric production.',
    specs: [
      'Vertical automatic pneumatic clip frame',
      'Super multi-needle, multi-color support',
      'Designed for continuous sarees and massive fabric runs',
      'Integrated high-precision guide rail systems'
    ],
    techParams: {
      'Max Speed': '1,500 RPM',
      'Number of Heads': '8 Heads (Customizable)',
      'Stitches / Needles': '24 Needles',
      'Head Distance': '700 mm',
      'Embroidery Area': '1550 × 1220 mm',
      'Special Features': 'Pneumatic vertical clip frame, heavy-duty bridge beam structure'
    },
    image: gt2408Full,
    images: [gt2408Full, gt2408Clips, gt2408Heads]
  },
  {
    name: 'GT930',
    title: 'High-Speed Multi-Head with Horizontal Clips System',
    oneLine: 'Optimized horizontal clamp tensioning to prevent fabric damage and wrinkles.',
    specs: [
      'Horizontal automatic clip tension control',
      'Single-switch pneumatic release of all clips',
      'High stitches-per-minute (SPM) continuous capacity',
      'Advanced Dahao control computer integration'
    ],
    techParams: {
      'Max Speed': '1,200 RPM',
      'Number of Heads': '12 Heads (Customizable)',
      'Stitches / Needles': '9 Needles',
      'Head Distance': '330 mm',
      'Embroidery Area': '330 × 680 mm',
      'Special Features': 'Horizontal automatic clips, Dahao Computer control'
    },
    image: gt930Full,
    images: [gt930Full, gt930Heads, gt930Detail, gt930Spools]
  },
  {
    name: 'GM920',
    title: 'High-Speed Flat & Chenille Mixed-Media Machine',
    oneLine: 'Dual-function platform combining flat embroidery with loop and chenille devices.',
    specs: [
      'Co-operative flat + chenille loop heads',
      'Automatic color/needle change mechanisms',
      'Ideal for premium childrenwear, towels, and curtains',
      'Multi-axis high-speed motor control'
    ],
    techParams: {
      'Max Speed': '1,000 RPM',
      'Number of Heads': '20 Heads (Flat + Chenille Co-operating)',
      'Stitches / Needles': '9 Needles (Flat) + 6 Colors (Chenille)',
      'Head Distance': '200 mm',
      'Embroidery Area': '200 × 400 mm',
      'Special Features': 'Cooperative flat + loop chenille heads, multi-axis motor control'
    },
    image: gm920Full,
    images: [gm920Full, gm920Detail1, gm920Detail2]
  },
  {
    name: 'GT 906',
    title: 'Automatic Tape, Cording & Coiling Specialty Machine',
    oneLine: 'Specialized tape feed attachment series for heavy-duty decorative patterns.',
    specs: [
      'Automatic tape, cording, and coiling feeders',
      'Active pattern tape cutting mechanisms',
      'Ideal for ribbon and thick thread outline embroidery',
      'High-stability heavy-duty frame design'
    ],
    techParams: {
      'Max Speed': '1,200 RPM',
      'Number of Heads': '6 Heads (Customizable)',
      'Stitches / Needles': '9 Needles',
      'Head Distance': '400 mm',
      'Embroidery Area': '400 × 600 mm',
      'Special Features': 'Automatic tape, cording and coiling feeders, active pattern cutter'
    },
    image: gt906Full,
    images: [gt906Full, gt906Detail1, gt906Detail2]
  },
  {
    name: 'GTL 906',
    title: 'High-Speed Flat-Laser Cutting & Three-Color Beads Machine',
    oneLine: 'Premium mixed embellishment platform integrating CO2 laser cutting and three-color bead loaders.',
    specs: [
      'Integrated CO2 laser fabric cutter',
      'Automated three-color bead/spangle loader',
      'Designed for high-end bridalwear and export designer sarees',
      'Synchronized high-speed cutting & embroidery'
    ],
    techParams: {
      'Max Speed': '1,000 RPM',
      'Number of Heads': '6 Heads (Customizable)',
      'Stitches / Needles': '9 Needles',
      'Head Distance': '400 mm',
      'Embroidery Area': '400 × 600 mm',
      'Special Features': 'CO2 laser cutting system, 3-color beads loading device'
    },
    image: gtl906Full,
    images: [gtl906Full, gtl906Detail1, gtl906Detail2]
  }
];

export const whyUs = [
  {
    title: 'Careful Quality Checks',
    desc: 'Every machine goes through detailed electrical and mechanical checks before it is ready for delivery.'
  },
  {
    title: 'Reliable After-Sales Support',
    desc: 'We stay involved after installation to help your team run the machine with confidence and continuity.'
  },
  {
    title: 'Service Team Close to Textile Hubs',
    desc: 'Our technicians are positioned near major textile centers so support is easier to reach when you need it.'
  },
  {
    title: 'Genuine Parts and Ongoing Guidance',
    desc: 'We help with the right replacement parts and practical technical guidance to keep production moving smoothly.'
  }
];

export const contacts = {
  office: 'F-8, Silicon Shoppers, Udhana,\nSurat, Gujarat - 395023',
  map: 'https://maps.google.com',
  mapEmbed: 'https://www.google.com/maps?q=21.172012,72.839019&z=17&output=embed',
  phone: '+91 8866280427',
  email: 'sales@embronix.in',
  whatsapp: 'https://wa.me/918866280427',
  gst: '24AAMFE8719N1ZT'
};
