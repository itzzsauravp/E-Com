import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "../../../store/userSlice";
const NavProfile = () => {
  const userName = useSelector(selectUserName);
  return (
    <nav>
      <h1 className="text-2xl font-semibold font-lato text-white bg-black dark:border-[1px] p-6 rounded-tl-xl rounded-tr-xl">
        {userName}
      </h1>
      <ul className="bg-slate-800 text-white space-y-12 p-4 rounded-bl-xl rounded-br-xl flex flex-col">
        <NavLink
          to="/profile"
          className="hover:bg-slate-200 p-4 hover:text-black rounded-md duration-200"
        >
          Add Balance
        </NavLink>
        <NavLink
          to="order-history"
          className="hover:bg-slate-200 p-4 hover:text-black rounded-md duration-200"
        >
          Order History
        </NavLink>
        <NavLink
          to="recently-browsed"
          className="hover:bg-slate-200 p-4 hover:text-black rounded-md duration-200"
        >
          Recently Browsed
        </NavLink>
        <NavLink
          to="wishlist"
          className="hover:bg-slate-200 p-4 hover:text-black rounded-md"
        >
          My Wishlist
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavProfile;
