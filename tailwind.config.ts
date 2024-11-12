import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {extend: {
      colors: {
          background: '#F5F5F5',
          careerExperience: '#ececec',
          workExperience: '#f9fafb'
      }
    }},
  plugins: [],
};
export default config;