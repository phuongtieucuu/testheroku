const express = require('express')
const route = express.Router()
const UserController = require('../app/controllers/UsersController')
const setCookie = require('../app/middleware/setCookie')

route.get('/',UserController.loginUser)

module.exports = route