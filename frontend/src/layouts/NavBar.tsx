import { FiUser } from "react-icons/fi";
import { IoBagRemoveOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import useCart from "../Hooks/useCart";
const NavBar = () => {
  const { cart } = useCart();
  const NavLinksArray = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/shop" },
    { name: "About", to: "/about" },
    { name: "Contact Us", to: "/contactus" },
  ];
  return (
    <nav className="flex items-end justify-between m-auto mt-4 mb-1 sm:max-md:flex-col sm:max-md:gap-5 sm:max-md:w-full sm:max-md:items-center">
      <div className="text-3xl font-lato font-bold">NorthStar</div>
      <ul className="flex gap-5 font-bold uppercase font-arimo">
        {NavLinksArray.map((_, index) => (
          <NavLink
            key={index}
            to={_.to}
            className={({ isActive }) =>
              isActive ? "text-etBlue border-b-2 border-etBlue" : "text-black"
            }
          >
            {_.name}
          </NavLink>
        ))}
      </ul>
      <div className="flex gap-3 text-[1.5rem] sm:max-md:text-2xl sm:max-md:gap-10">
        <button>
          <FiUser />
        </button>
        <NavLink to="/cart" className="relative">
          <IoBagRemoveOutline />
          <span className="absolute text-[0.8rem] bg-etBlue text-white rounded-full h-5 w-5 flex items-center justify-center top-[-9px] right-[-9px] ">
            {cart.length}
          </span>
        </NavLink>
        <button className="">
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
