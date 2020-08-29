const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
  sender_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message_id: {type: Number},
  content: {
    content_type: {
      isText: {
        type: Boolean,
        default: true
      },
      isImage: {
        type: Boolean,
        default: false
      },
      isDocument: {
        type: Boolean,
        default: false
      }
    },
    body: {
      type: String,
      required: true
    }
  },
  pipeEnd: {
    type: Boolean,
    default: false
  },
  datetime: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model("Message", MessageSchema)
