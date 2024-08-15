const express = require('express');
const router = express.Router();
const WeatherSummaryController = require('../controllers/weatherSummaryController');

router.post('/addData', WeatherSummaryController.addWeatherSummary);

module.exports = router;                                