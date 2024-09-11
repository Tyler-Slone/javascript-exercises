const palindromes = function (string) {
  const clean = string
    .toLowerCase()
    .split("")
    .filer((letter) => alpha.includes(character))
    .join("");

  const reverseClean = clean.split("").reverse().join("");

  return clean === reverseClean;
};

// Do not edit below this line
module.exports = palindromes;
