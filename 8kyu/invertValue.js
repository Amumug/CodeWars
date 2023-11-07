// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions/javascript
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array){
    return array.map(x => x * -1)
}