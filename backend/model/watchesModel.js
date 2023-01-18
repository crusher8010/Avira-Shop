const mongoose = require('mongoose');

const WatchSchema = mongoose.Schema({
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
    }
});

const Watches = mongoose.model('Watches', WatchSchema);

module.exports = Watches;