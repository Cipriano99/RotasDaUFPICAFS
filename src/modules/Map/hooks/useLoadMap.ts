import { RefObject, useCallback, useEffect } from 'react'

import { Loader } from '@googlemaps/js-api-loader'
import { stopMarkers } from '../utils/stopMarkers'
import { useRenderRoutes } from './useRenderRoutes'
import { useMapContext } from '@/contexts/MapContext'

interface ILoadMap {
  mapRef: RefObject<HTMLDivElement>
}

export const useLoadMap = ({ mapRef }: ILoadMap) => {
  const { renderFullRoute } = useRenderRoutes()
  const { handleOpenMarkerModal } = useMapContext()

  const onLoadMap = useCallback(async () => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
      version: 'weekly',
    })

    const { Map } = await loader.importLibrary('maps')
    const { Marker } = await loader.importLibrary('marker')

    const mapOptions: google.maps.MapOptions = {
      center: {
        lat: -6.7779134,
        lng: -43.0307148,
      },
      zoom: 15,
      mapId: 'MY_NEXT_JS_MAP_ID',
      clickableIcons: false,
      disableDefaultUI: true,
      zoomControl: true,
    }

    const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

    stopMarkers.forEach(({ position, title, id }) => {
      const marker = new Marker({
        position,
        map,
        title,
        icon: '#',
        label: {
          text: '🚏',
          fontSize: '32px',
          className: 'stopMarker',
        },
      })

      google.maps.event.addListener(marker, 'click', () => {
        handleOpenMarkerModal(id)
      })
    })

    renderFullRoute(map)
  }, [handleOpenMarkerModal, mapRef, renderFullRoute])

  useEffect(() => {
    onLoadMap()
  }, [onLoadMap])
}
