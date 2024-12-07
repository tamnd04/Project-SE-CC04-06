import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, currrole }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated"); // Check if user is logged in
  const role = localStorage.getItem("role");
  if (isAuthenticated === "true") {
    if (role === "student" && role !== currrole) {
      return <Navigate to="/student_homepage" />;
    }
    if (role === "spso" && role !== currrole) {
      return <Navigate to="/spso_homepage" />;
    }
  } else {
    return <Navigate to="/" />;
  }
  return children; // If authenticated, render children, else redirect to login
};

export default PrivateRoute;
