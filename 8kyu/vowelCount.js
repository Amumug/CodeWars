// https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript
// Return the number (count) of vowels in the given string.

function getCount(str){
    let vowelCount = 0
  
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++){
    switch(arr[i]){ 
    case 'a':
     vowelCount++;
     break;
    case 'e':
     vowelCount++;
     break;
    case 'i':
     vowelCount++;
     break;
    case 'o':
     vowelCount++;
     break;
    case 'u':
    vowelCount++;
    }
  }
  
  return vowelCount;
}