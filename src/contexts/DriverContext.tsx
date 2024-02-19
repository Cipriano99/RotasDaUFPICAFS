import { auth } from '@/libs/firebase'
import { showToast } from '@/utils'
import { signOut } from 'firebase/auth'
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

interface DriverContextProps {
  driver: string
  isLoading: boolean
  setDriveConnected: (id: string) => void
  toggleLoading: () => void
  handleGoogleLogout: () => void
}

const DriveContext = createContext({} as DriverContextProps)

export const DriverContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [driver, setDriver] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const setDriveConnected = useCallback((email: string) => {
    setDriver(email)
  }, [])
  const toggleLoading = () => {
    setIsLoading((prev) => !prev)
  }
  const handleGoogleLogout = () => {
    signOut(auth)
      .then(() => {
        setDriver('')
      })
      .catch(() => {
        showToast('Falha ao desconectar.', 'error')
      })
  }

  const value = {
    driver,
    isLoading,
    setDriveConnected,
    toggleLoading,
    handleGoogleLogout,
  }
  return <DriveContext.Provider value={value}>{children}</DriveContext.Provider>
}

export const useDriverContext = () => useContext(DriveContext)
