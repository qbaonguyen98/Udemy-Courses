// Destructuring --> a way to extract data from data structure such as object, array,...

// ES5
var john = ['John Smith', 26];
var name5 = john[0];
var age5 = john[1];

// ES6
const [name6, age6] = ['Reus', 21];
console.log(name6);
console.log(age6);

const obj = {
    firstName: 'Quoc Bao',
    lastName: 'Nguyen'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

// ----------------------------------------------------------------------------------------
// Practical use: return multiple values

function calcAgeAndRetirement(yearOfBirth) {
    const age = new Date().getFullYear() - yearOfBirth;
    return [age, 65 - age];
}

let [age, retirement] = calcAgeAndRetirement(1998);
console.log(age);
console.log(retirement);