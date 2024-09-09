const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(

    {
        name: {
            type: String,
            requied: [true, "Please enter product Name"]
        },
        quantity: {
            type: Number,
            requied: true,
            default: 0
        },
        price: {
            type: Number,
            requied: true,
            default: 0
        },
        image: {
            type: Number,
            requied: false
        }
    },
    {
        timestamps: true
    }

);

const Product =mongoose.model("Product",ProductSchema);
module.exports=Product;