const router = require('express').Router();
const {getBook} = require('../Controllers/BookController');

router.get('/getbook',getBook);
module.exports = router;