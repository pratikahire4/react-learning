import React, { useReducer, useContext } from "react"

import cartReducer from '../src/services/cartReducer'
export const CartContext = React.createContext(null)

var initialCartState = []

try {
    initialCartState = JSON.parse(localStorage.getItem('cart')) ?? []
} catch (e) {
    console.error(e)
    initialCartState = []
}

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, initialCartState)

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext);
    return context;
}