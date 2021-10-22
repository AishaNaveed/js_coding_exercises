function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  return nums.map(numObject => Math.pow(numObject, 2));
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let str = words.shift();
     words.map(eachWord => eachWord !== 0 ?
     str += eachWord.toLowerCase().substring(0,1).toUpperCase() + eachWord.toLowerCase().substring(1) : str);
  return str;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let sum = 0;
  people.forEach(subjectChoice => sum += subjectChoice.subjects.length);
  return sum;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let temp = false;
  menu.filter(menuArr => {
    menuArr.ingredients.every(food => food === ingredient ? temp = true : false);
  });
  return temp;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let duplicateArray = [], uniqueArray = [];

  arr1.forEach(number => arr2.includes(number) ? duplicateArray.push(number) : 0);
  duplicateArray.sort((a, b) => a - b)
    .filter(num => uniqueArray.indexOf(num) === -1 ? uniqueArray.push(num) : 0);

  return uniqueArray;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
