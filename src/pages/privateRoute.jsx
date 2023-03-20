import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const PrivateRoute = () => {
  // const isAuthenticated = localStorage.getItem("@startpn:token") || ""

  const { auth } = useAuth()

  return auth ? <Outlet/> : < Navigate to="/login" />
}

export default PrivateRoute