import { useCallback } from 'react'
import { linesLocation } from '../utils/allLineRoutes'

export const useRenderRoutes = () => {
  const renderLine = useCallback((map: google.maps.Map, idRoute: number) => {
    if (idRoute < 0 || idRoute > 2) return

    const poly = new google.maps.Polyline({
      strokeColor: '#0015ff',
      strokeOpacity: 1.0,
      strokeWeight: 3,
      map,
    })

    const path: google.maps.LatLng[] = []

    linesLocation[idRoute].locations.forEach((pointLine) => {
      path.push(pointLine as unknown as google.maps.LatLng)
    })

    poly.setPath(path)
  }, [])

  const renderFullRoute = useCallback(
    (map: google.maps.Map) => {
      for (let index = 0; index < linesLocation.length; index++) {
        renderLine(map, index)
      }
    },
    [renderLine],
  )

  return {
    renderLine,
    renderFullRoute,
  }
}
