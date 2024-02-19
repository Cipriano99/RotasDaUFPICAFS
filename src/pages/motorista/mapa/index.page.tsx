import { MapContextProvider } from '@/contexts/MapContext'
import { MapsSection } from '@/modules/Map'
import * as S from './styles'
import { GetServerSideProps } from 'next'
import { withSSRAuthenticated } from '@/providers'

export default function Mapa() {
  return (
    <MapContextProvider>
      <S.MapContainer>
        <MapsSection />
      </S.MapContainer>
    </MapContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuthenticated(
  async (ctx) => {
    return {
      props: {},
    }
  },
)
