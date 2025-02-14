class Users {
    name: string;
    balance: number;

    constructor(n: string, b: number){
        this.name = n;
        this.balance = b;
    }
    addMoney(amount: number){
        this.balance += amount;
    }

}

const user1 = new Users("Renato", 10)
user1.addMoney(100)
const user2 = new Users("Amanda", 20)
user2.addMoney(100)
console.log(user1);
console.log(user2);
