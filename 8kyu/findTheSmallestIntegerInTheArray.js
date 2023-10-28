// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/solutions/javascript
// Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
    findSmallestInt(arrOfNumbers) {
      let smallestNumber;
      
      for (let i = 0; i < arrOfNumbers.length; i++){
        const arrNum = arrOfNumbers[i];
        
        if(i === 0){
          smallestNumber = arrNum
        }
        
        if(arrNum < smallestNumber){
          smallestNumber = arrNum
        }
      }
      return smallestNumber
    }
  }