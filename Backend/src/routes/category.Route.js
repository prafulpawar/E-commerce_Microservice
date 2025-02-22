const express = require('express');
const { categoryController } = require('../controller/categoryController');
const router = express.Router();
const upload = require('../middlewares/multer')

router.post('/categoryCreate',upload.single('file'),categoryController)

module.exports = router