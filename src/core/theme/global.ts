import 'react-toastify/dist/ReactToastify.min.css';

import { createGlobalStyle } from '~/modules';
import { mqDevices } from '~/utils';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    text-rendering: optimizeLegibility !important;
    overscroll-behavior: contain;
    scrollbar-width: none;
    -webkit-font-smoothing: antialiased !important;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
  html {
    height: 100vh;
    width: 100%;

    @media ${mqDevices.inSmallDesktop} {
      font-size: 75% ;
    }
  }
  input, button {
    font-family: 'Poppins', sans-serif;
  }
  button {
    cursor: pointer;
  }
  div {
    display: flex;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
