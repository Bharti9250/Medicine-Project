import { createContext, useContext, useState } from "react";

export const Cartcontext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  console.log(cartItem, "cartItemcartItemcartItemcartItemcartItem");

  const addToCart = (product) => {
    setCartItem((prev) => {
      const existing = prev.find((i) => i.id === product.id);

      if (existing) {
        return prev.map((i) =>
          i.id === product.id
            ? {
                ...i,
                quantity: (i.quantity ?? 1) + 1,
                totalPrice: ((i.quantity ?? 1) + 1) * i.price,
              }
            : i
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: product.quantity ?? 1,
          totalPrice: (product.quantity ?? 1) * product.price,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItem((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItem((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              quantity: Math.max(1, quantity),
              totalPrice: Math.max(1, quantity) * i.price,
            }
          : i
      )
    );
  };

  const CurrentProductPrice = (id) => {
    console.log(product);
    
    const product = cartItem.find((i) => i.id === id);
    return product ? product.totalPrice : 0;
  };

  
  const TotalCartPrice = () => {
    return cartItem.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
  };

  return (
    <Cartcontext.Provider
      value={{
        cartItem,
        addToCart,
        removeFromCart,
        updateQuantity,
        CurrentProductPrice,
        TotalCartPrice,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

export const useCart = () => useContext(Cartcontext);
