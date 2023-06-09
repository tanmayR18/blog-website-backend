const mongoose = require('mongoose')

require('dotenv').config()

const connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Database connected successfully")
    })
    .catch((err)=>{
        console.log("Database facing connection issue")
        console.log(err)
        process.exit(1)
    })
}

module.exports = connectDb;