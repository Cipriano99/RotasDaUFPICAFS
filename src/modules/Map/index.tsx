import { useRef } from 'react'

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
      <DetailsLocationModal />
    </S.Container>
  )
}
