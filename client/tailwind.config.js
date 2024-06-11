/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        secondary: "#6b7280",
        background: "#1f2937",
        card: "#374151",
        textPrimary: "#e5e7eb",
        textSecondary: "#9ca3af",
        textError: "#f87171",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
    },
  },
  plugins: [],
};
