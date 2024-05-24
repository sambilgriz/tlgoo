import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{cjs,js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{cjs,js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{cjs,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ct-dark-600': '#222',
        'ct-dark-200': '#e5e7eb',
        'ct-dark-100': '#f5f6f7',
        'ct-blue-600': '#2363eb',
        'ct-yellow-600': '#f9d13e',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1125px',
          xl: '1125px',
          '2xl': '1125px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
