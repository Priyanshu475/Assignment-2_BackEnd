// controllers/weatherController.js
const WeatherSummary = require('../models/WeatherSummary');
const { processWeatherData } = require('../utils/weatherUtils');
const ThresholdTemperature = require('../models/thresholdTemperature');

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

// Get the threshold temperature
exports.getThresholdTemperature = async (req, res) => {
  try {
    let threshold = await ThresholdTemperature.findOne({});
    
    if (!threshold) {
      // If no document exists, create one with a default value (optional)
      threshold = new ThresholdTemperature({ thresholdTemperature: 0 });
      await threshold.save();
    }

    res.status(200).json({ thresholdTemperature: threshold.thresholdTemperature });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching threshold temperature', error });
  }
};

// Set the threshold temperature
exports.setThresholdTemperature = async (req, res) => {
  const { thresholdTemperature } = req.body;

  if (typeof thresholdTemperature !== 'number') {
    return res.status(400).json({ message: 'Threshold temperature must be a number' });
  }

  try {
    let threshold = await ThresholdTemperature.findOne({});
    
    if (threshold) {
      // Update the existing document
      threshold.thresholdTemperature = thresholdTemperature;
    } else {
      // Create a new document if none exists
      threshold = new ThresholdTemperature({ thresholdTemperature });
    }

    await threshold.save();
    res.status(200).json({ message: 'Threshold temperature updated successfully', thresholdTemperature });
  } catch (error) {
    res.status(500).json({ message: 'Error updating threshold temperature', error });
  }
};