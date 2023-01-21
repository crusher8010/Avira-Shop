// <<<<<<< HEAD
import {
  ADD_TO_CART,
  INCREASE_STEP,
  SAVE_ADDRESS,
  ADD_NAME,
  REMOVE_FROM_CART,
  EMPTY_CART,
} from "./action";
// =======
// import { ADD_TO_CART } from "./action";

export const reducer = (store, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(store);
      let temp = store.cart;
      if (!temp.includes(+action.payload)) temp.push(+action.payload);
      localStorage.setItem("cart", JSON.stringify(temp));
      return {
        ...store,
        count: temp.length,
        cart: temp,
      };
    // <<<<<<< HEAD

    case INCREASE_STEP:
      return {
        ...store,
        step: store.step + 1,
      };
    case SAVE_ADDRESS:
      return {
        ...store,
        address: action.payload,
      };

    // =======
    case ADD_NAME:
      console.log(action);
      return {
        ...store,
        name: action.payload,
      };
    case REMOVE_FROM_CART:
      console.log(action);
      let newData = { ...store };
      let data = newData.cart.filter((i) => i !== action.payload);
      localStorage.setItem("cart", JSON.stringify(data));
      return {
        ...store,
        cart: data,
        count: data.length,
      };
    case EMPTY_CART:
      localStorage.setItem("cart", JSON.stringify([]));
      return {
        ...store,
        cart: [],
        count: 0,
        step: 0,
      };
    default:
      return store;
  }
};
