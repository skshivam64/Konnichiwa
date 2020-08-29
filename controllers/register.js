const User = require("../models/User")

module.exports = (req, res) => {
  if(req.body.password != req.body.repass)
    return res.send({"error": "Passwords don't match."})
  User.create(req.body, (error, user) => {
    if(error){
      if(error.code == "11000"){
        return res.send({"error": "You are already registered. Please login."})
      }
      return res.send({"error": "An error occurred. Please try after some time."})
    }
    req.session.user = user
    req.session.last_message = ""
    return res.send({"error": ""})
  })
}
