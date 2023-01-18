const mongoose = require('mongoose');

const MensSchema = mongoose.Schema({
    url: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    delivery: {
        type: String,
        default: "Free Delivery",
        required: true
    },
    rating: {
        type: Number,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    fabric: {
        type: String,
        require: true
    },
    pattern: {
        type: String,
        require: true
    }
})

const Mens = mongoose.model('Menswear', MensSchema);

module.exports = Mens;