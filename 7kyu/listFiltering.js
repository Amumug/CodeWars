// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function listFiltering(l){
    return l.filter(l => l >= 0 && typeof l === 'number')
}