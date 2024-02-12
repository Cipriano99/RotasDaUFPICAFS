import { styled } from '@/commons/styles'
import { HTMLAttributes } from 'react'
import { FiX } from 'react-icons/fi'

export const CloseButtonContainer = styled('button', {
  outline: 'none',
  border: 'none',
  padding: 4,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  '> svg': {
    color: '$gray500',
  },
})

const sizes = {
  sm: 16,
  md: 24,
  lg: 36,
}

export interface CloseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizes
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  size = 'md',
  ...props
}) => (
  <CloseButtonContainer type="button" {...props}>
    <FiX size={sizes[size]} />
  </CloseButtonContainer>
)
