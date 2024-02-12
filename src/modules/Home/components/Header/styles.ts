import { Container as BaseContainer } from '@/commons/components'
import { styled } from '@/commons/styles'

export const Header = styled(BaseContainer, {
  width: '100%',
  color: '$white',

  h1: {
    fontSize: '$bigger',
    fontWeight: '$semiBold',
  },

  img: {
    width: 120,
    height: 'auto',
    margin: 'calc(2 * $lg) 0px',

    '@media screen and (min-width: 768px)': {
      width: 166,
      margin: '$lg 0px',
    },
  },

  p: {
    fontWeight: '$medium',
  },
})
