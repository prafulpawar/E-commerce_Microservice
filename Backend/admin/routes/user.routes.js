const express = require('express');
const { adminCreateController } = require('../controllers/useController');
const router  = express.Router();

router.post('/create',adminCreateController)

module.exports = router