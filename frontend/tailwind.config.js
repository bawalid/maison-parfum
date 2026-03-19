/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        champagne: "var(--color-champagne)",
        bronze: "var(--color-bronze)",
        gold: "var(--color-gold)",
        mist: "var(--color-mist)",
        cream: "var(--color-cream)",
        graphite: "var(--color-graphite)",
        line: "var(--color-line)",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 65px rgba(46, 98, 55, 0.1)",
        luxe: "0 32px 90px rgba(46, 98, 55, 0.14)",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top left, rgba(249, 220, 124, 0.22), transparent 34%), radial-gradient(circle at top right, rgba(245, 149, 130, 0.22), transparent 30%), linear-gradient(135deg, rgba(33, 73, 42, 0.98), rgba(46, 98, 55, 0.92))",
        glow: "radial-gradient(circle at center, rgba(223, 193, 150, 0.28), transparent 55%)",
      },
    },
  },
  plugins: [],
};
