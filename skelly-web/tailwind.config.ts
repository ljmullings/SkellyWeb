import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#D9F0FF',  // lightest blue
        // secondary: '#A3D5FF',  // lighter blue
        // accent: '#83C9F4',  // medium blue
        // highlight: '#6F73D2',  // violet
        // muted: '#7681B3',  // soft blue-gray
        primary: '#FFFFFF', 
        secondary: '#EE658E', 
        accent: '#FF81B1', 
        highlight: '#FFB2C8', 
        muted: '#F5DFE6',  
      },
    },
  },
  plugins: [],
};
export default config;
