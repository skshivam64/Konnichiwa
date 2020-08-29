module.exports = (req, res) => {
  res.render("updateProfile", {
    contacts: res.locals.contacts,
    sender: req.session.user
  })
}
