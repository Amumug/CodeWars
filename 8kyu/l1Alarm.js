// https://www.codewars.com/kata/568dcc3c7f12767a62000038/solutions/javascript
// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
function setAlarm(employed, vacation){
    return employed && !vacation ? true : false
}