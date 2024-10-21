import CartContext from "../contexts/CartProvider";
import { useContext } from "react";
const useCart = () => {
  const context = useContext(CartContext);
  if (!CartContext) {
    throw new Error("The cartContext should be used within the CartProvider");
  } else {
    return context;
  }
};

export default useCart;
