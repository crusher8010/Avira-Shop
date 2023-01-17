const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Register = (req, res) => {
    try {
        const { username, email, mobile_no, password } = req.body;

        bcrypt.hash(password, 5, async (err, cpassword) => {
            if (err) {
                res.status(400).json({
                    status: 'fail',
                    message: 'Please check the data',
                })
            } else {
                let newUser = await User.create({ username, email, mobile_no, password: cpassword });

                res.status(201).json({
                    status: "success",
                    data: {
                        newUser
                    }
                })
            }
        })

    } catch (err) {
        res.status(400).json({
            Status: "fail",
            err
        })
    }
}

exports.Login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const getUser = await User.find({ username });

        console.log(getUser);

        if (getUser.length > 0) {
            let user = getUser[0];
            bcrypt.compare(password, getUser[0].password, (err, result) => {
                if (result) {
                    let token = jwt.sign({ user }, process.env.KEY)

                    res.status(201).json({
                        status: "fail",
                        token
                    })
                } else {
                    res.status(400).json({
                        status: "fail",
                        message: "Wrong Credentials"
                    })
                }
            })
        }
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Wrong Credentials"
        })
    }
}

