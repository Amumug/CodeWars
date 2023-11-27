// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
}