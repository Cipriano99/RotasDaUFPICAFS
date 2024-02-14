import { useRef } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

import { useLoadMap } from './hooks/useLoadMap'
import { Header, DetailsLocationModal } from './components'

import * as S from './styles'

export const MapsSection = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useLoadMap({ mapRef })

  return (
    <S.Container>
      <Header />
      <div className="map" ref={mapRef} />
      <S.BackButton>
        <FaArrowLeft /> Voltar
      </S.BackButton>
      <DetailsLocationModal />
    </S.Container>
  )
}
