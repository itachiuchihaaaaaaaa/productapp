const mongoose = require('mongoose');

// mongoose.connect("url").then(()=>{}).catch((err)=>{})

mongoose
.connect(process.env.mongodb_url)
.then(()=>{console.log("Db connected")})
.catch((err)=>{console.log(err)})