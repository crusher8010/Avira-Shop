const express = require('express');
const sampleController = require('../Controller/sampleController');
const middlewares = require('../Middlewares/middlewares');

const { Validator } = middlewares;
const { getAllProducts, createProduct, updateProduct, deleteProduct } = sampleController;

const Router = express.Router();

Router.route('/').get(getAllProducts).post(Validator, createProduct);
Router.route('/:id').patch(Validator, updateProduct).delete(Validator, deleteProduct);

module.exports = Router;