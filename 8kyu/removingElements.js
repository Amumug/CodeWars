// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/solutions/javascript
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr){
    let newArr = []

    for (let i=0;i<arr.length;i++){
        if(i % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}