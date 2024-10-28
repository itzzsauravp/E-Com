import { useNavigate } from "react-router-dom";
import RatingStart from "./RatingStart";
import useProductContext from "../../hooks/useProductContext";
import useCart from "../../hooks/useCart";
import { CartItem } from "../../@types/types";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecentlyViewedItems } from "../../../store/userSlice";
const ProductCard: React.FC<{ items: CartItem }> = ({ items }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleViewDetails = () => {
    dispatch(addRecentlyViewedItems(items));
    navigate(`/product/${items.id}`, {
      state: {
        product: items,
      },
    });
  };
  const [wishListItem, setWishListItems] = useState(items.isInWishList);
  const { removeFromWishList, addToWishList } = useProductContext();
  const { addToCart } = useCart();

  const handleWishlistToggle = (itemInWishList: boolean | undefined) => {
    if (itemInWishList) {
      removeFromWishList(items);
    } else {
      addToWishList(items);
    }
  };

  return (
    <div className="h-90 flex flex-col flex-1 items-center p-2 border-[1px] dark:border-[1px] dark:border-slate-400 rounded-md shadow-md hover:shadow-xl duration-200 relative dark:hover:shadow-md dark:hover:shadow-slate-500">
      <div className="object-fill">
        <img src={items.image} alt="" className="h-60 w-56" />
        <span
          className="text-2xl text-red-500 absolute top-4 right-4"
          onClick={() => {
            handleWishlistToggle(items.isInWishList);
            setWishListItems(!wishListItem);
          }}
        >
          {wishListItem ? <FaHeart /> : <FaRegHeart />}
        </span>
      </div>
      <div className="w-full flex flex-col justify-between h-full bg-slate-100 dark:bg-slate-900 p-4 mt-2 rounded-md">
        <div className="">
          <p className="text-tDark dark:text-white font-semibold">
            {items.title}
          </p>
          <div className="mt-1 text-tLight dark:text-slate-500">
            <p>Price: ${items.price}</p>
            <p>Sold: {items.rating?.count}</p>
            <p>
              <RatingStart rating={items.rating?.rate} />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 gap-10">
          <button
            className="bottom-[5px] left-[70px] bg-white dark:bg-slate-700 dark:text-slate-300 text-etBlue font-semibold px-4 py-2 border-[1px] border-etBlue hover:shadow-md hover:shadow-slate-400 dark:hover:shadow-md dark:hover:shadow-slate-600 duration-200"
            onClick={() => handleViewDetails()}
          >
            View Details
          </button>
          <button
            className="bottom-[5px] left-[70px] bg-etBlue text-white font-semibold px-4 py-2 p-2 hover:shadow-md hover:shadow-slate-400 dark:hover:shadow-md dark:hover:shadow-slate-600  duration-200"
            onClick={() => addToCart(items)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
