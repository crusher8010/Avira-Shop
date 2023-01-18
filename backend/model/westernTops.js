const mongoose = require('mongoose');

const westerTopSchema = mongoose.Schema({
    url: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    delivery: {
        type: String,
        default: "Free Delivery"
    },
    rating: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    fabric: {
        type: String,
        required: true
    }
})

const westernTop = mongoose.model('westernTop', westerTopSchema);

module.exports = westernTop;