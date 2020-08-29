const User = require("../models/User")
const Contact = require("../models/Contact")

module.exports = (req, res) => {
  if(!req.params.user || req.params.user == req.session.user.admn) {
    return res.render("profile", {
      contacts: res.locals.contacts,
      sender: req.session.user,
      target: req.session.user,
      admin: true
    })
  }
  else{
    User.findOne({
      admn: req.params.user
    }, (error, target) => {
      if(error){
        return res.render("404")
      }
      contact = false
      Contact.findOne({
        to: req.session.user._id,
        from: target._id
      }, (error, temp) => {
        if(!error && temp){
          contact = true
        }
        return res.render("profile", {
          contacts: res.locals.contacts,
          sender: req.session.user,
          target: target,
          admin: false,
          contact: contact
        })
      })
    })
  }

}
