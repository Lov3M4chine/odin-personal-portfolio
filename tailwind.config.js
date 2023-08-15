module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.js',
    ],
    theme: {
      extend: {
        fontFamily: {
          Handjet: ['Handjet', 'sans-serif'],
          Play: ['Play', 'sans-serif'],
        },
      },
      screens: {
        
        'phone': '320px',

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
  
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  