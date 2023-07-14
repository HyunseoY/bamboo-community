import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
    font-family: 'JSArirangPPURI-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSArirangPPURI-RegularA1.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;

      /* 스크롤 바 디자인 */
  &::-webkit-scrollbar {
    width: 7px;
  }

  /* 스크롤 바 색상 */
  &::-webkit-scrollbar-thumb {
    background: #7FA102;
    border-radius: 10px;
  }

  /* 스크롤 바 호버 효과 */
  &::-webkit-scrollbar-thumb:hover {
    background: #cfd541;
  }
  }



`;

export default GlobalStyle;
