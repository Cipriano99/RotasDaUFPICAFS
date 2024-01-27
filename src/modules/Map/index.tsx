import { Loader } from '@googlemaps/js-api-loader'

import { Header } from './components/Header/index.'
import * as S from './styles'
import { useEffect, useRef } from 'react'

export const MapsSection = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly',
      })

      const { Map } = await loader.importLibrary('maps')
      const { Marker } = (await loader.importLibrary(
        'marker',
      )) as google.maps.MarkerLibrary

      const position = {
        lat: -6.7779134,
        lng: -43.0307148,
      }

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: 'MY_NEXT_JS_MAP_ID',
      }

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

      const marker = new Marker({
        map,
        position,
      })
    }

    initMap()
  }, [])

  return (
    <S.Container>
      <Header />
      <div className="map" ref={mapRef} />
    </S.Container>
  )
}
