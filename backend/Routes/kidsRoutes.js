const express = require('express');
const kidsController = require('../Controller/KidsController')
const middlewares = require('../Middlewares/middlewares');

const { Validator } = middlewares;
const { getAllProducts, createProduct, updateProduct, deleteProduct } = kidsController;

const Router = express.Router();

Router.route('/').get(Validator, getAllProducts).post(Validator, createProduct);
Router.route('/:id').patch(Validator, updateProduct).delete(Validator, deleteProduct);

module.exports = Router;