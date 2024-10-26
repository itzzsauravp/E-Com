import { useSelector } from "react-redux";
import { selectBalance } from "../../store/balanceSlice";
import { incrementBalanceByAmount } from "../../store/balanceSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const ProfilePage = () => {
  const [inputAmount, setInputAmount] = useState(0);
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  return (
    <div>
      <h1>The current Balance is: {balance}</h1>
      <input
        className="border-2 p-2 font-semibold font-arimo"
        type="text"
        onChange={(e) => setInputAmount(Number(e.target.value))}
      />
      <button
        className="px-6 py-2 bg-etBlue text-white font-semibold"
        onClick={() => dispatch(incrementBalanceByAmount(inputAmount))}
      >
        Load Wallet
      </button>
    </div>
  );
};

export default ProfilePage;
