const express = require('express')
const router = express.Router();
const { userSignUp, userLogIn } = require('./controllers/users')

router.post('/signup', userSignUp);
router.post('/login', userLogIn)

module.exports = router;