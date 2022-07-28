const express = require('express')
const routes = require('./router/index')
const path = require('path')
const app = express()
const session = require('express-session')
const port = 3000
const db = require('./config/db/mongoose')
const handlebars = require('express-handlebars')
const passport = require('passport')
const local = require('./passport/passpost-local');
const showLogger =require('./app/middleware/showLogger')
const methodOverride = require('method-override')
const passportFb =require('./passport/passport-fb')
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(showLogger)
app.use(methodOverride('_method'))


app.use(passport.initialize())
app.use(passport.session())  // req.session.user = profile
passport.serializeUser(function (user, done) {  // user la profile
  // đẩy vào session
  console.log("true-----------------------",user )
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log("false-----------------------",user )
  done(null, user)
  //If using Mongoose with MongoDB; if other you will need JS specific to that schema.
  // User.findById(user.id, function (err, user) {
  //     done(err, user);
  // });
});

const hbs = handlebars.create( { extname: '.hbs', helpers:{
  page: function(index, pageIndex) {
    pageIndex = Number(pageIndex)
    index = Math.ceil(index/5)
    var html = []
    for(var i = 1; i<= index; i++){
      var output =`<li class="page-item"><a class="page-link  ${pageIndex === i ? 'active' : ''}" href="/?page=${i}">${i}</a></li>`
      html.push(output)
    }
    var x = html.map(item => item).join('')
    return  x
  }
},

} )

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname , 'resources' , 'views' ))
app.use(express.static(path.join(__dirname, 'public')))

db.connect()
app.use(
  express.urlencoded({ // sử dụng req.body
    extended: true,
  }),
  );

local(passport)
passportFb(passport)
routes(app)
// hien thi trang dang nhap fb
  app.get('/auth/facebook',
  passport.authenticate('facebook'));

  app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})