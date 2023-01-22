import React, { createContext } from "react";
import { useReducer } from "react";
import cartreducer from "./reducer";
export const CartContext = createContext();
const init = [];

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartreducer, init);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;