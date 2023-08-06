const mongoose = require("mongoose")

const PersonSchema = mongoose.Schema({
    name: String, 
    age: Number,
    city: String
})

module.exports = mongoose.model("person", PersonSchema)