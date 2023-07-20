// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />} exact />
        <Route path='/dashboard' element={<Dashboard />} exact />
      </Routes>
    </Router>
  );
}

export default App;
