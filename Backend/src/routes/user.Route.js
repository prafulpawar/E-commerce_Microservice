const express = require('express');
const { userCreate } = require('../controller/userController');
const router  = express.Router();

router.post('/register',userCreate)

module.exports = router