import Image from 'next/image'

import logoGoogle from '@/commons/assets/images/google-logo.svg'

import { Button } from '@/commons/components'
import { Header } from './components/Header'

import * as S from './styles'

export const HomeSection = () => {
  return (
    <S.Container>
      <Header />

      <p>
        Uma solução para o acesso às informações sobre as rotas e horários dos
        ônibus da UFPI, bem como suas respectivas localizações em tempo real.
      </p>

      <Button>
        <Image
          src={logoGoogle}
          alt="Logo rotas da UFPI"
          width={24}
          height={24}
        />
        Conecte-se com o Google
      </Button>
    </S.Container>
  )
}
