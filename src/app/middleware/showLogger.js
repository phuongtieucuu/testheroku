module.exports = function showLogger(req, res, next) {
    res.locals.login = {
        isAuthenticated: false,
        username:''
    }
    if(req.session.user){
        Object.assign(res.locals.login,{
            isAuthenticated: true,
            username: req.session.user.username
        })
    }
    next()
}
    