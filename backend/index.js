const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config();
const port = process.env.port
require('./db')
const path =require('path')

const app = express();

app.use(express.json());
app.use(cors())
app.use('/uploads',express.static(path.join(__dirname,"uploads")))

const signup_routes = require('./Routes/user')
const pro_routes = require('./Routes/product');
app.use('/api',signup_routes);
app.use('/p',pro_routes);


app.listen(port,()=>{
    console.log(`server is up and running in ${port}`)
})