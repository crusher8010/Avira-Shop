const Watches = require('../model/watchesModel');

exports.getAllProducts = async (req, res) => {
    try {
        let queryObj = { ...req.query };
        const excludefields = ['page', 'sort', 'fields'];
        excludefields.forEach(el => delete queryObj[el])

        // Filtering Operations
        let query;
        if (queryObj.brand != undefined && queryObj.price != undefined) {

            let temp = queryObj.brand;
            delete queryObj.brand;

            let obj = { price: { $lt: queryObj.price } }
            delete queryObj.price;

            console.log(queryObj)

            query = Watches.find({ $and: [{ brand: { $regex: `${temp}`, $options: 'i' } }, queryObj, obj] })

        } else if (queryObj.brand != undefined && queryObj.price == undefined) {

            let temp = queryObj.brand;
            delete queryObj.brand;

            query = Watches.find({ $and: [{ brand: { $regex: `${temp}`, $options: 'i' } }, queryObj] })

        } else if (queryObj.brand == undefined && queryObj.price != undefined) {

            let obj = { price: { $lt: queryObj.price } }
            delete queryObj.price;

            query = Watches.find({ $and: [queryObj, obj] })

        } else {

            query = Watches.find(queryObj);
        }

        // Sorting Operations

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        }

        // Field Limiting Operation
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields)
        } else {
            query = query.select('-__v')
        }


        const products = await query;

        res.status(200).json({
            status: "success",
            data: {
                Watches: products
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
            let newProduct = await Watches.create(req.body)

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
            let updatedProduct = await Watches.findByIdAndUpdate(req.params.id, req.body, {
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
            await Watches.findByIdAndDelete(req.params.id);

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