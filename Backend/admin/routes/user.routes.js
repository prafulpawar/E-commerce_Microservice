const express = require('express');
const { adminCreateController } = require('../controllers/useController');
const router  = express.Router();

router.post('/createUser',adminCreateController)

module.export = router;