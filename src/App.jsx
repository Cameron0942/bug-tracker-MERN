// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./pages/register/register";
import Login from "./pages/login/login";
import ProtectedDashboard from "./pages/dashboard/protectedDashboard";


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />} exact />
        <Route path='/login' element={<Login />} exact />
        <Route path='/dashboard' element={<ProtectedDashboard />} exact />
      </Routes>
    </Router>
  );
}

export default App;
