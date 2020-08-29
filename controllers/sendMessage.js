const Message = require("../models/Message")
const User = require("../models/User")
const Contact = require("../models/Contact")
const Counter = require("../models/Counter")
const fs = require("fs")
const url = require("url")

module.exports = async (req, res) => {
  User.findOne({
    "admn": req.body.receiver
  }, (error, user) => {
    if(error || !user) return {"ok": false, "error": error}
    Contact.findOne({
      "from": req.session.user._id,
      "to": user._id
    }, (error, contact) => {
        if(error || !contact) return {"ok": false, "error": error}
        if(req.body.text){
          Counter.findOneAndUpdate(
            {_id: "message_id"}, 
            { $inc: { seq: 1 } },
            {new: true},
            (error, counter) => {
                Message.create({
                  message_id: counter.seq,
                  content: {
                    body: req.body.text
                  },
                  sender_id: req.session.user._id,
                  receiver_id: user._id
                }, (error, text) => {
                  if(error || !text) return {"ok": false, "error": error}
                  return {"ok": true, "data": text.content.body}
                })
          })
          
        }
        if(req.body.image){
          fs.createReadStream(req.body.image).pipe(fs.createWriteStream("image.jpg"))
          return {"ok": true, "data": text}
        }
        if(req.body.doc){
          fs.createReadStream(req.body.doc).pipe(fs.createWriteStream("file.pdf"))
          return {"ok": true, "data": text}
        }
    })
  })
}