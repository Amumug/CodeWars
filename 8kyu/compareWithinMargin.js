// https://www.codewars.com/kata/56453a12fcee9a6c4700009c/train/javascript
// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

function closeCompare(a, b, margin = 0){
    if (a < b - margin)
        return -1
    if (a - margin > b)
        return 1
    return 0
}