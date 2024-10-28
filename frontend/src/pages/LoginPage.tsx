import loginImg from "../assets/Images/loginImg.webp";
import { FormEvent, useState } from "react";
import { userLogin } from "../api/apiCalls";
import { useNavigate } from "react-router-dom";
import { getUserName } from "../../store/userSlice";
import { useDispatch } from "react-redux";
type UserLoginInfo = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const FromFields = [{ name: "Username" }, { name: "Password" }];
  const [rememberMe, setRememberMe] = useState(false);
  const [userInfo, setUserInfo] = useState<UserLoginInfo>({
    username: "johnd",
    password: "m38rmF$",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(getUserName(userInfo.username));
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({ ...prev, username: e.target.value }));
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({ ...prev, password: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await userLogin(userInfo);
    if (result && typeof result !== "string") {
      const { token } = result;
      if (token && rememberMe) {
        localStorage.setItem("token", token);
        navigate("/profile");
      } else if (token && !rememberMe) {
        sessionStorage.setItem("token", token);
        navigate("/profile");
      }
    } else {
      console.error("No valid login result or token!!");
    }
  };

  return (
    <section className="flex justify-center items-center mt-12 p-4 gap-24 w-[80%] m-auto">
      <div className="h-[750px] w-[800px] ">
        <img src={loginImg} alt="" className="h-full w-full rounded-xl" />
      </div>
      <form
        className="flex flex-col bg-slate-300 dark:bg-slate-900 rounded-xl p-8 w-[500px]"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="font-bold text-3xl text-center dark:text-white">Login</h1>
          {FromFields.map((field, index) => (
            <span className="flex flex-col" key={index}>
              <label
                htmlFor="username"
                className="text-[0.9rem] text-tLight dark:text-white mb-1 font-arimo mt-5"
              >
                {field.name}
              </label>
              <input
                type="text"
                value={
                  field.name === "Username"
                    ? userInfo.username
                    : userInfo.password
                }
                className="px-4 py-2 outline-none dark:bg-black dark:text-white dark:border-[1px] dark:border-slate-500"
                onChange={(e) => {
                  if (field.name === "Username") {
                    handleUserName(e);
                  } else {
                    handlePassword(e);
                  }
                }}
              />
            </span>
          ))}
          <div className="mt-5 flex gap-2 items-center">
            <div
              className={`h-6 w-12 rounded-xl relative cursor-pointer ${
                rememberMe ? "bg-blue-500" : "bg-slate-200"
              }`}
              onClick={() => setRememberMe(!rememberMe)}
            >
              <div
                className={`h-4 w-4 rounded-full bg-white absolute top-1 transition-transform durtaion-300 ease-in-out ${
                  rememberMe ? "translate-x-7" : "translate-x-1"
                }`}
              ></div>
            </div>
            <span className="text-tDark font-lato dark:text-slate-500">Remember Me</span>
          </div>
        </div>
        <input
          type="submit"
          value="Login"
          className="mt-12 border-2 bg-etBlue border-etBlue text-white p-2 hover:bg-white hover:text-etBlue dark:hover:bg-slate-800 duration-200"
        />
      </form>
    </section>
  );
};

export default LoginPage;
