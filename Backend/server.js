

const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require("./Config/db")

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//dot config
dotenv.config()
//mongodb connection
connectDB()

//PORT
const PORT = process.env.PORT ||8000

//ROUTES
app.get("/", (req,res)=>{
    res.status(200).json({
        message : "Welcome to Blood Bank Application"
    })
})

//listen
app.listen(PORT, ()=>{
    console.log(`My server is running on ${process.env.PORT}`)
})