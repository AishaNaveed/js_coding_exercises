/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("An Array is required");

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0 || arr[i] % 3 === 0) {
      sum += arr[i];
    }
  }
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (!isNaN(str)) throw new Error("enter a valid DNA string");
  if (str != str.toUpperCase()) throw new Error("string should be upper case");

  let validLetters = ["G", "C", "T", "A"];
  for (let i = 0; i < str.length; i++) {
    if (!validLetters.includes(str[i])) {
      return false;
    }
  }
  return true;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (!isNaN(str)) throw new Error("enter a valid DNA string");
  if (str != str.toUpperCase()) throw new Error("string should be upper case");

  let regExp = /AC|CA|TG|GT/g,
    combi = {
      "AC": "TG",
      "AC": "GT",
      "CA": "TG",
      "TG": "AC",
      "GT": "CA",
      "TG": "CA",
      "GT": "AC"
    };
  let validLetters = ["G", "C", "T", "A"];

  for (let i = 0; i < str.length; i++) {
    if (!validLetters.includes(str[i])) {
      return false;
    }
  }
  if (str.length % 4 === 0) {
    return str.replace(regExp, function (match) {
      return combi[match];
    });
  }
  return str.substring(0, str.length - 2).replace(regExp, function (match) {
    return combi[match];
  }) + str.slice(str.length - 2);
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (isNaN(n)) throw new Error("A number is required");
  if (n % 1 != 0) throw new Error("Enter an integar number");

  if (n <= 1)
    return false;
  else if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0)
        return false;
    }
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  return Array(n).fill(Array(n).fill(fill));
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  
  let temp = 0;
  for (let i = 0; i < staff.length; i++) {
    for (let x in staff[i].rota) {
      if (staff[i].rota[x] === day)
        temp++;
    }
  }
  return temp >= 3 ? true : false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
