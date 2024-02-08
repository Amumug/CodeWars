// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

function strCount(str, letter) {
    return str.split(letter).length - 1
}