const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce((total, cur) => total + cur, 0);
};

const multiply = function (array) {
  return array.reduce((total, cur) => total * cur, 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
