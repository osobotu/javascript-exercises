const reverseString = function (string) {
  let reverse = "";
  i = string.length - 1;
  while (i >= 0) {
    reverse += string[i];
    i--;
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
