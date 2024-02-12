import { styled } from '@/commons/styles'

export const Container = styled('div', {
  width: '100%',
  backgroundColor: '$primary',
  color: '$white',
  borderRadius: '0 0 $lg $lg',
  padding: '$lg',
  boxShadow: '$base',

  h1: {
    fontSize: '$headlineSix',
    fontWeight: '$semiBold',
  },
})
