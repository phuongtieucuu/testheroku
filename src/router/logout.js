const express = require('express')
const route = express.Router()
const UserController = require('../app/controllers/UsersController')

route.delete('/',UserController.logout)

module.exports = route