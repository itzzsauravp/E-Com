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
import { CiMenuKebab } from "react-icons/ci";
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
        <div className="text-2xl">
          <div
            className="text-[1.3rem] text-red-500 absolute top-4 right-4 cursor-pointer"
            onClick={() => {
              handleWishlistToggle(items.isInWishList);
              setWishListItems(!wishListItem);
            }}
          >
            {wishListItem ? <FaHeart /> : <FaRegHeart />}
          </div>
          <div
            className="text-[1.3rem] text-black absolute top-12 right-3 bg-slate-300 rounded-full p-[2px] cursor-pointer dark:bg-slate-900 dark:text-white border-[1px]"
            onClick={handleViewDetails}
          >
            <CiMenuKebab />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between h-full bg-slate-100 dark:bg-slate-900 p-4 mt-2 rounded-md">
        <div className="">
          <p className="text-tDark dark:text-white font-semibold">
            {items.title}
          </p>
          <div className="mt-1 text-tLight dark:text-slate-500">
            <p>Sold: {items.rating?.count}</p>
            <p className="flex gap-2 items-center">
              <RatingStart rating={items.rating?.rate} />
              <p className="mt-2 bg-blue-300 font-arimo px-4 py-1 rounded-xl text-black">
                {items.rating?.rate}
              </p>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5 gap-10">
          <p className="text-[1.3rem] font-semibold font-lato dark:text-white">
            ${items.price}
          </p>
          <button
            className="bottom-[5px] left-[70px] bg-etBlue text-white font-semibold px-4 py-2 p-2 hover:shadow-xl hover:shadow-slate-400 dark:hover:shadow-slate-800  duration-200"
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
