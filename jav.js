// Reverse a string

// Input: "hello"

// Output: "olleh"

// Check if a string is a palindrome

// Input: "madam"

// Output: true

// Count vowels and consonants

// Input: "javascript"

// Output: Vowels: 3, Consonants: 7

// Factorial of a number

// Input: 5

// Output: 120

// Fibonacci sequence up to n

// Input: 6

// Output: [0, 1, 1, 2, 3, 5]

// Check if a number is prime

// Input: 7

// Output: true

// Find largest and smallest number in array

// Input: [3, 9, 1, 44, 6]

// Output: Largest: 44, Smallest: 1

// Sum of elements in an array

// Input: [1, 2, 3, 4]

// Output: 10

// Average of numbers in array

// Input: [10, 20, 30]

// Output: 20

// Swap two numbers without third variable

// Input: a=5, b=10

// Output: a=10, b=5

// Find string length without .length

// Input: "hello"

// Output: 5

// Index of first occurrence of character

// Input: "javascript", "a"

// Output: 1

// Capitalize first letter of each word

// Input: "i love javascript"

// Output: "I Love JavaScript"

// Check if number is even or odd (no %)

// Input: 11

// Output: "Odd"

// Count digits in a number

// Input: 12345

// Output: 5






// Intermediate (20 Questions)

// Remove duplicates from array

// Input: [1, 2, 2, 3, 4, 4, 5]

// Output: [1, 2, 3, 4, 5]

// Find second largest number

// Input: [10, 5, 20, 8]

// Output: 10

// Most frequent element in array

// Input: [1, 2, 2, 3, 3, 3, 4]

// Output: 3

// Intersection of two arrays

// Input: [1, 2, 3], [2, 3, 4]

// Output: [2, 3]

// Union of two arrays

// Input: [1, 2, 3], [3, 4, 5]

// Output: [1, 2, 3, 4, 5]

// Difference between two arrays

// Input: [1, 2, 3], [2, 3, 4]

// Output: [1, 4]

// Reverse words in a string

// Input: "Hello World"

// Output: "World Hello"

// Find longest word in a string

// Input: "I love programming"

// Output: "programming"

// Count occurrences of each character

// Input: "apple"

// Output: {a:1, p:2, l:1, e:1}

// Check if two strings are anagrams

// Input: "listen", "silent"

// Output: true

// Sort array without using .sort()

// Input: [5, 3, 8, 1]

// Output: [1, 3, 5, 8]



// Flatten a nested array

// Input: [1, [2, [3, 4]], 5]

// Output: [1, 2, 3, 4, 5]




// Remove falsy values from array

// Input: [0, 1, false, 2, "", 3, null]

// Output: [1, 2, 3]





// Group objects by property

// Input:

// [
//   {name:"Alice", role:"dev"},
//   {name:"Bob", role:"tester"},
//   {name:"Eve", role:"dev"}
// ]


// Output:

// {
//   dev: [{name:"Alice", role:"dev"}, {name:"Eve", role:"dev"}],
//   tester: [{name:"Bob", role:"tester"}]
// }

// Convert string into title case

// Input: "hello world"

// Output: "Hello World"

// Reverse only vowels in string

// Input: "hello"

// Output: "holle"

// Maximum sum subarray (Kadane’s Algorithm)

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Output: 6 ([4,-1,2,1])

// Find all pairs with sum = k

// Input: [1, 2, 3, 4, 5], k=6

// Output: [[1,5],[2,4]]

// Remove duplicates from string

// Input: "programming"

// Output: "progamin"

// First non-repeating character

// Input: "swiss"

// Output: "w"







// Advanced (15 Questions – still strings/arrays/objects only)

// Rotate array by k steps
// Input: [1, 2, 3, 4, 5], k=2
// Output: [4, 5, 1, 2, 3]

// Array chunking

// Input: [1,2,3,4,5], size=2

// Output: [[1,2],[3,4],[5]]

// Flatten object

// Input: {a:1, b:{c:2,d:3}}

// Output: {a:1, "b.c":2, "b.d":3}

// Deep clone object

// Input: {a:1, b:{c:2}}

// Output: New object, not reference of original

// Check if two objects are equal (shallow)

// Input: {a:1,b:2}, {a:1,b:2}

// Output: true

// Sum of all even numbers in array

// Input: [1,2,3,4,5,6]

// Output: 12

// Count words in string

// Input: "I love coding in JS"

// Output: 5

// Longest substring without repeating characters

// Input: "abcabcbb"

// Output: "abc" (length 3)

// Check if string has all unique characters

// Input: "abcdefa"

// Output: false

// Most occurring word in a sentence

// Input: "this is a test this is only a test"

// Output: "this" or "is"

// Common characters between two strings

// Input: "hello", "world"

// Output: ["l","o"]

// Find missing number in array (1..n)

// Input: [1, 2, 4, 5] (n=5)

// Output: 3

// Find duplicate elements in array

// Input: [1,2,3,2,4,5,1]

// Output: [2,1]

// String compression (run-length encoding)

// Input: "aaabbcddd"

// Output: "a3b2c1d3"

// Remove duplicates in place from sorted array

// Input: [1,1,2,2,3,3,4]

// Output: [1,2,3,4] (new length = 4)




//   // let mat=[[1,2,3],
//   //         [ 4,8,9],
//   //         [7,8,9]
//   // ]

//   // let max=-Infinity
//   // let smax=-Infinity
//   // for(let i=0;i<mat.length;i++){
//   //   for(let j=0;j<mat[0].length;j++){
//   // if(mat[i][j]>smax){
//   //   if(mat[i][j]>max){
//   //     smax=max
//   //     max=mat[i][j]
//   //   }else{
//   //     smax=mat[i][j]
//   //   }
//   // }
//   //   }
   
//   // }
//   //  console.log(smax)
//   //   console.log(max)


// function pairoftwo(arr,target){
//     let sum=0
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.lrngth;j++){
//             sum=arr[i]+arr[j]
//             if(arr[i][j]===target){
//                 res.push(sum)
//             }
//         }
//     }
//     console.log(sum)
//     return res
// }
// let arr=[1,2,3,4,5]
// console.log(pairoftwo(arr,9))





// 🟢 Level 1 — Basic Binary Search




// Search Insert Position
// Find the element closest to target
// Find floor of a number
// Find ceil of a number
// Find the maximum element in a sorted array
// 🟡 Level 2 — Binary Search Patterns
// Find peak element
// Find a local maximum
// Find square root of a number
// Find integer square root
// Find smallest number whose square is ≥ target
// Find the smallest missing positive number in a sorted array
// Find the single element in a sorted array
// Find the minimum element in a rotated sorted array
// Search in a rotated sorted array
// Search in a rotated sorted array with duplicates
// 🟠 Level 3 — Important Interview Questions
// Find rotation count in a sorted rotated array
// Find the pivot in a rotated sorted array
// Find a target in a nearly sorted array
// Find the index of an element in an infinite sorted array
// Find the position of the first 1 in a binary sorted array
// Find the row with maximum number of 1s
// Search in a 2D sorted matrix
// Find median of a row-wise sorted matrix
// Find kth smallest element in a sorted matrix
// 🔴 Level 4 — Binary Search on Answer
// Koko Eating Bananas
// Capacity To Ship Packages Within D Days
// Minimum Days to Make M Bouquets
// Split Array Largest Sum
// Allocate Minimum Number of Pages
// Aggressive Cows
// Painter's Partition Problem
// Minimize Maximum Distance to Gas Station
// Magnetic Force Between Two Balls
// Minimum Speed to Arrive on Time
// 🔥 LeetCode Practice
// LeetCode 704 — Binary Search
// LeetCode 35 — Search Insert Position
// LeetCode 34 — Find First and Last Position
// LeetCode 69 — Sqrt(x)
// LeetCode 33 — Search in Rotated Sorted Array
// LeetCode 81 — Search in Rotated Sorted Array II
// LeetCode 153 — Find Minimum in Rotated Sorted Array
// LeetCode 154 — Find Minimum in Rotated Sorted Array II
// LeetCode 162 — Find Peak Element
// LeetCode 540 — Single Element in a Sorted Array
// LeetCode 875 — Koko Eating Bananas
// LeetCode 1011 — Capacity To Ship Packages Within D Days
// LeetCode 1283 — Find the Smallest Divisor Given a Threshold
// LeetCode 1482 — Minimum Number of Days to Make m Bouquets
// LeetCode 410 — Split Array Largest Sum