type Rating = {
  rate: number;
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
  console.log(items);
  return (
    <div className="h-90 flex flex-col items-center p-2 border-2 rounded-md shadow-md hover:shadow-xl duration-200">
      <div className="object-fill">
        <img src={items.image} alt="" className="h-60 w-56" />
      </div>
      <div className="w-full flex flex-col justify-between h-full p-4">
        <div>
          <p className="text-tDark font-semibold">{items.title}</p>
          <div className="mt-1">
            <p className="text-tLight">Price: $ {items.price}</p>
            <p className="text-tLight">Rating: {items.rating?.rate} / 5</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 gap-10">
          <button className="bottom-[5px] left-[70px] bg-white text-etBlue font-semibold px-4 py-2 border-[1px] border-etBlue">
            View Details
          </button>
          <button className="bottom-[5px] left-[70px] bg-etBlue text-white font-semibold px-4 py-2 p-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
