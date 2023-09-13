const express = require('express');
const populateBigQuery = require('../controller/populateBigQueryController');

const router = express.Router();

router.post("/send-data", populateBigQuery.PopulateBigQueryController);

module.exports = router;