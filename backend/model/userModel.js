const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: [true, 'Username already exists..'],
        require: true
    },
    email: {
        type: String,
        unique: [true, 'email already exists..'],
        require: true
    },
    mobile_no: {
        type: Number,
        unique: [true, 'Mobile Number already exists...'],
        require: true
    },
    role: {
        type: String,
        default: 'user',
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;