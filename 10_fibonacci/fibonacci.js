const fibonacci = function (n) {
  let first = 1;
  let second = 1;

  n = Number(n);

  if (n < 0) {
    return "OOPS";
  }
  if (n == 1 || n == 2) {
    return first;
  } else {
    let nth = 0;
    for (let i = 2; i < n; i++) {
      nth = first + second;
      first = second;
      second = nth;
    }
    return nth;
  }
};

// Do not edit below this line
module.exports = fibonacci;
