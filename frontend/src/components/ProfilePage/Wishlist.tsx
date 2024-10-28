import ProductCard from "../Reusable/ProductCard";
import { CartItem } from "../../@types/types";
import useProductContext from "../../hooks/useProductContext";
const Wishlist = () => {
  const { storeData } = useProductContext();
  const wishListLength = storeData?.filter(
    (item) => item.isInWishList === true
  ).length;
  return (
    <>
      {wishListLength === 0 ? (
        <h1 className="text-center text-2xl font-semibold font-arimo dark:text-white">
          No items
        </h1>
      ) : (
        <div className="grid grid-cols-3 mt-5 gap-5">
          {storeData === undefined ? (
            <h1>No items found in the wishlist</h1>
          ) : (
            storeData
              .filter((item) => item.isInWishList === true)
              .map((item: CartItem) => <ProductCard items={item} />)
          )}
        </div>
      )}
    </>
  );
};

export default Wishlist;
