// https://www.codewars.com/kata/5d59576768ba810001f1f8d6/train/javascript
// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).
function quadratic(x1, x2){
    return [1, -(x1 + x2), (x1 * x2)];
}