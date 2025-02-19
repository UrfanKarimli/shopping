import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1200px",
        'xl': '1000px'
      },
    },

    extend: {
      boxShadow: {
        'custom-light': '0 17px 34px 0 rgba(44,39,56,0.04), 0 8px 17px 0 rgba(44,39,56,0.02)',
        'shadow-hover' : '0 4px 8px 0 rgba(177, 181, 199, 0.48)'
      },
      colors: {
        primary: {
          light: '#f6f6f6',
          dark: '#1B2431',
        },
        headerBg: {
          light: '#FFF9E5',
          dark: '#273142',
        },
        background: {
          light: '#ffffff',
          dark: '#273142',
        },
        headText: {
          light: '#fe7600',
          dark: '#ffffff',
        },
        text: {
          light: '#202224',
          dark: '#ffffff',
        },
        border: {
          light: '#fe7600',
          dark: '#cfcfcf13',
        },
        borderSec: {
          light: '#E0E0E0',
          dark: '#cfcfcf13',
        }, 
        buttonText: {
          light: '#fe7600',
          dark: '#ffffff',
        },
        buttonBg: {
          light: '#FCFDFD',
          dark: '#323D4E'
        },
        buttonBgSec: {
          light: '#FCFDFD',
          dark: '#323D4E'
        },
        customGray : '#949392'
      },
       animation: {
                slide: "slide 1.5s linear infinite",
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
    },
  },
  plugins: [],
} satisfies Config;
