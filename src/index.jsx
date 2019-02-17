import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./redux/reducer";
import App from "./App";

const store = createStore(reducer);

const TheApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<TheApp />, document.getElementById("root"));
registerServiceWorker();
