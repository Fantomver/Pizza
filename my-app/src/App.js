import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./scss/app.scss";
import Header from "./componens/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import pizzas from "./assets/pizzas.json";



function App() {
  

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
