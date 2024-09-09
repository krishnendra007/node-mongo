const express = require('express')
const mongoose =require('mongoose')
const model =require('./model/model.js')
const Product = require('./model/model.js')
const productRoutes = require('./routes/routes.js')
const connectToDB =require('./config/mongodbConfig.js')




//middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/products',productRoutes)

//Connecting to MongoDB
connectToDB();

//server listerning
app.listen(3000,()=>{
    console.log("server listening on port 3000 ...")
})
