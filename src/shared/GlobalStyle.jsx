import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
  }

  body {
    overflow: hidden;
  }

  html {
    font-size: 10px;
  }
`;

export default GlobalStyle;
