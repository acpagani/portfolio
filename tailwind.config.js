/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#04070F",
        abyss: "#070D1B",
        panel: "#0B1426",
        panel2: "#0E1A30",
        azure: "#4C9EFF",
        azureDeep: "#1F6FE0",
        frost: "#A9CBFF",
        paper: "#EEF3FB",
        muted: "#8DA2C4",
        line: "rgba(126,168,232,0.14)",
        lineStrong: "rgba(126,168,232,0.30)",
      },
      fontFamily: {
        sans: ['"Inter Tight"', "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.18em",
      },
      maxWidth: {
        shell: "78rem",
      },
      transitionTimingFunction: {
        out4: "cubic-bezier(0.22, 1, 0.36, 1)",
        outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
