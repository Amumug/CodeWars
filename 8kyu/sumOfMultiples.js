// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
// Find the sum of all multiples of n below m

function sumMul(n,m){
    //your idea here
      if (n >= m) return 'INVALID'
      
      let sum = 0
      
      for (let i = n; i < m; i += n){
        sum += i
      }
      return sum
    }