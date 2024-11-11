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
          header: '#D0D0D0',
          content: '#F4F4F4',
          altContent: '#EAEAEA'
      }
    }},
  plugins: [],
};
export default config;
