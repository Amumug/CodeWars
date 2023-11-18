// https://www.codewars.com/kata/5aa736a455f906981800360d/solutions/javascript
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

function feast(beast, dish){
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1)
}