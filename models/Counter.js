const mongoose = require("mongoose")

const CounterSchema = new mongoose.Schema({
    "_id": String,
    "seq": Number
})

const Counter = mongoose.model("Counter", CounterSchema)


/*
    Insert a counter in the counter collection.

    Counter.create(
        {
            _id: "message_id",
            seq: 0
        }
    )


*/


module.exports = Counter
