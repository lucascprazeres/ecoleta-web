import styled from 'styled-components'

import landingImg from '../assets/landing.svg'

export const LandingPageContainer = styled.div`
  height: 100vh;

  background: url(${landingImg.src}) no-repeat 700px bottom;
`

export const LandingPageContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 68.75rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const PageHeader = styled.header`
  margin: 3rem 0 0;
`

export const TextContainer = styled.main`
  flex: 1;
  max-width: 35rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 3.5rem;
  color: ${(props) => props.theme['purple-700']};
`

export const Description = styled.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  line-height: 38px;
`

export const CreatePointLink = styled.a`
  width: 100%;
  max-width: 22.5rem;
  height: 4.5rem;
  background: ${(props) => props.theme['green-300']};
  border-radius: 8px;
  text-decoration: none;

  display: flex;
  align-items: center;
  overflow: hidden;

  margin-top: 2.5rem;

  &:hover {
    background: ${(props) => props.theme['green-500']};
  }

  span {
    display: block;
    background: rgba(0, 0, 0, 0.08);
    width: 4.5rem;
    height: 4.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    svg {
      color: ${(props) => props.theme.white};
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  strong {
    flex: 1;
    text-align: center;
    color: ${(props) => props.theme.white};
  }
`
