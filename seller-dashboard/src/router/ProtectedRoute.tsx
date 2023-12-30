import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PropsWithChildren } from "react";

import { RootState } from "../store/redux/store";

const ProtectedRoute: React.FC<PropsWithChildren> = (props) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  if (isAuthenticated) {
    return <>{props.children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
