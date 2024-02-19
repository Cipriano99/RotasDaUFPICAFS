import { useDriverContext } from '@/contexts/DriverContext'
import { getCheckDriveAllowed } from '@/libs/drivers'
import { auth } from '@/libs/firebase'
import { showToast } from '@/utils'
import {
  GoogleAuthProvider,
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
} from 'firebase/auth'
import { useRouter } from 'next/router'

interface IClientInfoResult {
  name: string
  email: string
  picture: string
}

export interface IResultClientData {
  claims: IClientInfoResult
  token: string
}

export const useGoogleLogin = () => {
  const router = useRouter()
  const { setDriveConnected, handleGoogleLogout } = useDriverContext()

  const onConnectGoogleAccount = async () => {
    const userDataResult = await new Promise<IResultClientData | null>(
      (resolve) => {
        try {
          onAuthStateChanged(auth, async (user) => {
            if (!user) {
              resolve(null)
              return
            }

            const userResult =
              (await user.getIdTokenResult()) as unknown as IResultClientData
            resolve(userResult)
          })
        } catch (error) {
          showToast(
            'Falha ao conectar com sua conta Google. Tente novamente, por favor!',
            'warning',
          )
          resolve(null)
        }
      },
    )

    return userDataResult
  }

  const handleLoginWithPopup = async () => {
    const provider = new GoogleAuthProvider()

    setPersistence(auth, browserSessionPersistence)
      .then(() => signInWithPopup(auth, provider))
      .catch((error) => {
        showToast(error.message, 'error')
      })

    const dataResultClient = await onConnectGoogleAccount()

    if (dataResultClient) {
      const { claims: clientData, token: idToken } = dataResultClient

      const result = await getCheckDriveAllowed(clientData.email)

      if (result) {
        setDriveConnected(clientData.email)
        router.push('/motorista/mapa')
      } else {
        handleGoogleLogout()
      }
    } else {
      handleGoogleLogout()
    }
  }

  return { handleLoginWithPopup, onConnectGoogleAccount }
}
