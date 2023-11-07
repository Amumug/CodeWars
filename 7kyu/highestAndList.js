// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
    let numbersArray = numbers.split(' ').map((n) => Number(n))
    let highestArray = Math.max(...numbersArray)
    let LowestArray = Math.min(...numbersArray)
    return `${highestArray} ${LowestArray}`
}