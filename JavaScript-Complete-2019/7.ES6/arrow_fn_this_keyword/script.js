// ES5 -------------------------------------------------------------------------------------------------------------------------------
var redBox5 = {
    color: 'red',
    position: 1,
    clickMe: function() {
        document.querySelector('.red').addEventListener('click', function() {
            console.log(`This is the box number ${this.position}. It's ${this.color}.`);
        });
    }
};
redBox5.clickMe();     // when clicked --> This is the box number undefined. It's undefined.

/*
    Recall: 

        - In regular function (not a method): the 'this' points to the global object
*/

/* To fix it */
var greenBox5 = {
    color: 'green',
    position: 2,
    clickMe: function() {
        var self = this;                // clickMe is a method --> this points to greenBox5 object 

        document.querySelector('.green').addEventListener('click', function() {
            console.log(`This is the box number ${self.position}. It's ${self.color}.`);            // the scope-chain
        });
    }
};
greenBox5.clickMe();   

// ES6 -------------------------------------------------------------------------------------------------------------------------------
let blueBox6 = {
    color: 'blue',
    position: 3,
    clickMe: function() {
        document.querySelector('.blue').addEventListener('click', () => {
            console.log(`This is the box number ${this.position}. It's ${this.color}.`);
        });
    }
};
blueBox6.clickMe();     // when clicked --> This is the box number 3. It's blue.

/* Try this */
blueBox6 = {
    color: 'blue',
    position: 3,
    clickMe: () => {
        document.querySelector('.blue').addEventListener('click', () => {
            console.log(`This is the box number ${this.position}. It's ${this.color}.`);
        });
    }
};
blueBox6.clickMe();     

// when clicked --> This is the box number undefined. It's undefined => WHY !!!

/*
    1. the 'this' in EventListener is  the 'this' of the surrounding function - the clickMe method
    
    2. However, the clickMe is also an arrow function --> its 'this' is also the 'this' of the surrounding function - the global object
*/