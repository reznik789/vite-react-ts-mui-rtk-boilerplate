import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "src/app/hooks";
import { selectToken } from "src/app/features/user/userSlice";

const NotAuthorizeOnlyRoutes = () => {
  const token = useAppSelector(selectToken);
  return !token ? <Outlet /> : <Navigate to="/" />;
};

export default NotAuthorizeOnlyRoutes;
