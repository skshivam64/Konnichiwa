const mongoose = require("mongoose")

const Counter = require("./models/Counter")

try {
    mongoose.connect("mongodb://localhost/messenger")
}
catch(err) {
    console.log("Konnichiwa Application Error")
    console.log(err)
}

Counter.create(
    {
        _id: "message_id",
        seq: 0
    }
)
