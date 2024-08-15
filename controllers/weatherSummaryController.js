// controllers/weatherController.js
const WeatherSummary = require('../models/WeatherSummary');
const { processWeatherData } = require('../utils/weatherUtils');

exports.addWeatherSummary = async (req, res) => {
  try {
    let weatherData = req.body;

    weatherData = processWeatherData(weatherData);

    const newWeatherSummary = new WeatherSummary(weatherData);

    // Save the document to the database
    await newWeatherSummary.save();

    // Send a success response
    res.status(201).json({ message: 'Weather summary added successfully', data: newWeatherSummary });
  } catch (error) {
    console.error('Error adding weather summary:', error);
    res.status(500).json({ message: 'Failed to add weather summary', error: error.message });
  }
};
