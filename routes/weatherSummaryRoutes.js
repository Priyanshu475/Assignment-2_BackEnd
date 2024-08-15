const express = require('express');
const router = express.Router();
const WeatherSummaryController = require('../controllers/weatherSummaryController');

router.post('/addData', WeatherSummaryController.addWeatherSummary);
router.get('/thresholdTemperature', WeatherSummaryController.getThresholdTemperature);
router.post('/setThresholdTemperature', WeatherSummaryController.setThresholdTemperature);

module.exports = router;                                