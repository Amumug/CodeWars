// https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript
// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules
function isLeapYears(year){
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
} 