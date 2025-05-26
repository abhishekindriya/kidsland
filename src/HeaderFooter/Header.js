// src/components/Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartItems } from '../utils/helper';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems); // <-- Read from Redux
  console.log(cartItems)
  // const [cartItems, setCartItems] = useState(() => {
  //   const storedCart = localStorage.getItem('cart-items');
  //   return storedCart ? JSON.parse(storedCart) : [];
  // });
  // useEffect(() => {
  //   console.log("1")
  //   const handleStorageChange = () => {
  //   console.log("2")

  //     const updatedCartRaw = localStorage.getItem('cart-items');
  //     const updatedCart = updatedCartRaw ? JSON.parse(updatedCartRaw) : [];

  //     // Only update if cart actually changed
  //     if (JSON.stringify(updatedCart) !== JSON.stringify(cartItems)) {
  //       setCartItems(updatedCart);
  //     }
  //   };

  //   window.addEventListener('storage', handleStorageChange);

  //   const interval = setInterval(() => {
  //   console.log("3")

  //     handleStorageChange();
  //   }, 300); // Polling every 1 second (less frequent, less load)

  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //     clearInterval(interval);
  //   };
  // }, [cartItems]); // <-- include cartItems as dependency to compare

  return (
    <>
      <header className="fixed w-full">
        <div className="grid flex align-items-center pt-1">
          <div className="col-10">
            <Link className="no-underline py-2 px-3" to="/">
              Home
            </Link>
            <Link className="no-underline py-2 px-3" to="/product">
              Products
            </Link>
            <Link className="no-underline py-2 px-3" to="/login">
              Login
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
        </div>
        </div>
        
      </header>
      <div className="w-full h-3rem"></div>
    </>
  );
};

export default Header;
