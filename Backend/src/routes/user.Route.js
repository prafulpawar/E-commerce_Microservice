const express = require('express');
const { userCreate, loginUser, profileController, updateProfile } = require('../controller/userController');
const { isAuth } = require('../middlewares/isAuth');
const upload = require('../middlewares/multer')
const router  = express.Router();

router.post('/register',userCreate)
router.post('/login',loginUser)
router.post('/profile',isAuth,profileController)
router.post('/updateprofile',isAuth,upload.single('file'),updateProfile)

module.exports = router