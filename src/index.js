import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { GlobalStyle } from "./Styles/GlobalStyle";
import theme from "./Styles/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>,
  document.getElementById("root")
);
