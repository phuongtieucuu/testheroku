const FacebookStrategy = require('passport-facebook').Strategy

function passportFb(passport) {
    passport.use(new FacebookStrategy({
        clientID: '275294301429855',
        clientSecret: '49b9393959b637c3851988e8fe83ccec',
        callbackURL: "https://d111-123-16-35-166.ngrok.io/auth/facebook/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
          console.log('profile',profile)
        return cb(null, profile);
      }
    ));
    
}
module.exports = passportFb