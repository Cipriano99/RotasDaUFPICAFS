import { Button } from '@/commons/components'
import { Header } from './components/Header'

import * as S from './styles'
import { FaArrowRight } from 'react-icons/fa'
import { useRouter } from 'next/router'

export const HomeSection = () => {
  const router = useRouter()

  return (
    <S.Container>
      <Header />

      <p>
        Uma solução para o acesso às informações sobre as rotas e horários dos
        ônibus da UFPI, bem como suas respectivas localizações em tempo real.
      </p>

      <Button
        onClick={() => {
          router.push('/mapa')
        }}
      >
        Ver rotas
        <FaArrowRight size={18} />
      </Button>
    </S.Container>
  )
}
