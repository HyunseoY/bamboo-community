import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
  }

  body {
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default GlobalStyle;
