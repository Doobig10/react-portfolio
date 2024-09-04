import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'moonstone': '#0FA3B1',
        'prussian': '#0B3142',
        'pear': '#C2E812',
        'snow': '#F4EDED',
        'timberwolf': '#DBD4D3',
        'eerie': '#1C1C1C',
        'supreme': '#86959e',
      }
    },
  },
  plugins: [],
};
export default config;
