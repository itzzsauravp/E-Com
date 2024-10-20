import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const SharedLayout = () => {
  return (
    <div className="w-[80%] m-auto sm:max-xl:w-full p-4">
      <NavBar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;
