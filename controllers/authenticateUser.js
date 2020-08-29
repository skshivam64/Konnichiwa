module.exports = (req, res, next) => {
  if(req.url == "/auth"){
    if(req.session.user) return res.redirect("/profile")
  }
  else if(!req.session.user){
    return res.redirect("/auth")
  }
  next()
}
