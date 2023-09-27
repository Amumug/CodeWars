// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n){
    const nString = n.String()
    const nArr = nString.split('').reverse()
    return nArr.map(nString => parsenInt(nString))
}
//