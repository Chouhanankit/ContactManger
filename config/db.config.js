const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.MONGO_URI
        )
        console.log("DB Connection Successfull")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { connectDB }