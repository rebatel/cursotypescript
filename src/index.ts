class Users {
    name: string;
    balance: number;

    constructor(n: string, b: number){
        this.name = n;
        this.balance = b;
    }
}

const user1 = new Users("Renato", 10)
const user2 = new Users("Amanda", 20)
console.log(user1);
console.log(user2);
