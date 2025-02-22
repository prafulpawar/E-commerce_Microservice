const express = require('express');
const { profileController } = require('../controller/userController');
const router  = express.Router();
const upload  = require('../middlewares/multer')
router.post('/createProduct',upload.single('file'),profileController)

module.exports = router;