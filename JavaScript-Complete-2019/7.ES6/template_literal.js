let name = 'Reus';
const yearOfBirth = 1998;

function calcAge(yearOfBirth) {
    return 2020 - yearOfBirth;
}

// ES5
console.log('My name is ' + name + '. I\'m ' + calcAge(yearOfBirth) + ' years old.\n');

// ES6
console.log(`My name is ${name}. I'm ${calcAge(yearOfBirth)} years old.\n`);