// https://leetcode.com/problems/filter-elements-from-array/description/
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

const filter = (arr, fn) {
    const res = [];

    for (let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            res.push(arr[i])
        }
    }
    return res
}