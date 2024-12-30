const convertToCelsius = function (temp) {
  let celcius = (temp - 32) * (5 / 9);

  if (
    ((temp - 32) * (5 / 9) > 0) ||
    ((temp - 32) * (5 / 9) < 0)
  ) {
    celcius = celcius.toFixed(1);
    celcius = parseFloat(celcius);
  }

  return celcius;
};

const convertToFahrenheit = function (temp) {
  let fahrenheit = (temp * (9 / 5) + 32);

  if (
    ((temp * (9 / 5) + 32) > 0) ||
    ((temp * (9 / 5) + 32) < 0)
  ) {
    fahrenheit = fahrenheit.toFixed(1);
    fahrenheit = parseFloat(fahrenheit);
  }

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
