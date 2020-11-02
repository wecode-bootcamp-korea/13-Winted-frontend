import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { GlobalStyle } from "./Styles/GlobalStyle";
import theme from "./Styles/theme";
import { ThemeProvider } from "styled-components";
import RecommendTap from "./Pages/Recommend/RecommendTap";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes exact path="/recommendTap" component={RecommendTap} />
  </ThemeProvider>,
  document.getElementById("root")
);
