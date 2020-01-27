// ES5
var name5 = 'Jone';
var age5 = 23;

// ES6
const name6 = 'Reus';       // NO change
let age6 = 21;              // can change

/*---------------------------------------------------------------------------------
    
    *** IMPORTANT ***

    - var:          function-scoped

    - let, const:   block-scoped

----------------------------------------------------------------------------------*/

// ES5
(function() {
    if (true) {
        var foo = 'This variable can be accessed';
    }
    try {
        console.log(foo);
    } catch {
        console.log('Can\'t access the variable !');
    }
})();

// ES6
(function() {
    if (true) {
        let foo = 'This variable can be accessed';
    }
    try {
        console.log(foo);
    } catch {
        console.log('Can\'t access the variable !');
    }
})();

// ---------------------------------------------------------------------------------

// ES5
var i = 21;
for(var i = 0; i<5; i++){
    console.log(i);
}
console.log(i + '\n');

// ES6
let k = 21;
for(let k = 0; k<5; k++){
    console.log(k);
}
console.log(k + '\n');