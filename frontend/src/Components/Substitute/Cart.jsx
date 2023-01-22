import { CartContext } from "../Context/CartContext/CartContext";
import { removeFromCart, checkout } from "../Context/CartContext/action";
import { useContext, useState } from "react";
import axios from "axios";

function Cart() {
    const { state, dispatch } = useContext(CartContext);
    const [temp, setTemp] = useState(state);
    const [len, setLen] = useState(state.length);
    let total = 0;

    const handledelete = (id) => {
        dispatch(removeFromCart(id));
        const dim = temp.filter((item) => {
            return item.id !== id;
        });
        setTemp(dim)
        const te = dim.reduce((a, c) => a + c.qty, 0);
        setLen(te);
        console.log(len);
    }


    const handleQty = (val, id) => {
        setTemp(
            temp.map((item) =>
                item.id === id ? { ...item, qty: item.qty + val } : item
            )
        );
        setLen(len + val)

    };

    return (
        <>
            <div className="main_cart_div"></div>
        </>
    )
}

export default Cart;