const express = require('express');
var router = express.Router();
const controller = require("../controller/index");

// Hr/admin 
router.post('/test', controller.test);

module.exports = router;