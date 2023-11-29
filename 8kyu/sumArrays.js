// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers){
    return numbers.reduce((acc, c) => acc + c, 0)
}