import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/getRickRolled");
    }
  }, [token, navigate]);

  return token ? children : null;
};

export default ProtectedRoutes;
