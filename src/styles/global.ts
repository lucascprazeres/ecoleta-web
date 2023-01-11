import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}
  }

  body {
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-500']};
    --webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 {
    font-family: Ubuntu, sans-serif;
    color: ${(props) => props.theme['purple-700']}
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
`
