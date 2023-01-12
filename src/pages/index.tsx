import Head from 'next/head'
import { FiLogIn } from 'react-icons/fi'
import {
  CreatePointLink,
  Description,
  LandingPageContainer,
  LandingPageContent,
  PageHeader,
  TextContainer,
  Title,
} from './styles'

import logoImg from '../assets/logo.svg'

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Ecoleta</title>
        <meta name="Landing Page" content="Pagina inicial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPageContainer>
        <LandingPageContent>
          <PageHeader>
            <img src={logoImg.src} alt="" />
          </PageHeader>

          <TextContainer>
            <Title>O Seu marketplace de coleta de resíduos.</Title>
            <Description>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
            </Description>

            <CreatePointLink href="">
              <span>
                <FiLogIn />
              </span>
              <strong>Cadastre um ponto de coleta</strong>
            </CreatePointLink>
          </TextContainer>
        </LandingPageContent>
      </LandingPageContainer>
    </>
  )
}
