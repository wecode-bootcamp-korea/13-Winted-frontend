import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
${reset}

* {
    text-decoration: none;
    box-sizing: border-box;
  }
  
  html {
    @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
    font-family: "Lato", "Noto Sans KR", sans-serif, Malgungothic, "맑은고딕",
      Dotum, "돋움";
  }
  
  button {
    all: unset;
    cursor: pointer;
  }
`;
