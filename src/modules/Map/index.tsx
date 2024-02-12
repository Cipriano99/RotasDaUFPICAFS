import { useRef } from 'react'

import { Header } from './components/Header/index.'

import * as S from './styles'
import { useLoadMap } from './hooks/useLoadMap'
import { DetailsLocationModal } from './components'

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
