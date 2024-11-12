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
          careerExperience: '#F4F4F4',
          workExperience: '#FFFFFF'
      }
    }},
  plugins: [],
};
export default config;

/*
#EAEAEA
#F4F4F4
#D0D0D0
*/
