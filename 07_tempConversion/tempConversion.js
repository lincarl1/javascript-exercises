const convertToCelsius = function (fahrenheit) {
  let celsiusTemperature = Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
  return celsiusTemperature;
};

const convertToFahrenheit = function (celsius) {
  let fahrenheitTemperature = Math.round((celsius*(9/5)+32) * 10) / 10;
  return fahrenheitTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
