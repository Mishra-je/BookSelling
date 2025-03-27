const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  categrory : {
    type: String,
    required: true,
  },
  image : {
    type : String,
    required : true
  },
  title : {
    type : String,  
    required : true
  }
});

const Book = mongoose.model("Book",BookSchema);
module.exports = Book;