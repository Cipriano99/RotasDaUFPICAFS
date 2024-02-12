import { styled } from '@/commons/styles'

export const Button = styled('button', {
  all: 'unset',
  backgroundColor: '$primary',
  color: '$white',
  borderRadius: '$full',
  fontSize: '$small',
  fontWeight: '$semiBold',
  padding: '$sm',
  margin: '$sm',
  boxShadow: '$base',

  '&:hover': {
    cursor: 'pointer',
    filter: 'brightness(0.9)',
  },
})
