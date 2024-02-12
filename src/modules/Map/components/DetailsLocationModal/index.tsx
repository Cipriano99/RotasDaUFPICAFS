import { FC } from 'react'

import { useMapContext } from '@/contexts/MapContext'
import { Button } from '@/commons/components'
import { Modal } from '@/commons/components/Modal'

import * as S from './styles'
import { stopMarkers } from '../../utils/stopMarkers'

export const DetailsLocationModal: FC = () => {
  const { markerModalOpen, handleOpenMarkerModal } = useMapContext()

  const markerData = stopMarkers.find((marker) => marker.id === markerModalOpen)

  return (
    <Modal
      isOpen={!!markerModalOpen}
      closeBtn={{ onClick: () => handleOpenMarkerModal('') }}
    >
      <S.Container>
        <S.Header>
          <h3>Detalhes do ponto de ônibus</h3>
        </S.Header>

        <S.Content>
          <strong>Nome</strong>
          <span>{markerData?.title}</span>

          <strong>Código</strong>
          <span>{markerData?.id}</span>

          <S.StopTimes>
            <table>
              <thead>
                <th>Ônibus</th>
                <th>Hora prevista</th>
              </thead>
              <tbody>
                <tr>
                  <td>XXX-0000</td>
                  <td>07:11</td>
                </tr>
                <tr>
                  <td>XXX-0001</td>
                  <td>07:17</td>
                </tr>
              </tbody>
            </table>
          </S.StopTimes>
        </S.Content>

        <S.ButtonWrapper>
          <Button>Ver em tempo real</Button>
        </S.ButtonWrapper>
      </S.Container>
    </Modal>
  )
}
