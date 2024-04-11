/** product: calculate the product of an array of numbers. */

function product(nums) {
// base case
if (nums.length === 0) return 1;
//normal case
return nums[0] * product(nums.slice(1));
}
console.log(product([3,4,5]))
// 60

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, currentLongest = 0) {
  // base case
  if (index === words.length) return currentLongest;
  // normal case
  currentLongest = Math.max(words[index].length, currentLongest);
  return longest(words, index + 1, currentLongest);
}
console.log(longest(['helloooo', 'world', 'hi', 'bye']))


/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0, result = '') {
// base case
if (index >= str.length) return result;
// normal case
result += str[index];
return everyOther(str, index + 2, result);
}

console.log(everyOther('hello')) // hlo

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  // base case
  if (index >= str.length / 2) return true;
  // normal case
  if (str[index] !== str[str.length - 1 - index]) return false;
  return isPalindrome(str, index + 1);
}

console.log(isPalindrome('racecar')) // true

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  // base case
  if (index === arr.length) return -1;
  // normal case
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

console.log(findIndex([1,2,3,4,5], 3)) // 2

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0, result = '') {
  // base case
  if (index === str.length) return result;
  // normal case
  result = str[index] + result;
  return revString(str, index + 1, result);
}

console.log(revString('hello')) // olleh

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result.push(...gatherStrings(obj[key]));
    }
  }
  return result;
}

console.log(gatherStrings({ a: 'hi', b: { c: 'hello', d: 'world' } })) // ['hi', 'hello', 'world']

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  // base case
  if (left > right) {
    return -1;
}
  let mid = Math.floor((left + right) / 2);
  // normal case
  if (arr[mid] === val){
    return mid;
  } 
  if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1);
  }
  return binarySearch(arr, val, mid + 1, right);
}

console.log(binarySearch([1,2,3,4,5], 3)) // 2

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
