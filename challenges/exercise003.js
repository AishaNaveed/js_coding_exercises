function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  if (nums.length == 0)
    return nums;
  else {
    for (let i = 0; i < nums.length; i++) {
      nums[i] *= nums[i];
    }
    return nums;
  }
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  let first, temp, str = "";
  for (let i = 0; i < words.length; i++) {
    first = words[i];
    temp = first.toLowerCase();
    if (i != 0) {
      temp = temp.substring(0, 1).toUpperCase() + temp.substring(1);
    }
    str += temp;
  }
  return str;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  
  let sum = 0;
  people.forEach(element => {
    sum += element.subjects.length;
  });
  return sum;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    for (let j = 0; j < menu[i].ingredients.length; j++) {
      if (menu[i].ingredients[j] == ingredient)
        return true;
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let temp = 0, temp1 = 0;
  let arr = new Array();
  let uniqueArray = new Array();

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        arr[temp1] = arr2[j];
        temp1++;
      }
    }
  }
  for (let x = 1; x < arr.length; x++) {
    for (let y = 0; y < x; y++) {
      if (arr[x] < arr[y]) {
        temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
      }
    }
  }
  for (let z = 0; z < arr.length; z++) {
    if (uniqueArray.indexOf(arr[z]) === -1) {
      uniqueArray.push(arr[z]);
    }
  }
  return uniqueArray;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
