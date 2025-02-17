
class Movie {
   //readonly id: number;
    //name: string;

    constructor(public readonly id: number, public name: string, private _price: number) {
        //this.id = id;
        //this.name = name;
    }
}

let movie1 = new Movie(1, "Forrest Gump", 20)
console.log(movie1);