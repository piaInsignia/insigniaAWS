const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["src/**/*.{js,ts,jsx,tsx}", "app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-schibsted)", ...defaultTheme.fontFamily.sans],
        league: ["var(--font-league)", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "320px",
        ...defaultTheme.screens,
      },
    },
  },
};
