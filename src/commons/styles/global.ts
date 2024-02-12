import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },

  body: {
    background: '$secondary',
    color: '$text',
    width: '100vw',
    overflowX: 'hidden',
  },

  '#__next': {
    overflowX: 'hidden',
    inset: 0,
  },

  '*, input, button': {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 16,
    fontWeight: 400,
  },

  input: {
    outline: 'none',
  },

  a: {
    textDecoration: 'none',
  },

  'a:focus, button:focus': {
    outline: 'none',
  },

  'h1,h2,h3,h4,h5,h6,strong': {
    fontWeight: 'bold',
  },

  '::-webkitScrollbar': {
    width: 4,
    height: 4,
  },

  '::-webkitScrollbar-track': {
    background: '$text',
  },

  '::-webkitScrollbar-thumb': {
    backgroundColor: '$secondary',
    borderRadius: 20,
  },
})
