const Cart = require('../model/CartModel');

exports.getDetails = async (req, res) => {
    try {
        const details = await Cart.find();

        res.status(200).json({
            status: "success",
            results: details.length,
            data: {
                Details: details
            }
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}

exports.postDetails = async (req, res) => {
    try {
        const newDetail = await Cart.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                Detail: newDetail
            }
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}