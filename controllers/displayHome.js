module.exports = (req, res) => {
  res.render("index", {
    contacts: res.locals.contacts,
    messages: res.locals.messages,
    sender: req.session.user,
    receiver: res.locals.receiver
  })
}
