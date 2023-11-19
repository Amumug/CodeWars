// https://www.codewars.com/kata/57126304cdbf63c6770012bd/solutions/javascript
// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

function isDigit(s) {
    return s == parseFloat(s)
}