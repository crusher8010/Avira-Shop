const mongoose = require('mongoose');

const SearchSchema = mongoose.Schema({
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
        default: "Free Delivery"
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
    }
})

const Search = mongoose.model('searchInfo', SearchSchema);

module.exports = Search;