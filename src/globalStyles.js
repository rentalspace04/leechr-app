import { createGlobalStyle } from "styled-components";

import colors from "./utils/colors";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: ${colors.text.main};
    background-color: ${colors.background.main};
    padding: 0;
    margin: 0;
    height:100%;
  }

  #root {
    height: 100%;
  }

  *  {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, p {
      padding: 0;
      margin: 0;
  }

  svg {
    fill: ${colors.text.main};
  }
`;

export default GlobalStyles;
