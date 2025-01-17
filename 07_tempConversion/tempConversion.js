const convertToCelsius = function(fahrenheit) {
  let conversion = (fahrenheit - 32) * (5/9);
  conversion = Math.round(conversion * 10) / 10;
  return conversion;
};

const convertToFahrenheit = function(celsius) {
  let conversion = (celsius * (9/5) + 32);
  conversion = Math.round(conversion * 10) / 10;
  return conversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
