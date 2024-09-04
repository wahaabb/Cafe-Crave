import React, { createContext, useState, useContext } from 'react';
const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  const removeFromCart = (itemIndex) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};