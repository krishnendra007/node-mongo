const express = require('express')
const router = express.Router();
const Product = require('../model/model')

//Create a Product
const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

//Get All Products
const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

//Get Product by Id
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

//Update Product by ID
const updateProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            res.status(400).json({ message: `product with the ${id} is not in database ` })
        } else
            res.status(200).json(await Product.findById(id))
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

//Delete a Product
const deleteProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json({ message: `product with id : ${id} is deleted` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getAllProducts, getProductById, addProduct, updateProductById, deleteProductById }