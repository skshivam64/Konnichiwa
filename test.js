const mongoose = require("mongoose")

// const User = require("./models/User")

// const Message = require("./models/Message")

// const Contact = require("./models/Contact")

// const Counter = require("./models/Counter")

mongoose.connect("mongodb://localhost/messenger");

//



// Counter.create({
//       _id: "message_id",
//       seq: 0
// }, function(error, counter){
//   console.log(error, counter);
// });

// User.create({
//   name: "Vishal",
//   admn: "16je002176",
//   password: "123"
// }, function(error, user){
//   console.log(error, user);
// });
//
// User.create({
//   name: "Sourav",
//   admn: "16je002401",
//   password: "123"
// }, function(error, user){
//   console.log(error, user);
// });
//
// User.create({
//   name: "Utkarsha",
//   admn: "16je002349",
//   password: "123"
// }, function(error, user){
//   console.log(error, user);
// });
//
// User.create({
//   name: "Aishwary",
//   admn: "16je001850",
//   password: "123"
// }, function(error, user){
//   console.log(error, user);
// });
//
// User.create({
//   name: "Rajesh",
//   admn: "16je002096",
//   password: "123"
// }, function(error, user){
//   console.log(error, user);
// });
//
// User.create({
//   name: "Mohit",
//   admn: "16je002008",
//   password: "123"
// }, function(error, user){
//   console.log(error, user);
// });
//
// User.create({
//   name: "Pyare",
//   admn: "16je002006",
//   password: "123"
// }, function(error, user){
//   console.log(error, user);
// });
// User.create({
//   name: "Shivam",
//   admn: "16je002149",
//   password: "123"
// }, function(error, user){
//   console.log(error, user);
// });
//
// User.create({
//   name: "Tarun",
//   admn: "16je001885",
//   password: "123"
// }, function(error, user){
//   console.log(error, user);
// });
//
// User.create({
//   name: "Sunny",
//   admn: "16je002246",
//   password: "123"
// }, function(error, user){
//   console.log(error, user);
// });
//
// User.create({
//   name: "Aditya",
//   admn: "16je002200",
//   password: "123"
// }, function(error, user){
//   console.log(error, user);
// });

//
const sender_id = "5c0bdf52010e1e0e00096656"
const receiver_id =  "5c0bdf52010e1e0e00096657"



// const contacts =  Contact.find({
//   "from": mongoose.Types.ObjectId("5c0bdf52010e1e0e00096656")
// })

// console.log(contacts[0])

// User.find({ name: "Shivam"}, function(error, users){
//   console.log(error, users);
// })

// User.find({}, function(error, users){
//   console.log(error, users);
// })

// Contact.create({
//   "from": sender_id,
//   "to": receiver_id
// }, (error, contact) => {
//   console.log(error, contact)
// })

// Contact.create({
//   "from": receiver_id,
//   "to": sender_id
// }, (error, contact) => {
//   console.log(error, contact)
// })

// Contact.find({
//   "from": sender_id
// }, (error, users) => {
//   console.log(error, users)
// })


// Message.create({
//   sender_id: sender_id,
//   receiver_id: receiver_id,
//   content: {
//     body: "This is now getting violent."
//   }
// }, (error, message) => {
//   console.log(error, message)
// })

// Message.create({
//   sender_id: receiver_id,
//   receiver_id: sender_id,
//   content: {
//     body: "Yes, I do."
//   }
// }, (error, message) => {
//   console.log(error, message)
// })


// Message.create({
//   sender_id: sender_id,
//   receiver_id: receiver_id,
//   content: {
//     body: "Common bro, grow up. This is not for kids. You should stop crying and go home."
//   }
// }, (error, message) => {
//   console.log(error, message)
// })

// Message.create({
//   sender_id: receiver_id,
//   receiver_id: sender_id,
//   content: {
//     body: "It was my mistake to take you as friend."
//   }
// }, (error, message) => {
//   console.log(error, message)
// })

// Message.create({
//   sender_id: sender_id,
//   receiver_id: receiver_id,
//   content: {
//     body: "Wait for a moment."
//   }
// }, (error, message) => {
//   console.log(error, message)
// })

// Message.create({
//   sender_id: receiver_id,
//   receiver_id: sender_id,
//   content: {
//     body: "No, I can't."
//   }
// }, (error, message) => {
//   console.log(error, message)
// })


// Message.create({
//   sender_id: sender_id,
//   receiver_id: receiver_id,
//   content: {
//     body: "You are despicable."
//   }
// }, (error, message) => {
//   console.log(error, message)
// })

// Message.create({
//   sender_id: receiver_id,
//   receiver_id: sender_id,
//   content: {
//     body: "Whatever."
//   }
// }, (error, message) => {
//   console.log(error, message)
// })
//
// Message.find({}, (error, messages) => {
//   console.log(error, messages)
// })
//User.findOne

// User.find({}, function(error, users){
//   console.log(error, users);
// });

// User.findById("id_goes_here", function(error, users){
//   console.log(error, users);
// });

// User.findByIdAndUpdate("id_goes_here", {name: "New Name"}, function(error, users){
//   console.log(error, users);
// });


// const image = req.body.image.replace(/data:image\/png;base64,/, "")
//   fs.writeFile(path.resolve(__dirname, "res/images/profiles/1.jpg"), image, 'base64', (err) => {
//     console.log(err)
//   })
//   res.send("/images/default.jpg")