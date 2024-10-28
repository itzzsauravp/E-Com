import { useSelector, useDispatch } from "react-redux";
import { selectTheme, toggleUserTheme } from "../../store/userSlice";

const useTheme = (): [boolean, () => void] => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = () => {
    dispatch(toggleUserTheme());
  };

  return [theme, toggleTheme];
};

export default useTheme;
