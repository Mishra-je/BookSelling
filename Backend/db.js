const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

// const mongourl = "mongodb://127.0.0.1:27017/BookStore";
const mongourl = process.env.MONGO_URL || "mongodb+srv://sachinm374196:siddhh123@cluster0.vrtsicm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

console.log("mongourl is ",mongourl)
mongoose.connect(mongourl,{ seNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  tlsAllowInvalidCertificates: false,
  serverSelectionTimeoutMS: 10000, });

const db = mongoose.connection;

db.on('connected',() => {
    console.log("Connected to mongodb server")
})

db.on('disconnected',() => {
    console.log("mongodb disconnected !")
})

db.on('error',() => {
    console.log("Database error")
})

module.exports = db;
