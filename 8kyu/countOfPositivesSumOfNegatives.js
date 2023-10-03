// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return [];
    }

    let positiveCount = 0;
    let negativeSum = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positiveCount++;
        } else if (input[i] < 0) {
            negativeSum += input[i];
        }
    }

    return [positiveCount, negativeSum];
}
