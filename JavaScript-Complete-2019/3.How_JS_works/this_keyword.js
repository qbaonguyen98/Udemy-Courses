/*
	REMEMBER that:

	The 'this' keyword is NOT assigned a value until a function where it is defined 
	is actually called
*/

/*	'this' value is some cases:

	- regular function call --> 'this' points to the global object

	- method call 	-->	'this' points to the object that is calling the method 
	
*/

console.log(this);	// the global object	
					// in browser, it is the Windows object

console.log('--------------------------------------------------------')


calAge(1998);

function calAge(year) {
	console.log(2019-year);
	console.log(this);		// still the global object, calAge is a regular function
}


console.log('--------------------------------------------------------')
// reusnguyen.calAge();		// this throw error, because reusnguyen is undefined
							// remember hoisting ??? 

var reusnguyen = {
	name: 'Quoc Bao',
	born: 1998,
	calAge: function() {
		console.log(this);			// the 'reusnguyen' object

		function innerFunc() {
			console.log(this);		// the global object !!!
									// because: the 'innerFunc' function is still a regular function, not a method
		}

		innerFunc();
	}
}

reusnguyen.calAge();

/*
	Again, the 'this' keyword is NOT assigned a value until a function where it is defined 
	is actually called.

	=> Let's check it out !!!
*/
console.log('--------------------------------------------------------')

var john = {
	name: 'John',
	born: 1984,
};

// method borrowing
john.calAge = reusnguyen.calAge;

john.calAge();			// this became 'john' object --> above statement is proved !


