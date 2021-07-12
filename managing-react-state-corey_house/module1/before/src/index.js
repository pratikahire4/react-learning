import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorBoundary from "./ErrorBoundry"
import { CartProvider } from '../src/cartContext'

ReactDOM.render(
    <ErrorBoundary>
        <BrowserRouter>
            <CartProvider>
                <App />
            </CartProvider>
        </BrowserRouter>
    </ErrorBoundary>
    , document.getElementById("root"));
