import Image from 'next/image'

import logoBus from '@/commons/assets/images/logo-bus.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <h1>Rotas da UFPI</h1>

      <Image src={logoBus} alt="Logo rotas da UFPI" />

      <p>Campus Amílcar Ferreira Sobral Floriano Piauí</p>
    </S.Header>
  )
}
