// https://leetcode.com/problems/apply-transform-over-each-element-in-array/
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

const map = (arr, fn) => {
    const res = new Array(arr.length);

    for (const i in arr){
        res[i] = fn(arr[i], Number(i))
    }
    return res
}