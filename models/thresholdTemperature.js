// models/ThresholdTemperature.js
const mongoose = require('mongoose');

const ThresholdTemperatureSchema = new mongoose.Schema({
  thresholdTemperature: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('ThresholdTemperature', ThresholdTemperatureSchema);
