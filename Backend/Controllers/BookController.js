const book = require('../Schema/BookSchema');

const getBook = async(req,res) => {
    try {
        
        const books = await book.find();
        if(!books){
            return res.status(400).json({error : "No books found !"})
        }
        
        res.status(200).json({books})
        
    } catch (error) {
        
    }
}

module.exports = {getBook}