const express = require('express');
const userController = require('../Controller/userController');

const { Register, Login } = userController;


const Router = express.Router();

Router.route('/register').post(Register);
Router.route('/login').post(Login);

module.exports = Router;