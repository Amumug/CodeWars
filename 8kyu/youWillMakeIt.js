// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

function zeroFuel(distanceToPump, mpg, fuelLeft){
    return distanceToPump / mpg <= fuelLeft;
}