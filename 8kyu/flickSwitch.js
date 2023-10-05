// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/solutions/javascript
// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/solutions/javascript
function flickSwitch(arr){
    let result = []

    let bool = true

    for ( let i = 0; i < arr.length; i++){
        if (arr[i] === 'flick'){
            bool = bool ? false : true
            result.push(bool)
        }else {
            result.push(bool)
        }
    }
    return result
}