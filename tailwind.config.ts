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
        dark: "#050505", // Very dark grey/black for contrast
        light: "#FFFFFF",
        brand: "#000000",
        // Antigravity Accents
        "ag-cyan": "#00FFFF",
        "ag-magenta": "#FF00FF",
        "ag-yellow": "#FFFF00",
        "ag-blue": "#0099FF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.05) 0%, rgba(255, 0, 255, 0.05) 25%, rgba(255, 255, 0, 0.05) 50%, rgba(255, 255, 255, 0) 100%)',
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.03)",
        floating: "0 12px 30px rgba(0, 0, 0, 0.08)",
        "glow-cyan": "0 0 20px rgba(0, 255, 255, 0.3)",
        "glow-magenta": "0 0 20px rgba(255, 0, 255, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
