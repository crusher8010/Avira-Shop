const cartreducer = (state, action) => {
    switch (action.type) {
        case "Add_To_Cart": {
            return [...state, action.payload]
        }

        case "Remove_From_Cart": {
            const cartafterremoval = state.filter((item) =>
                item.id !== action.payload
            );
            return cartafterremoval;
        }

        case "Checkout": {
            return [];
        }

        default: {
            return state
        }
    }
}

export default cartreducer;