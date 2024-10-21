import Button from "../Reusable/Button";
import { CartItem } from "../../contexts/CartProvider";
const CartTotals: React.FC<{ cartItems: CartItem[] }> = ({ cartItems }) => {
  return (
    <div className="mt-12">
      <div className="w-[30%]">
        <h1 className="text-3xl">Cart Totals</h1>
        <div>
          <p className="flex justify-between p-4 border-b-2">
            <span className="text-tLight">Subtotal</span>
            <span>
              $
              {cartItems
                .reduce(
                  (acc: number, item: CartItem) =>
                    acc + item.price * (item.quantity || 1),
                  0
                )
                .toFixed(2)}
            </span>
          </p>
          <p className="flex justify-between p-4 text-tLight">
            <span>Shopping Fee</span>
            <span>FREE!!</span>
          </p>
          <p className="flex justify-between p-4 border-t-2">
            <span className="font-bold font-lato">Total</span>
            <span className="font-bold">
              $
              {cartItems
                .reduce(
                  (acc: number, item: CartItem) =>
                    acc + item.price * (item.quantity || 1),
                  0
                )
                .toFixed(2)}
            </span>
          </p>
        </div>
      </div>
      <Button
        value="Proceed to Checkout"
        bgColor="orange"
        txtColor="white"
        px={2}
        py={1}
        func={() =>
          alert(
            "Expect your products to be at your doorstep within 3 Days\nThank You"
          )
        }
        mt={2}
        mb={5}
      />
    </div>
  );
};

export default CartTotals;
