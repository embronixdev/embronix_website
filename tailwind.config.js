/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        'ink-soft': '#374151',
        dominant: '#0f1f35',
        accent: '#b08a3c',
        surface: '#ffffff',
        bg: '#f3f4f6',
        border: '#d1d5db'
      },
      fontFamily: {
        heading: ['Spectral', 'serif'],
        body: ['IBM Plex Sans', 'sans-serif']
      },
      maxWidth: {
        layout: '1120px'
      }
    }
  },
  plugins: []
};
