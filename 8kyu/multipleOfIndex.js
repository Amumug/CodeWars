// https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function multipleOfIndex(array){
    return array.filter((x,i) => x == 0 || x % i == 0);
}