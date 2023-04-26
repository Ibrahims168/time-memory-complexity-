// time complexity for given algorithem
// O(1), O(logN), O(N), O(NlogN), O(N^2), O(N^3)...
// O(1) --> create varible, change varible value,
//          mathematic action, call a function, return, if else, print,
//          change array by given index, add element to array, delete element from array.
// O(N) --> when we loop on the entire N element of unknown data structure
// O(N^2) --> when we nested loop on the entire N elements of unknown data structure
// O(NlogN) --> when we sort all N elements of an unknown data structure 

console.log("****question 2****")
// Question 2

var array = [1,3,2,1,4,1]; // O(1)
var array2 = [10,20,10,20,30,20,20]; // O(1)

function mostFrequent(arr) { // O(1)
    let freq = {}; // O(1)
    let maxFreq = 0; // O(1)
    let mostFreqElem = arr[0]; // O(1)
    
    for (let i = 0; i < arr.length; i++) { // O(N)
        let elem = arr[i]; // O(1)
        freq[elem] = (freq[elem] || 0) + 1; // O(1)
        if (freq[elem] > maxFreq || (freq[elem] === maxFreq && elem === mostFreqElem)) { // O(1)
            maxFreq = freq[elem]; // O(1)
            mostFreqElem = elem; // O(1)
        }
    }
    return mostFreqElem; // O(1)
}
console.log("Output: "+ mostFrequent(array));
console.log("Output: "+ mostFrequent(array2));

// algorithem total time complexity --> O(1) + O(N) = "O(N)"
  