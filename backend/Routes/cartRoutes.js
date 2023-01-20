const express = require('express');
const cartRouter = require('../Controller/cartController');

const { getDetails, postDetails } = cartRouter;
const Router = express.Router();

Router.route('/').get(getDetails).post(postDetails);

module.exports = Router;
