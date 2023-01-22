const cartreducer = (state, action) => {
    switch (action.type) {
        case "Add_To_Cart": {
            const obj = { ...action.payload, qty: 1 }
            return [...state, obj];
        }

        case "Remove_From_Cart": {
            const cartafterremoval = state.filter((item) =>
                item.id !== action.payload
            );
            return cartafterremoval;
        }

        case "Checkout": {
            return state;
        }

        default: {
            return state
        }
    }
}

export default cartreducer;