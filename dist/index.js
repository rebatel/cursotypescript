"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jane = new Person('Jane', 31);
const john = { name: "John", age: 42 };
console.log(`${jane.name} is ${jane.age} years old.`);
console.log(`${john.name} is ${john.age} years old.`);
