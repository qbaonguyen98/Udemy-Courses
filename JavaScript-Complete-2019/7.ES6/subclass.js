// ES5 - use constructor function -----------------------------------------
var Person5 = function(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
};

Person5.prototype.calcAge = function() {
    console.log(new Date().getFullYear() - this.yearOfBirth);
};

var Athlete5 = function(name, yearOfBirth, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

var reus5 = new Athlete5('Reus', 1989, 'Soccer player', 3, 10);
console.log(reus5);
reus5.calcAge();


// ES6 - use constructor function -----------------------------------------
class Person6 {
    constructor (name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    calcAge() {
        console.log(new Date().getFullYear() - this.yearOfBirth);  
    }
}

class Athlete6 extends Person6 {
    constructor (name, yearOfBirth, olympicGames, medals) {
        super(name, yearOfBirth);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
}

let reus6 = new Athlete5('Reus', 1989, 'Soccer player', 3, 10);
console.log(reus6);
reus5.calcAge();