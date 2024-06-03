/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        inputColor: '#B0B0B0',
        blue: '#252460',
        customBlue: '#0000ff',
        blueTransparent: 'rgba(209, 238, 241, 0.20)',
        darkTransparent: '#01020F',
        darkCard: '#171820',
        cyan: '#0C8993',
        yellow: '#FFB800',
        yellow300: '#faca15',
        transparentDark: 'rgba(217, 217, 217, 0.4)',
        back100: '#AEAEAE',
        back500: '#56423D',
        orange300: '#FFCECE',
        red800: '#F00',
        green800: '#18AB00',
        green200: '#D6FFCF',
        sky200: 'rgba(12, 137, 147, 0.10)',
        themBgColor: '#a40001',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        IBMPlexMono: ['IBM Plex Mono', 'sans-serif'],
        Roboto: ['Roboto'],
        Inter: ['Inter'],
      },
      textShadow: {
        'md': '0px 3px 2px rgba(0, 0, 0, 0.00);',
      }
    },
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}

