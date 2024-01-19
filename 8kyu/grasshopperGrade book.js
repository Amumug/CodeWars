// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3){
    avg = (s1 + s2 + s3) / 3

    if (avg < 60) return 'F'
    else if (avg < 70) return 'D';
    else if (avg < 80) return 'C';
    else if (avg < 90) return 'B';
    else return 'A';
}