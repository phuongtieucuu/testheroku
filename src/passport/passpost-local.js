var LocalStrategy = require('passport-local').Strategy
var Users = require('../app/module/User')
function local(passport) {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            Users.findOne({ username: username ,password: password})
            .then(data => {
                if(data) {
                    return done(null,data)
                }else {
                    return done(null,false)
                }
            })
            .catch(err => done(err))
        }
      ));

}
module.exports = local