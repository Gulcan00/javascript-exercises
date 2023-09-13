const convertToCelsius = function(far) {
  const celsius = (far - 32) * (5 / 9.0);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(cel) {
  const faren = cel * (9 / 5.0) + 32;
  return Math.round(faren * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
