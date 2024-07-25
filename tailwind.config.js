/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FF6D6D',
        secondary: '#77D7D3',
        tertiary: '#2E4049',
        custom: '#F1EEEC',
        custom1: '#ECF1F0',
        custom2: '#F2F2F2',
        custom3:'#727272',
        custom4: '#FFFFFF',
        custom5: '#126360'
        

      },

      fontFamily:{
        mincho: ['Sawarabi Mincho', 'serif'],
        work: ['Work Sans' ,'sans-serif'],
        sue: ['Sue Ellen Francisco','cursive']
      },

  
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        
      },
      center: true,
  
      },
  },
  plugins: [],
}