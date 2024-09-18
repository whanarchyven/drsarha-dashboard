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
        cRed:'#FF4545',
        cOrange:'#FF783E',
        cYellow:'#FFB23E',
        cLemon:'#FFE552',
        cLime:'#EEFF52',
        cGreen:'#A6FF40',
        cMint:'#40FF6D',
        cArctic:'#40FFD3',
        cLightBlue:'#40CFFF',
        cBlue:'#408DFF',
        cViolet:'#9D65FF',
        cPink:'#F565FF'
      },
      fontFamily:{
        inter:['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
