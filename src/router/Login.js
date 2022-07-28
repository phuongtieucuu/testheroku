const express = require('express')
const route = express.Router()
const UserController = require('../app/controllers/UsersController')

route.get('/' , UserController.login)
route.post('/' ,UserController.Melogin )


module.exports = route