const Contact = require("../models/Contact")
const User = require("../models/User")
module.exports = (req, res) => {
  User.findOne({
    "admn": req.params.user
  }, (error, user) => {
    if(error || !user) return res.redirect("/404")
    Contact.remove(req.body, (error, contact) => {
      if(error){
        return res.redirect("/404")
      }
      res.redirect("/profile/" + req.params.user)
    })
  })
}
