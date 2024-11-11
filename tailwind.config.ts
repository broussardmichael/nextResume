import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {extend: {
      colors: {
          primary:'red',
          secondary: 'green',
          background: '#FFFFFF',
          header: '#36454F',
          content: '#6082B6',
          altContent: '#F4F4F4'
      }
    }},
  plugins: [],
};
export default config;
