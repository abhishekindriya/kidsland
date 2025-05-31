export const cartItems = JSON.parse(localStorage.getItem('cart-items') || '[]');


// cartUtils.js
export const addToCart = (cartItems, setCartItems, product) => {
  const checkCartItems = Array.isArray(cartItems)
  const exist = checkCartItems && cartItems?.find((x) => x?.id === product?.id);
  if (exist) {
    setCartItems(
      checkCartItems && cartItems?.map((x) =>
        x.id === product.id ? { ...x, qty: x?.qty + 1 } : x
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};

// export const updateQty = (cartItems, setCartItems, product, delta) => {
// const checkCartItems = Array.isArray(cartItems)
//   const updatedCart = checkCartItems && cartItems?.map((cart) => (cart?.id === product?.id ? { ...cart, qty: cart?.qty + delta } : cart))
//     ?.filter((cart) => cart?.qty > 0);
//   setCartItems(updatedCart);
// };
export const updateQty = (cartItems, product, delta) => {
  const checkCartItems = Array.isArray(cartItems);
  if (checkCartItems) {
    const updatedCart = cartItems
      ?.map((cart) =>
        cart?.id === product?.id ? { ...cart, qty: cart?.qty + delta } : cart
      )
      ?.filter((cart) => cart?.qty > 0);
    return updatedCart;
  }
  return [];
};


// export const removeQty = (cartItems, setCartItems, productId) => {
// const checkCartItems = Array.isArray(cartItems)
//   setCartItems(checkCartItems && cartItems?.filter((cart) => cart?.id !== productId));
// };

export const removeQty = (cartItems, productId) => {
  const checkCartItems = Array.isArray(cartItems);
  if (checkCartItems) {
    return cartItems.filter((cart) => cart?.id !== productId);
  }
  return [];
};
