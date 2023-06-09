const express = require('express')
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000

//middle ware
app.use(express.json());

const blog = require('./routes/blog')

//mount
app.use("/api/v1",blog)

const connectDb = require('./config/database')
connectDb();

//start the server
app.listen(PORT,(req,res)=>{
    console.log(`App is running on local host ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send("<h1>Yee Buddy Light weight  (*_*)_/ </h1>")
})