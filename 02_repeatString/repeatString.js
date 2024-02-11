const repeatString = function (word, number) {
  if (word < 0) return "ERROR";
  let repetition = "";
  for (let i = 0; i < number; i++) {
    repetition += word;
  }
  return repetition;
};

// Do not edit below this line
module.exports = repeatString;
