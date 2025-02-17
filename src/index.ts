
class Movie {
    id: number;
    name: string;

    constructor(id: number, name: string,) {
        this.id = id;
        this.name = name;
    }
}

let movie1 = new Movie(1, "Forrest Gump")
movie1.id = 5
console.log(movie1);