import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Provider as ReduxStoreProvider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <ReduxStoreProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxStoreProvider>,
  document.getElementById("root")
);
