const express=require('express')
const router=express.Router();
const Product =require('../model/model')

const {getAllProducts,getProductById,addProduct,updateProductById,deleteProductById} = require('../controller/controller')

//Create a Product
router.post('/',addProduct)

//Get All Products
router.get('/',getAllProducts)

//Get Product by Id
router.get('/:id',getProductById)

//Update Product by ID
router.put('/:id',updateProductById)

//Delete a Product
router.delete('/:id',deleteProductById)

module.exports =router