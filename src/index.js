import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import App from "./App";
import Main from "./components/Main";
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
        <Route path="/beers" element={<Main />} />
        <Route path="/creditcard" element={<Creditcard />} />
        <Route path="/mobilepay" element={<Mobilepay />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
