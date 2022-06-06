const mongoose = require("mongoose");

const sneakerSchema = mongoose.Schema({
    limit: { type: String, required: true },
    gender: {type: String},
    brand: {type: String},
    colorway: {type: String},
    shoe: {type: String},
    releaseYear: {type: String},
    name: {type: String}
})


mongoose.exports = mongoose.model("Sneaker", sneakerSchema);