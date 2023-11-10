// https://leetcode.com/problems/array-reduce-transformation/
// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.


const reduce = (nums, fn, init) => {
    let res = init 

    for (const n of nums) {
        res = fn(init, n)
    }
    return res
}