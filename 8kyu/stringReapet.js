//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/solutions/javascript
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr (n, s){
    let result = ''
    for (i = 0; i < n; i++){
        result += s
    }
    return result
}