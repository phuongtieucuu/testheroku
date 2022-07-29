const {AraytoObject,ItemtoObject} = require('../../until/mongoose')
const User = require('../module/User')
const jwt = require('jsonwebtoken')
const passport = require('passport')
class UserController {
    // [GET] /user/
    loginUser(req, res,next) {
        User.find({})
            .then(data =>res.render('home',{
                    data: AraytoObject(data),
    
                }) )

        // var pageSize = 6
        // Promise.all([User.find({})
        // .skip((req.query.page -1) * pageSize)
        // .limit(pageSize)
        // ,User.countDocuments()])
        // .then(([data,index]) => res.render('home',{
        //     data: AraytoObject(data),
        //     index,
        //     pageIndex: req.query.page
        // }))
        .catch(err => next(err))
    }
    //[GET] /login/
    login(req, res,next) {
        res.render('login')
    }
    //[POST] /login
    Melogin(req, res,next) {
        passport.authenticate('local', function(err,user){
            if(err) return res.status(500).json('khong hop le')
            if(!user) return res.render('login',{message: 'Tai khoan khong hop le'})
            if(user) {
                req.session.user = user
                // const accesstoken = jwt.sign({_id: user._id},'mk')
                // req.user = accesstoken
                return res.redirect('/')
            }
        })(req, res,next)
    }
    //[DELETE] /logout
    logout(req, res,next) {
        req.session.destroy()
        res.redirect('back')
    }
    show(req, res, next) {
        res.json(req.user)
    }
}

module.exports = new UserController()