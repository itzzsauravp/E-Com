import { RxHamburgerMenu } from "react-icons/rx";
import NAVLink from "../components/Reusable/NAVLink";
import HamburgerPopOver from "../components/HamburgerPopOver";
import { useEffect, useRef, useState } from "react";
import useProductContext from "../hooks/useProductContext";
import { NavLinksArray, NavLinkReactIcons } from "../data/staticData";
import { useSelector } from "react-redux";
import { GiWallet } from "react-icons/gi";
import { selectBalance } from "../../store/balanceSlice";
const NavBar = () => {
  const [hamburgerPopover, setHamburgerPopover] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    // e.stopImmediatePropagation()
    if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
      setHamburgerPopover(false);
    }
  };
  const { storeData } = useProductContext();
  const balance = useSelector(selectBalance);
  const wishListLength: number | undefined = storeData?.filter(
    (item) => item.isInWishList === true
  ).length;
  useEffect(() => {
    if (hamburgerPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hamburgerPopover]);
  return (
    <nav className="flex items-end justify-between m-auto mt-4 mb-1 sm:max-md:flex-col sm:max-md:gap-5 sm:max-md:w-full sm:max-md:items-center">
      <div className="text-3xl font-lato font-bold">NorthStar</div>
      <ul className="flex gap-5 font-bold uppercase font-arimo">
        <NAVLink NavLinkElements={NavLinksArray} />
      </ul>
      <div className="flex gap-3 text-[1.5rem] sm:max-md:text-2xl sm:max-md:gap-10 items-center">
        <NAVLink NavLinkElements={NavLinkReactIcons} />
        <button
          className="relative"
          onClick={() => setHamburgerPopover(!hamburgerPopover)}
        >
          {wishListLength !== undefined && wishListLength > 0 && (
            <span className="absolute text-[0.8rem] bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center top-[-9px] right-[-9px]">
              {wishListLength}
            </span>
          )}
          <RxHamburgerMenu />
          {hamburgerPopover && (
            <span ref={popoverRef}>
              <HamburgerPopOver wishListLength={wishListLength} />
            </span>
          )}
        </button>
        <span className="text-[1.2rem] text-tDark font-semibold border-2 p-2 flex items-center gap-2">
          <GiWallet />: ${balance}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
