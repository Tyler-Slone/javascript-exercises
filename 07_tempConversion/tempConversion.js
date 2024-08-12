// Formula (°F − 32) × 5/9 = °C
const convertToCelsius = function(tempFahrenheit) {
  let convertedTempCelsius = (tempFahrenheit - 32) * 5/9;
  convertedTempCelsius = Math.round(convertedTempCelsius * 10) / 10
  return convertedTempCelsius;
};

// Formula (°C × 9/5) + 32 = °F
const convertToFahrenheit = function(tempCelsius) {
  let convertedTempFahrenheit = (tempCelsius * 9/5) + 32;
  convertedTempFahrenheit = Math.round(convertedTempFahrenheit * 10) / 10
  return convertedTempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};