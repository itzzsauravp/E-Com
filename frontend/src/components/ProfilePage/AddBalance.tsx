import { useState } from "react";
import { incrementBalanceByAmount } from "../../../store/userSlice";
import { useDispatch } from "react-redux";
const AddBalance = () => {
  const [balance, setBalance] = useState<number>(0);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-2xl font-semibold font-lato">
        Hey!! Welcome to Add Balance
      </h1>
      <p className="text-tLight">
        Just enter the amount that you would like to load
      </p>
      <input
        type="number"
        value={balance}
        className="p-2 border-[1px] border-etBlue mt-8 outline-none"
        // when use Number istead of parseint input field will be always 0 doesnt let you change
        // because when u remove the 0 it will bring and ""(empty string) and Number("") = 0;
        onChange={(e) => setBalance(parseInt(e.target.value))}
      />
      <button
        className="px-6 py-2 ml-5 bg-etBlue text-white"
        onClick={() => {
          dispatch(incrementBalanceByAmount(balance));
          setBalance(0);
        }}
      >
        Load Wallet
      </button>
    </div>
  );
};

export default AddBalance;
