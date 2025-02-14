interface IPerson {
    name: string;
    age: number;
  }
  
  class Person implements IPerson {  // A classe Person implementa a interface IPerson
    constructor(public name: string, public age: number) {}
  }
  
  const jane: IPerson = new Person('Jane', 31); // 'jane' é tipada com IPerson
  const john: IPerson = {name: "John", age: 42}; // Também podemos usar diretamente
  
  console.log(`${jane.name} is ${jane.age} years old.`);
  console.log(`${john.name} is ${john.age} years old.`);