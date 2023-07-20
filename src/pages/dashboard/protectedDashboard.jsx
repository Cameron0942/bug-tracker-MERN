// import React from "react";
import { Navigate } from "react-router-dom";

import Dashboard from "./component/Dashboard";

const ProtectedDashboard = () => {
  // Check if a legitimate JWT token exists in sessionStorage
  const jwtToken = sessionStorage.getItem("jwt");

  if (!jwtToken) {
    // Redirect to the login page or display a message
    return <Navigate to="/" />;
  }
  

  // If the user is authenticated, render the dashboard content
  return <Dashboard />;
};

export default ProtectedDashboard;
