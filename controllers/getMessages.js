const Message = require("../models/Message")
const User = require("../models/User")
module.exports = async (req, res, next) => {
  const target = res.locals.target || req.body.receiver
  if(target == undefined || target == "") {
    if(req.body.end) return res.json({"error":  new Error("Admission number of receiver is not specified.")})
    else return next()
  }
  User.findOne({
    "admn" : target
  }, (error, user) => {
    if(error || !user) {
      if(req.body.end) return res.json({"error": new Error("Could not fetch messages for " + req.body.receiver + ", " + error)})
      else return res.redirect("/404")
    }
    res.locals.receiver = {"name": user.name, "admn": user.admn}
    const orExpression = [
      {
        sender_id: req.session.user._id,
        receiver_id: user._id
      },
      {
        receiver_id: req.session.user._id,
        sender_id: user._id
      }
    ]
    if(req.body.end == "top"){
      Message.find({
        $or : orExpression,
        message_id: {$gt: req.session.end_message}
      }).sort([['_id', -1]]).limit(4).exec( async (error, messages) => {
        if(error){
          return res.json({"error": new Error("Could not fetch messages for " + res.locals.receiver + ", " + error)})
        }
        if(messages.length > 0){
          messages = messages.map(function(message) {
              message.set('pipeEnd', (message.sender_id == req.session.user._id), {strict: false});
              message.set('sender_id', undefined, {strict: false});
              message.set('receiver_id', undefined, {strict: false});
              return message;
          });
          req.session.end_message = messages[0].message_id || 0
          messages = messages.reverse()
        } 
        return res.json({"error": null, "messages": messages})
      })
    }
    else if(req.body.end == "bottom"){
      Message.find({
        $or : orExpression,
        message_id: {$lt: req.session.start_message}
      }).sort([['_id', -1]]).limit(4).exec( async (error, messages) => {
        if(error){
          return res.json({"error": new Error("Could not fetch messages for " + res.locals.receiver + ", " + error)})
        }
        if(messages.length > 0) {
          messages = messages.map(function(message) {
              message.set('pipeEnd', (message.sender_id == req.session.user._id), {strict: false});
              message.set('sender_id', undefined, {strict: false});
              message.set('receiver_id', undefined, {strict: false});
              return message;
          });
          messages = messages.reverse()
          req.session.start_message = messages[0].message_id || 0
        }
        return res.json({"error": null, "messages": messages})
      })
    }
    else{
      Message.find({
        $or : orExpression
      }).sort([['_id', -1]]).limit(4).exec( async (error, messages) => {
        if(error){
          res.locals.messageError = new Error("Could not fetch messages for " + res.locals.receiver + ", " + error)
          return next()
        }
        if(messages.length > 0) {
          messages = await messages.map(function(message) {
              message.set('pipeEnd', (message.sender_id == req.session.user._id), {strict: false});
              message.set('sender_id', undefined, {strict: false});
              message.set('receiver_id', undefined, {strict: false});
              return message;
          });
          req.session.end_message = messages[0].message_id || 0
          messages = messages.reverse()
          req.session.start_message = messages[0].message_id || 0
        }
        res.locals.messageError = null
        res.locals.messages = messages
        return next()
      })
    }
  })
}
