import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const getInitialCart = () => {
  try {
    const stored = localStorage.getItem("lux-cart");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCart);

  useEffect(() => {
    localStorage.setItem("lux-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.slug === product.slug);

      if (existingItem) {
        return currentItems.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: Math.min(item.quantity + 1, product.countInStock) }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (slug, quantity) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => (item.slug === slug ? { ...item, quantity: Number(quantity) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (slug) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.slug !== slug));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = cartItems.length === 0 ? 0 : subtotal > 1000 ? 0 : 7;
  const total = subtotal + shipping;

  const value = {
    addToCart,
    cartCount,
    cartItems,
    clearCart,
    removeFromCart,
    shipping,
    subtotal,
    total,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
