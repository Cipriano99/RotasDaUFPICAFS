import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ReactPortalProps = {
  containerId?: string
  children: ReactNode
}

export const ReactPortal: FC<ReactPortalProps> = ({
  containerId = 'modal-root',
  children,
}) => {
  let container = document.getElementById(containerId)

  if (!container) {
    container = document.createElement('div')
    container.setAttribute('id', containerId)
    document.body.appendChild(container)
  }

  return createPortal(children, container)
}
