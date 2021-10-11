function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const temp = nums.filter(small => small < 1);
  return temp;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const temp = names.filter(element => element.charAt(0) === char);
  return temp;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let arr = [];
  words.forEach(element => {
    if (element.startsWith("to ") === true)
      arr.push(element);
  });
  return arr;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let arr = [];
  nums.forEach(element => {
    if ((element % 1) === 0)
      arr.push(element);
  });
  return arr;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(element => element.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let arr = [];
  nums.forEach(element => {
    let sum = Math.sqrt(element);
    if (sum % 1 != 0)
      arr.push(parseFloat(sum.toFixed(2)));
    else
      arr.push(sum);
  });
  return arr;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let arr = [];
  sentences.forEach(element => {
    if (element.toLowerCase().includes(str.toLowerCase()) === true)
      arr.push(element.split().toString());
  });
  return arr;
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
