import { HTMLAttributes, ReactNode } from 'react'
import { CloseButtonProps } from '../components/Modal/CloseButton'

export type IJustify =
  | 'center'
  | 'end'
  | 'start'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string
  type: 'button' | 'submit' | 'reset'
}

export interface DefaultModalButtonsProps {
  primaryBtn?: Partial<ButtonProps> & { isLoading?: boolean }
  secondaryBtn?: Partial<ButtonProps>
  buttonAlignment?: IJustify
}

export interface ModalProps extends DefaultModalButtonsProps {
  isOpen: boolean
  closeBtn?: CloseButtonProps
  children: ReactNode
}
