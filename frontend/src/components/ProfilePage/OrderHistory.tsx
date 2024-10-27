import { useSelector } from "react-redux";
import ItemCard from "../HomePage/ItemCard";
import { selectOrderHistory } from "../../../store/userSlice";
import { useNavigate } from "react-router-dom";
const OrderHistory = () => {
  const orderedItems = useSelector(selectOrderHistory);
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 w-full">
      {orderedItems.length > 0 ? (
        orderedItems.map((item) => <ItemCard item={item!} />)
      ) : (
        <h1 className="text-tLight">
          Opps! You dont have any ordered items <br /> Navigate to the
          <span
            className="font-bold uppercase cursor-pointer text-tDark"
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

export default OrderHistory;
