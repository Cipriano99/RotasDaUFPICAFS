import { styled } from '@/commons/styles'

export const BaseModalWrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'grid',
  overflowY: 'auto',
  justifyItems: 'center',
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: 0,
  right: 0,
  padding: '40px 10px',
  zIndex: 20,
  backdropFilter: 'blur(4px)',
})

export const BaseModal = styled('div', {
  // '@keyframes slideIn': {
  //   from: {
  //     transform: 'translateY(-25px)',
  //     opacity: 0,
  //   },
  //   to: {
  //     transform: 'translateY(0)',
  //     opacity: 1,
  //   },
  // },
  width: 'min(96%, 400px)',

  borderRadius: '$md',
  backgroundColor: '$white',
  animation: 'slideIn 0.3s',

  '.closeButton': {
    margin: '2px 2px 0 auto',
    borderRadius: 6,
    transition: ' backgroundColor 0.2s ease-in, color 0.2s ease-in',
  },
})
