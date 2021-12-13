import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import Landing from "./components/Landing";
import Main from "./components/Main";
import DeleteMe1 from "./components/DeleteMe1";
import DeleteMe2 from "./components/DeleteMe2";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/beers" element={<Main />} />
      <Route path="/beers/creditCard" element={<DeleteMe1 />} />
      <Route path="/beers/mobilePay" element={<DeleteMe2 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
