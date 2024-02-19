import { MainContainer } from '@/commons/components'
import { styled } from '@/commons/styles'

export const Container = styled(MainContainer, {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',

  button: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    margin: '24px auto',
    fontSize: 18,
  },
})
