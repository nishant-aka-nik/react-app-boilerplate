// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const googleToken = localStorage.getItem("google_token");

  if (!googleToken) {
    return <Navigate to="/login" />; // Redirect to login if no Google token
  }

  return children; // Render the child component if authenticated
};

export default ProtectedRoute;