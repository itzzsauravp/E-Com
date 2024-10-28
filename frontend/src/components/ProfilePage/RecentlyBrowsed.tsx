import { useSelector } from "react-redux";
import { selectRecentlyViewedItems } from "../../../store/userSlice";
import ProductCard from "../Reusable/ProductCard";
import { useNavigate } from "react-router-dom";
const RecentlyBrowsed = () => {
  const navigate = useNavigate();
  const recentlyViewedItems = useSelector(selectRecentlyViewedItems);
  return (
    <div className="flex gap-2">
      {recentlyViewedItems.length > 0 ? (
        recentlyViewedItems.map((item) => <ProductCard items={item} />)
      ) : (
        <h1 className="text-tLight dark:text-slate-500">
          Opps! You dont have any recently viewed items <br /> Navigate to the
          <span
            className="font-bold uppercase cursor-pointer text-black dark:text-white"
            onClick={() => navigate("/shop")}
          >
            {" "}
            shop{" "}
          </span>
          to view some exciting deals
        </h1>
      )}
    </div>
  );
};

export default RecentlyBrowsed;
