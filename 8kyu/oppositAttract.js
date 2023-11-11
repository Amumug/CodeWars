// https://www.codewars.com/kata/555086d53eac039a2a000083/solutions/javascript
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

function loveflo(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}