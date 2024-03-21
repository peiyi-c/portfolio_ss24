/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#986D8E",
        primaryDark: "#CAB8FF",
        secondary: "#87A8A4",
        secondaryDark: "#C1FFD7",
        note: "#D9CAB3",
        noteDark: "#EFE3D0",
      },
    },
  },
  plugins: [],
};
