import { useSelector } from "react-redux";
import { selectRecentlyViewedItems } from "../../../store/userSlice";
import ProductCard from "../Reusable/ProductCard";
const RecentlyBrowsed = () => {
  const recentlyViewedItems = useSelector(selectRecentlyViewedItems);
  return (
    <div className="flex gap-2">
      {recentlyViewedItems.map((item) => (
        <ProductCard items={item} />
      ))}
    </div>
  );
};

export default RecentlyBrowsed;
