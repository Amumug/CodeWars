// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

function min(arr, toReturn){
    const val = Math.min.apply(null, arr)
    return toReturn == 'value' ? val : arr.indexOf(val)
}