const Contact = require("../models/Contact")

module.exports = async (req, res, next) => {
  await Contact.find({
    from: req.session.user._id
  }).populate({
    path: "to"
  }).exec( (error, contacts) => {
    if(error){
      res.locals.contactError = new Error("Could not fetch contacts of " + req.session.user.admn)
      return next()
    }
    res.locals.contactError = null
    res.locals.contacts = contacts
    if(contacts[0]) res.locals.target = req.params.user || contacts[0].to.admn
    else res.locals.target = req.params.user || ""
    next()
  })
}
