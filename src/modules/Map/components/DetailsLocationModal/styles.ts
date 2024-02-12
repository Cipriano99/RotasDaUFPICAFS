import { styled } from '@/commons/styles'

export const Container = styled('div', {})

export const Header = styled('header', {
  marginTop: -28,

  h3: {
    textAlign: 'center',
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'stretch',
})

export const StopTimes = styled('div', {
  width: '90%',
  backgroundColor: '$secondary',
  borderRadius: '$md',
  boxShadow: '$base',
  marginTop: 12,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  table: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 4,
  },

  'thead, tr': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  'th, td': {
    width: '50%',
    textAlign: 'center',
  },

  th: {
    fontWeight: '$semiBold',
  },

  td: {
    borderTop: '1px solid $primary',
    marginTop: 4,
  },

  tbody: {
    width: '100%',
  },

  span: {
    textAlign: 'center',
  },
})

export const ButtonWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 8,
  marginTop: 12,

  button: {
    margin: '0 auto',
  },
})
