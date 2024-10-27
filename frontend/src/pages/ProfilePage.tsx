import NavProfile from "../components/ProfilePage/NavProfile";
import { Outlet } from "react-router-dom";
const ProfilePage = () => {
  return (
    <section className="flex w-full gap-12 mt-10">
      <div className="w-[300px] h-[800px]">
        <NavProfile />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default ProfilePage;
