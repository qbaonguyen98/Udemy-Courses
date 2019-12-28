/*
    JS is a prototype-based language

    => use 'prototype' to make Inheritance possible

    --> any object has the 'prototype' property by default

    *** The Constructor's prototype property is NOT only 
    the prototype of the Constructor itself, it is the prototype of all instances of it ***
*/
/*
    Prototype chain: is how a method/property is called ?

        1. start by looking for it in the object itself

        2. then looking for it in the prototypes
*/

function Person(name, born) {
    this.name = name;
    this.born = born;
    this.printName = function() {
        console.log(this.name);
    }
}

Person.nameBeginWith = function() {
    console.log(this.name[0]);
}

Person.prototype.calAge = function() {
    console.log(2019 - this.born);
}

var john = new Person('John', 1985);

try {
    john.nameBeginWith();
} catch {
    console.log('MUST use prototype !!!');
}

john.printName();
john.calAge();

console.log('So, the \'prototype\' property is where we put \
properties and methods that we want other objects to inherit');