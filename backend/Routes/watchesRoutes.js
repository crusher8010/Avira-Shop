const express = require('express');
const watchesController = require('../Controller/watchesController');
const middlewares = require('../Middlewares/middlewares');

const { Validator } = middlewares;
const { getAllProducts, createProduct, updateProduct, deleteProduct } = watchesController;

const Router = express.Router();

Router.route('/').get(getAllProducts).post(Validator, createProduct);
Router.route('/:id').patch(Validator, updateProduct).delete(Validator, deleteProduct);

module.exports = Router;