const express = require('express');
const router  = express.Router();
const upload  = require('../middlewares/multer');
const { productCreateController,manageStock } = require('../controller/productController');


router.post('/createProduct',upload.single('file'),productCreateController)
router.post('/manageStock',manageStock)


module.exports = router;