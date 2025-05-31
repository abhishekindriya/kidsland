// Products.js
import React, { useEffect, useState } from 'react';
import ProductList from './ProductListing';
import Cart from './Cart';
import { addToCart, updateQty, removeQty } from '../utils/helper';
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
      <ProductList addToCart={handleAddToCart} />
      <Cart
        cartItems={cartItems}
        updateQty={handleUpdateCartQty}
        removeFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default Products;
// import React, { useEffect, useState } from "react";
// import { ProductListing } from "./product.services";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await ProductListing();
//       console.log("response", response);
//       setProducts(response?.data?.products || []);
//     };

//     fetchProducts();
//   }, []);
//   return (
//     <>
//       <div className="grid mx-0">
//         <div className="col-12">
//           <h2>Kids Wear Products</h2>
//         </div>
//         {products?.map((item) => (
//           <div className="col-12 sm:col-6 md:col-4 lg:col-3" key={item?.id}>
//             <div className="product-card shadow-3 border-round-md p-3">
//               <img
//                 src={
//                   "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/29524966/2024/5/13/3658e688-470e-4cd0-9294-2065ddb8ab751715622996827BAESDFlutterSleeveNetFitFlareDress1.jpg"
//                 }
//                 alt={item.title}
//                 className="product-image"
//               />
//               <h3 className="product-title">{item.title}</h3>
//               <p className="product-price">₹{item.price}</p>
//               <div className="flex align-items-center justify-content-between">
//                 <p className="product-rating m-0">⭐ {item.rating}</p>
//                 <button className="add-to-cart">Add to Cart</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Products;

