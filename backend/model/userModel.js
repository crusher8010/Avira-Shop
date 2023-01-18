const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: [true, 'Username already exists..'],
        required: true
    },
    email: {
        type: String,
        unique: [true, 'email already exists..'],
        required: true
    },
    mobile_no: {
        type: Number,
        unique: [true, 'Mobile Number already exists...'],
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;