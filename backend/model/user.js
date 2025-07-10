const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    fullname:String,
    username:String,
    password:String,
role:{type:String,enum:["admin","user"],default:"user"}
})

const userModel = mongoose.model("user",userSchema);
module.exports = userModel;