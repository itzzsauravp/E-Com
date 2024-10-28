import { RxHamburgerMenu } from "react-icons/rx";
import NAVLink from "../components/Reusable/NAVLink";
import HamburgerPopOver from "../components/HamburgerPopOver";
import { useEffect, useRef, useState } from "react";
import { NavLinksArray, NavLinkReactIcons } from "../data/staticData";
import { useSelector } from "react-redux";
import { GiWallet } from "react-icons/gi";
import { selectUserBalance } from "../../store/userSlice";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import useTheme from "../hooks/useTheme";
const NavBar = () => {
  const [hamburgerPopover, setHamburgerPopover] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
      setHamburgerPopover(false);
    }
  };
  const [theme, toggleTheme] = useTheme();
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme) {
      htmlElement.classList.add("dark");
      htmlElement.style.backgroundColor = "black";
    } else {
      htmlElement.classList.remove("dark");
      htmlElement.style.backgroundColor = "white";
    }
  }, [theme]);
  const usersBalance = useSelector(selectUserBalance);
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
    <nav className="flex dark:bg-black dark:text-white items-end justify-between m-auto mb-1 sm:max-md:flex-col sm:max-md:gap-5 sm:max-md:w-full sm:max-md:items-center">
      <div className="text-3xl font-lato font-bold">NorthStar</div>
      <ul className="flex gap-5 font-bold uppercase font-arimo">
        <NAVLink NavLinkElements={NavLinksArray} />
      </ul>
      <div className="flex gap-3 text-[1.5rem] sm:max-md:text-2xl sm:max-md:gap-10 items-end">
        <NAVLink NavLinkElements={NavLinkReactIcons} />
        <button
          className="relative"
          onClick={() => setHamburgerPopover(!hamburgerPopover)}
        >
          <RxHamburgerMenu />
          {hamburgerPopover && (
            <span ref={popoverRef}>
              <HamburgerPopOver />
            </span>
          )}
        </button>
        <span className="text-[1.2rem] text-tDark dark:text-white font-semibold border-2 border-slate-400 px-6 py-1 flex items-center gap-2 rounded-full">
          <GiWallet />: ${usersBalance.toFixed(2)}
        </span>
        <div
          className={`flex items-center justify-center rounded-full h-8 w-8 border-[1px] border-slate-800 ${
            theme ? "text-white bg-[#334]" : "text-[#334] bg-white"
          }`}
          onClick={() => {
            toggleTheme();
            console.log(theme);
          }}
        >
          {theme ? <CiLight /> : <CiDark />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
