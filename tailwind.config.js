/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    screens: {
      xxs: '320px',
      // => @media (min-width: 320px) { ... }

      xs: '430px',
      // => @media (min-width: 430px) { ... }

      sm: '600px',
      // => @media (min-width: 600px) { ... }

      md: '905px',
      // => @media (min-width: 905px) { ... }

      lg: '1240px',
      // => @media (min-width: 1240px) { ... }

      xl: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
  safelist: [
    'col-start-1', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6',
    'col-start-7', 'col-start-8', 'col-start-9', 'col-start-10', 'col-start-11', 'col-start-12', 'col-start-13', 'col-start-14',
    'col-start-15', 'col-start-16', 'col-start-17', 'col-start-18', 'col-start-19', 'col-start-20', 'col-start-21', 'col-start-22',
    'row-start-1', 'row-start-2', 'row-start-3', 'row-start-4', 'row-start-5', 'row-start-6', 'row-start-7', 'row-start-8',
    'row-start-9', 'row-start-10', 'row-start-11', 'row-start-12', 'row-start-13', 'row-start-14', 'row-start-15', 'row-start-16',
    'row-start-17', 'row-start-18', 'row-start-19', 'row-start-20', 'row-start-21', 'row-start-22', 'row-start-23', 'row-start-24',
    'col-span-1', 'col-span-2', 'col-span-3'
  ]
}

