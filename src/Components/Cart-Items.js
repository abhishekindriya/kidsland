import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeQty, updateQty } from '../utils/helper';
import { removeFromCartSlice } from '../redux/slice/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems); // <-- Read from Redux
  console.log(cartItems)

  const total = cartItems?.reduce((sum, item) => sum + item.price * item.qty, 0);
  
  const handleRemoveFromCart = (productId) => {
      removeQty(cartItems,  productId);
      dispatch(removeFromCartSlice(productId))
    };

  return (
    <div style={{ marginTop: 30 }}>
      <h3>🛒 Cart</h3>
      {cartItems?.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price (₹)</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td>
                  <button onClick={() => updateQty(item, 1)}>+</button>
                  <button
                    onClick={() => updateQty(item, -1)}
                    disabled={item.qty === 1}
                  >
                    −
                  </button>
                  <button onClick={() => {
                    // removeFromCart(item.id)}
                    handleRemoveFromCart(item.id)
                    }}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h4 style={{ marginTop: 10 }}>Total: ₹{total}</h4>
    </div>
  );
};

export default Cart;

// import React, { useState } from 'react';
// import { removeQty, updateQty } from '../utils/helper';



// const CartItems = () => {
//       const [cartItems, setCartItems] = useState(() => {
//           const storedCart = localStorage.getItem('cart-items');
//           return storedCart ? JSON.parse(storedCart) : [];
//         });
    
//     // const cartItems = JSON.parse(localStorage.getItem('cart-items')|| '[]');
//   const total = cartItems?.reduce((sum, item) => sum + item.price * item.qty, 0);
// console.log(cartItems)


// const handleUpdateQty = (product, delta) => {
//     updateQty(cartItems, setCartItems, product, delta);
//   };

//   const handleRemoveFromCart = (productId) => {
//     removeFromCart(cartItems, setCartItems, productId);
//   };

//   return (
//     <div style={{ marginTop: 30 }}>
//       {cartItems?.length === 0 ? (
//         <p>Cart is empty.</p>
//       ) : (
//         <table border="1" cellPadding="10">
//           <thead>
//             <tr>
//               <th>Product</th>
//               <th>Price (₹)</th>
//               <th>Qty</th>
//               <th>Total</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems?.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.title}</td>
//                 <td>{item.price}</td>
//                 <td>{item.qty}</td>
//                 <td>{item.price * item.qty}</td>
//                 <td>
//                   <button onClick={() => handleUpdateQty(item, 1)}>+</button>
//                   <button
//                     onClick={() => handleUpdateQty(item, -1)}
//                     disabled={item.qty === 1}
//                   >
//                     −
//                   </button>
//                   <button onClick={() => handleRemoveFromCart(item.id)}>
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       <h4 style={{ marginTop: 10 }}>Total: ₹{total}</h4>
//     </div>
//   );
// };

// export default CartItems;
