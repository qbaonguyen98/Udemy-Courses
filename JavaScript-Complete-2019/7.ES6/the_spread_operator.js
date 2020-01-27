// The spread operator syntax: ...

function sumOfFour (a, b, c, d) {
    return a + b + c + d;
}
let ages = [19, 45, 52, 22];    // how to pass 4 number in this array in to the function

// ES5
console.log(sumOfFour.apply(null, ages));

// ES6
console.log(sumOfFour(...ages));

//--------------------------------------------------------------------------------------------------------------
// Usual use case: join arrays

const SmithFamily = ['John', 'Mark', 'Jane'];
const MillerFamily = ['Mary', 'Bob', 'Ann'];

let bigFamily = [...SmithFamily, 'Another child', ...MillerFamily];

console.log(bigFamily);