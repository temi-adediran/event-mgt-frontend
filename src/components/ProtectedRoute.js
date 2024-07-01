import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  if (!isAuthenticated) return <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoute;
