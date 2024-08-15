/**
 * Process weather data before saving to the database.
 * You can modify this function to add additional processing logic.
 *
 * @param {Object} weatherData - The weather data received from the frontend.
 * @returns {Object} - Processed weather data.
 */
exports.processWeatherData = (weatherData) => {
    if (!Array.isArray(weatherData.hourlyData)) {
      weatherData.hourlyData = [];
    }  
    return weatherData;
  };
  