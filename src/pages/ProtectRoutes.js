// App.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../pages/AuthContext";

const ProtectedRoute = ({ children }) => {
  const context = useContext(AuthContext);

  return context.login ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
