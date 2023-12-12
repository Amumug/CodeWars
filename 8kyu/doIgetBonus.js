// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

function bonusTime(salary, bonus){
    return bonus === true ? `£${salary * 10}` : `£${salary * 1}`;
}