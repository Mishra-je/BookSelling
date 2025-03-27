const express = require('express')
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const db  = require('./db')
const bodyParser = require('body-parser')
const colors = require('colors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const AuthRoutes = require('./Routes/AuthRoutes')
const BookRoutes = require('./Routes/BookRoutes')   
// const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(morgan('dev'))

app.use('/auth',AuthRoutes)
app.use('/book', BookRoutes)

app.get("/",(req,res) => {
    res.send("Welcome to My Hotel")
})

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`.bgCyan.black)
})