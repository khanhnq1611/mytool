/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-dark": "#1D4ED8",
        "download-green": "#16A34A",
        "download-green-dark": "#15803D",
        dark: "#1E293B",
        "dark-lighter": "#334155",
      },
    },
  },
  plugins: [],
};
