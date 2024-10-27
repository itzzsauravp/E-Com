import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const HamburgerPopOver = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const canLogout = window.confirm("Are you sure you want to logout ?");
    if (canLogout) {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };
  return (
    <div className="absolute z-10 top-8 right-2 text-[1.2rem] bg-white w-[200px] p-2 rounded-xl border-[1px] border-tLight">
      <ul className="text-left">
        <li
          className="p-2 flex items-center justify-between hover:bg-slate-300 rounded-md duration-200 ease-in-out"
          onClick={() => navigate("/login")}
        >
          <span>Login</span>
          <CiLogin />
        </li>
        <li
          className="p-2 flex items-center justify-between hover:bg-slate-300 rounded-md duration-200 ease-in-out"
          onClick={handleLogout}
        >
          <span>Logout</span>
          <CiLogout />
        </li>
      </ul>
    </div>
  );
};

export default HamburgerPopOver;
