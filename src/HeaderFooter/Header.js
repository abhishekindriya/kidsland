import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/kidsland-logo.jpeg'


const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const token = localStorage.getItem("token");
  const handleClearStorage = () => {
    localStorage.clear(); // Clears everything in localStorage
    navigate("/cart");
  };

  return (
    <>
      <header className="fixed w-full">
        <div className="grid flex align-items-center pt-1">
          <div className="col-2">
            <img src={Logo} alt="Kids Land" width={100} className="mt-1 ml-1" />
          </div>
          <div className="col-8">
            <Link className="no-underline py-2 px-3" to="/">
              Home
            </Link>
            <Link className="no-underline py-2 px-3" to="/product">
              Products
            </Link>
            <Link className="no-underline py-2 px-3" to="/register">
              Register
            </Link>
            <Link className="no-underline py-2 px-3" to="/listing">
              Listing
            </Link>
          </div>
          <div className="col-2 flex justify-content-end">
            <Link className="no-underline py-2 px-3" to="/cart">
              Cart
              <span>{cartItems?.length}</span>
            </Link>
            {token ?
              <Link className="no-underline py-2 px-3" to="/login" onClick={handleClearStorage}>Logout</Link>
              :
              <Link className="no-underline py-2 px-3" to="/login">Login</Link>
            }
          </div>
        </div>

      </header>
      <div className="w-full h-4rem mb-2"></div>
    </>
  );
};

export default Header;
