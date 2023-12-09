// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript
// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

function elevator(right, left, call){
    return Math.abs(left - call) < Math.abs(right - call) ? 'left' : 'right'
}