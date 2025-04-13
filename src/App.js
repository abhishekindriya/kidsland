import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'primeflex/primeflex.css';
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



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;



