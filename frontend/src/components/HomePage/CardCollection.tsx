import ItemCard from "./ItemCard";
import useProductContext from "../../hooks/useProductContext";
const CardCollection: React.FC<{ isTopSeller: boolean }> = ({
  isTopSeller,
}) => {
  const { storeData } = useProductContext();
  let tempArry;
  if (isTopSeller) {
    tempArry = storeData?.slice(0, 4);
  } else {
    tempArry = storeData?.slice(8, 16);
  }
  return (
    <div className="mt-8 grid grid-cols-4 gap-9 m-auto sm:max-md:grid-cols-1 md:max-lg:grid-cols-2">
      {tempArry?.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
};

export default CardCollection;
