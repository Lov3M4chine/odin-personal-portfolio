module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        Handjet: ["Handjet", "sans-serif"],
        Play: ["Play", "sans-serif"],
      },
    },
    screens: {
      phone: "320px",

      tablet: "1200px",

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
