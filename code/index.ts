// Day 3 - Exercise 4

const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers: (string | number)[] = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays: (number[] | string[] | (string | number)[])[] = [sequence, animals, stringsAndNumbers];

console.log(allMyArrays);