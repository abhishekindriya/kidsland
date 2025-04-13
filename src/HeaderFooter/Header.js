// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {



  return (
    <>
    <header  className="p-3 fixed w-full">
    <Link className="no-underline py-2 px-3" to="/">Home</Link>
      <Link className="no-underline py-2 px-3" to="/product">Products</Link>
      <Link className="no-underline py-2 px-3" to="/login">Login</Link>
      <Link className="no-underline py-2 px-3" to="/register">Register</Link>
    </header>
    <div className="w-full h-3rem"></div></>
  );
};

export default Header;
