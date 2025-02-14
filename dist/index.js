"use strict";
class Users {
    constructor(n, b) {
        this.name = n;
        this.balance = b;
    }
    addMoney(amount) {
        this.balance += amount;
    }
}
const user1 = new Users("Renato", 10);
user1.addMoney(100);
const user2 = new Users("Amanda", 20);
user2.addMoney(100);
console.log(user1);
console.log(user2);
