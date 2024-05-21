const express = require("express")
const products = require('./sample.js');
const { connectDB } = require("./config/db.config.js");
require("dotenv").config();
const multer = require('multer')

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.send("WELCOME TO CONTACT MANAGER API 1.0")
})


// app.get('/products', (req, res) => {
//     res.json(products)
// })

// DB connection
connectDB()

// Body Parser
// CREATING NEW CONTACT IN DB


// Routes 
app.use("/api/contact", require("./routes/contactRoutes.js"))



app.listen(PORT, () => {
  console.log(`Server is runnig at PORT : ${PORT}`)
})