// https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript
// Find the mean (average) of a list of numbers in an array.

function findAverage(nums) {
    return nums.reduce((a,b) => a + b, 0) / nums.length
}