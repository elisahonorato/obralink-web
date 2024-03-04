import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // 👇 Add CSS variables
      display: ["var(--font-display)"],
      body: ["var(--font-body)"],
    },
    

  },
  plugins: [],
} satisfies Config;
