import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#15213c",
        interface: "#04091e",
        secondary: "#c679e3",
        dark_text: "#6084a4",
        darker_text: "#0e314c",
      },
    },
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      mobile: { min: "0px", max: "410px" },
      medium: { max: "580px" },
      tablet: { max: "768px" },
      base: { max: "880px" },
      Xlarge:{max:"1200px"},
      large:{max:"1024px"},
      lg: "1024px",
      xl: "1200px",
      xl2 : "1536px",
    },
  },
  plugins: [],
};
export default config;
