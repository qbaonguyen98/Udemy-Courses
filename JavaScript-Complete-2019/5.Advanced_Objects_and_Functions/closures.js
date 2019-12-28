// Closures

function retirement(retirementAge) {
    var str = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log('\n' + (retirementAge - age) + str);
    }
}
var retirementUS = retirement(66);
retirementUS(1998);

console.log('\nIt works!!! But ... ');
console.log('\nThe \'retirement\' function has already returned!!!');
console.log('\nSo, how can the returned function access the \'retirementAge\' and \'str\' variables???');

console.log('\n----- This is due to Closures -----');

/* With closures: 
    
    An inner function has always access to variables and parameters
    of its outer function, even after the outer has returned
*/