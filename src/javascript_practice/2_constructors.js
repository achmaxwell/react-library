class User {
    constructor(first, last,e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let userOne = new User("Paul", "O'Connor", "poconner@elevenfifty.org");
console.log(userOne.first); // undefined
console.log(userOne.f); // Paul
console.log(userOne.l); // O'Connor
console.log(userOne); // User {f: "Paul", l: "O'Connor", "poconner@elevenfifty.org"}

// My Test

class Sailor {
    constructor(name, planet, hue) {
        this.n = name;
        this.p = planet;
        this.h = hue;
    }
}

let scoutOne = new Sailor("Serena", "Moon", "Red and Blue");
console.log(scoutOne.n);
console.log(scoutOne.p);
console.log(scoutOne.h);
console.log(scoutOne);