const years = [1998, 1989, 1975, 1968];

// ES5
var age5 = years.map(function(cur) {
    return 2020 - cur;
});
console.log(age5);

// ES6
let age6 = years.map(cur => 2020 - cur);
console.log(age6);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// The 'this' keyword in arrow functions

/*
    *** IMPORTANT ***

    Arrow functions do NOT have the 'this' keyword --> they use 'this' keyword of the surrounding function {}
*/

