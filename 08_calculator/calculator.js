const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  if (array.lenth === 0) {
    return 0;
  } else {
    return array.reduce((total, num) => total += num, 0);
  }
};

const multiply = function (array) {
  return array.reduce((total, num) => total * num);
};

const power = function (base, power) {
  let total = 1;
  for (let i = 0; i < power; i++) {
    total *= base;
  }
  return total;
};

const factorial = function (n) {
  let total = 1;
  while (n > 0) {
    total *= n;
    n--;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
