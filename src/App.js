import React from "react";
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import './Style/style.css'

import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Products from "./Components/Products";
import Header from "./HeaderFooter/Header";
import ComingSoon from './CommingSoon/ComingSoonComponent'


import ProtectedRoute from "./Auth/ProtectedRoute";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart-Items";
import Footer from "./HeaderFooter/Footer";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      {/* Show Header only if logged in */}
      {token && <Header />}

      <Routes>
        {/* Redirect / to login or products */}
        <Route
          path="/"
          element={
            token ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
          }
        />

        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* Protected routes */}
        <Route
          path="/home"
          element={
            // <ProtectedRoute>
            <Home />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/product"
          element={
            // <ProtectedRoute>
            <Products />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            // <ProtectedRoute>
            <Cart />
            // </ProtectedRoute>
          }
        />
      </Routes>


      {token && <Footer />}
    </Router>
  );
}


export default App;



