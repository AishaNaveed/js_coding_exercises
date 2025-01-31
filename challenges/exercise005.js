const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  if (nums[nums.length - 1] === n)
    return null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == n) {
      return nums[i + 1];
    }
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return {
    '0': str.length - sum,
    '1': sum
  };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  return parseFloat(n.toString().split('').reverse().join('') * Math.sign(n));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  arrs.forEach(element => {
    element.forEach(key => sum += key);
  });
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  let temp = 0, n = arr.length;
  if (n > 1) {
    temp = arr[0];
    arr[0] = arr[n - 1];
    arr[n - 1] = temp;
    return arr;
  }
  else
    return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let needle = {};
  needle = Object.values(haystack);
  return (needle.toString()).toLowerCase().includes(searchTerm.toLowerCase());
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  let output = {};
  let temp = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(" ");
  temp.map(element =>
    output[element] === undefined ? output[element] = 1 : output[element] += 1
  );
  return output;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
