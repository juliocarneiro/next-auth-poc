import type { NextPage } from 'next'
import * as S from './styles'
import Header from 'components/Header'

const Home: NextPage = () => {
  return (
    <S.HomeWrapper>
      <Header />
    </S.HomeWrapper>
  )
}

export default Home
