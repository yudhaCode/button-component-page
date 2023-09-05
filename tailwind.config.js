module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Custom Colors
        logo: {
          default: "#090F31",
          orange: "#F7542E",
        },
        nav: {
          default: "#9E9E9E",
          active: "#090F31",
        },
        title: "#4F4F4F",
        button: {
          default: "#3F3F3F",
          hover: "#AEAEAE",
        },
        text1: "#333",
        text2: "#828282",
        text3: "#A9A9A9",
        default: "#E0E0E0",
        primary: {
          default: "#3D5AFE",
          hover: "#0039CB",
        },
        secondary: {
          default: "#455A64",
          hover: "#1C313A",
        },
        danger: {
          default: "#D32F2F",
          hover: "#9A0007",
        },
      },
      padding: {
        2.94: "2.94rem",
        4.16: "4.16rem",
        3.53: "3.53rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
        "ubuntu-mono": ["Ubuntu Mono", "monospace"],
        montserrat: ["Montserrat", "sans"],
        "noto-sans": ["Noto Sans", "sans"],
      },
    },
  },
  plugins: [],
};
