// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import CommingSoonComponent from "./RouteComponent";

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommingSoonComponent />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default RouteComponent;
