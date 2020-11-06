import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers";
import { GlobalStyle } from "./Styles/GlobalStyle";
import theme from "./Styles/theme";
import { ThemeProvider } from "styled-components";
import RecommendTap from "./Pages/Recommend/RecommendTap";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
