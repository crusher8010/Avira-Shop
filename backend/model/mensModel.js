const mongoose = require('mongoose');

const MensSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
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
    },
    pattern: {
        type: String,
        required: true
    }
})

const Mens = mongoose.model('Menswear', MensSchema);

module.exports = Mens;