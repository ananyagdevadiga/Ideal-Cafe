import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const updateQuantity = (product, quantity) => {
    setCart(prev => {
      const updatedCart = { ...prev };
      if (quantity <= 0) {
        delete updatedCart[product.id];
      } else {
        updatedCart[product.id] = { ...product, quantity };
      }
      return updatedCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = Object.values(cart).reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <CartContext.Provider value={{ cart, updateQuantity, totalItems, totalCost }}>
      {children}
    </CartContext.Provider>
  );
};
