import { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; // 16px = 1.6rem
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.family.sans};
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-family: ${({ theme }) => theme.fonts.family.montserrat};
    font-weight: 700;
  }
  span {
    font-size: 1.6rem;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
