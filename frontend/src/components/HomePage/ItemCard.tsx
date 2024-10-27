import { CartItem, ProductInHome } from "../../@types/types";
const ItemCard: React.FC<{item: ProductInHome | CartItem}> = ({ item }) => {
  return (
    <div className="h-90 flex flex-1 flex-col items-center p-2 border-2 rounded-md shadow-md hover:shadow-xl duration-200">
      <div className="object-fill ">
        <img src={item.image} alt="" className="h-60 w-56" />
      </div>
      <div className="flex flex-col justify-between h-full p-4">
        <p className="text-tDark font-semibold text-center">{item.title}</p>
        <div className="mt-1">
          <p className="text-etBlue text-center mt-3">Price: $ {item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
