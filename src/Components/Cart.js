import React from 'react';

const Cart = ({ cartItems, updateQty, removeFromCart }) => {
  console.log(cartItems)
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);


  return (
    <div style={{ marginTop: 30 }}>
      <h3>🛒 Cart</h3>
      {cartItems.length === 0 ? (
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
                  <button onClick={() => removeFromCart(item.id)}>
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
