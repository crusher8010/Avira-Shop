const mongoose = require('mongoose');

const WatchSchema = mongoose.Schema({
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
    }
});

const Watches = mongoose.model('Watches', WatchSchema);

module.exports = Watches;