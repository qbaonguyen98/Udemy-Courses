// Default parameters

/*
    Normally, JS allows us to call a function without specifying all of its parameters, the missing will be assigned undefined before execution
*/

function Person1(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
}

let john = new Person1('John', 'Smith');
console.log(john);

function Person2(firstName, lastName = 'Nguyen', yearOfBirth = 1998) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
}

let reus = new Person2('Reus');
console.log(reus);