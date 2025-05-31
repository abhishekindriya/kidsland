// src/reducers/cartReducer.js
import React, { createContext, useContext, useReducer, useEffect } from "react";

// Create context
const CartContext = createContext();

// Initial state
const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cart-items')) || [],
};

// Reducer function
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { cartItems: [...state.cartItems, action.payload] };

        case "REMOVE_FROM_CART":
            return { cartItems: state.cartItems.filter(item => item.id !== action.payload) };

        case "CLEAR_CART":
            return { cartItems: [] };

        default:
            return state;
    }
};

// Provider
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Sync with localStorage
    useEffect(() => {
        localStorage.setItem('cart-items', JSON.stringify(state.cartItems));
    }, [state.cartItems]);

    return (
        <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook
export const useCart = () => useContext(CartContext);