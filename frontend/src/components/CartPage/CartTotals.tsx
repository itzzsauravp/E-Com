import Button from "../Reusable/Button";
import { CartItem } from "../../@types/types";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPurchaseItemsToHistory,
  makePurchase,
  selectUserBalance,
} from "../../../store/userSlice";
import useCart from "../../hooks/useCart";
const CartTotals: React.FC<{ cartItems: CartItem[] }> = ({ cartItems }) => {
  const [totalPrice, setTotalPrice] = useState("0.00");
  const dispatch = useDispatch();
  const userBalance = useSelector(selectUserBalance);
  const { clearCart } = useCart();
  const handlePurchase = () => {
    if (userBalance > Number(totalPrice)) {
      dispatch(makePurchase(Number(totalPrice)));
      dispatch(addPurchaseItemsToHistory(cartItems));
      alert("Thankyou for making the purchase");
      clearCart();
    } else {
      alert("You dont have enough balace!!!");
    }
  };
  useEffect(() => {
    const price = cartItems
      .reduce(
        (acc: number, item: CartItem) =>
          acc + item.price * (item.quantity || 1),
        0
      )
      .toFixed(2);
    setTotalPrice(price);
  }, [cartItems, dispatch]);

  return (
    <div className="mt-12">
      <div className="w-[30%]">
        <h1 className="text-3xl dark:text-white">Cart Totals</h1>
        <div>
          <p className="flex justify-between p-4 border-b-2">
            <span className="text-tLight dark:text-slate-500">Subtotal</span>
            <span className="dark:text-slate-500">${totalPrice}</span>
          </p>
          <p className="flex justify-between p-4 text-tLight">
            <span className="dark:text-slate-500">Shipping Fee</span>
            <span className="dark:text-slate-500 font-bold">FREE!!</span>
          </p>
          <p className="flex justify-between p-4 border-t-2">
            <span className="font-bold font-lato dark:text-white">Total</span>
            <span className="font-bold dark:text-white">${totalPrice}</span>
          </p>
        </div>
      </div>
      <Button
        border="none"
        value="Purchase Now"
        bgColor="#024E82"
        txtColor="white"
        px={2}
        py={1}
        mt={2}
        mb={5}
        func={() => handlePurchase()}
        uppercase={true}
      />
    </div>
  );
};

export default CartTotals;
