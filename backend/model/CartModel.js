const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    totalPurchase: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Cart = mongoose.model('cartData', cartSchema);

module.exports = Cart;