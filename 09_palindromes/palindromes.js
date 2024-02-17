const palindromes = function (word) {
  return isPalindrome(cleanString(word));
};

const cleanString = function (word) {
  let s = "";
  for (let i = 0, n = word.length; i < n; i++) {
    let char = word[i];

    if (/^[a-zA-Z0-9]+$/.test(char)) {
      s += char;
    }
  }
  return s;
};

const isPalindrome = function (word) {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (!(word[left].toLowerCase() == word[right].toLowerCase())) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
