module.exports = {
  token(req, res, next) {
    const token = req.headers.token
      if(token) {
        console.log(token);
        next()
      }else{
        return res.redirect('/login')
      }
  }
}