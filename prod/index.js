"use strict";
function userImput(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinePrices = userImput(10, 20);
console.log(combinePrices);
const combineName = userImput('Apple', 'Avocado');
console.log(combineName);
