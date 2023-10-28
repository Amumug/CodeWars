// https://codewars.com/kata/55d24f55d7dd296eb9000030/solutions/javascript
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
    // Code here
    let sum = 0
    for (i = 1; i <= num; i++){
      sum +=i
    }
    return sum
  }