var john = {
    name: 'John',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('\nGood ' + timeOfDay + ', ladies and gentlement! I\'m ' + this.name);
        } else if (style === 'friendly') {
            console.log('\nHey! What\'s up? I\'m ' + this.name + '. Have a nice ' + timeOfDay);
        }
    }
};

var emily = {
    name: 'Emily'
};

// call(...)
john.presentation.call(emily, 'friendly', 'afternoon');     

// apply(...)
john.presentation.apply(emily, ['friendly', 'afternoon']);

// bind(...)    --> use to copy a function, and preset some parameters of it
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');

console.log('\nTo sum up: ');
console.log('\n----- all 3 methods are used for method borrowing -----');
console.log('\n----- the bind() copy a function and preset some parameters  -----');