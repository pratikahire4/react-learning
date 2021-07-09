import React, { useState, useReducer } from "react";
import { Routes, Route } from "react-router";

import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import Detail from "./Detail"
import Cart from "./Cart";
import Checkout from "./Checkout";
import cartReducer from "./services/cartReducer";

var initialCartState = []

try {
  initialCartState = JSON.parse(localStorage.getItem('cart')) ?? []
} catch (e) {
  console.error(e)
  initialCartState = []
}

export default function App() {

  const [cart, dispatch] = useReducer(cartReducer, initialCartState,)

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to shopping site</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail dispatch={dispatch} />} />
            <Route path="/cart" element={<Cart cart={cart} dispatch={dispatch} />} />
            <Route path="/checkout" element={<Checkout cart={cart} dispatch={dispatch} />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
