import { MapContextProvider } from '@/contexts/MapContext'
import { MapsSection } from '@/modules/Map'
import * as S from './styles'

export default function Mapa() {
  return (
    <MapContextProvider>
      <S.MapContainer>
        <MapsSection />
      </S.MapContainer>
    </MapContextProvider>
  )
}
