function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let temp = 0;
  let arr = new Array();
  for(let i = 0; i < nums.length; i++)
  {
      if(nums[i] < 1)
      {
          arr[temp] = nums[i];
          temp++;
      }
  }
  return arr;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let temp = 0; 
  let arr = new Array();
  for(let i = 0; i < names.length; i++)
  {
      if(names[i].charAt(0) == char)
      {
          arr[temp] = names[i];
          temp++;
      }
  }
  return arr;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let temp=0;
  let arr = new Array();
  for(let i = 0; i < words.length; i++)
  {
      if(words[i].startsWith("to ") == true)
      {
          arr[temp] = words[i];
          temp++;
      }
  }
  return arr;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let temp = 0;
    let arr = new Array();
    for(let i = 0; i < nums.length; i++)
    {
        if((nums[i] % 1) == 0)
        {
            arr[temp] = nums[i];
            temp++;
        }
    }
    return arr;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let temp = 0;
    let arr = new Array();
    for(let i = 0; i < users.length; i++)
    {
        arr[temp] = users[i].data.city.displayName;
        temp++;
    } 
    return arr;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let temp = 0;
    let arr = new Array();
    for(let i = 0; i < nums.length; i++)
    {
        let num = Math.sqrt(nums[i]);
        if(num % 1 != 0)
        {
            arr[temp] = num.toFixed(2);
            temp++;       
        }
        else
        {
            arr[temp] = num;
            temp++;
        }
    }
    return arr;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
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
