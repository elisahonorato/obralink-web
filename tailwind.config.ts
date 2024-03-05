import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // 👇 Add CSS variables
      heading: ["var(--font-heading)"],
      body: ["var(--font-body)"],
    },
    colors: {
      primary: {
        light: "#FFFFFF",
        DEFAULT: "#FFD700",
        dark: "#000000",
      },
      colored: {
        light: "#FFD700",
        dark: "#1B5DE5",
      },

    },


    

  },
  plugins: [],
} satisfies Config;
