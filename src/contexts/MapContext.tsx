import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

interface MapContextProps {
  markerModalOpen: number
  handleOpenMarkerModal: (id: number) => void
}

const MapContext = createContext({} as MapContextProps)

export const MapContextProvider = ({ children }: { children: ReactNode }) => {
  const [markerModalOpen, setMarkerModalOpen] = useState<number>(0)
  const handleOpenMarkerModal = useCallback((id: number) => {
    setMarkerModalOpen(id)
  }, [])

  const value = {
    markerModalOpen,
    handleOpenMarkerModal,
  }
  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

export const useMapContext = () => useContext(MapContext)
