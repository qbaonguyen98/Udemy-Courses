// ES5 - use constructor function -----------------------------------------
var Person5 = function(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
};

Person5.prototype.calcAge = function() {
    console.log(new Date().getFullYear() - this.yearOfBirth);
};

var john5 = new Person5('John', 1990);
john5.calcAge();

// ES6 - use class --------------------------------------------------------
class Person6 {
    constructor (name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    calcAge() {
        console.log(new Date().getFullYear() - this.yearOfBirth);  
    }

    static greeting() {
        console.log('Hey guys');
    }
}
let john6 = new Person6('John', 1990);
john6.calcAge();

console.log(Person6.greeting);  // Function: greeting
console.log(john6.greeting);    // undefined

/* ------------------------------------------------------------------------
    *** IMPORTANT ***

    - static method: NOT inherited by class instances

    - Is JS still a prototype-based programming languge? YES, the class is just an easier syntax. It is converted into the old syntax behing the scene

--------------------------------------------------------------------------*/