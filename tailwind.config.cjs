module.exports = {
  content: [
    "./src/**/*.{njk,html,md,js}",
    "./content/**/*.{md,html}",
    "./src/_includes/**/*.{njk,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        accent: "#1D4ED8",
        muted: "#6B7280"
      }
    }
  },
  plugins: []
};
