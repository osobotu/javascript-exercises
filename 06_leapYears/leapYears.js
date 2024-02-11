const leapYears = function (year) {
  if (divisibleByN(year, 100)) {
    if (divisibleByN(year, 400)) {
      return true;
    } else {
      return false;
    }
  }
  if (divisibleByN(year, 4)) {
    return true;
  } else {
    return false;
  }
};

const divisibleByN = function (num, n) {
  return num % n === 0;
};
// Do not edit below this line
module.exports = leapYears;
