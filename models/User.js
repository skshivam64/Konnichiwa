const mongoose = require("mongoose")

const bcrypt = require("bcrypt")

const SALT_WORK_FACTOR = 10

const UserSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, "Please enter your name."]
  },
  admn : {
    type: String,
    required: [true, "Please enter your admission number."],
    unique: [true, "You are already registered. Please login."]
  },
  image : String,
  password : {
    type: String,
    required: [true, "Please enter a password."]
  },
  links: {
    fb: {
      type: String,
      default: "http://facebook.com/"
    },
    gh: {
      type: String,
      default: "http://github.com/"
    },
    li: {
      type: String,
      default: "http://linkedin.com/in/"
    }
  },
  datetime: {
    type: Date,
    default: new Date()
  }
})

UserSchema.pre('save', function(next) {
  var user = this
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err)
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err)
          user.password = hash
          next()
      })
  })
})

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err)
      cb(null, isMatch)
  })
}



module.exports = mongoose.model("User", UserSchema)
