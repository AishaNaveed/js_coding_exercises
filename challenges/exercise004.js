function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(small => small < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  return names.filter(nameSearch => nameSearch.charAt(0) === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  return words.filter(verbBegin => verbBegin.startsWith("to ") === true);
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(value => value % 1 === 0);
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  return users.map(place => place.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map(arrNum => Math.sqrt(arrNum) % 1 != 0 ?
    parseFloat(Math.sqrt(arrNum).toFixed(2)) :
    Math.sqrt(arrNum));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  return sentences.filter(word => word.toLowerCase().includes(str.toLowerCase()) === true);
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  return triangles.map(temp => {
    const big = Math.max(...temp);
    return big;
  });
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
