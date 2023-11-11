// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/solutions/javascript
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

function paperwork(n, m){
    return n < 0 || m < 0 ? 0 : n * m
}