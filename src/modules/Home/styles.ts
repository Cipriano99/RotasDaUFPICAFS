import { styled } from '@/commons/styles'

export const Container = styled('div', {
  height: '100vh',
  maxHeight: 720,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',

  '> p': {
    // fontWeight: '$medium',
    maxWidth: 'min(95%, 560px)',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
})
