const mongoose = require('mongoose')

//Connecting to MongoDB
const connectToDb = async () => {

    try {
        mongoose.connect('mongodb+srv://admin:admin@nodeapi.wuv7g.mongodb.net/?retryWrites=true&w=majority&appName=NodeApi').then(() => {
            console.log("Connected with MongoDB")
        })
    } catch (error) {
        console.log(" error while connecting DB" + error)
    } 
}

module.exports=connectToDb