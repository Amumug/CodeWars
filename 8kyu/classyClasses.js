// https://www.codewars.com/kata/55a144eff5124e546400005a/train/javascript
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get Info() {
        return `${this.name}s age is ${this.age}`;
    }

}