const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
  "from": { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  "to": { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  "datetime": {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model("Contact", ContactSchema)
