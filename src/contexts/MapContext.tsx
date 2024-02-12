import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

interface MapContextProps {
  markerModalOpen: string
  handleOpenMarkerModal: (id: string) => void
}

const MapContext = createContext({} as MapContextProps)

export const MapContextProvider = ({ children }: { children: ReactNode }) => {
  const [markerModalOpen, setMarkerModalOpen] = useState('')
  const handleOpenMarkerModal = useCallback((id: string) => {
    setMarkerModalOpen(id)
  }, [])

  const value = {
    markerModalOpen,
    handleOpenMarkerModal,
  }
  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

export const useMapContext = () => useContext(MapContext)
