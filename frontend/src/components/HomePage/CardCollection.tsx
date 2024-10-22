import ItemCard from "./ItemCard";
import useProductContext from "../../hooks/useProductContext";
import { generateNumbersWithDifference } from "../../utils/utils";
const CardCollection: React.FC<{ isTopSeller: boolean }> = ({
  isTopSeller,
}) => {
  const { storeData } = useProductContext();
  let tempArry;
  if (isTopSeller) {
    const [num1, num2] = generateNumbersWithDifference(8);
    tempArry = storeData?.slice(num1, num2).sort(() => Math.random() - 0.5);
  } else {
    const [num1, num2] = generateNumbersWithDifference(4);
    tempArry = storeData?.slice(num1, num2).sort(() => Math.random() - 0.5);
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
