import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { myStore } from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
