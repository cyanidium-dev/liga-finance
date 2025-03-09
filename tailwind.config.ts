import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tab: "768px",
        laptop: "1280px",
        deskxl: "1700px",
        deskxxl: "1920px",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        prosto: ["var(--font-prosto)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "25px",
          xl: "70px",
        },
      },
      fontSize: {
        "12reg": ["12px", { lineHeight: "17px", fontWeight: "400" }],
        "12med": ["12px", { lineHeight: "17px", fontWeight: "500" }],
        "14reg": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "14med": ["14px", { lineHeight: "20px", fontWeight: "500" }],
        "16reg": ["16px", { lineHeight: "22.4px", fontWeight: "400" }],
        "16med": ["16px", { lineHeight: "22.4px", fontWeight: "500" }],
        "18reg": ["18px", { lineHeight: "25px", fontWeight: "400" }],
        "18med": ["18px", { lineHeight: "25px", fontWeight: "500" }],
        "24med": ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "28med": ["28px", { lineHeight: "32px", fontWeight: "500" }],
        "32med": ["32px", { lineHeight: "40px", fontWeight: "500" }],
        "40med": ["40px", { lineHeight: "56px", fontWeight: "500" }],
        "64med": ["64px", { lineHeight: "80px", fontWeight: "500" }],
      },
      colors: {
        black: "#010818",
        white: "#EDF0F5",
        main: "#031847",
        blue: "#4267B6",
      },

      backgroundImage: {},
      boxShadow: {},
    },
  },
  plugins: [],
} satisfies Config;
