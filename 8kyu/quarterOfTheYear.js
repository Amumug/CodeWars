// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/solutions/javascript
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
const quarter = (month) => {
    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4
}