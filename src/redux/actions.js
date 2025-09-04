export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';   // delete whole item
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'; // reduce quantity by 1
export const SAVE_SHIPPING_INFO = 'SAVE_SHIPPING_INFO';
export const CLEAR_CART = 'CLEAR_CART';
export const CLEAR_SHIPPING = 'CLEAR_SHIPPING';



// Action creators
export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

export const decreaseQuantity = (id) => ({
    type: DECREASE_QUANTITY,
    payload: id,
});

export const saveShippingInfo = (shippingData) => ({
  type: SAVE_SHIPPING_INFO,
  payload: shippingData,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const clearShipping = () => ({
  type: CLEAR_SHIPPING,
});
