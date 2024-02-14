import { Button } from '@/commons/components'
import { styled } from '@/commons/styles'

export const Container = styled('div', {
  height: '100vh',
  width: '100%',

  '.map': {
    flex: '1',
    height: 'min(75vh, 720px)',
    width: '100%',
    marginTop: 24,
    marginBottom: 24,
    borderRadius: '$lg',
    boxShadow: '$base',
  },
})

export const BackButton = styled(Button, {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  margin: '0 auto',
})
