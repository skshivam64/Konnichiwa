const User = require("../models/User")

module.exports = (req, res) => {
  User.findOne({ admn: req.body.admn }, (error, user) => {
    if(error){
      return res.send({"error": "This admission number is not registered."})
    }
    if(user){
      user.comparePassword(req.body.password, function(error, isMatch) {
        if (error) throw error;
        if(isMatch){
          req.session.user = user
          req.session.last_message = ""
          return res.send({"error": ""})
        }
        else{
          return res.send({"error": "Please enter the correct password."})
        }
      })
    }
  })
}
