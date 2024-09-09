const express = require('express')
const mongoose =require('mongoose')
const model =require('./model/model.js')
const Product = require('./model/model.js')

//Connecting to MongoDB
mongoose.connect('mongodb+srv://admin:admin@nodeapi.wuv7g.mongodb.net/?retryWrites=true&w=majority&appName=NodeApi').then(()=>{
    console.log("Connected with MongoDB")
})

const app = express()
app.use(express.json())


//Create a Product
app.post('/api/products',async(req,res)=>{
    try {
        const product=await Product.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
})

//Get All Products
app.get('/api/products',async(req,res)=>{
    try {
        const product=await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
})


//Get Product by Id
app.get('/api/products/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const product=await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
})


//Update Product by ID
app.put('/api/products/:id',async(req,res)=>{
    try {
        const id= req.params.id;
        const product=await Product.findByIdAndUpdate(id,req.body);

        if(!product){
            res.status(400).json({message:`product with the ${id} is not in database `})
        }else
        res.status(200).json(await Product.findById(id))

    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
})


//Delete a Product
app.delete('/api/products/:id',async(req,res)=>{
    try {
        const id= req.params.id;
        const product=await Product.findByIdAndDelete(id);
        res.status(200).json({message: `product with id : ${id} is deleted`})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
})















let array = ["bat","ball"]


//GET all products
app.get('/api/products',(req,res)=>{
    res.status(200).send(array)
})


//Search Product
app.get('/api/products/:pro',(req,res)=>{
    console.log(req.url)
    const pro= req.params.pro

    const bool =array.filter(value=> pro===value)

    if(bool.length){
        res.send(`${pro} is present in the list`)
    } else {
        res.status(200).send(" searched product is not in list")
    }
})

//addning product
app.post('/api/products',(req,res)=>{
    console.log(req.url)
    const product =req.body.product;
    array.push(product);
    res.status(201).send(` ${product} added`)
})

//Delete Product
app.delete('/api/products/:pro',(req,res)=>{
    console.log(req.url)
    const pro= req.params.pro

    array =array.filter(value=> pro!==value)
    res.status(200).json({message:`deleted product ${pro}`})
})



app.listen(3000,()=>{
    console.log("server listening on port 3000 ...")
})
