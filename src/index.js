import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import App from "./App";
import Confirmation from "./components/Confirmation";
import reportWebVitals from "./reportWebVitals";
import Mobilepay from "./components/Mobilepay";
import Creditcard from "./components/Creditcard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/creditcard" element={<Creditcard />} />
        <Route path="/mobilepay" element={<Mobilepay />} />
        <Route path="/confirmation" element={<Confirmation />} />
        {/* <App /> */}
        {/* <Confirmation /> */}
        {/* <Mobilepay /> */}
        {/* <Creditcard /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
