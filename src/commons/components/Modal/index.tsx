import { ModalProps } from '@/commons/types/ModalProps'

import { ReactPortal } from '../ReactPortal'
import { CloseButton } from './CloseButton'

import * as S from './styles'

export const Modal: React.FC<ModalProps> = ({ isOpen, closeBtn, children }) => {
  if (!isOpen) return null

  return (
    <ReactPortal>
      <S.BaseModalWrapper>
        <S.BaseModal>
          <CloseButton className="closeButton" {...closeBtn} />
          {children}
        </S.BaseModal>
      </S.BaseModalWrapper>
    </ReactPortal>
  )
}
