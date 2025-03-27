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
const path = require('path')
// const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(morgan('dev'))
const _dirname = path.resolve();


app.use('/auth',AuthRoutes)
app.use('/book', BookRoutes)
app.use(express.static(path.join(_dirname, "/Front-end/dist")))
app.get('*',(req,res) => {
    res.sendFile(path.resolve(_dirname,"Front-end", "dist","index.html" ))
})


app.get("/",(req,res) => {
    res.send("Welcome to My Hotel")
})

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`.bgCyan.black)
})