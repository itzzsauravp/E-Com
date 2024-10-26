import { useState, createContext, ReactNode } from "react";
import { CartItem } from "../@types/types";
import { CartContextType } from "../@types/types";
const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const addToCart = (item: CartItem) => {
    const val = cart.find((cartItem) => cartItem.id === item.id);
    if (!val) setCart((prevCart) => [...prevCart, item]);
  };
  const clearCart = () => {
    setCart([]);
  };
  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
