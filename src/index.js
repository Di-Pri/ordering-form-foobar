import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import App from "./App";
import Confirmation from "./components/Confirmation";
import reportWebVitals from "./reportWebVitals";
import Mobilepay from "./components/Mobilepay";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Confirmation /> */}
    <Mobilepay />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
