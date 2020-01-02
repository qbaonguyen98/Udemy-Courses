/*
	REMEMBER that:

	In JS, a new scope is ONLY created when we write a new function

		(not by if, for, while block ...)
*/
/*
	Lexical scoping:

		a function is within another function --> child function and parent function

		and... the child can access to the scope of the parent (NOT backward)

			=> Scope chain
*/

first();

function first() {
	var c = 'Hey';
	second();
}

function second() {
	try{
		console.log(c);	
	}
	catch {
		console.log('\nc is only in the scope of first function')
	}
}