import React from "react";
import AppRouter from "./router";
import { Provider } from "react-redux";
import { store } from "./context";
import "./main.scss";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
