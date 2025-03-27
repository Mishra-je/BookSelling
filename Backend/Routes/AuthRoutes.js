const router = require('express').Router()
const {SignUp,login} = require('../Controllers/AuthControllers')

router.post('/signup',SignUp);
router.post('/login',login);

module.exports = router;    