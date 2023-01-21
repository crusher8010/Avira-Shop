export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_STEP = "INCREASE_STEP";
export const SAVE_ADDRESS = "SAVE_ADDRESS";
export const REMOVE_FROM_CART = "REMOVE_FORM_CART";
export const ADD_NAME = "ADD_NAME";
export const EMPTY_CART = "EMPTY_CART";

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });

export const increaseStep = () => {
  return {
    type: INCREASE_STEP,
  };
};
export const saveAddress = (payload) => {
  return {
    type: SAVE_ADDRESS,
    payload,
  };
};
// =======

// export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const addName = (payload) => ({ type: ADD_NAME, payload });

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});
export const emptyCart = (payload) => ({
  type: EMPTY_CART,
  payload,
});
