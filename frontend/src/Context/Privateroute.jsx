import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Globalcontext } from "./Context";

function PrivateRoutes({ children }) {
  const { logout } = useContext(Globalcontext);

  if (!logout) {
   return <Navigate to='/login'/>
  }
  return children;
}

export default PrivateRoutes;
