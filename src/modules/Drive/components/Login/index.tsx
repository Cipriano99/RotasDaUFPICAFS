import { Button } from '@/commons/components'
import logoGoogle from '@/commons/assets/images/google-logo.svg'
import Image from 'next/image'
import * as S from './styles'
import { Header } from '../Header'
import { useGoogleLogin } from '@/modules/Auth'

export const Login = () => {
  const { handleLoginWithPopup } = useGoogleLogin()

  return (
    <S.Container>
      <Header />

      <p>
        Olá, motorista, conecte-se, selecione o ônibus que irá conduzir e inicie
        a transmissão da localização em todo o percurso.
      </p>

      <Button onClick={handleLoginWithPopup}>
        <Image src={logoGoogle} alt="Logo Google" width={28} height={28} />
        Conecte-se com o Google
      </Button>
    </S.Container>
  )
}
