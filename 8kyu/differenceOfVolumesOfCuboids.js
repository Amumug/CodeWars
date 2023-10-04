// https://www.codewars.com/kata/58cb43f4256836ed95000f97/solutions/javascript
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

function findDifference(a, b){
    return Math.abs(a[0]*a[1]*a[2] - b[0]*b[1]*b[2])
}