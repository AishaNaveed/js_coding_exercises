function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  const vatCal = originalPrice + (originalPrice * vatRate / 100);
  return vatCal % 1 != 0 ? parseFloat(vatCal.toFixed(2)) : vatCal;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  const salePrice = originalPrice - (originalPrice * reduction / 100);
  return salePrice % 1 != 0 ? parseFloat(salePrice.toFixed(2)) : salePrice;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  const size = str.length;
  return size % 2 == 0 ? str.substring((size / 2) - 1, (size / 2) + 1) : str.substring((size - 1) / 2, (size - 1) / 2 + 1);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words.map(str => str.split("").reverse().join(""));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let total = 0;
  users.forEach(person => person.type === "Linux" ? total++ : total);
  return total;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  let sum = 0;
  scores.forEach(value => sum += value);
  const mean = sum / scores.length;
  return mean % 1 != 0 ? parseFloat(mean.toFixed(2)) : mean;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  return ((n % 3) == 0 && (n % 5) == 0) ? "fizzbuzz" :
    (n % 5 === 0) ? "buzz" :
      (n % 3 === 0) ? "fizz" : n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
