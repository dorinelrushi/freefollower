const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAcc = new Schema({
    email : String,
    password : String
})

module.exports = mongoose.model("test",userAcc);