import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import App from "./App";
import Main from "./components/Main";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/beers" element={<Main />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
