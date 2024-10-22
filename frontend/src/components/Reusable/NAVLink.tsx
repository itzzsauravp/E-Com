import { NavLink } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { NavLinks } from "../../@types/types";
const NAVLink: React.FC<{ NavLinkElements: NavLinks[] }> = ({
  NavLinkElements,
}) => {
  const { cart } = useCart();
  return NavLinkElements.map((navLinkElement, index: number) => (
    <NavLink
      key={index}
      to={navLinkElement.to}
      className={({ isActive }) =>
        `relative ${isActive ? "text-etBlue" : "text-black"}`
      }
    >
      {navLinkElement.name}
      {navLinkElement.showsCartItemsNumber && (
        <span className="absolute text-[0.8rem] bg-etBlue text-white rounded-full h-5 w-5 flex items-center justify-center top-[-9px] right-[-9px] ">
          {cart.length}
        </span>
      )}
    </NavLink>
  ));
};

export default NAVLink;
