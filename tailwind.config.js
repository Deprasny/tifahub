/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',    // Modern Blue
        secondary: '#3B82F6',  // Lighter Blue
        dark: '#1E293B',      // Slate Dark
        accent: '#F59E0B',    // Warm Amber
        purple: '#6366F1',    // Indigo
        light: '#F8FAFC',     // Slate Light
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        '4.5xl': ['2.5rem', '1.15'],
        '5.5xl': ['3.5rem', '1.1'],
      },
      letterSpacing: {
        'tightest': '-0.075em',
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'wide': '0.025em',
      },
    },
  },
  plugins: [],
}
