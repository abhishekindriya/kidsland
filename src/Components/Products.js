// Products.js
import React, { useEffect, useState } from 'react';
import ProductList from './ProductListing';
import Cart from './Cart';
import { addToCart, updateQty,  removeQty } from '../utils/helper';
import { addToCartSlice, removeFromCartSlice } from '../redux/slice/cartSlice';
import { useDispatch } from 'react-redux';

const Products = () => {
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart-items');
    return storedCart ? JSON.parse(storedCart) : [];
  });


  const handleAddToCart = (product) => {
    addToCart(cartItems, setCartItems, product);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = removeQty(cartItems, productId);
    setCartItems(updatedCartItems);
    dispatch(removeFromCartSlice(productId))
  };
  
  const handleUpdateCartQty = (product, delta) => {
    const updatedCartItems = updateQty(cartItems, product, delta);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(cartItems));
    dispatch(addToCartSlice(cartItems));
  }, [cartItems, dispatch]);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <ProductList addToCart={handleAddToCart}/>
      <Cart
        cartItems={cartItems}
        updateQty={handleUpdateCartQty}
        removeFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default Products;
