const mongoose = require('mongoose');

const SampleSchema = mongoose.Schema({
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

const sample = mongoose.model('Sample', SampleSchema);

module.exports = sample;