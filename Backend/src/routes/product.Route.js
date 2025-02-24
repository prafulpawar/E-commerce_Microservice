const express = require('express');
const router  = express.Router();
const upload  = require('../middlewares/multer');
const { productCreateController } = require('../controller/productController');
router.post('/createProduct',upload.single('file'),productCreateController)

module.exports = router;