
// time complexity for given algorithem
// O(1), O(logN), O(N), O(NlogN), O(N^2), O(N^3)...
// O(1) --> create varible, change varible value,
//          mathematic action, call a function, return, if else, print,
//          change array by given index, add element to array, delete element from array.
// O(N) --> when we loop on the entire N element of unknown data structure
// O(N^2) --> when we nested loop on the entire N elements of unknown data structure
// O(NlogN) --> when we sort all N elements of an unknown data structure 

// Question 1
console.log("****question 1****");

var stringOne = "abcabcbb";
var stringTwo = "bbbbb";
var stringThree = "pwwkew";


function numberOfChar(string){  // O(1)
  let counter = 0; // O(1)
  let maxLength = 0; // O(1)
  let repeatedLetters = {}; // O(1)
  
  for(i=0; i< string.length; i++){ // O(N)
    var char = string[i]; // O(1)
    if (char in repeatedLetters && repeatedLetters[char] >= counter) { // O(1)
      counter = repeatedLetters[char] + 1; // O(1)
    }
        maxLength = Math.max(maxLength, i - counter + 1); // O(1)
        repeatedLetters[char] = i; // O(1)
      }
        return maxLength; // O(1)
      }

console.log("Output: "+ numberOfChar(stringOne));
console.log("Output: "+ numberOfChar(stringTwo));
console.log("Output: "+ numberOfChar(stringThree));
//  algorithem total time complexity --> O(1) + O(N) = "O(N)"
      