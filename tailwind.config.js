module.exports = {
  mode: 'jit',
  container: {
    padding: '2rem',
    center: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['src/**/*.vue'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["'Montserrat'"],
      content: ["'Montserrat'"],
      body: ["'Open Sans'"],
    },
    extend: {
      screens: {
        s: '410px',
        '2xl': '1385px',
        '3xl': '1440px',
        full: '2500px',
      },
      boxShadow: {
        generic: '0px 0px 180px rgba(8, 61, 193, 0.51)',
      },
      colors: {
        primary: {
          DEFAULT: '#7781d3', // Couleur primaire
          light: '#5e4ae3', // Nuance claire
          medium: '#342583', // Nuance moyenne
          'light-alt': '#4f4296', // Alternative claire
        },
        secondary: {
          DEFAULT: '#f6f6f6', // Couleur secondaire
          dark: '#bcbcbc', // Nuance foncée (générée)
          light: '#ffffff', // Nuance claire (blanc pour la luminosité)
        },
        tertiary: {
          DEFAULT: '#ef6a2d', // Couleur tertiaire
          dark: '#b25822', // Nuance foncée (générée)
          light: '#f7a276', // Nuance claire (générée)
        },
        quinary: '#141414', // Couleur quinaire (pas de variations nécessaires)
        sixth: '#0025e1', // Sixième couleur (remplacement de 'sixe', pas de variations nécessaires)
        black: '#000000', // Noir (pas de variations nécessaires)
        white: '#ffffff', // Blanc (pas de variations nécessaires)
      },
      fontSize: {
        t1: [
          '36px',
          {
            lineHeight: '130%',
            letterSpacing: '2px',
          },
        ],
        t2: [
          '28px',
          {
            lineHeight: '130%',
          },
        ],
        t3: [
          '24px',
          {
            lineHeight: '170%',
          },
        ],
        t4: [
          '18px',
          {
            lineHeight: '150%',
          },
        ],
        t5: ['18px'],
        t6: [
          '16px',
          {
            lineHeight: '26px',
          },
        ],
        b0: [
          '20px',
          {
            lineHeight: '150%',
            letterSpacing: '2%',
          },
        ],
        b1: [
          '16px',
          {
            lineHeight: '150%',
          },
        ],
        b2: [
          '14px',
          {
            lineHeight: '24px',
            letterSpacing: '0.5px',
          },
        ],
        b3: [
          '12px',
          {
            lineHeight: '150%',
          },
        ],
        't1-desktop': [
          '68px',
          {
            lineHeight: '70px',
          },
        ],
        't2-desktop': [
          '54px',
          {
            lineHeight: '60px',
          },
        ],
        't3-desktop': [
          '38px',
          {
            lineHeight: '45px',
          },
        ],
        't4-desktop': ['34px', {}],
        't5-desktop': ['28px', {}],
        't6-desktop': [
          '18px',
          {
            lineHeight: '160%',
          },
        ],
      },
      fontFamily: {
        fontFamily: {
          display: ['Montserrat'],
          'open-sans': ['Open sans'],
          body: ['Open sans'],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
