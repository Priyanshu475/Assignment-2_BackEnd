const mongoose = require('mongoose')
const Schema = mongoose.Schema


const weatherSummarySchema = new Schema({
    date: { type: Date, required: true },
    averageTemperature: Number,
    feels_like: Number,
    maxTemperature: Number,
    minTemperature: Number,
    dominantCondition: String
  }, { timestamps: true });
  
module.exports  = mongoose.model('WeatherSummary', weatherSummarySchema);