/*
	Again, an execution context is associated with an object

	This object has 3 properties:

		- Variable Object

		- Scope chain

		- 'This' keyword
*/
/*
	How the Variable Object created ?

		1. the Argument object is created, containing all function arguments

		2. Code is scanned for functions. For each function declaration, a property is created in the Variable Object, pointing to the function

		3. Code is scanned for variables. For each variable in the function, a property is created in the Variable Object, and set to undefined

	=> (2), (3) --> HOISTING

	which means: the variables and functions are available before the execution starts
*/

// Hoisting example

console.log(a);		// where are a and b?
console.log(b);		// because of hoisting, there will be no error

var a;
var b = 11;