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
      isOpen={markerModalOpen !== 0}
      closeBtn={{ onClick: () => handleOpenMarkerModal(0) }}
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
                <th>Período</th>
                <th>Hora prevista</th>
              </thead>
              <tbody>
                {markerData?.am.map((item) => (
                  <tr key={item}>
                    <td>Manhã</td>
                    <td>{item}</td>
                  </tr>
                ))}
                {markerData?.pm.map((item) => (
                  <tr key={item}>
                    <td>Tarde</td>
                    <td>{item}</td>
                  </tr>
                ))}
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
