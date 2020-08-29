const User = require("../models/User")

module.exports = (req, res) => {
  User.find({
    $or : [
      {
        name: {'$regex': req.body.pattern, '$options': 'i'}
      },
      {
        admn: {'$regex': req.body.pattern, '$options': 'i'}
      }
    ]
  }, (error, users) => {
    res.send({"error": error, "users": users});
  })
}
