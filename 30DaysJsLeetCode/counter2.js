// https://leetcode.com/problems/counter-ii/submissions/
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
const createCounter = (init) => {
    let count = init

    increment =() => ++count
    

    decrement = () =>  --count


    reset = () => {
        count = init
        return count
    }
    return {
        increment,
        decrement,
        reset
    }
};