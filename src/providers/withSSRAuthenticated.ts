import { auth } from '@/libs/firebase'
import { IResultClientData } from '@/modules/Auth/hooks/useGoogleLogin'
import { onAuthStateChanged } from 'firebase/auth'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'

export function withSSRAuthenticated<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>,
) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        return {
          redirect: {
            destination: `/motorista`,
            permanent: false,
          },
        }
      }

      const userResult =
        (await user.getIdTokenResult()) as unknown as IResultClientData

      if (!userResult.claims.email) {
        return {
          redirect: {
            destination: `/motorista`,
            permanent: false,
          },
        }
      }
    })

    return await fn(ctx)
  }
}
