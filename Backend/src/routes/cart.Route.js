const express = require('express');
const { cartController } = require('../controller/cartController');
const {isAuth}  = require('../middlewares/isAuth')
const router  = express.Router();

router.use('/order',isAuth,cartController)

module.exports = router