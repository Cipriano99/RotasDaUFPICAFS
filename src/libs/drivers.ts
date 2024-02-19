import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import { db } from './firebase'

export const checkUserEmailTryAccess = async (
  email: string | null,
): Promise<{
  empty: boolean
  // data?: FormAddManagerType
}> => {
  if (!email) {
    return { empty: true }
  }

  const request = query(
    collection(db, 'drivers-allowed'),
    where('email', '==', email),
  )

  const querySnapshot = await getDocs(request)

  if (querySnapshot.empty) {
    const dateAccess = new Date().toISOString().slice(0, 10)
    const timeAccess = new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Sao_Paulo',
      hour12: false,
      timeZoneName: 'short',
    })

    const docRef = doc(db, 'check-access-try', dateAccess)
    await setDoc(
      docRef,
      { emails: arrayUnion({ email, timeAccess }) },
      { merge: true },
    )

    return { empty: querySnapshot.empty }
  }
  // let data

  // querySnapshot.forEach((doc) => {
  //   data = doc.data()
  // })

  return { empty: querySnapshot.empty as boolean }
}

export const getCheckDriveAllowed = async (email: string) => {
  if (!email) {
    return false
  }

  const docRef = doc(db, 'drivers', 'allowed')

  const result = await getDoc(docRef)
  const data = result.data()

  const isAllowed = data?.emails.includes(email)

  return isAllowed
}
