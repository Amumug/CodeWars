//https://www.codewars.com/kata/5168bb5dfe9a00b126000018
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    // SOLUTION 1
    // let arr = []
    // for (let i = str.length-1; i >= 0; i--){
    //     arr.push(str[i])
    //     console.log(str[i])
    //     arr.join('')
    // }
    // return arr

    // SOLUTION 2
    return str.split('').reverse('').join('')
}