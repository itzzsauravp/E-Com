import { FiUser } from "react-icons/fi";
import { IoBagRemoveOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="flex items-end justify-between m-auto p-4 sm:max-md:flex-col sm:max-md:gap-5 sm:max-md:w-full sm:max-md:items-center">
      <div className="text-3xl font-lato font-bold">NorthStar</div>
      <ul className="flex gap-5 font-bold uppercase font-arimo">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-etBlue border-b-2 border-etBlue" : "text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-etBlue border-b-2 border-etBlue" : "text-black"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-etBlue border-b-2 border-etBlue" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            isActive ? "text-etBlue border-b-2 border-etBlue" : "text-black"
          }
        >
          Contact Us
        </NavLink>
      </ul>
      <div className="flex gap-3 text-[1.2rem] sm:max-md:text-2xl sm:max-md:gap-10">
        <button>
          <FiUser />
        </button>
        <button className="relative">
          <IoBagRemoveOutline />
          <span className="absolute text-[0.8rem] bg-etBlue text-white rounded-full h-5 w-5 flex items-center justify-center top-[-9px] right-[-9px] ">
            10
          </span>
        </button>
        <button className="">
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
