import { Navigate } from "react-router-dom";

const RootRedirect = () => {
  const user = true;
  // const user = false;
  return user ? (
    <Navigate to="/main/dashboard" replace />
  ) : (
    <Navigate to="/auth/login" replace />
  );
};

export default RootRedirect;
