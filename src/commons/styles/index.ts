import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      primary: '#164CD7',
      secondary: '#E5F0FF',
      text: '#071952',
      white: '#f6f6f6',

      gray500: '#020202',
    },
    radii: {
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '16px',
      full: '99999px',
    },
    shadows: {
      base: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    fontSizes: {
      tiny: '10px',
      small: '12px',
      smaller: '14px',
      normal: '16px',
      semiBig: '18px',
      big: '20px',
      bigger: '24px',
      headlineSeven: '28px',
      headlineSix: '32px',
      headlineFive: '36px',
      headlineFour: '48px',
      headlineThree: '56px',
      headlineTwo: '64px',
      headlineOne: '72px',
    },
    fontWeights: {
      light: 100,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    space: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
    },
  },
})
