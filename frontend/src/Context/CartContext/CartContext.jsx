import React, { createContext } from "react";
import { useReducer } from "react";
import cartreducer from "./reducer";
export const CartContext = createContext();
let init = [];

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartreducer, init);

    const checkout = () => {
        init = [];
    }

    return (
        <CartContext.Provider value={{ state, dispatch, checkout }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;