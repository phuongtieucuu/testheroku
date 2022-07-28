const express = require('express')
const route = express.Router()
const UserController = require('../app/controllers/UsersController')

route.get('/' , UserController.show)

module.exports = route