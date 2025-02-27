import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: '#11011E',
        primary:'#0FAE96'
      },
      keyframes: {
        translateUp: {
          '0%': { transform: 'translateY(200px)', opacity: '0', },
          // '75%': { height: '1.25rem', opacity: '0.75' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        translateUp1: 'translateUp .5s ease backwards',
        translateUp2: 'translateUp .5s .25s  backwards',
        translateUp3: 'translateUp .5s .5s backwards',


      },
    },
  },
  plugins: [],
} satisfies Config;
