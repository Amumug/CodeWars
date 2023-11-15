// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript 
//Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

function disemvowel(str) {
    const vowels = ['a', 'o', 'e', 'u', 'i']

    return str.split('').filter(function(el) {
        return vowels.indexOf(el.toLowerCase()) == -1
    }).join('gj')
}