const sample = require('../model/sampleModel');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await sample.find();

        console.log(products)
        res.status(200).json({
            status: "success",
            result: products.length,
            data: {
                samplewatches: products
            }
        });

    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}

exports.createProduct = async (req, res) => {
    try {
        if (req.data.role === "admin") {
            let newProduct = await sample.create(req.body)

            res.status(201).json({
                status: "success",
                data: {
                    newProduct
                }
            })
        } else {
            res.status(400).json({
                status: "fail",
                message: "You don't have enough authorization."
            })
        }

    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        if (req.data.role === "admin") {
            let updatedProduct = await sample.findByIdAndUpdate(req.params.id, req.body, {
                runValidators: true,
                new: true
            });

            res.status(200).json({
                status: "success",
                data: {
                    updatedProduct
                }
            })
        } else {
            res.status(400).json({
                status: "fail",
                message: "You don't have enough authorization."
            })
        }

    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        if (req.data.role === "admin") {
            await sample.findByIdAndDelete(req.params.id);

            res.status(200).json({
                status: "success",
                message: "Product deleted Successfully"
            })
        } else {
            res.status(400).json({
                status: "fail",
                message: "You don't have enough authorization."
            })
        }

    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}