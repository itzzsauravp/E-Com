import { useNavigate } from "react-router-dom";
import RatingStart from "./RatingStart";
import useCart from "../../Hooks/useCart";
type Rating = {
  rate: number;
  count: number;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
};

interface Items {
  items: Product;
}
const ProductCard: React.FC<Items> = ({ items }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const handleViewDetails = () => {
    navigate(`/product/${items.id}`, {
      state: {
        product: items,
      },
    });
  };

  return (
    <div className="h-90 flex flex-col items-center p-2 border-2 rounded-md shadow-md hover:shadow-xl duration-200">
      <div className="object-fill">
        <img src={items.image} alt="" className="h-60 w-56" />
      </div>
      <div className="w-full flex flex-col justify-between h-full p-4">
        <div>
          <p className="text-tDark font-semibold">{items.title}</p>
          <div className="mt-1">
            <p className="text-tLight">Price: ${items.price}</p>
            <p className="text-tLight">Sold: {items.rating?.count}</p>
            <p>
              <RatingStart rating={items.rating?.rate} />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 gap-10">
          <button
            className="bottom-[5px] left-[70px] bg-white text-etBlue font-semibold px-4 py-2 border-[1px] border-etBlue hover:shadow-md hover:shadow-slate-400 duration-200"
            onClick={() => handleViewDetails()}
          >
            View Details
          </button>
          <button
            className="bottom-[5px] left-[70px] bg-etBlue text-white font-semibold px-4 py-2 p-2 hover:shadow-md hover:shadow-slate-400 duration-200"
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
