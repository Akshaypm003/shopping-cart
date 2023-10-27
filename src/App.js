import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
