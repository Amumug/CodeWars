// https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum + (num * num), 0);
}