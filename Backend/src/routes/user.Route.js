const express = require('express');
const { userCreate, loginUser, profileController } = require('../controller/userController');
const { isAuth } = require('../middlewares/isAuth');
const router  = express.Router();

router.post('/register',userCreate)
router.post('/login',loginUser)
router.post('/profile',isAuth,profileController)
module.exports = router