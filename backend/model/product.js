const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    proName:String,
    price:Number,
    dis:String,
    stock:Number,
    images:[String],
})

module.exports = mongoose.model("Product",productSchema);

