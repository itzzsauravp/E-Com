import useCart from "../hooks/useCart";
import { useEffect, useState } from "react";
import { CartItem } from "../@types/types";
import CartTotals from "../components/CartPage/CartTotals";

const CartPage = () => {
  const { cart } = useCart();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartTitles = ["Product", "Name", "Price", "Quantity", "Total"];
  useEffect(() => {
    const cartItemsWithQuantity = cart.map((item) => ({
      ...item,
      quantity: 1,
    }));

    setCartItems(cartItemsWithQuantity);
  }, [cart]);

  const handleQuantityChange = (id: number, newQuantity: string) => {
    const quantity = Math.max(1, Number.parseInt(newQuantity));
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="mt-12 flex flex-col">
      <span className="text-2xl text-tLight font-semibold font-lato">
        Home / Shopping Cart
      </span>
      <div className="w-full p-4 mt-12">
        <div className="grid grid-cols-5 uppercase font-bold font-arimo">
          {cartTitles.map((_, index) => (
            <p key={index}>{_}</p>
          ))}
        </div>
        {cartItems.map((item) => (
          <div
            className="mt-5 grid grid-cols-5 border-t-2 border-b-2 "
            key={item.id}
          >
            <p className="h-20 w-20">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full"
              />
            </p>
            <p className="flex items-center">{item.title}</p>
            <p className="flex items-center">${item.price}</p>
            <p className="flex items-center">
              <input
                value={item.quantity}
                type="number"
                className="w-[100px] h-8 border-2 p-1 flex items-center"
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                min="1"
              />
            </p>
            <p className="flex items-center">
              ${(item.price * (item.quantity || 1)).toFixed(2)}{" "}
            </p>
          </div>
        ))}
      </div>
      <CartTotals cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
