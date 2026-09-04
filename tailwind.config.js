/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: "#FFFDF9",
          ink: "#0A0A0A",
          muted: "#555555",
          yellow: "#FDE047",
          green: "#86EFAC",
          pink: "#FDA4AF",
          cyan: "#7DD3FC",
          orange: "#FDBA74",
          purple: "#D8B4FE",
          salesian: "#991B1B",
          salesianLight: "#FEE2E2"
        }
      },
      boxShadow: {
        'neo-sm': '3px 3px 0px #0A0A0A',
        'neo': '5px 5px 0px #0A0A0A',
        'neo-lg': '8px 8px 0px #0A0A0A',
      }
    },
  },
  plugins: [],
};
