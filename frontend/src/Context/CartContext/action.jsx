export const addToCart = (data) => {
    return {
        type: "Add_To_Cart",
        payload: data,
    }
}

export const removeFromCart = (id) => {
    return {
        type: "Remove_From_Cart",
        payload: id,
    }
}

export const checkout = () => {
    return {
        type: "Checkout",
    }
}