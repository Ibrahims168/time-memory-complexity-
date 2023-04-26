// time complexity for given algorithem
// O(1), O(logN), O(N), O(NlogN), O(N^2), O(N^3)...
// O(1) --> create varible, change varible value,
//          mathematic action, call a function, return, if else, print,
//          change array by given index, add element to array, delete element from array.
// O(N) --> when we loop on the entire N element of unknown data structure
// O(N^2) --> when we nested loop on the entire N elements of unknown data structure
// O(NlogN) --> when we sort all N elements of an unknown data structure 

console.log("****question 3****")
// Question 3
// numbers and targets 
const nums1 = [2,7,11,15]; // O(1)
const target1 = 9; // O(1)

const nums2 = [3,2,4]; // O(1)
const target2 = 6; // O(1)

const nums3 = [3,3]; // O(1)
const target3 = 6; // O(1)

// -----------------------------------

// Solution 1
console.log("*(solution-1)*")

function twoSum(nums, target) { // O(1)
    let sameNum = {}; // O(1)
    for (let i = 0; i < nums.length; i++) {// O(N)
      let element = target - nums[i]; // O(1)
      if (element in sameNum) { // O(1)
        return [sameNum[element], i]; // O(1)
      }
      sameNum[nums[i]] = i; // O(1)
    }
    return []; // O(1)
};
console.log("Output: "+ twoSum(nums1, target1));
console.log( "Output: "+ twoSum(nums2, target2));
console.log("Output: "+ twoSum(nums3, target3));
// total time complexity for solution number 1 is: O(1) + O(N) = "O(N)"

// ---------------------------------------------------------------------

// Solution 2
console.log("*(solution-2)*")

function anotherTwoSum(nums, target) { // O(1)
    for (let i = 0; i < nums.length; i++) { // O(N)
      for (let j = i + 1; j < nums.length; j++) { // O(N^2)
        if (nums[i] + nums[j] === target) { // O(1)
          return [i, j]; // O(1)
        }
      }
    }
    return null; // O(1)
}

console.log("Output: "+ anotherTwoSum(nums1, target1));
console.log("Output: "+ anotherTwoSum(nums2, target2));
console.log("Output: "+ anotherTwoSum(nums3, target3));

// O(1) + O(N) + O(N^2) --> O(N^2)
// total time complexity for solution number 2 is: "O(N^2)"