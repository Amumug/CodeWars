// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

function stringy(size){
    return '10'.repeat(size).slice(0, size)
}