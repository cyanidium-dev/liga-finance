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
        tabxl: "820px",
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
          lg: "70px",
        },
      },

      fontSize: {
        "6light": ["6px", { fontWeight: "300" }],
        "8reg": ["8px", { fontWeight: "400" }],
        "8med": ["8px", { fontWeight: "500" }],
        "9med": ["9px", { fontWeight: "500" }],
        "10light": ["10px", { fontWeight: "300" }],
        "10med": ["10px", { fontWeight: "500" }],
        "12light": ["12px", { fontWeight: "300" }],
        "12reg": ["12px", { fontWeight: "400" }],
        "12med": ["12px", { fontWeight: "500" }],
        "14light": ["14px", { fontWeight: "300" }],
        "14reg": ["14px", { fontWeight: "400" }],
        "14med": ["14px", { fontWeight: "500" }],
        "14semi": ["14px", { fontWeight: "600" }],
        "16light": ["16px", { fontWeight: "300" }],
        "16reg": ["16px", { fontWeight: "400" }],
        "16med": ["16px", { fontWeight: "500" }],
        "16bold": ["16px", { fontWeight: "700" }],
        "18reg": ["18px", { fontWeight: "400" }],
        "20reg": ["20px", { fontWeight: "400" }],
        "24reg": ["24px", { fontWeight: "400" }],
        "28reg": ["28px", { fontWeight: "400" }],
        "32reg": ["32px", { fontWeight: "400" }],
        "36reg": ["36px", { fontWeight: "400" }],
        "52reg": ["52px", { fontWeight: "400" }],
        "276reg": ["276px", { fontWeight: "400" }],
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
